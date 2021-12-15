import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Page404 from './Page404';
import AppBackground from './components/AppBackground';
import PageHome from './components/PageHome';
import './components/AppHeader.css';

function App() {
  // const [panelImg, setPanel] = useState(null);

  // function onPanelOpen(value){
  //   setPanel(value)
  // }

  // function onPanelClose(){
  //   setPanel(null)
  // }

  // let postPanel = null;

  //   // ถ้าไม่เป็น null
  // if(!!panelImg) {
  //   postPanel = <UploadPrize logoImg={panelImg} onBgClick = {onPanelClose}/>;
  // }


  return (
    <div className="App">
      {/* <header className="app-header">
        <h1 className="app-header-text">LUCKY DRAW</h1>
        <button className="app-header-button" onClick={() => {onPanelOpen(1)}}> <GrUpload /> Upload prize</button>
        {postPanel}
      </header> */}
      <AppHeader/> 
      <AppBackground/>
      <Switch>
        <Route path="/" exact>
            <PageHome />
        </Route>
        <Route path="*">
            <Page404 />
        </Route>
      </Switch>
      <AppFooter/>
      
    </div>
  );
}

export default App;
