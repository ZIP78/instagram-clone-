
@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :post_id, :user_id, :created_at
    end
end 

# work on the front end next 