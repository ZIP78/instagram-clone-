class User < ApplicationRecord
    attr_reader :password
    validates :username, :password_digest, :email, :first_name, :last_name, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true 


end
