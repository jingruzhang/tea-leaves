class Type < ApplicationRecord
    has_many :teas
    has_many :reviews, through: :teas
    validates :name, presence: true, allow_blank: false
end
