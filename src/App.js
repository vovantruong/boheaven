import { useEffect } from "react";


function App() {

  useEffect(() => {
    document.title = "博天堂";
  },[])

  return (
    <div className="App">
      Hello world 體育
    </div>
  );
}

export default App;
