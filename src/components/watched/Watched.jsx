import * as React from 'react';
import Switch from '@mui/material/Switch';
import "./watched.scss"

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Watched({watchedHandler}) {


  return (
    <div className='watched'>
      
      <Switch {...label} color='secondary' onClick={watchedHandler} />
      
    </div>
  );
}