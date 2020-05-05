Rails.application.routes.draw do
  scope '/api' do
    resources :users
    resources :joblistings

    # resources :users, param: :_id
    # resources :users, param: :_username
    # post '/auth/login', to: 'authentication#login'
    # get '/*a', to: 'application#not_found'
  end
end
