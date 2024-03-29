class User < ApplicationRecord
    attr_reader :password
    validates :username, :password_digest, :email, :first_name, :last_name, :session_token, presence: true
    validate :bio
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true 

    after_initialize :ensure_session_token
    
    has_many :posts, dependent: :destroy,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Post

    has_many :likes
    has_many :followings
    has_many :comments

    has_one_attached :photo

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
       return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
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
