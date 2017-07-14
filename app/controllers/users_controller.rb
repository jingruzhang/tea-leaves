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

end
