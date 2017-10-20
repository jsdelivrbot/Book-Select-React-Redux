export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.data;
    default:
      return state;
  }
}
