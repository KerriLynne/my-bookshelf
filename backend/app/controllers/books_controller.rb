class BooksController < ApplicationController

    def index
        books = Book.all
        render json: books
    end

    def show
        book = Book.find(params[:id])
        render json: book
    end

    def create
        book = Book.create!(book_params)

        # if book.save
            render json: book
        # end
    end

    def update
        book = Book.find(params[:id])
        book.update(book_params)
        render json: book
    end

    def destroy
        book = Book.find(params[:id])
        if book.destroy
            render json: {id: book.id}
        end
    end

    private

    def book_params
        params.require(:book).permit(:title, :author, :genre, :bookshelf_id)
    end


end
