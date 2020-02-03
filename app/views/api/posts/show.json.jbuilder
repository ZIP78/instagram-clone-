json.post do
    json.extract! @post, :body
    json.photoUrl url_for(@post.photo)
end