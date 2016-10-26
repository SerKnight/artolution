Rails.application.routes.draw do
  mount Rich::Engine => '/rich', :as => 'rich'
  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :users, controllers: {registrations: "users/registrations", sessions: "users/sessions", passwords: "users/passwords", omniauth_callbacks: "users/omniauth_callbacks"}, skip: [:sessions, :registrations]
  # devise_for :users, ActiveAdmin::Devise.config
  # devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # get '/about', to: 'application#about'
  # get '/team', to: 'application#team'

  get '/contact', to: 'pages#contact'
  # get '/get-involved', to: 'application#contact'

  devise_scope :user do
    get    "login"   => "users/sessions#new",         as: :new_user_session
    post   "login"   => "users/sessions#create",      as: :user_session
    delete "signout" => "users/sessions#destroy",     as: :destroy_user_session
    
    get    "signup"  => "users/registrations#new",    as: :new_user_registration
    post   "signup"  => "users/registrations#create", as: :user_registration
    put    "signup"  => "users/registrations#update", as: :update_user_registration
    get    "account" => "users/registrations#edit",   as: :edit_user_registration
  end

  get '/about' => 'pages#about'
  get '/partners' => 'pages#partners'

  # get '/projects/:slug' => 'projects#projects_show'
  # get '/projects/:slug/:study' => 'projects#projects_show'

  get '/category/:slug' => 'pages#categories_show'
  get '/category/:slug/:project' => 'pages#categories_show'

  get '/projects' => 'pages#projects'
  # get '/project/:slug' => 'pages#project_show'


  root to: 'pages#categories_index'
  
  #contact submission
  # resources :contacts, only: [:create]
  # post 'contacts/create'
end
