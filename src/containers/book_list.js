//in react-redux we use containers instead of components. A container is a react component that has a direct connection to the state used by redux
//a "smart component" is one that is a container, a dumb component is one that is not a container. We only want components that need access to the state to be a container.
//Additionally, it is best practice to have only parent components be a container
import React, {Component} from 'react';

//this imports the function from reacr-redux we need to turn our component into a container that has access to our redux state variable.
import { connect } from 'react-redux';

//this imports the action we created which will return a custom object that we will use to manipulate our redux state in different ways based on the object returned
import { selectBook } from '../actions/index.js';

//this imports the function from redux that will actually manipulate the redux state object
import { bindActionCreators } from 'redux';


export class BookList extends Component{

    constructor(props){
        super(props);
        
        console.log("book_list.js component has just been rendered.");
    }


    // handleClick = (bookTitle) =>{
    //     console.log("clicked an li");
    //     console.log(bookTitle);  
    // }

    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li key={book.title} className="list-group-item"  onClick={() => this.props.selectBook(book)} >
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return(
            <ul className="list-group col-sm-4 container-BookList">
                {this.renderList()}
            </ul>
        );
    }

}

//this function is from the 'react-redux' imported library
//whatever this function returns is what gets set as this.props for this component
//ie if you returned{asdf: "123"} then it would set this.props.adsf = "123"
function mapStateToProps(state){
    // whatever gets returned form here will show up as props
    // inside of BookList
    return{
        books: state.books
    };
}

//anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// this is how we return a component as a container rather than a normal react component.
// it makes our component into a component that is aware when our redux state object is changed.
// we add our mapStateToProps so that we can have access to the book list within our redux state object (the book list is within state.books)
// we add our dispatch method so that we can make it access the redux state when it is called  
export default connect(mapStateToProps, mapDispatchToProps)(BookList);