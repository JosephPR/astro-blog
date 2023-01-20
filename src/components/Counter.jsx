import { useState, useCallback } from 'preact/hooks';

export default function Counter() {
    const [value, setValue] = useState(0);
    const increment = useCallback(() => {
      setValue(value + 1);
    }, [value]);
  
    return (
      <div>
        <h3>Preact Component</h3>
        <p>Counter: {value}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }