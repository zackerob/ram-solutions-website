import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function About() {
  return (
    <>
      <Seo
        title="About — RAM Solutions"
        description="RAM Solutions is an engineering consulting practice focused on modeling and additive manufacturing."
      />

      <section className="hero" style={{ padding: "72px 0 56px" }}>
        <div className="wrap">
          <span className="eyebrow">About</span>
          <h1 style={{ maxWidth: "22ch" }}>
            Engineering consulting built around getting parts right.
          </h1>
          <p className="lead">
            RAM Solutions was started to close the gap between a CAD file and a part that actually
            works — combining engineering judgment with hands-on modeling and additive
            manufacturing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Approach</span>
            <h2>Engineering first, tools second</h2>
            <p>
              Software and printers are just the means. Every project is treated as an engineering
              problem first — understanding loads, tolerances, and real-world use before a single
              line is modeled.
            </p>
          </div>
          <div className="grid">
            <div className="card reveal">
              <h3>We check the math</h3>
              <p>
                Recommendations come from actual analysis, not a hunch — so they hold up once the
                part leaves the printer.
              </p>
            </div>
            <div className="card reveal">
              <h3>Prototypes come first</h3>
              <p>We'd rather find a problem in a cheap prototype than in a finished part.</p>
            </div>
            <div className="card reveal">
              <h3>No black box</h3>
              <p>
                You'll know what's happening and when, whether it's a single consult or a full build
                — realistic timelines, no runaround.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ marginBottom: "28px" }}>
            <span className="eyebrow">Let's talk</span>
            <h2>Interested in working together?</h2>
            <p>
              Reach out with a bit about your project and we'll follow up to discuss fit and next
              steps.
            </p>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Contact RAM Solutions
          </Link>
        </div>
      </section>
    </>
  );
}
