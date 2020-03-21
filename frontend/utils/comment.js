export const fetchComments = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/comments`
    })
}


export const createComment = (comment) => {
    return $.ajax({
        method: 'POST',
        url: 'api/comments',
        data: comment,
        contentType: false,
        processData: false
    })
}

export const deleteComment = (commentId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/comments/${commentId}`,
    })
}

// maybe might have a problem with the delete method 