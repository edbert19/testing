"use client";

import { useEffect, useState } from "react";
import AnimeCard from "../components/animecard";

export default function SearchPage() {
  const [animeList, setAnimeList] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function fetchAnimeData(searchQuery: string, pageNumber: number) {
    const baseUrl =
      searchQuery.trim() === ""
        ? "https://api.jikan.moe/v4/top/anime"
        : "https://api.jikan.moe/v4/anime";

    const params = new URLSearchParams({
      page: pageNumber.toString(),
      limit: "24",
      sfw: "true",
    });

    if (searchQuery.trim() !== "") {
      params.append("q", searchQuery);
    }

    const res = await fetch(`${baseUrl}?${params.toString()}`);
    if (res.status === 429) throw new Error("Terlalu cepat! Tunggu sebentar.");
    if (!res.ok) throw new Error("Gagal mengambil data.");

    return await res.json();
  }

  const handleAddBookmark = (id: number) => {
    const animeToAdd = animeList.find((item) => item.mal_id == id);
    if (!animeToAdd) return;

    const savedBookmarks = JSON.parse(
      localStorage.getItem("myAnimeBookmarks") || "[]"
    );

    const isAlreadySaved = savedBookmarks.some((b: any) => b.id == id);
    if (isAlreadySaved) {
      alert("Anime ini sudah ada di bookmark!");
      return;
    }

    const newBookmark = {
      id: animeToAdd.mal_id,
      title: animeToAdd.title,
      image: animeToAdd.images?.jpg?.large_image_url || "",
      episode: animeToAdd.episodes || "N/A",
    };

    const updatedBookmarks = [...savedBookmarks, newBookmark];
    localStorage.setItem("myAnimeBookmarks", JSON.stringify(updatedBookmarks));

    alert("Berhasil ditambahkan ke bookmark!");
  };

  useEffect(() => {
    async function init() {
      setIsLoading(true);
      try {
        const data = await fetchAnimeData("", 1);
        setAnimeList(data.data || []);
        setHasNextPage(data.pagination?.has_next_page || false);
      } catch (err: any) {
        setErrorMsg(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, []);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    setPage(1);
    setAnimeList([]);

    try {
      const data = await fetchAnimeData(query, 1);

      if (!data.data || data.data.length === 0) {
        setErrorMsg("Anime tidak ditemukan.");
        setHasNextPage(false);
      } else {
        setAnimeList(data.data);
        setHasNextPage(data.pagination?.has_next_page || false);
      }
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    const nextPage = page + 1;
    try {
      const data = await fetchAnimeData(query, nextPage);
      setAnimeList((prev) => [...prev, ...data.data]);
      setPage(nextPage);
      setHasNextPage(data.pagination?.has_next_page || false);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsLoadingMore(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a1a1a, #121212)",
        padding: "40px 0",
        color: "white",
      }}
    >
      <div className="container">
        <form
          onSubmit={handleSearch}
          className="d-flex justify-content-center mb-5"
        >
          <input
            type="text"
            className="form-control"
            placeholder="Cari anime..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ maxWidth: "400px" }}
          />
          <button
            className="btn btn-warning ms-2"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Search"}
          </button>
        </form>

        {errorMsg && (
          <div
            className="alert alert-danger text-center mx-auto"
            style={{ maxWidth: "500px" }}
          >
            {errorMsg}
          </div>
        )}

        {isLoading && !errorMsg && (
          <div className="text-center text-white mb-4">
            Sedang memuat data...
          </div>
        )}

        <div className="d-flex flex-wrap gap-4 justify-content-center">
          {!isLoading &&
            animeList.map((anime: any, index: number) => (
              <AnimeCard
                key={`${anime.mal_id}-${index}`}
                id={anime.mal_id}
                title={anime.title}
                image={anime.images?.jpg?.large_image_url || "/placeholder.jpg"}
                episode={anime.episodes}
                isBookmarkPage={false}
                onAddBookmark={handleAddBookmark}
              />
            ))}
        </div>

        {!isLoading && !errorMsg && hasNextPage && (
          <div className="d-flex justify-content-center mt-5">
            <button
              className="btn btn-outline-warning px-5"
              onClick={handleLoadMore}
              disabled={isLoadingMore}
            >
              {isLoadingMore ? "Sedang memuat..." : "Load More Anime"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
