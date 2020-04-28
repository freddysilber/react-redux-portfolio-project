# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

jobs = Joblisting.create([
	{ name: Faker::Job.title, description: Faker::Job.field, start_date: Faker::Date.in_date_period, end_date: Faker::Date.in_date_period },
	{ name: Faker::Job.title, description: Faker::Job.field, start_date: Faker::Date.in_date_period, end_date: Faker::Date.in_date_period },
	{ name: Faker::Job.title, description: Faker::Job.field, start_date: Faker::Date.in_date_period, end_date: Faker::Date.in_date_period },
	{ name: Faker::Job.title, description: Faker::Job.field, start_date: Faker::Date.in_date_period, end_date: Faker::Date.in_date_period },
	{ name: Faker::Job.title, description: Faker::Job.field, start_date: Faker::Date.in_date_period, end_date: Faker::Date.in_date_period },
	{ name: Faker::Job.title, description: Faker::Job.field, start_date: Faker::Date.in_date_period, end_date: Faker::Date.in_date_period }
])

users = User.create([
	username: Faker::Superhero.name, email: Faker::Internet.email, password: Faker::String.random(length: 4),
	username: Faker::Superhero.name, email: Faker::Internet.email, password: Faker::String.random(length: 4),
	username: Faker::Superhero.name, email: Faker::Internet.email, password: Faker::String.random(length: 4),
	username: Faker::Superhero.name, email: Faker::Internet.email, password: Faker::String.random(length: 4),
	username: Faker::Superhero.name, email: Faker::Internet.email, password: Faker::String.random(length: 4),
	username: Faker::Superhero.name, email: Faker::Internet.email, password: Faker::String.random(length: 4),
	username: Faker::Superhero.name, email: Faker::Internet.email, password: Faker::String.random(length: 4),
])