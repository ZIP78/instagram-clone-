# json.partial! "api/users/user", user: @user
# json.user do 
    json.extract! @user, :id, :username, :email, :first_name, :last_name
    # json.photoUrl url_for(@user.photo) 
# end