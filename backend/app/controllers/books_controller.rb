class BooksController < ApplicationController

  def index
    books = Book.all
    render json: books
  end

  def create
    # byebug
    book = Book.create(submit_params)
    tags = params[:tags]


    render json: book
  end

  private

  def submit_params
    params.require(:book).permit(:title, :author, :publication_year, :edition, :edited)
  end


end
