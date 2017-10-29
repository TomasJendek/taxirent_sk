class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.date :from
      t.date :to
      t.string :interval

      t.timestamps
    end
  end
end
