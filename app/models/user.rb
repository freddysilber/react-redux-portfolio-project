class User < ApplicationRecord
	has_secure_password
	# validate that users dont have the same email
	validates :email, presence: true, uniqueness: true
	# validate that user's email is in the correct format
	# validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
	# validate that users dont have the same username
	validates :username, presence: true, uniqueness: true
	# validate that a user's password is at least 6 characters 
	# validates :password, length: { minimum: 6 }, if: -> { new_record? || !password.nil? }
  end
  