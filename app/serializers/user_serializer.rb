class UserSerializer 
	include FastJsonapi::ObjectSerializer
	attributes :username, :password
end