class Post < ApplicationRecord
    validates :body, :user_id, presence: true

    has_one_attached :photo
end
