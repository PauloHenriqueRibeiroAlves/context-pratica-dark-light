import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../contexts/Context'

export const ShowData = () => {
    const {state, dispatch} = useContext(Context);
    return(
        <div>
            {state.user.name &&
                <>
                    <h3>Tela ShowData</h3><br/>
                    Meu nome é {state.user.name}<br/>
                    E tenho {state.user.age} anos de idade
                </>
            }
            {!state.user.name && 'Não há informações.'}           
            <hr/>
            <Link to={'/'}>Ir para SignUp</Link>
        </div>
    );
}