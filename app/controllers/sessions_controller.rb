class SessionsController < ApplicationController

	def new
		raise 'New session'
	end
  
	def create
	  user = User.find(params[:id])
	  if user && user.authenticate(params[:password_digest])
		session[:user_id] = user.id
		raise session
		# redirect_to root_url, notice: "Logged in!"
	  else
		raise 'Email or password is invalid'
		# flash.now[:alert] = "Email or password is invalid"
		# render "new"
	  end
	end
	
	def destroy
	  session[:user_id] = nil
	  raise 'Session was destroyed'
	#   redirect_to root_url, notice: "Logged out!"
	end

  end
  