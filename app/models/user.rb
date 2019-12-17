class User < ApplicationRecord
    attr_reader :password
    validates :username, :password_digest, :email, :first_name, :last_name, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true 

    after_initalize :ensure_session_token

    # has_many :photos
    # has_many :likes
    # has_many :comments

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        unless user && user.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||=  SecureRandom.urlsafe_base64
    end


end
