"use client";

import { Plus, Trash } from "react-bootstrap-icons";

interface AnimeCardProps {
  id: number;
  title: string;
  image: string;
  episode?: number | string;
  onAddBookmark?: (id: number) => void;
  onDeleteBookmark?: (id: number) => void;
  isBookmarkPage?: boolean; 
}

export default function AnimeCard({
  id,
  title,
  image,
  episode = "N/A",
  onAddBookmark,
  onDeleteBookmark,
  isBookmarkPage = false
}: AnimeCardProps) {

  return (
    <div
      className="card border-0"
      style={{
        width: "180px",
        background: "#1a1a1a",
        color: "white",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 0 12px rgba(247, 231, 180, 0.08)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "230px", objectFit: "cover" }}
      />

      <div className="p-2 position-relative">
        <h6
          className="fw-bold"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </h6>

        <small className="text-secondary d-block mb-3">{episode}</small>

        {!isBookmarkPage ? (
          <button
            className="position-absolute"
            style={{
              background: "#0f0f0f",
              border: "2px solid #f7e7b4",
              color: "#f7e7b4",
              width: "36px",
              height: "36px",
              bottom: "5px",
              right: "5px",
              borderRadius: "50%",
              padding: 0,
            }}
            onClick={() => onAddBookmark?.(id)}
          >
            <Plus size={20} />
          </button>
        ) : (
          // BUTTON DELETE
          <button
            className="position-absolute"
            style={{
              background: "#330000",
              border: "2px solid #ff5c5c",
              color: "#ff5c5c",
              width: "36px",
              height: "36px",
              bottom: "5px",
              right: "5px",
              borderRadius: "50%",
              padding: 0,
            }}
            onClick={() => onDeleteBookmark?.(id)}
          >
            <Trash size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
