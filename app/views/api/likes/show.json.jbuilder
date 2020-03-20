json.like do 
    json.extract! @like, :id, :user_id, :post_id
end 