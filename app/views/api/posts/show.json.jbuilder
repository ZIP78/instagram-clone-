json.post do
    json.extract! @post, :id, :body
    json.photoUrl url_for(@post.photo) 
end