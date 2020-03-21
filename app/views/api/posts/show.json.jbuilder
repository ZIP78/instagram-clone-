json.post do
    json.extract! @post, :id, :body, :user_id
    json.likes @post.likes.count
    json.liked_by_current_user !!@post.likes.find_by(user_id: current_user.id)
    json.photoUrl url_for(@post.photo) 
end