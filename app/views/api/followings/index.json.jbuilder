@followings.each do |follow| 
    json.set! follow.id do
        json.extract! follow, :id, :user_id, :created_at, :followed_user_id
    end
end