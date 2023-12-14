import { useState, useEffect } from 'react';

const useStorage = (key, initialValue = '') => {

  const storedValue = localStorage.getItem(key) || initialValue;
  

  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value); 
  }, [key, value]);

  return [value, setValue];
};

function MyComponent() {
  const [textValue, setTextValue] = useStorage('myText');

  return (
    <input
      type="text"
      value={textValue}
      onChange={(e) => setTextValue(e.target.value)}
    />
  );
}

export default MyComponent