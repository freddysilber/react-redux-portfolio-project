class UsersController < ApplicationController
	# GET /users
	def index
		users = User.all
		render json: UserSerializer.new(users)
	end

	# POST /users
	def create
		user = User.new(user_params)
		if user.save
			render json: UserSerializer.new(user)
		else
			raise user.errors
			render json: UserSerializer.new(user.errors)
		end
	end

	# GET /users/1
	def show
		user = User.find(params[:id])
		render json: UserSerializer.new(user)
	end

	# DELETE /users/1
	def destroy
		user = User.find(params[:id])
		unless user.nil?
			user.destroy
			render json: UserSerializer.new(user)
		else 
			render json: {error: 'There was an error deleting this user!'}
		end
	end

	private

	def user_params
		params.require(:user).permit(
		  :username,
		  :email, 
		  :password_digest
		)
	  end
end