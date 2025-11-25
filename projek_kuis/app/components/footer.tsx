"use client";

import { FiMail, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #1a1a1a, #121212)",
        color: "#f7e7b4",
        padding: "60px 20px 30px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        overflow: "hidden",
      }}
    >
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row mb-5 text-center text-md-start d-flex align-items-stretch">

          <div className="col-md-6 mb-4 d-flex">
            <div
              className="w-100"
              style={{
                background: "#1f1f1f",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(247,231,180,0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h5 className="fw-bold mb-2">BirdWatch Project</h5>
              <p className="mb-1">NAMA : EDBERT HALIM</p>
              <p className="mb-1">NIM   : 535240059</p>
              <p className="mb-0">Topik: Website Listing Anime</p>
            </div>
          </div>

          <div className="col-md-6 mb-4 d-flex">
            <div
              className="w-100"
              style={{
                background: "#1f1f1f",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(247,231,180,0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h5 className="fw-bold mb-2">Contact</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a
                    href="mailto:ed79bert@gmail.com"
                    className="footer-link d-flex align-items-center gap-2"
                  >
                    <FiMail /> Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/edbert19"
                    target="_blank"
                    className="footer-link d-flex align-items-center gap-2"
                  >
                    <FiInstagram /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <hr style={{ borderColor: "rgba(247,231,180,0.3)" }} />

        <div className="d-flex justify-content-center mt-3">
          <p className="mb-0" style={{ fontSize: "14px", color: "#f7e7b4cc" }}>
            &copy; {new Date().getFullYear()} BirdWatch. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          color: #f7e7b4;
          text-decoration: none;
          transition: 0.3s;
        }
        .footer-link:hover {
          color: #fff;
          text-shadow: 0 0 8px #f7e7b4;
        }
      `}</style>
    </footer>
  );
}
