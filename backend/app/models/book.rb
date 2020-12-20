class Book < ApplicationRecord
    belongs_to :bookshelf, optional: true
end
