export const fetchPosts = () => {
   return $.ajax({
       method: `GET`,
       url: `/api/posts`
    })
}

export const fetchPost = (id) => {
    return $.ajax({
        method: `GET`,
        url: `/api/posts/${id}`
    })
}

export const createPost = (post) => {
    return $.ajax({
        method: 'POST',
        url: `/api/posts`,
        data: post,
        contentType: false,
        processData: false
    })
}

export const postLike = (postId) => {
    return $.ajax({
      method: "POST",
      url: `/api/posts/${postId}/likes`,
      data: { postId }
    });
}

export const deleteLike = (id) => {
    return $.ajax({
      method: "DELETE",
      url: `api/likes`,
      data: {id}
    });
}