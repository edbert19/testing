"use client";

import { useState } from "react";

export default function AddAnimePage() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [episodes, setEpisodes] = useState("");

  const handleAddAnime = () => {
    if (!title || !imageUrl || !episodes) {
      alert("❗ Semua field harus diisi");
      return;
    }

    const newAnime = {
      mal_id: Date.now(), 
      title,
      images: {
        jpg: { large_image_url: imageUrl }
      },
      episodes,
    };

    const existing = JSON.parse(localStorage.getItem("customAnime") || "[]");

    const updated = [...existing, newAnime];
    localStorage.setItem("customAnime", JSON.stringify(updated));

    alert("✔ Anime berhasil ditambahkan!");
    setTitle("");
    setImageUrl("");
    setEpisodes("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a1a1a, #121212)",
        padding: "40px 0",
      }}
    >
      <div className="container" style={{ maxWidth: "500px" }}>
        <h2
          className="fw-bold mb-4 text-center"
          style={{
            background: "linear-gradient(90deg, #f7e7b4, #b59e63)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          ➕ Add Custom Anime
        </h2>

        <div className="card p-4" style={{ background: "#1f1f1f", color: "white" }}>
          <label className="mb-2">Judul Anime</label>
          <input
            className="form-control mb-3"
            placeholder="Masukkan judul..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="mb-2">Image URL</label>
          <input
            className="form-control mb-3"
            placeholder="https://example.com/gambar.jpg"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <label className="mb-2">Episode</label>
          <input
            className="form-control mb-3"
            type="number"
            placeholder="Jumlah episode"
            value={episodes}
            onChange={(e) => setEpisodes(e.target.value)}
          />

          <button
            className="btn w-100 mt-2"
            style={{
              background: "linear-gradient(180deg, #f7e7b4, #b59e63)",
              color: "#1a1a1a",
              fontWeight: "bold",
            }}
            onClick={handleAddAnime}
          >
            Simpan Anime
          </button>
        </div>
      </div>
    </div>
  );
}
