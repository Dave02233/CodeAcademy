select * from book;
select * from chapter;

select book.title as book, chapter.title as chapters
from book, chapter
where book.isbn = chapter.book_isbn;