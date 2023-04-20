import React from 'react';
import Image from 'next/image'
import laptop from '../public/laptop.jpg'
import CircularProgress from '@mui/material/CircularProgress';


import { Grid,TextField ,Button} from '@mui/material';
import { FormEvent, useState } from 'react'

export default function TextForm() {
  const [name, setName] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const response = await fetch('/api/idea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })

    if (response.ok) {
      const newUser = await response.json()
      console.log(newUser)
    }
  }
  const Loading = ()=>{
     <CircularProgress />
  }


export default function MyComponent() {
  return (
    <Grid container spacing={2} alignItems="center" >
      <Grid item>
        <TextField label="Enter text" variant="outlined" onChange={(event) => setName(event.target.value)} />
      </Grid>
      <Grid item>
        <Button onClick={Loading} variant="contained" color="primary">Submit</Button>
      </Grid>
      <Image src={laptop} alt="Example Image" width={500} height={500} />

    </Grid>
  );
}
}
