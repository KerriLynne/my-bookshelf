class BookshelvesController < ApplicationController
    def index
        bookshelves = Bookshelf.all
        render json: bookshelves, methods: :books
        # tells rails to call that method on each bookshelf in the array
    end
end
