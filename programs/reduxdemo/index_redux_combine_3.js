const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAAM='BUY_ICECREAAM'

function buyCake(){
    return{
        type:BUY_CAKE,
        info:'buying cake'
    }
}

function buyIceCream(){
    return{
        type:BUY_ICECREAAM,
        info:'buying icecream'
    }
}


const InitialCakeState={
    numOfCakes:10
}

const InitialIceCreamState={
    numOfIcecream:15
}

const reducerCake=(state=InitialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,numOfCakes:state.numOfCakes-1
        }
        default: return state
    }
}

const reducerIcecream=(state=InitialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAAM: return{
            ...state,numOfIcecream:state.numOfIcecream-1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake:reducerCake,
    iceCream:reducerIcecream
})

const store = createStore(rootReducer,applyMiddleware(logger))
console.log('Initial State ',store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()


