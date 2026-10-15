"use client";

import { useState } from "react";
import styles from "./PostLikes.module.css";

type PostLikesProps = {
  count: number;
};

export default function PostLikes({ count }: PostLikesProps) {
  const [liked, setLiked] = useState(false);
  const displayedCount = count + Number(liked);

  return (
    <button
      type="button"
      className={liked ? `${styles.likes} ${styles.liked}` : styles.likes}
      aria-label={`${liked ? "Убрать лайк" : "Поставить лайк"}. Лайков: ${displayedCount}`}
      aria-pressed={liked}
      onClick={() => setLiked((value) => !value)}
    >
      <span aria-hidden="true">{displayedCount}</span>
      <span className={styles.icon} aria-hidden="true" />
    </button>
  );
}
