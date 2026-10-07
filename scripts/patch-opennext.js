import fs from 'node:fs';
import path from 'node:path';

const targetFile = path.resolve('node_modules/@opennextjs/cloudflare/dist/cli/commands/utils/utils.js');

if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, 'utf8');

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
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('[patch-opennext] Successfully patched @opennextjs/cloudflare to auto-build before deploy.');
  } else {
    console.log('[patch-opennext] Target snippet already patched or not found.');
  }
}
