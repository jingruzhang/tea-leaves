class ReviewsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_review, only: [:show, :edit, :update, :delete]
    before_action :set_tea, only: [:edit, :update, :delete]

    def new
        @review = current_user.reviews.build
        set_tea
        @review.tea = @tea
    end

    def create
        @review = current_user.reviews.build(review_params)
        if @review.save
            respond_to do |format|
                format.html { redirect_to tea_path(@review.tea)}
                format.json { render :json => @review }
            end
        else
            set_tea
            render :new
        end
    end

    def show
    end

    def edit
    end

    def update
        if @review.update(review_params)
            redirect_to tea_path(@tea)
        else
            render :edit
        end
    end

    def delete
        @review.destroy
        redirect_to tea_path(@tea, notice: 'successfully deleted')
    end

    def index
        @reviews = current_user.reviews
    end

    private

    def set_tea
        @tea = Tea.find_by(id: params[:tea_id])
    end

    def set_review
        @review = Review.find_by(id: params[:id])
    end

    def review_params
        params.require(:review).permit(:user_id, :tea_id, :content)
    end
end
