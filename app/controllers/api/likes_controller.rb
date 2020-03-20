class Api::LikesController < ApplicationController

  def create
      @like = current_user.likes.new(like_params)
      if @like.save!
          render :show
      else
        render json: @comment, state: :unprocessible_entity
      end
  end

  def destroy
        @like = Like.find(params[:id])
        @like.destroy
  end

  private
  def like_params
      params.require(like).permit(:post_id, :user_id)
  end
  
    
end
