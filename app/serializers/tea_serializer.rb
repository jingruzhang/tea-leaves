class TeaSerializer < ActiveModel::Serializer
	attributes :id, :name, :origin, :profile, :instruction, :type_id, :current_user
	belongs_to :type
	has_many :reviews

end
