class ApplicationController < ActionController::Base
      helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token! 
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def ensure_logged_in?
        unless current_user
            render json: { base: ['Invalid Credentials'] }, status: 401
        end    
    end

    # def following
        
    #     current_user.followings.one? { |following|
    #         debugger
    #        return following if (following.followed_user_id == User.find_by(params[:id]).id) 
    #     }
    # end
    
end
