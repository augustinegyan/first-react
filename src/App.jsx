// import Card from './Card'
// import Button from './Button/Button'
// import Student from './Student.jsx'
// function App(){
//   return(
//     <>
//       <Student name='Spongebob' age={30} isStudent={true}/>
//       <Student name='Finch' age={37} isStudent={false}/>
//       <Student name='Squidward' age={20} isStudent={true}/>
//       <Student name='Ama' age={10} isStudent={true}/>
//     </>
//   )

// }
// export default App

import UserGreeting from "./UserGreeting"

function App(){
  return(
    <>
      <UserGreeting isLoggedIn={true} username='BroCode'/>

    </>
  )
}
export default App