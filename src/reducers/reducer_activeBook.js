// reducers are only ever called when an action occurs
// note that the state arguement of this function is not application state, only the state this reducer is responsible for.
// note there is some es6 syntax for state that says, if an undefined state object is passed in, it is automatically set to null
// it is important to set an undefined object to null because react does not handle undefined well
// the setting of state to default to null will handle the behavior when the app is first booted up
export default function(state = null, action){
    console.log("reducer_activeBook.js: The reducer 'reducer_activeBook.js' has been called");
    switch(action.type){
        case 'BOOK_SELECTED':
            console.log("reducer_activeBook.js: recieved action with type BOOK_SELECTED, running respective logic.. ")
            return action.payload;
    }

    return state;
}