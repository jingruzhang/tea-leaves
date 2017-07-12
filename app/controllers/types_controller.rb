class TypesController < ApplicationController

    def new
        @type = Type.new
    end

    def create
        @type = Type.new(type_params)
        if @type.save
            redirect_to @type
        else
            render :new
        end
    end

    def show
        return redirect_to types_path if params[:id].nil?
        @type = Type.find_by(id: params[:id])
    end

    def index
        @types = Type.all
    end

    private

    def type_params
        params.require(:type).permit(:name, :about, :instruction)
    end

end
