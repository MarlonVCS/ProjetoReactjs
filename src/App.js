import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "João"
  return (
    <div className="App">
      <h1>Testando css</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Marlon"/>
      <SayMyName nome="Maria"/>
      <SayMyName nome={nome}/>
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissão="Desenvolvedor"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
