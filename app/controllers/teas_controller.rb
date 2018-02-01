class TeasController < ApplicationController
    before_action :set_tea, only: [:show, :edit, :update, :delete]
    before_action :set_type, only: [:create, :index, :edit, :update, :delete]
    before_action :authenticate_user!, only: [:new, :create, :edit, :update, :delete]
    def new
        if Type.exists?(params[:type_id])
            set_type
            @tea = Tea.new
        else
            redirect_to types_path, alert: "Type not found."
        end
    end

    def create
        @tea = Tea.new(tea_params)
        if @tea.save
            redirect_to [@type, @tea]
        else
            render :new
        end
    end

    def show
        @reviews = @tea.reviews if @tea.reviews
        render :show, :layout => false
    end

    def index
        @teas = @type.teas
    end

    def edit
    end

    def update
        if @tea.update(tea_params)
            redirect_to [@type, @tea]
        else
            render :edit
        end
    end

    def delete
        @tea.destroy
        redirect_to [@type, @tea], notice: 'successfully deleted'
    end

    private

    def set_type
        @type = Type.find_by(id: params[:type_id])
    end

    def set_tea
        @tea = Tea.find_by(id: params[:id])
    end

    def tea_params
        params.require(:tea).permit(:name, :origin, :profile, :instruction, :type_id, :reviews_attributes => [:id, :content, :user_id])
    end
end
