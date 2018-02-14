class UsersController < ApplicationController
    def destroy
        @user = User.find(params[:id])

        if @user.destroy
            redirect_to root_url, notice: "User deleted."
        end
    end

    def become_admin
        current_user.update_attribute :admin, true
        redirect_to root_url
    end

    def become_user
        current_user.update_attribute :admin, false
        redirect_to root_url
    end

    #api call functions
    def loggedin_user
        respond_to do |format|
            format.json {render json: current_user}
            format.html {redirect_to root_path}
        end
    end

end
