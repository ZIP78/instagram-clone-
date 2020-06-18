class Api::FollowingsController < ApplicationController
    def create
        debugger
        @following = Following.new
        @following.user_id = current_user.id
        @following.followed_user_id = params[:userId]
        if @following.save!
            @user = @following.user
            render  'api/users/show'
        else
            render json: @following, state: :unprocessible_entity

        end
        
    end

    def destroy #here 
        debugger
        @following = following 
        @following.destroy
        @user = @following.user
        render 'api/users/show'
    end
    
    
end
