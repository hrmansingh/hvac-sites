import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy — NorthDemand",
  description: "Privacy policy for NorthDemand HVAC customer acquisition services.",
};

export default function PrivacyPage() {
  return (
    <div style={{ margin: 0, background: "#f3f5f3", color: "#111518", fontFamily: "Arial, sans-serif", lineHeight: 1.65, minHeight: "100vh" }}>
      <main style={{ width: "min(680px, calc(100% - 40px))", margin: "0 auto", padding: "40px 40px", background: "#fff", border: "1px solid #dfe4e5" }}>
        <h1 style={{ fontSize: "34px", letterSpacing: "-.04em", margin: "0 0 6px" }}>Privacy</h1>
        <p style={{ fontSize: "12px", color: "#7b8589", margin: "0 0 10px" }}>NorthDemand · Last updated October 2026</p>
        
        <h2 style={{ fontSize: "17px", margin: "26px 0 6px" }}>What we collect</h2>
        <p style={{ color: "#4d575d", fontSize: "15px", margin: "0 0 10px" }}>
          When you request a free acquisition review, we collect the name, email address and company website you enter in the form. We may also see basic visit data, such as pages viewed and device type, through website analytics.
        </p>

        <h2 style={{ fontSize: "17px", margin: "26px 0 6px" }}>How we use it</h2>
        <p style={{ color: "#4d575d", fontSize: "15px", margin: "0 0 10px" }}>
          We use your details only to review your website, reply to your request and schedule a call. We do not sell your information.
        </p>

        <h2 style={{ fontSize: "17px", margin: "26px 0 6px" }}>Who can see it</h2>
        <p style={{ color: "#4d575d", fontSize: "15px", margin: "0 0 10px" }}>
          Form submissions are processed by Web3Forms and delivered to us by email, and calls are scheduled through Cal.com. The site is hosted on Netlify. These services process your information on our behalf.
        </p>

        <h2 style={{ fontSize: "17px", margin: "26px 0 6px" }}>Email</h2>
        <p style={{ color: "#4d575d", fontSize: "15px", margin: "0 0 10px" }}>
          If we email you, you can ask us to stop at any time by replying &quot;unsubscribe,&quot; and we will not contact you again.
        </p>

        <h2 style={{ fontSize: "17px", margin: "26px 0 6px" }}>Your choices</h2>
        <p style={{ color: "#4d575d", fontSize: "15px", margin: "0 0 10px" }}>
          To see, correct or delete the information we hold about you, reply to any email from us.
        </p>

        <p style={{ marginTop: "22px" }}>
          <a href="/" style={{ color: "#111518" }}>← Back to NorthDemand</a>
        </p>
      </main>
    </div>
  );
}
