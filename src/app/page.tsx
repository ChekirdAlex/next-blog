import PostCard from "@/components/PostCard";
import PostLike from "@/components/PostLike";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <PostCard />
      <div className={styles["like-demo"]}>
        <PostLike postId={1} />
      </div>
    </main>
  );
}
