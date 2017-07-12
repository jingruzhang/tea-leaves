class CreateTeas < ActiveRecord::Migration[5.1]
  def change
    create_table :teas do |t|
      t.string :name
      t.string :origin
      t.text :profile
      t.text :instruction
      t.integer :type_id

      t.timestamps
    end
  end
end
