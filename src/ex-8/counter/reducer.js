const counter = ({ value }, action) => {
  return action.type === 'INCREMENT' ? { value: value + 1 } : { value };
};

export default counter;
