import React, { useState ,useEffect } from "react";
import github_data from '../constants/const.js';

import { useSelector, useDispatch } from "react-redux";

import { fetchrepos } from '../actions/fetchRepos'





const headers = {
  "Content-Type":"application/json",
   "Authorization": "bearer"+github_data.key,
}


export default function Home() {

    const [nodes, setNodes] = useState({});    

    const  repositories  = useSelector((state) => state.repoList);
  

    const dispatch = useDispatch()

    const getRepoAction = ()=>dispatch(fetchrepos()); 


    useEffect(()=>{

      const data = getRepoAction()

      console.log((data))

      // const Map =  <div>{data.map((d)=><li key ={d.createdAt}> {d.name}</li>)}</div>
      
     
    },[])

const getRepo = (e) =>{
  e.preventDefault();
  console.log(e.target.value);
}
    return (
      <div className="">
        <div className=" card col-md-8 mx-auto mt-3 ">
          <select
            onChange={ e =>getRepo(e)}
            className="custom-select mt-3"
          >
           
          </select>
         
          {console.log(repositories.repolist.data.data)}
        
         
        </div>
      </div>
    );
}

// useEffect(() => {
//     async function fetchdata (){

//     await axios.post(
//       github_data.baseurl,{
//         query:body
//       },{
//             headers
//       }
     
//     ).then(res=>{
//        setData(res.data.data.user.repositories.nodes)
//       //  console.log(res)
//     })
//     .catch(error => console.log(error))
//    };
//    fetchdata()
// },[])
