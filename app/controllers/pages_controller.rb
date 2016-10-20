class PagesController < ApplicationController
  
  def about
  
  end

  def contact

  end

  def partners
    @artists = Artist.all
  end

  def categories_index
    @category = Category.find_by_slug 'homepage'

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

  def projects
    if params[:artist_id]
      @artist = Artist.find params[:artist_id]
      @project_list = @artist.projects.group_by(&:category)
    else
      @project_list = Category.all.map{|c| [c, c.projects]}
    end
  end

  def project_show 

  end

end