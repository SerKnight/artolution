class CategoryController < ApplicationController


	def index
		@categories = Category.all
	end


	def show
		@category = Category.find_by_name(params[:id].gsub('-',' ').split.map(&:capitalize)*' ')
	end


end
