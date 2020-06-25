Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
        root to: "static_pages#root"

    namespace :api, defaults: {format: :json} do
        resources :users, only: [:create, :index, :update] do
            resources :followings, only: [:create]
        end 
        get '/users/:user_id/followings', to: "followings#currently_following"


        resources :followings, only: [:index]


        delete '/followings', to: "followings#destroy"
        resource :session, only:[:create, :show, :destroy]  

        # patch 'users', to: 'users#update_profile_pic'

        resources :posts, only: [:create, :show, :index] do
                resources :likes, only: [:create]
        end
        # resources :likes, only: [:destroy]
            delete '/likes', to: 'likes#destroy'


        resources :comments, only: [:create, :index, :destroy]
    end


end
