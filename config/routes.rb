Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :visitors, only: [:new, :create]

  get '/team', to: 'application#team'

  root to: 'visitors#new'
end
