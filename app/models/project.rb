class Project < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged
	has_and_belongs_to_many :artists
	has_many :gallery_images
	belongs_to :category

	has_attached_file :hero, styles: { large: "1280x1024>", medium: "650x650" }
  validates_attachment_content_type :hero, content_type: /\Aimage\/.*\Z/

  # Method
  def create_associated_image(image)
    gallery_images.create(image: image)
  end

end
