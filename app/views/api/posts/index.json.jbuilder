    @posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :body, :user_id, :created_at
            json.likes post.likes.count
            debugger
            json.liked_by_current_user !!post.likes.find_by(user_id: current_user.id)
            json.photoUrl url_for(post.photo) 
        end
    end
