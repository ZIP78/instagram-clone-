json.post do
    json.extract! @post, :id, :body, :user_id
    json.photoUrl url_for(@post.photo) 
end