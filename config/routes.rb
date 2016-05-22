Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/studio', as: 'rails_admin'
  resources :visitors, only: [:new, :create]
  resources :projects, :category

  devise_for :users

  get '/about', to: 'application#about'
  get '/team', to: 'application#team'

  get '/contact', to: 'application#contact'
  get '/get-involved', to: 'application#contact'

  root to: 'visitors#homepage'
end
