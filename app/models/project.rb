class Project < ActiveRecord::Base
	has_and_belongs_to_many :artists
	has_many :gallery_images

	has_attached_file :hero, styles: { large: "1280x1024>", medium: "650x650" }, :url =>':s3_domain_url', :path => '/:class/:attachment/:id_partition/:style/:filename'
  validates_attachment_content_type :hero, content_type: /\Aimage\/.*\Z/



  #attr_accessor :delete_asset
end
