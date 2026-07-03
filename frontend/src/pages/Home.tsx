import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="RAM Solutions — Engineering, Modeling & Additive Manufacturing"
        description="RAM Solutions provides engineering consulting, CAD modeling, and additive manufacturing services from concept to finished part."
      />

      <section className="hero hero-split">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Engineering · Modeling · Additive Manufacturing</span>
            <h1>We turn a rough idea into a part you can actually hold.</h1>
            <p className="lead">
              Bring a napkin sketch, a half-finished CAD file, or a part that keeps breaking — we'll
              take it through modeling, prototyping, and 3D printing until it holds up outside the
              file.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/services">
                View services
              </Link>
              <Link className="btn btn-outline" to="/contact">
                Start a project
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <svg viewBox="0 0 380 380" role="img" aria-hidden="true">
              <defs>
                <pattern id="heroDots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.4" fill="rgba(255,255,255,0.16)" />
                </pattern>
              </defs>
              <rect x="10" y="10" width="360" height="360" fill="url(#heroDots)" />

              <g className="layer">
                <polygon
                  points="190,254 285,290 190,326 95,290"
                  fill="#3a4152"
                  stroke="rgba(255,255,255,0.25)"
                />
              </g>
              <g className="layer">
                <polygon
                  points="190,214 285,250 190,286 95,250"
                  fill="#3d4d68"
                  stroke="rgba(255,255,255,0.25)"
                />
              </g>
              <g className="layer">
                <polygon
                  points="190,174 285,210 190,246 95,210"
                  fill="#3d5f8b"
                  stroke="rgba(255,255,255,0.25)"
                />
              </g>
              <g className="layer">
                <polygon
                  points="190,134 285,170 190,206 95,170"
                  fill="#3b74b0"
                  stroke="rgba(255,255,255,0.25)"
                />
              </g>
              <g className="layer">
                <polygon
                  points="190,94 285,130 190,166 95,130"
                  fill="#4a8ade"
                  stroke="rgba(255,255,255,0.25)"
                />
              </g>
              <g className="layer">
                <polygon
                  points="190,54 285,90 190,126 95,90"
                  fill="#5b9bff"
                  stroke="rgba(255,255,255,0.35)"
                />
                <circle cx="190" cy="54" r="3" fill="#ffffff" stroke="#5b9bff" strokeWidth="1.5" />
                <circle cx="285" cy="90" r="3" fill="#ffffff" stroke="#5b9bff" strokeWidth="1.5" />
                <circle cx="190" cy="126" r="3" fill="#ffffff" stroke="#5b9bff" strokeWidth="1.5" />
                <circle cx="95" cy="90" r="3" fill="#ffffff" stroke="#5b9bff" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">What we do</span>
            <h2>Three disciplines, brought in as you need them</h2>
            <p>
              Some projects need all three. Others just need someone to check the math before it
              goes to the printer.
            </p>
          </div>
          <div className="grid">
            <div className="card reveal">
              <h3>Engineering consulting</h3>
              <p>
                A second set of trained eyes on your design before it costs you money in tooling or
                a failed print.
              </p>
            </div>
            <div className="card reveal">
              <h3>3D &amp; CAD modeling</h3>
              <p>
                CAD models built to actually be manufactured — not just to look good in a render.
              </p>
            </div>
            <div className="card reveal">
              <h3>Additive manufacturing</h3>
              <p>
                Prototypes and short runs printed in whatever material actually fits the job, not
                just whatever's loaded in the printer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">How it works</span>
            <h2>A straightforward process</h2>
          </div>
          <div className="grid">
            <div className="card reveal">
              <div className="num">Step 1</div>
              <h3>Consult</h3>
              <p>
                A conversation first — what you're building, what it needs to survive, and what
                "done" looks like.
              </p>
            </div>
            <div className="card reveal">
              <div className="num">Step 2</div>
              <h3>Design &amp; model</h3>
              <p>
                Your idea becomes a real CAD model, with revisions along the way instead of one big
                reveal at the end.
              </p>
            </div>
            <div className="card reveal">
              <div className="num">Step 3</div>
              <h3>Build &amp; iterate</h3>
              <p>
                We print it, test it, and adjust — a part that only works in the CAD file isn't
                actually done.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ marginBottom: "28px" }}>
            <span className="eyebrow">Get started</span>
            <h2>Have a project in mind?</h2>
            <p>
              Send over what you're working on, even if it's rough, and we'll follow up to talk it
              through.
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
