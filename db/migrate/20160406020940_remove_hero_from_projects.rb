class RemoveHeroFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :hero_file_name, :string
    remove_column :projects, :hero_content_name, :string
    remove_column :projects, :hero_file_size, :integer
    remove_column :projects, :hero_updated_at, :datetime
    
  end
end
