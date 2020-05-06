class ApplicationController < ActionController::API
	# protect_from_forgery with: :exception
	# helper_method :logged_in?
	# helper_method :current_user

	# def logged_in?
	# 	session[:user_id].present?
	# end

	# def current_user
	# 	User.find_by(id: session[:user_id])
	# 	if session[:user_id]
	# 		@current_user ||= User.find(session[:user_id])
	# 	else
	# 		@current_user = nil
	# 	end
	# end


	

	# def not_found
	# 	render json: { error: 'not_found' }
	# end

	# def authorize_request
	# 	header = request.headers['Authorization']
	# 	header = header.split(' ').last if header
	# 	begin
	# 		@decoded = JsonWebToken.decode(header)
	# 		@current_user = User.find(@decoded[:user_id])
	# 	rescue ActiveRecord::RecordNotFound => exception
	# 		render json: { errors: exception.message }, status :unauthorized
	# 	rescue JWT::DecodeError => exception
	# 		render json: { errors: exception.message }, status :unauthorized
	# 	end
	# end

end
