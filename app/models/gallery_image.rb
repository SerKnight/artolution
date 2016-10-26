class GalleryImage < ActiveRecord::Base
  belongs_to :project

  before_create :checkit
  def checkit
		system('qwer')
  end

  has_attached_file :image, styles: { large: "650x650>", medium: "640x247>", thumb: "336x280>" }

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
