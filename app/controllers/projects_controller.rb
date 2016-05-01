class ProjectsController < ApplicationController

	def show
		@project = Project.find(params[:id].gsub('-',' ').split.map(&:capitalize)*' ')
	end

end
