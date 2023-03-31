import Card1 from '../../components/Components/Card1'
import { Grid } from '@mui/material';
import Card2 from '../../components/Components/Card2';
import Card3 from '../../components/Components/Card3';
import Card4 from '../../components/Components/Card4';
import Card5 from '../../components/Components/Card5';

export default function Skills(){
  return(
    <>
      <Grid container sx={{ p: 3 }} spacing={4}>
        <Grid item xs={4}>
      <Card1/>
      </Grid>
      <Grid item xs={4}>
      <Card2/>
      </Grid>
      <Grid item xs={4}>
      <Card3/>
      </Grid>
      <Grid item xs={4}>
      <Card4/>
      </Grid>
      <Grid item xs={4}>
      <Card5/>
      </Grid>
      </Grid>
    </>
  )
}