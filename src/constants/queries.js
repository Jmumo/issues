const body = 
  `query { 
 user(login:"Jmumo"){
  repositories(last:10,orderBy: {field:CREATED_AT,direction:DESC}){
    nodes{
      createdAt
      pushedAt
      name
    }
  }
}
}`

module.exports = body


// {
//    repository (owner: "Jmumo", name: "JAYMVC") {
//      name
//      issues (last: 5, ) {
//        totalCount
//        edges {cursor}
//        nodes {
//          number
//          title
//         closedAt
//         createdAt
//         id
//         state
        
//        }
//      }
//    }
//  }