export const postLike = (like) => {
    return $.ajax({
        method: 'POST',
        url: 'api/likes',
        data: {like}
    })
}

export const deleteLike = (postId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/likes/${postId}`
    })
}