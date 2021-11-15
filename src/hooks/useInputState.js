/*https://www.zeromolecule.com/blog/5-utility-react-hooks-for-every-project/*/
import { useState } from "react";

const useInputState = (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
export default useInputState;
