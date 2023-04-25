import Image from 'next/image'
import { Box, CircularProgress, Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';


import { Button } from '@mui/material'
import laptop from '../public/laptop.jpg'
import flowerbackground from '../public/flowerbackground.jpg'


import { FormEvent, useState } from 'react'

export default function TextForm() {
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault()
      setIsLoading(true)
      const response = await fetch('/api/idea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: name})
      })

      if (response.ok) {
        const newUser = await response.json()
        // step 1
        // take the res from BE 

        // validate the response 
        // i should have name and description

        // take this and show it to the user allowing the user to edit 

        // show the user that we are doing step 2
        console.log(newUser)
      }
      setIsLoading(false)
    } catch (error) {
      // @ts-ignore
      console.log({ message: error.message })
      // throw new Error(error)
    }
  }

  return (
    <>
      <Box display={'flex'} alignItems={'center'} mt={6} >
        <Typography variant="h1" color="#01579b" flexDirection={'column'} display={"flex"} >
          Super Charge Laptop
        </Typography >
        <Typography variant="h6" color="#424242" mt={4} flexDirection='column'  >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Quos blanditiis tenetur unde suscipit, quam beatae  so<br />
          rerum inventore consectetur,neque doloribus, cupiditate <br />
          dignissimos  laborum fugiat deleniti? Eum quasi quidem
        </Typography>
        <TextField label="Full width" id="fullWidth" onChange={(event) => setName(event.target.value)} />
        {/* this is my button */}
        <Button variant="contained" color="primary" onClick={handleSubmit}> {isLoading ? <CircularProgress size={24} color="error"/>:"SUBMIT"}</Button>
        <Image src={laptop} alt="Example Image" width={500} height={500} priority />
      </Box>

    </>
  );

}

