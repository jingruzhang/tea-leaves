class Type < ApplicationRecord
    has_many :teas
    has_many :reviews, through: :teas
end
