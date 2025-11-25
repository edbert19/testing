"use client";

import { useEffect, useState } from "react";
import AnimeCard from "../components/animecard";

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("bookmarks");
    if (saved) setBookmarks(JSON.parse(saved));
  }, []);

  const removeBookmark = (id: number) => {
    const updated = bookmarks.filter((anime) => anime.mal_id !== id);
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
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
          📌 My Bookmarks
        </h3>

        {bookmarks.length === 0 ? (
          <p className="text-center text-secondary">
            Belum ada anime yang ditambahkan ke bookmarks.
          </p>
        ) : (
          <div className="d-flex flex-wrap gap-4 justify-content-center">
            {bookmarks.map((anime) => (
              <AnimeCard
                key={anime.mal_id}
                id={anime.mal_id}
                title={anime.title}
                image={anime.images.jpg.large_image_url}
                episode={anime.episodes}
                isBookmarkPage={true}  
                onDeleteBookmark={removeBookmark}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
