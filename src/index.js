// import React from 'react';
import {createStore} from 'redux'
// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const App = <h1>Hello world</h1>
// root.render(App);
// const initialState=0
// action={
//     type:string
// }
const reducer = (state=0,action)=>{
    switch (action.type){
        case 'inc':
            return state +1
        case 'dec':
            return state -1
        case 'rnd':
            return state + action.payload
        default:
            return state
    }
}

const store = createStore(reducer)
document.getElementById('inc')
.addEventListener('click',()=>{
    store.dispatch({type:'inc'})
})
document.getElementById('dec')
    .addEventListener('click',()=>{
        store.dispatch({type:'dec'})
    })
document.getElementById('rnd')
    .addEventListener('click',()=>{
        const payload=Math.floor(Math.random()*11)
        store.dispatch({type:'rnd',payload})
    })
const update = ()=>{
    document.getElementById('counter')
        .innerText=store.getState()
}

store.subscribe(update)