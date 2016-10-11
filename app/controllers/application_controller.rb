class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :get_categories

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

  CALLBACK_URL = "http://localhost:3000/insta-callback"


  before_filter :insta_auth

  def insta_callback
    -fail    
  end

  def insta_auth

    # redirect_to "https://api.instagram.com/oauth/authorize/?client_id=6f5e6040a9524eafbec47225c9493a8d&redirect_uri=http://localhost:3000/insta-callback&response_type=code"
    # require "net/http"
    # require "uri"

    # hashtag = 'tits'
    # uri = URI.parse("https://api.instagram.com/v1/tags/#{hashtag}/media/recent?client_id=6f5e6040a9524eafbec47225c9493a8d}")
    # response = Net::HTTP.get_response(uri)
    # Net::HTTP.get_print(uri)

    # # Full
    # http = Net::HTTP.new(uri.host, uri.port)
    # response = http.request(Net::HTTP::Get.new(uri.request_uri))
    

  end

end
