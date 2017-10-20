import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { selectBook } from '../actions/index';

class BookDetail extends Component {
  render() {
    if (!this.props.selected) {
      return <div>Select a book to get started.</div>;
    }
    return (
      <div>
        <div> Book Detail:{ this.props.selected.title }</div>
      </div>
    );
  }
};

function mapStatetoProps(state) {
  //  return as props of Booklis
  return {
    // bind props of books in the list
    selected: state.activeBook,
  };
}

//  Convert BookList form component to container.
export default connect(mapStatetoProps)(BookDetail);
