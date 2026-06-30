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
        <section
          style={{
            ...sectionStyle,
            paddingTop: 120,
            paddingBottom: 80,
            background: "linear-gradient(135deg, #293C4A 0%, #1C262D 100%)",
            color: "white",
            borderRadius: 12,
          }}
        >
          <h1 style={{ fontWeight: 900, fontSize: "3.8rem", marginBottom: 30 }}>
            Introducing <span style={{ color: "#94E5FF" }}>Pro-Dispense</span>
          </h1>
          <p style={{ fontWeight: 600, fontSize: "1.6rem", maxWidth: 650, margin: "0 auto 40px" }}>
            Next-level precision dispensing with our FLO 1
