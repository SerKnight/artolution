class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


   include MailForm::Delivery

   append :remote_ip, :user_agent, :session
   attributes :name, :email, :created_at

   def headers
     {
       :to => "your.email@your.domain.com",
       :subject => "User created an account"
     }
   end
end
