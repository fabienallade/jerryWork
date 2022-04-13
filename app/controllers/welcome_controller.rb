class WelcomeController < ApplicationController
  def index
  end

  def create
    p params
    @data={name:params[:name],surname: params[:surname],birthday:params[:birthday],
           checkValue:params[:checkbox_name],courseOfSole:params[:courseOfSole]}
    # respond_to do |format|
    #   # format.html {redirect_to params,notice: "Les informations sont creer"}
    #   format.json { render json: params}
    # end
    render json: @data,status: :ok
  end
end
