Rails.application.routes.draw do
  # scope '/api' do
  #   resources :users
  #   resources :joblistings
  # end

  namespace :api do
    namespace :v1 do
      resources :users
      resource :joblistings
    end
  end
end

# resources :users, param: :_id
# resources :users, param: :_username
# post '/auth/login', to: 'authentication#login'
# get '/*a', to: 'application#not_found'