
@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :post_id
    end
end 