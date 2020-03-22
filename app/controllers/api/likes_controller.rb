class Api::LikesController < ApplicationController
  def create
      
        @like = Like.new
        @like.user_id = current_user.id
        @like.post_id = (params[:post_id])


      debugger
    
      
      if @like.save!
          @post = @like.post
          render 'api/posts/show'
      else
        render json: @comment, state: :unprocessible_entity
      end
  end

  def destroy
        @like = Like.find(params[:id])
        @like.destroy
  end #come back to


    
end
