class Artist < ActiveRecord::Base
	has_and_belongs_to_many :projects

	has_attached_file :avatar, styles: { large: "650x650>", medium: "300x300>", thumb: "100x100>" }, default_url: "/images/codez.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  #attr_accessor :delete_asset
end
