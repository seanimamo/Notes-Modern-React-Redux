import React, { Component } from 'react';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';



export default class App extends Component {
  render() {
    return (
      <div>React-redux simple book application
        <BookList />
        <BookDetail/>
      </div>
    );
  }
}
