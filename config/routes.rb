Rails.application.routes.draw do
    devise_for :users, :controllers => { registrations: 'users/registrations', omniauth_callbacks: "users/omniauth_callbacks" }
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root 'welcome#index'
    match '/users/:id' => 'users#destroy', :via => :delete, :as => :destroy_user
    resources :types, only: [:index, :show, :update, :edit] do
        resources :teas, only: [:show, :edit, :new, :create, :update]
    end

    resources :users do
        resources :reviews
    end
end
