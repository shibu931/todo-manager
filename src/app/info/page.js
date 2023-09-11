'use client'
export default function Info() {
    console.log("this is server component")
    function alertFun(){
        alert("gdfgfd")
    }
    return (
    <div >
        <button onClick={alertFun} className='px-2 py-3 m-10 border rounded bg-blue-700'>Click Here</button>
    </div>
  )
}
