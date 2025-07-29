import { Children } from "react"
import Button from "./components/Button"
function App() {
  
  return (
     <div className="bg-gradient-to-br from-blue-600 to-violet-600 w-screen h-screen flex justify-center items-center">
      <div className=" relative w-96 h-96">
        <div className="absolute h-10 w-96 bg-gradient-to-br from-gray-600 to-yellow-600 text-white flex items-center justify-center">
  hello
</div>
        <div className="absolute top-10 bottom-0 right-0 left-0 grid grid-cols-4 grid-rows-4 bg-violet-400 gap-3">
        <Button onClick={() => console.log(`clicked ${Children}`)} children="AC"/>
        <Button onClick={() => console.log(`clicked ${Children}`)} children="AC"/>
      </div>
      </div>
      
     </div>
  )
}

export default App
