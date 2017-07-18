class Type < ApplicationRecord
    has_many :teas
    has_many :reviews, through: :teas
    validates :type, presence: true, allow_blank: false
end
