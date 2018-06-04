//actions are what redux uses to manipulate the redux state variable.
//So i.e in a onlick event if you want to change the currently selected book in the redux state variable, you would run a specific action function to do that for you.
//**note  if you write export default function selectBook(){} then it will not work when you try to call it in other files.

export function selectBook(book){
    console.log('selectBook ActionCreator has been called -- A book has been selected: ', book.title);

    // selectBook is an actionCreator, it needs to return an action
    // which is an object with a type property. Most actions return an object with a type and then a payload (whatever data u want to sent ).
    // the type is usually a capitalized string that is kept in a seperate file as consts because it is so important to send the correct type.
    return{
        type:'BOOK_SELECTED',
        payload: book
    };
}