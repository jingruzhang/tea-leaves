class TeasController < ApplicationController

    def new
        if params[:type_id] && !Type.exists?(params[:type_id])
            redirect_to types_path, alert: "Type not found."
        else
            @type = Type.find_by(id: params[:type_id])
            @tea = Tea.new
        end
    end

    def create
        @type = Type.find_by(id: params[:type_id])
        @tea = Tea.new(tea_params)
        if @tea.save
            redirect_to [@type, @tea]
        else
            render :new
        end
    end

    def show
        @tea = Tea.find_by(id: params[:id])
    end

    def index
        @type = Type.find_by(id: params[:type_id])
        @teas = @type.teas
    end

    private

    def tea_params
        params.require(:tea).permit(:name, :origin, :profile, :instruction, :type_id)
    end
end
