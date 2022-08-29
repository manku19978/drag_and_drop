import { useState, useRef } from "react";

const App = () => {
  const [list, setList] = useState([1,2,3,4,5]);
  const startIndex = useRef(null);

  const handleDragStart = (i) => {
    startIndex.current = i;
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (i) => {
    const temp = list;
    const startEle = temp[startIndex.current];
    temp.splice(startIndex.current, 1);
    temp.splice(i, 0, startEle);
    setList([...temp]);
  }

  const listToRender = list.map((e, i) => {
    return (
      <div 
        className="tile" 
        key={i}
        draggable
        onDragStart={() => handleDragStart(i)}
        onDragOver={handleDragOver}
        onDrop={() => handleDrop(i)}
      >
        {e}
      </div>
    )
  })

  return (
    <div className="App">
      {listToRender}
    </div>
  );
}

export default App;
