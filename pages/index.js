import Head from "next/head";
import { useState } from "react";

export default function ProDispenseSite() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sectionStyle = {
    maxWidth: "900px",
    margin: "0 auto 5rem auto",
    padding: "0 20px",
    color: "#293C4A",
    lineHeight: "1.6",
  };

  const headingStyle = {
    fontWeight: "700",
    fontSize: "2.6rem",
    margin: "1.5rem 0",
    textAlign: "center",
  };

  const bodyTextStyle = {
    fontSize: "1.25rem",
    textAlign: "center",
    maxWidth: "700px",
    margin: "1rem auto 0 auto",
  };

  return (
    <>
      <Head>
        <title>Pro Dispense - Performance Nutrition</title>
        <meta name="description" content="Innovative smart dispensing system tailored for elite sports nutrition." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', backgroundColor: "#F7F7F7" }}>

        {/* Hero Section */}
        <section style={{ backgroundColor: "#293C4A", color: "#FFFFFF", padding: "120px 20px 100px 20px" }}>
          <h1 style={{ fontWeight: "900", fontSize: "3.5rem", textAlign: "center", margin: "0 auto", maxWidth: "700px" }}>
            Pro-Dispense — Precision Nutrition for Elite Performance
          </h1>
          <p style={{ fontSize: "1.5rem", textAlign: "center", maxWidth: "600px", margin: "20px auto 0 auto" }}>
            Revolutionise your sports nutrition with custom doses, automated dispensing, and smart tracking.
          </p>
        </section>

        {/* Time & Convenience */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Time & Convenience</h2>
          <p style={bodyTextStyle}>
            Preparing supplements manually consumes precious athlete and staff time every day,
            introducing friction and inefficiency in routines.
          </p>
        </section>

        {/* Consistency & Quality */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Consistency & Quality</h2>
          <p style={bodyTextStyle}>
            Variations in mixing and measuring ingredients affect the quality and effectiveness of every drink.
            Ready-to-drink products often contain additives and can't fully personalise nutrition.
          </p>
        </section>

        {/* Data Tracking & Analysis */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Data Tracking & Analysis</h2>
          <p style={bodyTextStyle}>
            There is no reliable way to track consumption, measure compliance, or understand nutritional behaviour over time — making it impossible to optimise athlete performance.
          </p>
        </section>

        {/* Elite Level Insight */}
        <section style={{ ...sectionStyle, color: "#1C262D" }}>
          <h2 style={headingStyle}>Elite Level Insight</h2>
          <p style={{ ...bodyTextStyle, fontWeight: "700", fontSize: "2rem" }}>70%</p>
          <p style={bodyTextStyle}>
            Of time manually making player supplement packs each morning is lost — time better spent analysing performance.
          </p>
          <p style={{ fontStyle: "italic", maxWidth: "600px", margin: "20px auto 0 auto" }}>
            "Every athlete has a unique body composition; supplementation must be individually tailored, which is difficult and time consuming."
          </p>
          <p style={{ fontWeight: "600", marginTop: "8px" }}>Paola Rodriguez, Head of Sport Nutrition, Brighton & Hove Albion FC</p>
        </section>

        {/* Our System */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Introducing FLO</h2>
          <p style={bodyTextStyle}>
            Our patent-pending smart dispenser delivers customised supplements with precision and ease,
            combined with an integrated tracking ecosystem to optimise every intake.
          </p>
        </section>

        {/* Users */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Who Benefits?</h2>
          <p style={bodyTextStyle}>
            Sports scientists, nutritionists, physiotherapists, sports psychologists, and club doctors
            all benefit from smarter supplement delivery, enabling real-time data-driven decisions.
          </p>
        </section>

        {/* Tracking */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Smart Tracking</h2>
          <p style={bodyTextStyle}>
            Our system tracks mental and physical performance metrics alongside supplement consumption,
            helping coaches adapt strategies in real time and improve athletic output.
          </p>
        </section>

        {/* Founders */}
        <section style={{ ...sectionStyle, backgroundColor: "#293C4A", color: "#F7F7F7" }}>
          <h2 style={headingStyle}>Meet The Founders</h2>
          <div style={{ maxWidth: "750px", margin: "0 auto", textAlign: "center" }}>
            <p><strong>Cameron Foy</strong>, Co-Founder / Director — Former professional footballer with degrees in psychology and sport.</p>
            <p><strong>Andrew Davison</strong>, Co-Founder / Head of Design — Experienced product designer and engineer, focused on premium sports tech.</p>
          </div>
        </section>

        {/* Enquire Now */}
        <section id="enquire" style={sectionStyle}>
          <h2 style={headingStyle}>Enquire Now</h2>
          {submitted ? (
            <p style={{ textAlign: "center", fontWeight: "700", color: "#1C262D", fontSize: "1.3rem" }}>
              Thank you for your enquiry! We will be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: "450px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <label htmlFor="name">Name*</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleInput} style={{ padding: "0.75rem", fontSize: "1rem" }} />

              <label htmlFor="email">Email*</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleInput} style={{ padding: "0.75rem", fontSize: "1rem" }} />

              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" value={form.company} onChange={handleInput} style={{ padding: "0.75rem", fontSize: "1rem" }} />

              <label htmlFor="message">Message*</label>
              <textarea id="message" name="message" required rows={4} value={form.message} onChange={handleInput} style={{ padding: "0.75rem", fontSize: "1rem" }}></textarea>

              <button type="submit" style={{ padding: "1rem", backgroundColor: "#293C4A", color: "#fff", fontWeight: "700", border: "none", borderRadius: "48px", cursor: "pointer" }}>
                Submit
              </button>
            </form>
          )}
        </section>

      </main>
    </>
  );
}
