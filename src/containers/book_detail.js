import React, {Component} from 'react';

//this imports the function from react-redux we need to turn our component into a container that has access to our redux state variable.
import { connect } from 'react-redux';

class BookDetail extends Component {

    
    constructor(props){
        super(props);
        
        console.log("book_detail.js component has just been rendered.");
    }


    render(){
        //notice that when the application is first booted, book_detail gets rendered with a null object for props.activeBook (see reducer_activeBook)
        //so here we render a different version for the book detail component in that case.
        if(!this.props.activeBook){
            return(
                <div className="col-sm-8 container-BookDetail">
                    <h1>Book Detail Component</h1>
                    <h2>No Book has been selected. Please select one to learn more.</h2>
                </div>
            );
        }

        return(
        <div className="col-sm-8 container-BookDetail">
            <h1>Book Detail Component</h1>
            <h2>{this.props.activeBook.title}</h2>
            <div>Pages: {this.props.activeBook.pages}</div>
        </div>
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
        activeBook: state.activeBook
    };
}

// this is how we return a component as a container rather than a normal react component.
// it makes our component into a component that is aware when our redux state object is changed.
// we add our dispatch method so that we can make it access the redux state when it is called  
export default connect(mapStateToProps)(BookDetail);