import { useState } from "react";
import styles from "./Like.module.css";

type LikeProps = {
  onChange: (liked: boolean) => Promise<void>;
  initialLiked?: boolean;
};

export default function Like({ onChange, initialLiked = false }: LikeProps) {
  const [liked, setLiked] = useState(initialLiked);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  async function handleClick() {
    if (pending) return;

    setPending(true);
    setError(false);

    try {
      const nextLiked = !liked;
      await onChange(nextLiked);
      setLiked(nextLiked);
    } catch {
      setError(true);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className={styles.like}>
      <span>Понравилось? Жми</span>
      <button
        type="button"
        className={`${styles.button} ${liked ? styles.liked : ""}`}
        aria-label={liked ? "Убрать лайк" : "Поставить лайк"}
        aria-pressed={liked}
        aria-busy={pending}
        disabled={pending}
        onClick={handleClick}
      >
        <span className={styles.icon} aria-hidden="true" />
      </button>
      {error && (
        <span className={styles.error} role="alert">
          Не удалось сохранить лайк. Попробуйте ещё раз.
        </span>
      )}
    </div>
  );
}
