import React from 'react';

function App() {
  const [textarea, setTextarea] = React.useState('');

  return (
    <form action="">
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows="5"
      />
      {textarea}
    </form>
  );
}

export default App;
