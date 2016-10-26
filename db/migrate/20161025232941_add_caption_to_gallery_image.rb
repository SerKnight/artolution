class AddCaptionToGalleryImage < ActiveRecord::Migration
  def change
    add_column :gallery_images, :caption, :string
  end
end
