class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end
    
    def index
        @users = User.all
        render :index
    end

    def update_profile_pic
        @user = User.find(update_profile_params[:id])
        @user.photo.attach(update_profile_params[:photo])
        debugger
        if @user.photo.attached?
            render :photo
        else
            render json: @post.errors.full_messages, status: 422
        end
        
    end
    
    

    private
    def user_params
        params.require(:user).permit(:username, :password, :email, :first_name, :last_name )
    end

    def update_profile_params
        params.require(:user).permit(:photo, :id)
    end
    
end