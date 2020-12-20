# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# # Random Book Title
# Faker::Book.title #=> "The Odd Sister"

# # Random Author
# Faker::Book.author #=> "Alysha Olsen"

# # Random Publisher
# Faker::Book.publisher #=> "Opus Reader"

# # Random Genre
# Faker::Book.genre #=> "Mystery"

30.times do
    Book.create(title: Faker::Book.title, author: Faker::Book.author, genre: Faker::Book.genre, bookshelf_id: rand(3) + 1)
end

Bookshelf.create(name: "In Progress")
Bookshelf.create(name: "For Later")
Bookshelf.create(name: "Completed")