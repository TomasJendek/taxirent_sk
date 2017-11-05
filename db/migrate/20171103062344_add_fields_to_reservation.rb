class AddFieldsToReservation < ActiveRecord::Migration[5.1]
  def change
    add_column :reservations, :firstname, :string
    add_column :reservations, :lastname, :string
    add_column :reservations, :email, :string
    add_column :reservations, :phone, :string
  end
end
