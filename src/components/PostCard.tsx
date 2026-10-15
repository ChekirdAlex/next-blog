import Image from "next/image";
import { Open_Sans } from "next/font/google";
import PostLikes from "./PostLikes";
import styles from "./PostCard.module.css";

const openSans = Open_Sans({
  subsets: ["cyrillic", "latin"],
});

export default function PostCard() {
  return (
    <article className={`${styles.card} ${openSans.className}`}>
      <div className={styles.preview}>
        <Image
          className={styles.image}
          src="/css-grid-preview.png"
          alt="Макет страницы в окне браузера"
          width={300}
          height={193}
          priority
        />
      </div>

      <div className={styles.text}>
        <div className={styles.meta}>
          <div className={styles.byline}>
            <span>Front-end</span>
            <span aria-hidden="true">·</span>
            <span>1 месяц назад</span>
          </div>
          <PostLikes count={4} />
        </div>

        <h2 className={styles.title}>Как работать с CSS Grid</h2>
        <p className={styles.excerpt}>
          <a
            className={styles.source}
            href="https://developer.mozilla.org/ru/docs/Web/CSS/Guides/Grid_layout"
          >
            Грид-раскладка (CSS Grid Layout)
          </a>{" "}
          представляет собой двумерную систему сеток в CSS. Гриды подойдут и для
          верстки основных областей страницы..
        </p>
      </div>

      <div className={styles.footer}>
        <span>3 минуты</span>
        <a className={styles.read} href="#">
          Читать →
        </a>
      </div>
    </article>
  );
}
