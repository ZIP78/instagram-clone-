# json.partial! "api/users/user", user: @user
# json.user do 
    json.extract! @user, :id, :username, :email, :first_name, :last_name
    # json.photoUrl url_for(@user.photo || "/assets/images/avg.png") 
    if @user.photo.attached?
        json.photoUrl url_for(@user.photo)
    else
        # json.photoUrl @user.photo.attach(io: File.open("/Users/memes/happy.png"), filename: "happy.png")
        json.photoUrl @user.photo.attach(io: File.open(Rails.root.join("app", "assets", "images", "happy.png")), filename: "happy.png")
    end
# end