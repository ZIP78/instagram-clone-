class Post < ApplicationRecord

    validates :body, presence: true
    belongs_to :user
    
    has_many :likes,
     primary_key: :id,
    foreign_key: :post_id,
    class_name: :Like

    has_many :comments
    has_one_attached :photo
end
