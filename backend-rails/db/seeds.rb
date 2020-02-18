

BookTag.destroy_all
Book.destroy_all
Tag.destroy_all

book1 = Book.create(title: 'Book title', author: "Author", publication_year: 1987, edition: 'Ultimate', edited: true)
book2 = Book.create(title: 'Second book', author: "New Author", publication_year: 1986, edition: 'Ultimate', edited: false)

tag1 = Tag.create(title: 'Feminism')
tag2 = Tag.create(title: 'Science Fiction')

book_tag1 = BookTag.create(book: book1, tag: tag1)
book_tag2 = BookTag.create(book: book1, tag: tag2)

book_tag3 = BookTag.create(book: book2, tag: tag2)