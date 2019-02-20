Rails.application.routes.draw do
  resources :days
  get 'tracker', to: 'tracker#home'
  get 'timer', to: 'timer#new'
  devise_for :users
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'about', to: 'about#home'
end
