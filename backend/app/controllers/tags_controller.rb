class TagsController < ApplicationController


    def create
        tag = Tag.find_by(title: params[:tag][:title])
        puts(tag)
        if tag
            render json: {
                errors: 'This tag is already exists!'
              }
        else
            tag = Tag.create(submit_params)
            render json: tag
        end
    end

    private

    def submit_params
        params.require(:tag).permit(:title)
    end

end
