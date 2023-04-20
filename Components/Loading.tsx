import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import Alert from '@mui/material/Alert';


export default function Loading() {
  const [showdata,setShowdata] = useState("")
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <CircularProgress />
      

    </div>
  );
}
