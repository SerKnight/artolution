class GalleryImage < ActiveRecord::Base
  belongs_to :project

  has_attached_file :image, styles: { large: "650x650>", medium: "640x247>", thumb: "336x280>" }, default_url: "/images/codez.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
