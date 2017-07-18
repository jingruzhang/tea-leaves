class Review < ApplicationRecord
    belongs_to :tea
    belongs_to :user
    validates :content, presence: true, allow_blank: false
end
