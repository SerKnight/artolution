Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/studio', as: 'rails_admin'
  resources :visitors, only: [:new, :create]
  resources :projects

  devise_for :users

  get '/team', to: 'application#team'

  root to: 'visitors#homepage'
end
