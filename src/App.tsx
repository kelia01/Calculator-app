import { useState } from "react";

function App() {
  const [display, setDisplay] = useState('0');
  const [first, setFirst] = useState<number | null>(null);
  const [op, setOp] = useState<string | null> (null);

  const handleClick = (value: string) => {
    if(value === 'AC') { 
      setDisplay('0');
      setFirst(null);
      setOp(null);
      return;
    }

    if(['+', '-', '*', '/'].includes(value)) {
      setFirst(parseFloat(display));
      setOp(value);
      setDisplay('0');
      return;
    }

    if(value === '=') {
      if(first !== null && op) {
        const second = parseFloat(display);
        let result = 0;
        if(op === '+') result = first + second;
        if(op === '-') result = first - second;
        if(op === '*') result = first * second;
        if(op === '/') result = second !== 0 ? first / second : NaN;
        setDisplay(result.toString());
        setFirst(null);
        setOp(null);
      }
      return;
    }

    if(value === '.' && display.includes('.')) return ;
       setDisplay(display === '0' ? value : display + value);
    if(value === '+/-'){
      setDisplay(prev => (parseFloat(prev) * -1).toString());
       return;
    }

    if(value === '%') {
      setDisplay(prev => (parseFloat(prev) / 100).toString());
      return;
    }
  }
  
  const isOrange = (val: string) => ['+', '-', '*', '/', '='].includes(val);
  const isZero = (val: string) => val === '0';
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-300 relative w-96 h-96">
        <div className="h-14 w-full bg-gray-400 text-white flex items-center justify-end px-4 text-2xl">
          {display}
        </div>
        <div className="absolute top-10 bottom-0 right-0 left-0 grid grid-cols-4 grid-rows-5 gap-0.5 ">
  {["AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((char, index) => (
    <button
      key={index}
      className={`text-xl font-bold flex items-center justify-center p-4 ${isOrange(char) ? 'bg-orange-400 text-white' : 'bg-gray-200'} ${isZero(char) ? 'col-span-2' : ''}`}
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
