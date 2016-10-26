class Project < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged
	has_and_belongs_to_many :artists
	
	has_many :gallery_images
  accepts_nested_attributes_for :gallery_images, :allow_destroy => true

	belongs_to :category

	has_attached_file :hero, styles: { large: "1280x1024>", medium: "650x650>", thumb: "200x200>" }
  validates_attachment_content_type :hero, content_type: /\Aimage\/.*\Z/

end
