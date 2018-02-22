class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :tea, :user, :created_at
  belongs_to :tea
end
