import { useState } from "react";

const ControlPanel = () => {
  interface checkboxProps {
    target?:any,
    id?:string,
  }
  const [isSheetsChecked, setIsSheetsChecked] = useState<boolean>(false);
  const [isBeamsChecked, setIsBeamsChecked] = useState<boolean>(false);
  const [isFrameChecked, setIsFrameChecked] = useState<boolean>(false);
  const [isBoltChecked, setIsBoltChecked] = useState<boolean>(false);
  
  console.log("sheets",isSheetsChecked,"beams", isBeamsChecked,"frame",isFrameChecked,"isBoltchecked",isBoltChecked);
  
  const isOutofOrder = (event: checkboxProps) =>{
    let elId = event.target.id;
    
    if(elId == "sheets-status" ){
      if(!isBeamsChecked && !isBoltChecked || isSheetsChecked && !isFrameChecked){
        setIsSheetsChecked(!isSheetsChecked);
        setIsBeamsChecked(!isBeamsChecked);
        setIsBoltChecked(!isBoltChecked);
      }
      else if(isBoltChecked && !isBeamsChecked && !isSheetsChecked){
        setIsSheetsChecked(!isSheetsChecked);
        setIsBeamsChecked(!isBeamsChecked);
      }
      else if(isBeamsChecked && isBoltChecked && !isSheetsChecked){
        setIsSheetsChecked(!isSheetsChecked);
      } 
      else if(isBeamsChecked && isBoltChecked && isSheetsChecked && isFrameChecked){
        console.log('cas 4')
        setIsSheetsChecked(!isSheetsChecked);
        setIsBeamsChecked(!isBeamsChecked);
        setIsBoltChecked(!isBoltChecked);
        setIsFrameChecked(!isFrameChecked);
      }
    }
    if(elId == "beams-status"){
      if(isBoltChecked && !isBeamsChecked) {
        setIsBeamsChecked(!isBeamsChecked);
      }
      else if(isSheetsChecked){
        setIsSheetsChecked(!isSheetsChecked);
        setIsBeamsChecked(!isBeamsChecked);
        setIsBoltChecked(!isBoltChecked);
      }
      else{
        setIsBeamsChecked(!isBeamsChecked);
        setIsBoltChecked(!isBoltChecked);
      }
    }
    if(elId == "bolts-status"){
      if(isSheetsChecked){
        setIsSheetsChecked(!isSheetsChecked);
        setIsBeamsChecked(!isBeamsChecked);
        setIsBoltChecked(!isBoltChecked);
      }else if(isBeamsChecked){
        setIsBeamsChecked(!isBeamsChecked);
        setIsBoltChecked(!isBoltChecked);
      }else if(isFrameChecked){
        console.log('cas 4')
        setIsBoltChecked(!isBoltChecked);
        setIsFrameChecked(!isFrameChecked);
      }
        else{
        setIsBoltChecked(!isBoltChecked);
      }
    }
    if(elId == "frames-status"){
      if(isSheetsChecked && !isFrameChecked || isBeamsChecked && !isFrameChecked){
        setIsFrameChecked(!isFrameChecked);
      }else{
        setIsFrameChecked(!isFrameChecked);
        setIsBoltChecked(!isBoltChecked);
      }
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
          <input onChange={isOutofOrder} type="checkbox" checked={isBoltChecked} id="bolts-status" />
          <span id="bolts-station" style={{ backgroundColor: isBoltChecked ? "red" : "green"}}>BOLTS</span>
        </div>
      </div>
    </>
  );
}

export default ControlPanel;