// async function fetchUsers(){
//     // Make an Api Call
//     try{
//       const res = await fetch('https://jsonplaceholder.typicode.com/users')
//       return res.json()
//     }
//     catch(e){
//       console.log(e)
//     }
// }


// export default async function Home() {
//   const users =    await  fetchUsers()

//   return (
//     <div>
//       <h1> List Of Users</h1>
//       <ul>
//           {
//              users.map((u)=>(
//                  <li key={u.id}>{u.name}</li>
//              ))
//           }
//       </ul>
//     </div>
//   )
// }

"use client"
import CartButton from "./CartButton";
import useCart from "./store/useCart";

export default function Home() {
  const {count} =  useCart()
  const addToCart = useCart((state)=>state.addToCart)
 
  return (
    <div>
           Cart : {count}
           <button onClick={()=>addToCart()}>Add TO Cart</button>
    </div>
  )
}
