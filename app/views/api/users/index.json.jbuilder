@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :username, :email, :first_name, :last_name
        json.photoUrl url_for(user.photo) 
    end
end