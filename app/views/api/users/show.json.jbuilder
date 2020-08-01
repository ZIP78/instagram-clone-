# json.partial! "api/users/user", user: @user
# json.user do 
    json.extract! @user, :id, :username, :email, :first_name, :last_name
    if @user.photo.attached?
        json.photoUrl url_for(@user.photo)
    else
        json.photoUrl @user.photo.attach(io: File.open(Rails.root.join("app", "assets", "images", "happy.png")), filename: "happy.png")
    end
    # debugger
    json.following @user.followings.all.index_by(&:id)
    # json.currentFollowing !!@user.followings.find_by(followed_user_id: params[:userId] ) 




# end