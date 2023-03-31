import { Typography } from '@mui/material';
import Typed from 'react-typed';

import pi from "./Photo.jpg";

export default function Aboutus(){
    return(
        <>
        <img  src={pi} />
        
<Typography >Name: RAJASHEKAR</Typography>
<Typography >Father Name: PARSHARAMULU</Typography>
<Typography >Mother Name: BHAGYA</Typography>
<Typography >Email: nerellarajashekar458@gmail.com</Typography>
<Typography >Phone No.: 9182147779</Typography>
I'm a <Typed style={{color:'red'}} strings={["Computer science","Developer","Programmer"]} typeSpeed={40}
                    backSpeed={50}/>
    Born in 2000.Raised in small village in Telangana,India.

    <Typography >Even been hard at studies in  Computer Science And Engineering I started a new chapter in my story as a self-determined learner in coding languages like Java,C++....</Typography>
    <Typography >

I'm also proficient in MySQL,Front End, Back End and coding is my major hobby .....</Typography>
<Typography >

While I'm not coding you'll find me either Googling latest facts and technologies , watching movies or sleeping .....</Typography>

        </>
        
    )
    }