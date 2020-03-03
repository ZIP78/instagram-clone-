class Api::PostsController < ApplicationController
    before_action :ensure_logged_in?
    def index
        @posts = Post.all
        render :index
    end

    def show 
        @post = Post.find(params[:id])
        render :show
    end

    def create
        @post = current_user.posts.new(post_params)
        if @post.save!
            render :show 
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private
    def post_params
        params.require(:post).permit(:body, :photo, :user_id )
    end
end
