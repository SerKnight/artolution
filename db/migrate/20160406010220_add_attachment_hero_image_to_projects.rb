class AddAttachmentHeroImageToProjects < ActiveRecord::Migration
  def self.up
    change_table :projects do |t|
      t.attachment :hero
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :projects, :hero
    remove_attachment :projects, :image
  end
end
