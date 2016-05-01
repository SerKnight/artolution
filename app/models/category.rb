class Category < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged
	has_many :projects

	has_attached_file :image, styles: { large: "1280x1024>", medium: "650x650" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


end
