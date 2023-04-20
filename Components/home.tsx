import Image from 'next/image'
import { Box, Grid,TextField } from '@mui/material';
import Typography from '@mui/material/Typography';


import { Button } from '@mui/material'
import laptop from '../public/laptop.jpg'


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

  return (
    <>
    <Box display={'flex'} alignItems={'center'} mt={6} >
    <Typography variant="h1" color= "#01579b" flexDirection={'column'} display={"flex"} >
        Super Charge Laptop
       </Typography >
       <Typography variant="h6" color="#424242" mt={4} flexDirection='column'  >
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> 
       Quos blanditiis tenetur unde suscipit, quam beatae  so<br/> 
       rerum inventore consectetur,neque doloribus, cupiditate <br />
       dignissimos  laborum fugiat deleniti? Eum quasi quidem 
       </Typography>
     {/* </Box>    */}
    {/* <Box display='flex' alignitems='center'>      */}
  
      <TextField label="Enter text" variant="outlined" onChange={(event) => setName(event.target.value)} />
      <Button variant="contained" color="primary" margin={2} padding={8} display='flex'>Submit</Button>
      <Image src={laptop} alt="Example Image" width={500} height={500}  />

      </Box>
      
      
    
    


    </>
  );

}

