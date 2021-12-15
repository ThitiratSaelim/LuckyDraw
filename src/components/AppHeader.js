import './AppHeader.css';
import { GrUpload  } from "react-icons/gr";
import React, {useState} from "react"
import UploadPrize from './UploadPrize';

function AppHeader() {

    const [panelImg, setPanel] = useState(null);

    function onPanelOpen(value){
      setPanel(value)
    }
  
    function onPanelClose(){
      setPanel(null)
    }
  
    let postPanel = null;
  
      // ถ้าไม่เป็น null
    if(!!panelImg) {
      postPanel = <UploadPrize logoImg={panelImg} onBgClick = {onPanelClose}/>;
    }
  

    return (
        <header className="app-header">
            <h1 className="app-header-text">LUCKY DRAW</h1>
            <button className="app-header-button" onClick={() => {onPanelOpen(1)}}> <GrUpload /> Upload prize</button>
            {postPanel}
        </header>
    );
}

export default AppHeader;