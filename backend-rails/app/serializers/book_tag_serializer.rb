class BookTagSerializer < ActiveModel::Serializer
  attributes :id
  has_one :book
  has_one :tag
end
