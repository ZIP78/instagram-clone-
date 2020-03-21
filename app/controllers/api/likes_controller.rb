class Api::LikesController < ApplicationController

  def create
      # @like = current_user.likes.new(like_params)
      @like.user_id = current_user.id
      @like.post_id = params[:id]
      debugger
      if @like.save!
          # @post = @like.post
          render 'api/posts/show'
      else
        render json: @comment, state: :unprocessible_entity
      end
  end

  def destroy
        @like = Like.find(params[:id])
        @like.destroy
  end #come back to

  private
  def like_params
      params.require(like).permit(:post_id, :user_id)
  end
  
    
end
