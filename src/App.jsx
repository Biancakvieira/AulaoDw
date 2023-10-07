import{useState} from "react"
import axios from 'axios'
import {Auth} from "./Auth/Auth";

function Autenticar({onAutenticado}) {
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = (event) =>{
    const {usuario, senha} = event.target;
    axios.post('http://localhost:3001/auth',{
      usuario: usuario.value,
      senha: senha.value,
    })
    .then(({data})=>{
      setCarregando(false);
      onAutenticado(data);
    })
    .catch();
  }


  return (
    <Auth
    carregando={carregando}
    onSubmit={handleSubmit}
    />
   
  )
}

function App() {
const [page, setPage]= useState('auth');
const [token, setToken] = useState(null);

const handleOnAutenticado = (token) => {
  setPage('home');
  setToken(token);
}
const handleOnSair = () => {
  setPage('auth');
  setToken(null);
}

  return(
    <div>
    {
      page === 'auth' && <Autenticar onAutenticado={handleOnAutenticado}/>
    
      }
  {
    page === 'home' && <div> 
     
    <h4>Usuario Autenticado</h4>
    <button onClick={handleOnSair}>Sair</button>
    </div>
  }
  </div>
  )
}
export default App
