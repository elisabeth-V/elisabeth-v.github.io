import { useState } from "react";

const Homepage = () => {
  interface checkboxProps {
    target?:any,
    id?:string,
  }
  const [isSheetsChecked, setIsSheetsChecked] = useState<boolean>(false);
  const [isBeamsChecked, setIsBeamsChecked] = useState<boolean>(false);
  const [isFrameChecked, setIsFrameChecked] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  
  console.log("sheets",isSheetsChecked,"beams", isBeamsChecked,"frame",isFrameChecked,"ischecked",isChecked);
  
  const isOutofOrder = (event: checkboxProps) =>{
    let elId = event.target.id;
    setIsChecked(!isChecked);
    
    if(elId == "sheets-status" || elId == "bolts-status" && isSheetsChecked || elId == "beams-status" && isSheetsChecked){
      setIsSheetsChecked(!isSheetsChecked);
      setIsBeamsChecked(!isBeamsChecked);
    }
    else if(elId == "beams-status" || elId == "bolts-status" && isBeamsChecked){
      setIsBeamsChecked(!isBeamsChecked);
    }
    else if(elId == "frames-status" || elId == "bolts-status" && isFrameChecked ){
      setIsFrameChecked(!isFrameChecked);
    }
  }
  
  return(
    <>
      <h3>Control Panel</h3>
      <div className="controlPnl">
        <div>
          <input onChange={isOutofOrder} checked={isSheetsChecked} type="checkbox" id="sheets-status" />
          <span id="sheets-station" style={{ backgroundColor: isSheetsChecked ? "red" : "green"}} >SHEETS</span>
        </div>
        <div> 
          <input onChange={isOutofOrder} type="checkbox" checked={isBeamsChecked} id="beams-status" /> 
          <span id="beams-station" style={{ backgroundColor: isBeamsChecked ? "red" : "green"}} >BEAMS</span>
        </div>
        <div> 
          <input onChange={isOutofOrder} type="checkbox" checked={isFrameChecked} id="frames-status" />
          <span id="frames-station" style={{ backgroundColor: isFrameChecked ? "red" : "green"}} >FRAMES</span>
        </div>
        <div> 
          <input onChange={isOutofOrder} type="checkbox" checked={isChecked} id="bolts-status" />
          <span id="bolts-station" style={{ backgroundColor: isChecked ? "red" : "green"}}>BOLTS</span>
        </div>
      </div>
    </>
  );
}

export default Homepage;