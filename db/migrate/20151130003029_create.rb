class Create < ActiveRecord::Migration
def change
    create_table :visitors do |t|
      t.string :email
      t.string :name

      t.timestamps null: false
    end
  end
end
