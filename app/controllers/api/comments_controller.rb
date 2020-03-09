class Api::CommentsController < ApplicationController

    def create
        @comment = current_user.comments.new(comment_parans)
        if @comment.save
            render :show
        else
            render json: @comment, state: :unprocessible_entity
        end
        
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
    end

    private
    def comment_parans
        params.require(:comment).permit(:user_id, :post_id, :body)
    end
    
    
end
