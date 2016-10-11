Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/studio', as: 'rails_admin'
  resources :visitors, only: [:new, :create]
  resources :projects, :category

  devise_for :users

  get '/about', to: 'application#about'
  get '/team', to: 'application#team'

  get '/contact', to: 'application#contact'
  get '/get-involved', to: 'application#contact'

  get '/insta-auth', to: 'application#insta_auth'

  get '/insta-callback', to: 'application#insta_callback'

  root to: 'visitors#homepage'
end
