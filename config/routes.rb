Rails.application.routes.draw do
  get 'cart/index'
  root to: 'products#index'
  get 'products/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
