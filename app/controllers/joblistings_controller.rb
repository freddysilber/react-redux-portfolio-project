class JoblistingsController < ApplicationController
	def index
		joblistings = Joblisting.all
		render json: JoblistingSerializer.new(joblistings)
	end

	def create
		joblisting = Joblisting.create(
			name: params[:name],
			description: params[:description],
			start_date: params[:start_date],
			end_date: params[:end_date]
		)
		render json: JoblistingSerializer.new(joblisting)
	end

	def show
		joblisting = Joblisting.find(
			params[:id]
		)
		render json: JoblistingSerializer.new(joblisting)
	end

	def destroy
		joblisting = Joblisting.find(
			params[:id]
		)
		unless joblisting.nil?
			joblisting.destroy
			render json: JoblistingSerializer.new(joblisting)
		else
			render json: {error: 'There was an error deleting this joblisting!'}
		end
	end
end