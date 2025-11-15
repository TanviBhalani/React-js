import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Counter from './component/Counter'
import Curd from './component/Curd'
import AddData from './component/AddData'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <Curd/> */}
        {/* <Counter/> */}
        <AddData/>
      </Provider>
    </div>
  )
}

//Redux:
//Redux is a JavaScript library for predictable state management, commonly used with React to manage application-wide state. 
// It provides a centralized store for your application's state, enabling a consistent and debuggable way to manage data flow.


//Key Concepts of Redux in React:
//1.Store: The central place where the entire application state resides.

//2.Actions: Plain JavaScript objects that describe what happened. 

//3.Reducers: Pure functions that take the current state and an action, then return a new state. 

//4.Dispatch: The method used to send actions to the store, triggering state updates through reducers.

//5.Selectors: Functions used to extract specific pieces of state from the Redux store, abstracting the state retrieval process.



//Slice in Redux:
// A "slice" refers to a self-contained piece of Redux logic that manages a specific part of your application's state.







//UseReducer: 
//useReducer is a hook used to handle complex state logic alternative to useState it follows a similar pattern to redux



// - ExtraReducers:
// => ExtraReducer is an additional reducer that change the current slice state on another slice action.



//Hooks:
//1. useState
//2. useEffect
//3. useRef
//4. useNavigate
//5. useLocation
//6. useParamas
//7. useSelector
//8. useDispatch
//9. useContext
//10. useMemo
//11. useReducer
//12. useCallBack:
// => The useCallback hook in React is used to memoize (save) a function, so it doesn’t get recreated on every render — useful for 






//1.useState:
//Used to add and manage state (data that changes) in a functional component.

//2.useEffect:
//Runs code after rendering — used for things like fetching data or updating the DOM.

//3.useRef:
//Used to access DOM elements or store values without causing re-renders.

//4.useNavigate:
//Used to move between pages or routes in React Router.

//5.useLocation:
//Gives details about the current page URL (like path and query).

//6.useParams:
//Used to get dynamic values from the URL (like IDs in /user/:id).

//7.useSelector:
//Used to get data from the Redux store.

//8.useDispatch:
//Used to send actions to the Redux store to update data.

//9.useContext:
//Used to use data from Context API without passing props manually.

//10.useMemo:
//Used to remember a calculated value to avoid redoing it every render.

//11.useReducer:
//Used to manage complex state logic using a reducer function and actions.

//12.useCallback:
//Used to remember a function, so it doesn’t recreate on every render.






//🧩 React Hooks 
//1. useState

//👉 Adds and manages state in a functional component.
//🗣 Example: “I use useState when data changes, like a counter or form input.”

//2. useEffect

//👉 Runs code after render — used for side effects like fetching data or timers.
//🗣 Example: “I use useEffect to call an API when the component loads.”

//3. useRef

//👉 Used to access DOM elements or store values without re-rendering.
//🗣 Example: “I use useRef to focus an input box or store previous values.”

//4. useNavigate (React Router)

//👉 Helps to move to another page programmatically.
//🗣 Example: “I use useNavigate to go to a dashboard after login.”

//5. useLocation (React Router)

//👉 Gives details about the current page URL (path, query, etc.).
//🗣 Example: “I use useLocation to check the current route.”

//6. useParams (React Router)

//👉 Gets dynamic values from the URL.
//🗣 Example: “I use useParams to get the user ID from /user/:id.”

//7. useSelector (Redux)

//👉 Used to read data from the Redux store.
//🗣 Example: “I use useSelector to get the current count or user data.”

//8. useDispatch (Redux)

//👉 Used to send actions to update the Redux store.
//🗣 Example: “I use useDispatch to increase or decrease the counter.”

//9. useContext

//👉 Lets you use values from Context without passing props.
//🗣 Example: “I use useContext to access theme or user info globally.”

//10. useMemo

//👉 Caches a calculated value to avoid recalculating every render.
//🗣 Example: “I use useMemo for performance when calculations are heavy.”

//11. useReducer

//👉 Manages complex state logic using actions and a reducer function.
//🗣 Example: “I use useReducer instead of useState when logic is complicated.”

//12. useCallback

//👉 Saves a function so it doesn’t recreate on every render.
//🗣 Example: “I use useCallback to stop child components from re-rendering.”