class CreateBookshelves < ActiveRecord::Migration[6.0]
  def change
    create_table :bookshelves do |t|
      t.string :name

      t.timestamps
    end
  end
end
