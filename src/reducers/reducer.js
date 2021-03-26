import { combineReducers } from 'redux'
import  repoList  from './reporeducer'

//  export const issuereducer = (state,action)=>{
//   return state
// }

const reducers = combineReducers({
    repoList:repoList
})

export default reducers;