"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import AnimeCard from "./components/animecard";
import AboutUs from "./components/aboutus";
import Footer from "./components/footer";

export default function Home() {
  const [animeList, setAnimeList] = useState<any[]>([]);
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("bookmarks");
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const addBookmark = (animeId: number) => {
    const anime = animeList.find((a: any) => a.mal_id === animeId);

    if (!anime) return;

    const exists = bookmarks.some((b) => b.mal_id === animeId);
    if (exists) return;

    const updated = [...bookmarks, anime];
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));

    alert("✔ Anime ditambahkan ke Bookmarks!");
  };

  useEffect(() => {
    async function getAnime() {
      try {
        const res = await fetch("https://api.jikan.moe/v4/top/anime?sfw");
        const data = await res.json();

        const shuffled = data.data.sort(() => 0.5 - Math.random());

        const savedCustom = JSON.parse(
          localStorage.getItem("customAnime") || "[]"
        );

        setAnimeList([...shuffled.slice(0, 100), ...savedCustom]);
      } catch (error) {
        console.error("Gagal fetch anime:", error);
      }
    }
    getAnime();
  }, []);

  return (
    <div>
      <div className="position-relative" >
        <div
          id="mainCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active position-relative">
              <img
                src="/slider1.jpg"
                className="d-block w-100"
                style={{ height: "100vh", objectFit: "cover" }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.4)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "70px",
                    fontWeight: "900",
                    lineHeight: "70px",
                    color: "#f7e7b4",
                    textShadow: "0px 0px 15px rgba(0,0,0,0.7)",
                  }}
                >
                  Welcome
                  <br />
                  to
                  <br />
                  BirdWatch
                </h1>

                <p
                  style={{
                    marginTop: "15px",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "black",
                    background: "rgba(255,255,255,0.65)",
                    display: "inline-block",
                    padding: "5px 20px",
                    borderRadius: "8px",
                  }}
                >
                  Discover amazing anime
                </p>
              </div>
            </div>
            <div className="carousel-item position-relative">
              <img
                src="/slider2.jpg"
                className="d-block w-100"
                style={{ height: "100vh", objectFit: "cover" }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.4)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "70px",
                    fontWeight: "900",
                    lineHeight: "70px",
                    color: "#f7e7b4",
                    textShadow: "0px 0px 15px rgba(0,0,0,0.7)",
                  }}
                >
                  Welcome
                  <br />
                  to
                  <br />
                  BirdWatch
                </h1>

                <p
                  style={{
                    marginTop: "15px",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "black",
                    background: "rgba(255,255,255,0.65)",
                    display: "inline-block",
                    padding: "5px 20px",
                    borderRadius: "8px",
                  }}
                >
                  Discover amazing anime
                </p>
              </div>
            </div>

            <div className="carousel-item position-relative">
              <img
                src="/slider3.jpg"
                className="d-block w-100"
                style={{ height: "100vh", objectFit: "cover" }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.4)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "70px",
                    fontWeight: "900",
                    lineHeight: "70px",
                    color: "#f7e7b4",
                    textShadow: "0px 0px 15px rgba(0,0,0,0.7)",
                  }}
                >
                  WELCOME
                  <br />
                  TO
                  <br />
                  BIRDWATCH
                </h1>

                <p
                  style={{
                    marginTop: "15px",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "black",
                    background: "rgba(255,255,255,0.65)",
                    display: "inline-block",
                    padding: "5px 20px",
                    borderRadius: "8px",
                  }}
                >
                  Discover amazing anime
                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>{" "}
      <div
        style={{
          background: "linear-gradient(180deg, #1a1a1a, #121212)",
          padding: "40px 0",
        }}
      >
        <div className="container">
          <h3
            className="fw-bold mb-4 text-center"
            style={{
              fontSize: "32px",
              background: "linear-gradient(90deg, #f7e7b4, #b59e63)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              letterSpacing: "2px",
            }}
          >
            ✨ Anime List ✨
          </h3>

          <div className="d-flex flex-wrap gap-4 justify-content-center">
            {animeList.map((anime: any) => (
              <AnimeCard
                key={anime.mal_id}
                id={anime.mal_id}
                title={anime.title}
                image={anime.images.jpg.large_image_url}
                episode={anime.episodes}
                onAddBookmark={addBookmark}
              />
            ))}
          </div>
        </div>
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}
