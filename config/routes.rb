Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/studio', as: 'rails_admin'
  resources :category

  # devise_for :users

  # get '/about', to: 'application#about'
  # get '/team', to: 'application#team'

  # get '/contact', to: 'application#contact'
  # get '/get-involved', to: 'application#contact'

  root to: 'pages#categories_index'


  # root 'projects#projects_index'
  # get '/projects' 

  get '/about' => 'projects#about'
  get '/contact' => 'contacts#new'
  get '/book-a-dj' => 'contacts#new'

  # get '/projects/:slug' => 'projects#projects_show'
  # get '/projects/:slug/:study' => 'projects#projects_show'

  get '/category/:slug' => 'pages#categories_show'
  get '/category/:slug/:project' => 'pages#categories_show'


  #contact submission
  # resources :contacts, only: [:create]
  # post 'contacts/create'
end
