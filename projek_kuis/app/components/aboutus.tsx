"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutUs() {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#0b0b0c", color: "white" }}
    >
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "2.8rem",
                background: "linear-gradient(180deg, #f7e7b4, #d4b76e)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              About BirdWatch
            </h1>

            <p
              className="text-light mb-4"
              style={{ fontSize: "1.1rem", lineHeight: "1.8rem" }}
            >
              BirdWatch adalah proyek katalog anime modern yang dirancang untuk
              menampilkan berbagai judul anime secara menarik dan mudah dijelajahi.
              website ini dibuat untuk para fans-fans anime yang ingin mencari anime baru, mereka dapat browsing di website ini
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="/char_cowo1.jpg"
              alt="About BirdWatch"
              className="img-fluid rounded shadow"
              style={{ borderRadius: "12px" }}
            />
          </div>
        </div>

        <div className="row align-items-center flex-lg-row-reverse">
          <div className="col-lg-6">
            <h3
              className="fw-semibold mb-3"
              style={{
                color: "#f7e7b4",
                fontSize: "1.8rem",
              }}
            >
              Project Kuis Akhir — Front-End Development
            </h3>

            <p
              className="text-secondary"
              style={{ fontSize: "1.1rem", lineHeight: "1.7rem" }}
            >
              Website ini dibuat sebagai bagian dari <strong>kuis akhir kelas Front-End</strong>.
              Proyek ini mempraktikkan kemampuan pembuatan komponen, desain responsif,
              pemanggilan API, dan pengelolaan state dengan React & Next.js.
            </p>

            <p className="mt-3 text-secondary" style={{ fontSize: "0.95rem" }}>
              Terima kasih telah mengunjungi BirdWatch. Semoga kamu menikmati tampilannya!
            </p>
          </div>
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img
              src="/char_cewe1.jpg"
              alt="Front-End Project"
              className="img-fluid rounded shadow"
              style={{ borderRadius: "12px" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
