ActiveAdmin.register Category, :as => "project_category" do

	controller do
	  def find_resource
	    scoped_collection.friendly.find(params[:id])
	  end
	  def permitted_params
	  	params.permit!
	  end
	end


	form do |f|
    f.inputs 'Details' do
      f.input :name
      f.input :slug
      f.input :description
      f.input :body, :as => :rich, :config => { :width => '76%', :height => '400px' }
    end
    
  end

end
