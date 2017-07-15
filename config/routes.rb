Rails.application.routes.draw do
    devise_for :users, :controllers => { registrations: 'users/registrations', omniauth_callbacks: "users/omniauth_callbacks" }
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root 'welcome#index'
    match '/users/:id' => 'users#destroy', :via => :delete, :as => :destroy_user
    resources :types do
        resources :teas
    end

    resources :teas do
        resources :reviews
    end

    # destroy as get request
    get '/types/:type_id/teas/:id/destroy', to: 'teas#delete'
    get '/types/:id/destroy', to: 'types#delete'
    get '/teas/:tea_id/reviews/:id/delete', to: 'reviews#delete'

    get '/become_admin', to: 'users#become_admin'
    get '/become_user', to: 'users#become_user'
end
