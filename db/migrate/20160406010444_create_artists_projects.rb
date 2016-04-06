class CreateArtistsProjects < ActiveRecord::Migration
  def change
    create_table :artists_projects, :id => false do |t|
      t.integer :artist_id
      t.integer :project_id
    end
  end
end
