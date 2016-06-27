class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      sign_in!(@user)
      render 'api/users/show'
    else
      render json: {base: ['invalid credentails']}, status: 401
    end
  end

  def destroy
    if current_user
      sign_out!
      render 'api/users/show'
    else
      render json: {base: ['no current user to logout']}, status: 404
  end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
