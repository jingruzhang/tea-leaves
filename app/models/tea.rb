class Tea < ApplicationRecord
    belongs_to :type
    has_many :reviews
    validates :name, presence: true, allow_blank: false
end
