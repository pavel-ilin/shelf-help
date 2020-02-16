class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :publication_year, :edition, :edited

  has_many :tags
end
