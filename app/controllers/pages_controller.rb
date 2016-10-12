class PagesController < ApplicationController
  

  def homepage

  end

  def categories_index
    @category = Category.first
    # Make a homepage category
  end

  def categories_show
  	@category = Category.find_by_slug(params[:slug])

    if params[:project]
      @current_project = Project.find_by_slug(params[:project])
    end

    respond_to do |format|
      format.html
      format.js { render :action => 'update_project.js.erb', :layout => false}
    end
  end


  def about
    # @hero = LocomotiveClient.new('get-hero', 'hero', { tags: request.path }).response.first
    # @employees = LocomotiveClient.new('active-employees', 'employees').response
  end

end