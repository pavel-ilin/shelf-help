

BookTag.destroy_all
Book.destroy_all
Tag.destroy_all

book1 = Book.create(title: 'Living History', author: "Hillary Rodham Clinton", publication_year: 2003, edition: '1', edited: false)
book2 = Book.create(title: 'Unbowed: A Memoir', author: "Wangari Maathai", publication_year: 2006, edition: '1', edited: false)
book3 = Book.create(title: 'Yes Means Yes: Visions of Female Sexual Power & a World Without Rape', author: "Jaclyn Friedman and Jessica Valenti", publication_year: 2008, edition: '', edited: true)
book4 = Book.create(title: "Women's Liberation and the Dialectics of Revolution: Reaching for the Future", author: "Raya Dunayevskaya", publication_year: 1985, edition: '', edited: false)
book5 = Book.create(title: 'African Feminism: the Politics of Surival in Sub-Saharan Africa', author: "Gwendolyn Mikell", publication_year: 1997, edition: '', edited: true)
book6 = Book.create(title: 'Politics of the Womb: Women, Reproduction, and the State in Kenya', author: "Lynn M. Thomas", publication_year: 2003, edition: '1', edited: false)

tag1 = Tag.create(title: 'Feminism')
tag2 = Tag.create(title: 'Reproductive Health Freedom Rights')
tag3 = Tag.create(title: 'Kenya')
tag4 = Tag.create(title: 'Academic')
tag5 = Tag.create(title: 'Africa')
tag6 = Tag.create(title: 'Women')
tag7 = Tag.create(title: 'Anthropology')
tag8 = Tag.create(title: 'National')
tag9 = Tag.create(title: 'Non-Fiction')
tag10 = Tag.create(title: 'Philosophy')
tag11 = Tag.create(title: 'Radical')
tag12 = Tag.create(title: 'Revolution')
tag13 = Tag.create(title: 'Futurism')
tag14 = Tag.create(title: 'Western')
tag15 = Tag.create(title: 'United States')
tag16 = Tag.create(title: 'Sex')
tag17 = Tag.create(title: 'Rape')
tag18 = Tag.create(title: 'Autobiography')
tag19 = Tag.create(title: 'Biography')
tag20 = Tag.create(title: 'Movement-building')
tag21 = Tag.create(title: 'Political Figures')
tag22 = Tag.create(title: 'Magical Realism')
tag23 = Tag.create(title: 'Read')

book_tag27 = BookTag.create(book: book6, tag: tag2)
book_tag28 = BookTag.create(book: book6, tag: tag3)
book_tag29 = BookTag.create(book: book6, tag: tag4)
book_tag30 = BookTag.create(book: book6, tag: tag5)
book_tag31 = BookTag.create(book: book6, tag: tag6)
book_tag31 = BookTag.create(book: book6, tag: tag7)
book_tag31 = BookTag.create(book: book6, tag: tag8)
book_tag31 = BookTag.create(book: book6, tag: tag23)


book_tag1 = BookTag.create(book: book1, tag: tag1)
book_tag2 = BookTag.create(book: book1, tag: tag6)
book_tag3 = BookTag.create(book: book1, tag: tag15)
book_tag4 = BookTag.create(book: book1, tag: tag18)
book_tag5 = BookTag.create(book: book1, tag: tag21)
book_tag5 = BookTag.create(book: book1, tag: tag23)


book_tag6 = BookTag.create(book: book2, tag: tag1)
book_tag7 = BookTag.create(book: book2, tag: tag3)
book_tag8 = BookTag.create(book: book2, tag: tag5)
book_tag9 = BookTag.create(book: book2, tag: tag18)
book_tag10 = BookTag.create(book: book2, tag: tag21)
book_tag10 = BookTag.create(book: book2, tag: tag23)

book_tag11 = BookTag.create(book: book3, tag: tag1)
book_tag12 = BookTag.create(book: book3, tag: tag2)
book_tag13 = BookTag.create(book: book3, tag: tag9)
book_tag14 = BookTag.create(book: book3, tag: tag16)
book_tag15 = BookTag.create(book: book3, tag: tag17)
book_tag16 = BookTag.create(book: book3, tag: tag20)

book_tag17 = BookTag.create(book: book4, tag: tag1)
book_tag18 = BookTag.create(book: book4, tag: tag10)
book_tag19 = BookTag.create(book: book4, tag: tag12)
book_tag20 = BookTag.create(book: book4, tag: tag13)
book_tag21 = BookTag.create(book: book4, tag: tag14)
book_tag22 = BookTag.create(book: book4, tag: tag15)

book_tag23 = BookTag.create(book: book5, tag: tag1)
book_tag24 = BookTag.create(book: book5, tag: tag5)
book_tag25 = BookTag.create(book: book5, tag: tag7)
book_tag26 = BookTag.create(book: book5, tag: tag4)

puts 'All done!!!!!'