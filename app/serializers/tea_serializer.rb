class TeaSerializer < ActiveModel::Serializer
  attributes :id, :name, :origin, :profile, :instruction
  belongs_to :type
  has_many :reviews
end
