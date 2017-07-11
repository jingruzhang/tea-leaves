class UsersController < ApplicationController
  def destroy
    @user = User.find(params[:id])

    if @user.destroy
        redirect_to root_url, notice: "User deleted."
    end
  end
end
