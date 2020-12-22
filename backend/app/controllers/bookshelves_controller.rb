class BookshelvesController < ApplicationController
    def index
        bookshelves = Bookshelf.all
        ## default options
        options = {json: bookshelves}
        ## if the requet asks for book, then include the list of books for each bookshelf.
        if params[:include_books] 
            # tells rails to call that method on each bookshelf in the array
            options[:methods] = :books
        end
        render options
    end


end
