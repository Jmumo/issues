const repoList = (state = {
    repolist:{}}, action )=>{

      
        if(action.type === "FETCH_REPOS"){
            state = {...state,repolist:action.payload }
            return state;   
        }
        return state; 
    }

export default repoList;