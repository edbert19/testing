import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BirdWatch",
  description: "Anime Catalog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav
          className="navbar navbar-expand-lg py-3 shadow-sm fixed-top"
          style={{ background: "#2c2c2c" }}
        >
          <div
            className="container-fluid d-flex align-items-center"
            style={{ paddingLeft: "30px", paddingRight: "30px" }}
          >
            <a
              className="navbar-brand d-flex align-items-center gap-2"
              href="/"
            >
              <img
                src="/logo.jpg"
                alt="Logo"
                style={{ width: "40px", height: "40px", objectFit: "contain" }}
              />
              <span
                className="fw-bold fs-3"
                style={{ color: "#f7e7b4", letterSpacing: "1px" }}
              >
                BirdWatch
              </span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              style={{ borderColor: "#f7e7b4" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto gap-4">
                <li className="nav-item">
                  <a
                    className="nav-link fw-semibold fs-5"
                    href="/"
                    style={{ color: "#f7e7b4" }}
                  >
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link fw-semibold fs-5"
                    href="/search"
                    style={{ color: "#f7e7b4" }}
                  >
                    Search
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link fw-semibold fs-5"
                    href="/bookmarks"
                    style={{ color: "#f7e7b4" }}
                  >
                    Bookmarks
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link fw-semibold fs-5"
                    href="/add"
                    style={{ color: "#f7e7b4" }}
                  >
                    Add
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div style={{ marginTop: "70px" }}>{children}</div>
      </body>
    </html>
  );
}
