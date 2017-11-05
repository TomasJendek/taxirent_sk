class Reservation < ApplicationRecord

  def self.available?(date)
    number_of_reservations = Reservation.where(from: date).count
    return number_of_reservations <= 2
  end
end
