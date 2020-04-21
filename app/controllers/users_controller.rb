class UsersController < ApplicationController
	def index
		users = User.all
		render json: UserSerializer.new(users)
	end

	def create
		user = User.create(
			username: params[:username],
			password: params[:password]
		)
		render json: UserSerializer.new(user)
	end

	def show
		user = User.find(
			params[:id]
		)
		render json: UserSerializer.new(user)
	end

	def destroy
		user = User.find(
			params[:id]
		)
		unless user.nil?
			user.destroy
			render json: UserSerializer.new(user)
		else 
			render json: {error: 'There was an error deleting this user!'}
		end
	end
end
