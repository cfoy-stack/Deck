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
    textAlign: "center",
    userSelect: "text",
  };

  const headingStyle = {
    fontWeight: "700",
    fontSize: "2.6rem",
    margin: "1.5rem 0",
  };

  const bodyTextStyle = {
    fontSize: "1.2rem",
    maxWidth: "700px",
    margin: "0 auto",
  };

  return (
    <>
      <Head>
        <title>Pro-Dispense - Performance Nutrition</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          backgroundColor: "#F7F7F7",
          paddingTop: 60,
          paddingBottom: 80,
        }}
      >
        {/* Hero Section */}
        <section style={{ ...sectionStyle, paddingTop: 120, paddingBottom: 80, background: "linear-gradient(135deg, #293C4A 0%, #1C262D 100%)", color: "white", borderRadius: 12 }}>
          <h1 style={{ fontWeight: 900, fontSize: "3.8rem", marginBottom: 30 }}>
            Introducing <span style={{ color: "#94E5FF" }}>FLO</span>
          </h1>
          <p style={{ fontWeight: 600, fontSize: "1.6rem", maxWidth: 650, margin: "0 auto 40px" }}>
            Next-level precision dispensing for elite sports nutrition.
          </p>
          <a href="#timeConvenience" style={{ display: "inline-block", backgroundColor: "#94E5FF", color: "#1C262D", padding: "1.2rem 3rem", borderRadius: 48, fontWeight: 700, textDecoration: "none" }}>
            Explore
          </a>
        </section>

        {/* Time & Convenience */}
        <section id="timeConvenience" style={sectionStyle}>
          <h2 style={headingStyle}>Time & Convenience</h2>
          <p style={bodyTextStyle}>
            Preparing supplements manually takes time and introduces friction into daily routines.
          </p>
          <p style={{ ...bodyTextStyle, marginTop: 15 }}>
            Variations in mixing, ingredient measurement and preparation can affect the quality and effectiveness of every drink.
          </p>
        </section>

        {/* Consistency & Quality */}
        <section style={{ ...sectionStyle, backgroundColor: "#E9EBE8", color: "#1C262D", borderRadius: 12, paddingTop: 60, paddingBottom: 60 }}>
          <h2 style={headingStyle}>Consistency & Quality</h2>
          <p style={bodyTextStyle}>
            Ready-to-drink products often contain additives, generate plastic waste, and offer no bespoke nutrition.
          </p>
        </section>

        {/* Data Tracking & Analysis */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Data Tracking & Analysis</h2>
          <p style={bodyTextStyle}>
            There is currently no reliable way to track consumption, measure compliance or understand nutritional behaviour over time.
          </p>
        </section>

        {/* Elite Level Insight */}
        <section style={{ ...sectionStyle, backgroundColor: "#293C4A", color: "#F7F7F7", borderRadius: 12, paddingTop: 60, paddingBottom: 60 }}>
          <h2 style={{ ...headingStyle, color: "#94E5FF" }}>Elite Level Insight</h2>
          <p style={{ fontWeight: 700, fontSize: "4rem", marginTop: 20, marginBottom: 10 }}>70%</p>
          <p style={{ ...bodyTextStyle, maxWidth: 680, margin: "0 auto 10px auto" }}>
            Of time manually making player supplement packs each morning.
          </p>
          <p style={{ ...bodyTextStyle, maxWidth: 680, margin: "0 auto 15px auto" }}>30% of time left to assign to analysing player performance.</p>
          <p style={{ fontWeight: 600, fontStyle: "italic", maxWidth: 800, margin: "0 auto" }}>
            “Every athlete has a unique body composition; therefore, supplementation strategies must be individually tailored, which is extremely difficult and time consuming.”
          </p>
          <p style={{ fontWeight: 700, marginTop: 12 }}>Paola Rodriguez<br />Head of Sport Nutrition at Brighton & Hove Albion FC</p>
        </section>

        {/* Introducing Pro-Dispense FLO 1 */}
        <section style={{ ...sectionStyle, backgroundColor: "#E9EBE8", color: "#1C262D", borderRadius: 12, paddingTop: 60, paddingBottom: 60 }}>
          <h2 style={headingStyle}>Introducing FLO</h2>
          <p style={bodyTextStyle}>
            Pro-Dispense transforms supplementation from a manual process into a connected, measurable performance system.
          </p>
          <p style={bodyTextStyle}>
            Precision formulation, intelligent dispensing, and real-time tracking allow every intake to be optimised for maximum effect.
          </p>
        </section>

        {/* Users */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Users</h2>
          <p style={bodyTextStyle}>
            Sports scientists, sports psychologists, nutritionists, physiotherapists, and club doctors rely on FLO to bring precision and trackability to their nutrition programmes.
          </p>
        </section>

        {/* Tracking */}
        <section style={{ ...sectionStyle, backgroundColor: "#E9EBE8", color: "#1C262D", borderRadius: 12, paddingTop: 60, paddingBottom: 60 }}>
          <h2 style={headingStyle}>
