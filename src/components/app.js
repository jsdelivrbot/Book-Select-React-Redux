import React from 'react';
import BookList from '../containers/book-list';
import BookDetails from '../containers/book-detail';

const App = () => {
  return (
    <div>
      <BookList />
      <BookDetails />
    </div>
  );
};

export default App;
