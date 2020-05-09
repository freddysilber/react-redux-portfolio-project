class Api::V1::JoblistingsController < ApplicationController
	def index
		joblistings = Joblisting.all
		render json: JoblistingSerializer.new(joblistings)
	end

	def create
		joblisting = Joblisting.new(job_listing_params)
		if joblisting.save
			render json: JoblistingSerializer.new(joblisting)
		else
			raise 'ERROR'
		end
	end

	def show
		joblisting = Joblisting.find(params[:id])
		render json: JoblistingSerializer.new(joblisting)
	end

	def update
		joblisting = Joblisting.find(params[:id])
		if joblisting.update(job_listing_params)
			render json: JoblistingSerializer.new(joblisting)
		else
			raise 'there was an error'
		end
	end

	def destroy
		joblisting = Joblisting.find(params[:id])
		unless joblisting.nil?
			joblisting.destroy
			render json: JoblistingSerializer.new(joblisting)
		else
			render json: {error: 'There was an error deleting this joblisting!'}
		end
	end

	private
	
	def job_listing_params
		params.require(:joblisting).permit(
			:name,
			:description,
			:start_date,
			:end_date
		)
	end
end