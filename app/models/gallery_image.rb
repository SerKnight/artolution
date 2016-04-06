class GalleryImage < ActiveRecord::Base
  belongs_to :project

  has_attached_file :image, styles: { large: "650x650>", medium: "640x247>", thumb: "336x280>" }, default_url: "/images/codez.jpg"
  has_attached_file :avatar, styles: { large: "650x650>", medium: "300x300>", thumb: "100x100>" }, default_url: "/images/codez.jpg"

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

end
