import { Typography } from '@mui/material';
import Typed from 'react-typed';

import pi from "./One.png";
import pic from "./Two.png";

export default function Aboutus(){
    return(
        <>
        <img align="right" src={pi}  width="50%" />
        <img align="alternate" src={pic} width="50%"  />

        </>
        
    )
    }