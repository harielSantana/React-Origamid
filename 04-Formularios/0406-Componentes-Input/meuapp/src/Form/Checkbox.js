import React from 'react';

const Checkbox = ({ options }) => {
  return (
    <div>
      {options.map((options) => (
        <label htmlFor="">
          <input type="checkbox" />
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
