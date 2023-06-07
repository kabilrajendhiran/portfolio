import React from "react";

interface IProps {
    id : string ,
    skill: string,
    className: string
}

const RoundButton : React.FunctionComponent<IProps> = (props) => {
  return(
      <div id={props.id} style={{width:"100px", height:"100px"}} className={`${props.className} border rounded-pill border-white d-flex align-items-center justify-content-center`}>
          {props.skill}
      </div>
  )
}

export default RoundButton;