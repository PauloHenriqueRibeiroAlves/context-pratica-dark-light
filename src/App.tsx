import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from './pages/SignUp';
import { ShowData } from './pages/ShowData';
import { Context } from "./contexts/Context";

const App = () => {
  const {state, dispatch} = useContext(Context);

  const hundleSwitchTheme = () => {
    if(state.theme.status === 'light') {
      dispatch ({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'darck'
        }
      });
    }else {
      dispatch ({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'light'
        }
      });
    }
  }
  return (
    <BrowserRouter>
      <div style={{
          backgroundColor: state.theme.status === 'light' ? '#fff' : '#000',
          color: state.theme.status === 'light' ? '#000' : '#fff',
        }}>
        <h1>Titulo da Página</h1>
        tema: {state.theme.status}
        <button onClick={hundleSwitchTheme}>Switch theme</button>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/exibir" element={<ShowData/>}/>
        </Routes>
        <h2>khnfjksdhfbkjhb</h2>
      </div>
      </BrowserRouter>
    
  );
}
//npm run dev
export default App;
