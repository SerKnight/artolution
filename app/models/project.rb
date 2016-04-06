class Project < ActiveRecord::Base
	has_and_belongs_to_many :artists
	has_many :gallery_images

	# has_attached_file :hero_image, styles: { hero: "1280x1024>", medium: "650x650" }, default_url: "/images/codez.jpg"
 #  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/


  #attr_accessor :delete_asset
end
