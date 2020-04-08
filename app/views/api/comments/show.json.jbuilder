json.comment do 
    json.extract! @comment, :id, :body, :post_id, :user_id
end 