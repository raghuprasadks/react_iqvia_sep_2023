const redux = require('redux')
const createStore  =redux.createStore

const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'


function buyCake(){
    return{
        type:BUY_CAKE,
        info:'buy cake action'
    }
}

function buyIcecream(){
    return{
        type:BUY_ICECREAM,
        info:'buy icecream action'
    }
}

const InitialState={
    numOfCakes:10,
    numOfIcecreams:15
}

const reducer=(state=InitialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams:state.numOfIcecreams-1
        }
        default:return state
    }
}

const store = createStore(reducer)
console.log('store initial state ',store.getState())
const unsubscribe = store.subscribe(()=>console.log(store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
unsubscribe()




