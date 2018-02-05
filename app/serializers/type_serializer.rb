class TypeSerializer < ActiveModel::Serializer
  attributes :id, :name, :about, :instruction
  has_many :teas
end
