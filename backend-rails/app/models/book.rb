class Book < ApplicationRecord

  has_many :book_tags
  has_many :tags, through: :book_tags

  def all_tags
    tags = self.tags.all.map{ |tag| tag['title'] }
  end

end
