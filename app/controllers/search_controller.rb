class SearchController < ApplicationController
    def search
    end

    def result
        if !params[:search].nil? && params[:search] != ""
            @search = params[:search]
            @result = Tea.where("name LIKE ?", "%#{@search}%")
            if !@result.empty?
                @tea = @result.first
                render :result
            else
                redirect_to search_path, notice: "No matching results containing the name #{@search}."
            end
        else
            redirect_to search_path, error: "Please provide a valid search term."
        end
    end

end
