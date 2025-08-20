import React from "react";
import TextField from "@mui/material/TextField"
type Props={
    name:string
    type:string
    label:string
    id?:string
}

const CustomizedInput = (props: Props) => {
  return <TextField InputLabelProps={{style:{color:"white"}}}
   name={props.name}
   type={props.type}
    label={props.label}
    id={props.id}
    InputProps={{style:{color:"white",
        borderRadius:10,
        fontSize:20,
        width:"400 px"
    }}} />;
};


export default CustomizedInput;
