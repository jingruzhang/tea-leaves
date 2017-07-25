class Tea < ApplicationRecord
    belongs_to :type
    has_many :reviews
    accepts_nested_attributes_for :reviews, :allow_destroy => true
    validates :name, presence: true, allow_blank: false

end
