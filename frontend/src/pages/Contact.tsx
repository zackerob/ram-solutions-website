import { FormEvent, useState } from "react";
import Seo from "../components/Seo";
import { api } from "../lib/api";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await api.post("/contact", { name, email, message });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      <Seo
        title="Contact — RAM Solutions"
        description="Get in touch with RAM Solutions about an engineering, modeling, or additive manufacturing project."
      />

      <section className="hero" style={{ padding: "72px 0 56px" }}>
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h1 style={{ maxWidth: "20ch" }}>Tell us about your project.</h1>
          <p className="lead">
            Share a bit of detail below and we'll get back to you to talk through next steps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            {status === "success" ? (
              <p className="lead" role="status">
                Thanks — your message is on its way. We'll be in touch within 1–2 business days.
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">Project details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div>
                  <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>
                </div>
                {status === "error" && (
                  <p className="fine-print" role="alert" style={{ color: "#ff8080" }}>
                    Couldn't send your message ({error}). Please email us directly at{" "}
                    <a href="mailto:robertsamsolutions@gmail.com">robertsamsolutions@gmail.com</a>.
                  </p>
                )}
              </form>
            )}
          </div>

          <div className="info-list">
            <div>
              <div className="label">Email</div>
              <div className="value">
                <a href="mailto:robertsamsolutions@gmail.com">robertsamsolutions@gmail.com</a>
              </div>
            </div>
            <div>
              <div className="label">Response time</div>
              <div className="value">Usually within 1–2 business days</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
