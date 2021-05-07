import React from 'react';

function App() {
  const [produto, setProduto] = React.useState('');

  function handleTarget({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input
          type="radio"
          name="cor"
          onChange={handleTarget}
          value="violeta"
        />
        Violeta
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="cor"
          onChange={handleTarget}
          value="laranja"
        />
        Laranja
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="cor"
          onChange={handleTarget}
          value="vermelho"
        />
        Vermelho
      </label>

      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          name="produto"
          onChange={handleTarget}
          value="smartphone"
        />
        Smartphone
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="produto"
          onChange={handleTarget}
          value="Tablet"
        />
        Tablet
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="produto"
          onChange={handleTarget}
          value="notebook"
        />
        Notebook
      </label>
    </form>
  );
}

export default App;
