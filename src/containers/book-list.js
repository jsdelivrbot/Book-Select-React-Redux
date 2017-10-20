import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

function mapStatetoProps(state) {
  //  return as props of Booklis
  return {
    // bind props of books in the list
    books: state.books,
  };
}

// the returned object from this function will be props for BookList
function mapDispatchToProps(dispatch) {
  //  if selectBook is called, return the the object to all reducers
  return bindActionCreators({ selectBook }, dispatch);
}


//  Convert BookList form component to container.
export default connect(mapStatetoProps, mapDispatchToProps)(BookList);
