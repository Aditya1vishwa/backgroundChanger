import { useState } from 'react'



function App() {
  const [color, setColor] = useState('#fdba74')

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap- shadow-lg bg-white px-3 py-2 rounded-lg">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-4"
            style={{backgroundColor:"red"}}
            onClick={()=>setColor("red")}>Red</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-4"
            style={{backgroundColor:"green"}}
            onClick={()=>setColor("green")}>green</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-4"
            style={{backgroundColor:"yellow"}}
            onClick={()=>setColor("yellow")}>yellow</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-4"
            style={{backgroundColor:"blue"}}
            onClick={()=>setColor("blue")}s>blue</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-4"
            style={{backgroundColor:"blue"}}
            onClick={()=>setColor("white")}s>white</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-4"
            style={{backgroundColor:"blue"}}
            onClick={()=>setColor("orange")}s>orange</button>

          </div>
        </div>
    </div>
  )
}

export default App
