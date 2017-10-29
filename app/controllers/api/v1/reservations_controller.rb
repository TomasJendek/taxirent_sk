class Api::V1::ReservationsController < Api::V1::BaseController
  skip_before_action :verify_authenticity_token

  def index
    respond_with Reservation.all
  end

  def create
    respond_with :api, :v1, Reservation.create(reservation_params)
  end

  def destroy
    respond_with Reservation.destroy(params[:id])
  end

  def update
    item = Reservation.find(params["id"])
    item.update_attributes(item_params)
    respond_with item, json: item
  end

  private

  def reservation_params
    params.require(:reservation).permit(:interval, :from, :to)
  end
end