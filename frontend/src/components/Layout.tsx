import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "active" : undefined;

export default function Layout() {
  const { pathname } = useLocation();
  useReveal(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <Link className="brand" to="/">
            <img src="/assets/logo.svg" alt="RAM Solutions" className="brand-logo" />
          </Link>
          <nav className="nav">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={navClass}>
              Services
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="wrap">
          <Link className="brand" to="/">
            <img src="/assets/logo.svg" alt="RAM Solutions" className="brand-logo" />
          </Link>
          <nav>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="wrap">
          <p className="fine-print">&copy; 2026 RAM Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
