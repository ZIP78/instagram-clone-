class Api::PhotosController < ApplicationController
    def index
        @posts = Post.all
        render :index
    end

    def post_params
        params.require(:post).permit(:body, :user_id)
    end
end
