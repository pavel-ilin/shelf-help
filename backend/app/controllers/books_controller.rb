class BooksController < ApplicationController

  def index
    books = Book.all
    render json: books
  end

  def create
    tags = params[:book][:tags]
    book = Book.create(submit_params)

    tags.each { |tag|
      selected_tag = Tag.find_by(title: tag)
      
      BookTag.create(book: book, tag: selected_tag)
    }
    render json: book
  end

  private

  def submit_params
    params.require(:book).permit(:title, :author, :publication_year, :edition, :edited, { tags: [:tags]})
  end

end
