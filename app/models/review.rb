class Review < ApplicationRecord
    belongs_to :tea
    belongs_to :user
    validates :content, presence: true, allow_blank: false

    def self.reviewed_tea
        Review.group(:tea_id).map do |r|
            if !User.find_by(id: r.user_id).nil?
                Tea.find_by(id: r.tea_id)
            end
        end
    end

end
