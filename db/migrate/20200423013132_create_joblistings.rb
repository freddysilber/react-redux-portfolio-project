class CreateJoblistings < ActiveRecord::Migration[6.0]
  def change
    create_table :joblistings do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.text :description

      t.timestamps
    end
  end
end
