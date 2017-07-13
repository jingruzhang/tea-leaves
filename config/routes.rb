Rails.application.routes.draw do
    devise_for :users, :controllers => { registrations: 'users/registrations', omniauth_callbacks: "users/omniauth_callbacks" }
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root 'welcome#index'
    match '/users/:id' => 'users#destroy', :via => :delete, :as => :destroy_user
    resources :types do
        resources :teas
    end

    resources :users do
        resources :reviews
    end

    # destroy as get request
    get '/types/:type_id/teas/:id/destroy', to: 'teas#delete'
    get '/types/:id/destroy', to: 'types#delete'
end
