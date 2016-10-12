class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :get_categories

  def allowed_user(current_user)
    if current_user && current_user.email == 'chrisknight.mail@gmail.com'
      return true
    else
      return false
    end
  end

  def get_categories
  	# @categories_struct = []
  	# Category.all.each do |cat|
  	#   category = OpenStruct.new
  	#   category.name = cat.name
  	#   category.slug = cat.slug
  	#   @categories_struct << category
  	# end
  	# #should i just query all categories?
		@categories ||= Category.all
  end

  def contact
  end


  def about
  end

  def team
  end
end
