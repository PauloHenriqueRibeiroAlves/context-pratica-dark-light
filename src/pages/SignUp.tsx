import { useContext } from 'react';
import { Context } from '../contexts/Context'
import { Link } from 'react-router-dom';

export const SignUp = () => {
    const { state, dispatch } = useContext(Context);
    const hundleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //setNameInput(e.target.value);
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: e.target.value
            }
        });
    }
    const hundleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       // setAgeInput(parseInt(e.target.value));
       dispatch({
        type: 'CHANGE_AGE',
        payload: {
            age: parseInt(e.target.value)
        }
    });
    }
    const hundleSalve = () => {
        
        
    }
    return(
        <div>
            <h3>Tela SignUp (Tema: {state.theme.status})</h3>
            <input
                type='text'
                placeholder='Digite seu nome'
                value={state.user.name}
                onChange={hundleNameChange}
            />
            <input
                type='text'
                placeholder='Digite sa idade'
                value={state.user.age}
                onChange={hundleAgeChange}
            />
            <button onClick={hundleSalve}>Salvar</button>
            <Link to={'/exibir'}>Ir para ShowData</Link>
        </div>
    );
}