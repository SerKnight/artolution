class VisitorsController < ApplicationController

  def homepage

    @posts = Post.all
    @visitor = Visitor.new
  end

  def create
    @visitor = Visitor.create(visitor_params)

    if @visitor.save
      redirect_to root_path, notice: "Signed up #{@visitor.email}."
    else
      render :new
    end
  end


  private

    def visitor_params
      params.require(:visitor).permit(:email, :name, :phone, :message)
    end   
end
