class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        # @user.photo = "/assets/images/avg.png" if @user.photo.nil? 
        debugger
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

    
    

    private
    def user_params
        params.require(:user).permit(:username, :password, :email, :first_name, :last_name, :photo )
    end

    
end