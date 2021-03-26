
import axios from 'axios';
import github_data from '../constants/const.js';
import body from '../constants/queries'

const headers = {
  "Content-Type":"application/json",
 "Authorization":"bearer"+github_data.key,
}

export function fetchrepos(){
    return function (dispatch){
      axios.post(
      github_data.baseurl,{
        query:body
      }
      ,{
             headers:headers
      }
       
    
    ).then(res =>{

        dispatch({type:"FETCH_REPOS", payload:res})

    }).catch( err =>{
        console.log(err)
    })

    }
}