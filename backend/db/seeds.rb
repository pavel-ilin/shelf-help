

BookTag.destroy_all
Book.destroy_all
Tag.destroy_all

book = Book.create(title: 'Book title', author: "Author", publication_year: 1987, edition: 'Ultimate', edited: true)

tag1 = Tag.create(title: 'Feminism')
tag2 = Tag.create(title: 'Science Fiction')

book_tag1 = BookTag.create(book: book, tag: tag1)
book_tag2 = BookTag.create(book: book, tag: tag2)