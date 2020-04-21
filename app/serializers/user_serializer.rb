class UserSerializer 
	include FastJsonapi::ObjectSerializer
	attributes :name, :password
end