"use client";

import { useEffect, useState } from "react";
import AnimeCard from "../components/animecard";

export default function SearchPage() {
  const [animeList, setAnimeList] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function loadDefault() {
      try {
        const res = await fetch("https://api.jikan.moe/v4/top/anime?sfw&limit=100");
        const data = await res.json();

        if (!data || !data.data) {
          setAnimeList([]);
          return;
        }

        setAnimeList(data.data);
      } catch (err) {
        console.error("Gagal fetch:", err);
        setAnimeList([]);
      }
    }
    loadDefault();
  }, []);

  const handleSearch = async (e: any) => {
    e.preventDefault();

    if (query.trim() === "") return;

    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&sfw&limit=100`
      );
      const data = await res.json();

      if (!data || !data.data) {
        setAnimeList([]);
        return;
      }

      setAnimeList(data.data);
    } catch (err) {
      console.error("Gagal search:", err);
      setAnimeList([]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a1a1a, #121212)",
        padding: "40px 0",
      }}
    >
      <div className="container">

        <form
          onSubmit={handleSearch}
          className="d-flex justify-content-center mb-4"
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search anime..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ maxWidth: "400px" }}
          />
          <button className="btn btn-warning ms-2">Search</button>
        </form>

        <div className="d-flex flex-wrap gap-4 justify-content-center">
          {(animeList || []).map((anime: any) => (
            <AnimeCard
              key={anime.mal_id}
              id={anime.mal_id}
              title={anime.title}
              image={anime.images?.jpg?.large_image_url || "/placeholder.jpg"}
              episode={anime.episodes}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
