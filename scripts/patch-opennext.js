import fs from 'node:fs';
import path from 'node:path';

// 1. Patch utils.js for auto-build before deploy
const utilsFile = path.resolve('node_modules/@opennextjs/cloudflare/dist/cli/commands/utils/utils.js');
if (fs.existsSync(utilsFile)) {
  let content = fs.readFileSync(utilsFile, 'utf8');
  const targetSnippet = `if (!existsSync(configPath)) {
        logger.error("Could not find compiled Open Next config, did you run the build command?");
        process.exit(1);
    }`;
  const replacementSnippet = `if (!existsSync(configPath)) {
        logger.info("OpenNext compiled config not found. Auto-running build command...");
        const { execSync } = await import("node:child_process");
        execSync("npx opennextjs-cloudflare build", { stdio: "inherit" });
    }`;

  if (content.includes(targetSnippet)) {
    content = content.replace(targetSnippet, replacementSnippet);
    fs.writeFileSync(utilsFile, content, 'utf8');
    console.log('[patch-opennext] Patched utils.js for auto-build before deploy.');
  }
}

// 2. Patch load-manifest.js for preview-props.json support in Next.js 16
const manifestFile = path.resolve('node_modules/@opennextjs/cloudflare/dist/cli/build/patches/plugins/load-manifest.js');
if (fs.existsSync(manifestFile)) {
  let content = fs.readFileSync(manifestFile, 'utf8');
  
  const globTarget = `**/{*-manifest,required-server-files,prefetch-hints}.json`;
  const globReplacement = `**/{*-manifest,required-server-files,prefetch-hints,preview-props}.json`;
  
  const fallbackTarget = `p.endsWith("fallback-build-manifest") ||\n        p.endsWith("prefetch-hints")`;
  const fallbackReplacement = `p.endsWith("fallback-build-manifest") ||\n        p.endsWith("preview-props") ||\n        p.endsWith("prefetch-hints")`;

  let modified = false;
  if (content.includes(globTarget)) {
    content = content.replace(globTarget, globReplacement);
    modified = true;
  }
  if (content.includes(fallbackTarget)) {
    content = content.replace(fallbackTarget, fallbackReplacement);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(manifestFile, content, 'utf8');
    console.log('[patch-opennext] Patched load-manifest.js to support preview-props.json in Next.js 16.');
  }
}
