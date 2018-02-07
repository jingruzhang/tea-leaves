class TeaSerializer < ActiveModel::Serializer
	attributes :id, :name, :origin, :profile, :instruction, :type_id
	belongs_to :type
	has_many :reviews

end
