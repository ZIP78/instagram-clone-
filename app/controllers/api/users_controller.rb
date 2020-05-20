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
        @users = User.all
        render :index
    end

    # def show
    #      @user = User.find_by(id: params[:id])
    # end
    

    def update
        
        
        # @user = User.find(params[:id])
         @user = current_user#user cannot find id 
         debugger
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
        
    end
    
# fix the update method 
    
    

    private
    def user_params
        params.require(:user).permit( :username, :password, :email, :first_name, :last_name, :photo )
    end

#     def require_user!
#     return if current_user.find_by(id: params[:id])
#     render json: 'Forbidden', status: :forbidden
#   end
end