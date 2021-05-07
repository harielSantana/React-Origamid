import React from 'react';
// import Contato from './Contato';
const Contato = React.lazy(() => import('./Contato'));

function App() {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <div>
      {ativo && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivo(true)}>Abrir</button>
    </div>
  );
}

export default App;
