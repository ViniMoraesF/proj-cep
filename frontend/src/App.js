import { useState } from "react";
import "./App.css";

function App() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);

  const buscarEndereco = async () => {
    if (!cep) return;
    try {
      const response = await fetch(`http://localhost:5000/cep/${cep}`);
      const data = await response.json();
      setEndereco(data);
    } catch (err) {
      alert("Erro ao buscar CEP");
    }
  };

  return (
    <div className="App">
      <h1>Consulta CEP</h1>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={buscarEndereco}>Buscar</button>

      {endereco && (
        <div>
          <h3>Endereço:</h3>
          <p>{endereco.logradouro}</p>
          <p>{endereco.bairro}</p>
          <p>{endereco.localidade} - {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}

export default App;
