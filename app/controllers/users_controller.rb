class UsersController < ApplicationController
	def index
		render(
			status: 200,
			json: User.all
		)
	end
end
