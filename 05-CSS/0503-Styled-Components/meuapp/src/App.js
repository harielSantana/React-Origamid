import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: blue;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const Preco = styled.p`
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`;

const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

function App() {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <ProdutosContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Meu texto é isso.</Paragrafo>
          <Preco cor="#40c1d0">R$ 1000,00</Preco>
        </Produto>

        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>Meu texto é isso.</Paragrafo>
          <Preco>R$ 800,00</Preco>
        </Produto>
      </ProdutosContainer>

      <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
        Ativar
      </Button>
    </div>
  );
}

export default App;
