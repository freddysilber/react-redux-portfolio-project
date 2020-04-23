class JoblistingSerializer
	include FastJsonapi::ObjectSerializer
	attributes :name, :start_date, :end_date, :description
end