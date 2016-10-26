ActiveAdmin.register Project do
	permit_params :title, :category_id, :body, :slug


  controller do
    def find_resource
      scoped_collection.friendly.find(params[:id])
    end
	  def permitted_params
	  	params.permit!
	  end
  end



  form multipart: true do |f|
    f.inputs do
      f.input :title
      f.input :category
      f.input :body, :as => :rich, :config => { :width => '76%', :height => '400px' }
      f.input :slug
      f.input :hero
      # f.input :excerpt, label: 'Deck'
      # f.input :subheadline, label: 'Meta Description'
      # f.input :page_title
      # f.input :permalink      
      # f.input :author    
      # f.input :body, input_html: { class: 'mceEditor' }
      # f.input :embed_url, :label => "iframe Embed Url"
      # f.input :hero, :as => :boolean
      # f.input :state, :include_blank => false, :as => :select, :collection => Post::STATE
      # f.input :published_at, :as => :just_datetime_picker

      f.has_many :gallery_images do |p|
        p.input :image, :as => :file, :hint => p.template.image_tag(p.object.image.url(:thumb))
        p.input :caption #, as: :html_editor
        p.input :_destroy, :label => 'DELETE THIS IMAGE', :as => :boolean 
      end
      # f.has_many :images, :label => "Post Images" do |p|
      #   p.input :attachment, :label => 'Upload '+(c+=1).to_s, :as => :file, :hint => p.template.image_tag(p.object.image.url(:thumb))
      #   p.input :caption
      #   p.input :_destroy, :label => 'DELETE THIS IMAGE', :as => :boolean 
      # end
      # f.has_many :videos, :label => "Post Videos" do |p|
      #   p.input :attachment, as: :file, :hint => p.template.image_tag(p.object.attachment.url(:thumb))
      # end
    end
    f.actions
  end

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end


end
