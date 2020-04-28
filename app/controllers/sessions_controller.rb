class SessionsController < ApplicationController
	def new
		raise 'new session'
	end
  
	def create
	  user = User.find(params[:id])
	  if user && user.authenticate(params[:password_digest])
		session[:user_id] = user.id
		redirect_to root_url, notice: "Logged in!"
	  else
		flash.now[:alert] = "Email or password is invalid"
		render "new"
	  end
	end
	
	def destroy
	  session[:user_id] = nil
	  redirect_to root_url, notice: "Logged out!"
	end
  end
  