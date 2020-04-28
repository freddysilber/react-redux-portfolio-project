class ApplicationController < ActionController::API
	# protect_from_forgery with: :exception
	# helper_method :logged_in?
	# helper_method :current_user

	# def logged_in?
	# 	session[:user_id].present?
	# end

	# def current_user
	# 	# User.find_by(id: session[:user_id])
	# 	if session[:user_id]
	# 		@current_user ||= User.find(session[:user_id])
	# 	else
	# 		@current_user = nil
	# 	end
	# end

end
