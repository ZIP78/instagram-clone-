export const postLike = (like) => {
    return $.ajax({
      method: "POST",
      url: `/api/posts/${like}/likes`,
      data: { like }
    });
}
//eeehhh
export const deleteLike = (postId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/likes/${postId}`
    })
}