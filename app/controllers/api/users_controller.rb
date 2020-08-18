class Api::UsersController < ApplicationController
    #   before_action :require_user!, only: [ :update]

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
        @user = current_user
        @users = User.all
        render :index
    end

    def update
    @user = current_user
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
        
    end
    
    
    

    private
    def user_params
        params.require(:user).permit( :username, :password, :email, :first_name, :last_name, :photo, :bio )
    end

end