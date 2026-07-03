import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function Services() {
  return (
    <>
      <Seo
        title="Services — RAM Solutions"
        description="Engineering consulting, CAD modeling, and additive manufacturing services offered by RAM Solutions."
      />

      <section className="hero" style={{ padding: "72px 0 56px" }}>
        <div className="wrap">
          <span className="eyebrow">Services</span>
          <h1 style={{ maxWidth: "22ch" }}>
            Engineering, modeling, and manufacturing support — as much or as little as you need.
          </h1>
          <p className="lead">
            Work with RAM Solutions on a single stage of a project, or from initial concept through
            a finished, manufactured part.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <div className="card reveal">
              <h3>Engineering consulting</h3>
              <p>
                Design review, feasibility checks, tolerance and material analysis, and
                troubleshooting when something isn't performing the way it should. Worth doing before
                you commit to tooling or a production run.
              </p>
            </div>
            <div className="card reveal">
              <h3>3D &amp; CAD modeling</h3>
              <p>
                Parametric CAD models, assemblies, and drawings built so they can actually be
                manufactured — with revisions built in as the design gets reviewed and changed.
              </p>
            </div>
            <div className="card reveal">
              <h3>Additive manufacturing</h3>
              <p>
                Prototype and low-volume production printing — FDM, resin, or another process, picked
                based on what the part actually needs to hold up to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <div className="section-head reveal" style={{ marginBottom: "28px" }}>
            <span className="eyebrow">Not sure where to start?</span>
            <h2>Most projects start with a short consult</h2>
            <p>
              Send over what you're working on — a sketch, an existing model, or just a description
              of the problem — and we'll recommend the right starting point.
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
