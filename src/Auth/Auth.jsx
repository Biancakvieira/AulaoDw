import './Auth.css';

export function Auth({ carregando, onSubmit }) {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            onSubmit(event)
        }}>
            <input type="text" placeholder="usuario" id="usuario"/>
            <input type="psssword" placeholder="senha"  id="senha"/>
            <button type="submit" >
                {
                    carregando
                        ? 'Autenticando'
                        : 'Autenticar'
                }
            </button>
        </form>

    )
}