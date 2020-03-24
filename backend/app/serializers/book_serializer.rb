class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :publication_year, :edition, :edited, :all_tags
end
