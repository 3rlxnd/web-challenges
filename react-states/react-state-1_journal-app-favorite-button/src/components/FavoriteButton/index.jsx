import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import { useState } from "react";
import Star from "./star.svg?react";

export default function FavoriteButton() {
  let [isFavourite, setFavourite] = useState(false)

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setFavourite(!isFavourite)
      }}
      aria-label="favorite"
    >
      {isFavourite ? <StarFilled /> : <Star />}
    </button>
  );
}
