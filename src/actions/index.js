export function selectBook(book) {
  //  return an option with type property
  return {
    type: 'BOOK_SELECTED',
    data: book,
  };
}
