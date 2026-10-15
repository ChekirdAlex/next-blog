"use client";

import Like from "./Like";

type PostLikeProps = {
  postId: number;
  initialLiked?: boolean;
};

export default function PostLike({ postId, initialLiked }: PostLikeProps) {
  async function updateLike(liked: boolean) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ liked }),
      },
    );

    if (!response.ok) {
      throw new Error(`Не удалось обновить лайк: ${response.status}`);
    }
  }

  return <Like onChange={updateLike} initialLiked={initialLiked} />;
}
