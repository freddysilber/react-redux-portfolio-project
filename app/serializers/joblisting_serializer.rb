class JoblistingSerializer
	include FastJsonapi::ObjectSerializer
	attributes :id, :name, :start_date, :end_date, :description
end