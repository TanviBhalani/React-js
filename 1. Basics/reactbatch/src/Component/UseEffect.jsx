import React, { useEffect , useState , } from 'react'

export default function UseEffect() {
    //Mounting
    // useEffect(()=>{
    //     console.log("Tanvi");
    // },[])



    //Updating
    // const [count,setCount] = useState(0)

    // useEffect(()=> {
    //     console.log("Tanvi");
        
    // },[count]);


    //Unmounting
    useEffect(()=> {
        return //statement get execute on unmounting
    },[])

  return (
    <div>
      <h1>UseEffect</h1>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>Click</button>
    </div>
  )
}
