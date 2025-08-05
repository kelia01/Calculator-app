import { useState } from "react";

function App() {
  const [status, setStatus] = useState('0');
  const handleClick = (value: string) => {
    if(value === 'AC') setStatus('0');
    if(value === '=') {
      try{
        setStatus(eval(status))
      } catch{
        throw new Error('Invalid expression')
      }
    }
    if(status === '0' || value !== '.'){
      setStatus(value);
    }
    else{
      setStatus(prev => prev + value)
    }
  }
  
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-300 relative w-96 h-96">
        <div className="h-14 w-full bg-gray-400 text-white flex items-center justify-end px-4 text-2xl">
          {status}
        </div>
        <div className="absolute top-10 bottom-0 right-0 left-0 grid grid-cols-4 grid-rows-5 gap-0.5 ">
  {["AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((char, index) => (
    <button
      key={index}
      className="bg-gray-200 text-xl font-bold flex items-center justify-center p-4"
      onClick={ () => handleClick(char)}
    >
      {char}
    </button>
  ))}
</div>

      </div>
    </div>
    </>
  );
}

export default App;
