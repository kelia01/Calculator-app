import { useState } from "react";
import Button from "./components/Button";
function App() {
  const [status, setStatus] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-600 to-violet-600 w-screen h-screen flex justify-center items-center">
      <div className=" relative w-96 h-96">
        <div className="absolute h-10 w-96 bg-gradient-to-br from-blue-500 to-violet-200 text-white">
          {status}
        </div>
        <div className="absolute top-10 bottom-0 right-0 left-0 grid grid-cols-4 grid-rows-4 gap-0.5 bg-violet-400">
          <Button onClick={() => alert("here")} children="AC" />
          <Button onClick={() => alert("here")} children="+/-" />
          <Button onClick={() => alert("here")} children="%" />
          <Button onClick={() => alert("here")} children="/" />
          <Button onClick={() => alert("here")} children="7" />
          <Button onClick={() => alert("here")} children="8" />
          <Button onClick={() => alert("here")} children="9" />
          <Button onClick={() => alert("here")} children="6" />
          <Button onClick={() => alert("here")} children="5" />
          <Button onClick={() => alert("here")} children="4" />
          <Button onClick={() => alert("here")} children="3" />
          <Button onClick={() => alert("here")} children="2" />
          <Button onClick={() => alert("here")} children="1" />
        </div>
      </div>
    </div>
  );
}

export default App;
