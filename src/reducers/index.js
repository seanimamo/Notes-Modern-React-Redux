import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import activeBookReducer from './reducer_activeBook';

// this is where we put together our main redux state object.
// we make the state into an object with two attributes: books and activeBook.
// how the contents of those state attributes are formed is controlled by our reducers that we created and imported in.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: activeBookReducer
});

export default rootReducer;
