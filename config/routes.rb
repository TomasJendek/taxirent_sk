Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  Rails.application.routes.draw do
    root to: 'site#index'

    namespace :api do
      namespace :v1 do
        resources :reservations, only: [:index, :create, :destroy, :update]

        get 'check_availability', to: 'reservations#check_availability'
      end
    end
  end

end
