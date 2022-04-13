class WelcomeController < ApplicationController
  def index
  end

  def create
    p params
    @data={name:"fabien"}
    # respond_to do |format|
    #   # format.html {redirect_to params,notice: "Les informations sont creer"}
    #   format.json { render json: params}
    # end
    render json: @data,status: :im_used
  end
end
