class TypesController < ApplicationController
    before_action :set_type, only: [:edit, :update, :delete]
    before_action :authenticate_admin!, only: [:new, :create, :edit, :update, :delete]

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
        return redirect_to types_path if !set_type
        @type = Type.find_by(id: params[:id])
        respond_to do |format|
            format.html
            format.json {render json: @type}
        end
    end

    def index
        @types = Type.all
    end

    def edit
    end

    def update
        if @type.update(type_params)
            redirect_to @type
        else
            render :edit
        end
    end

    def delete
        @type.destroy
        redirect_to types_path, notice: 'successfully deleted'
    end

    private

    def set_type
        @type = Type.find_by(id: params[:id])
    end

    def type_params
        params.require(:type).permit(:name, :about, :instruction)
    end

    def authenticate_admin!
        if current_user && !current_user.admin?
            redirect_to root_url, notice: 'Only editors are allowed to do that!'
        end
    end

end
