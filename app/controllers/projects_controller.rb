class ProjectsController < ApplicationController

	def index
		@q = Project.ransack(params[:q])
	  @projects = @q.result(distinct: true)
	end

	def show
		@project = Project.friendly.find(params[:id])
	end

end
