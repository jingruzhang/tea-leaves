class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :tea, :user
  belongs_to :tea
end
