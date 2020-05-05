Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users
      resources :joblistings
    end
  end
  
end
# todo: set up user auth
# resources :users, param: :_id
# resources :users, param: :_username
# post '/auth/login', to: 'authentication#login'
# get '/*a', to: 'application#not_found'