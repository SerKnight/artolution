class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :get_categories

  def allowed_user(current_user)
    if current_user && (current_user.email == 'chrisknight.mail@gmail.com' || current_user.email  == 'superheroxam@aol.com' || current_user.email == 'joeljoel88@yahoo.com') 
      return true
    else
      return false
    end
  end

  def get_categories
 
		@categories ||= Category.where.not(slug: 'homepage')
  end

  def contact
  end


  def about
  end

  def team
  end
end
