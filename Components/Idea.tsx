import * as React from 'react';
import { TextField, Button, Typography, Box, CircularProgress } from '@mui/material';

export default function IdeaInput() {
  const [loading, setLoading] = React.useState(false)
  const [description, setDescription] = React.useState("")
<<<<<<< HEAD
  const [pricing, setPricing] = React.useState("")
  const [restdata,setRestdata]=React.useState(null)


  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
=======
  const [responseData, setResponseData] = React.useState<null | { name: string, description: string, target: any[] }>(null)
>>>>>>> 8a6f19792d91698535c98a4902024c0e76b0b346
  const changeHandle = (e: any) => {
    setDescription(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
<<<<<<< HEAD
    e.preventDefault()
    const data = JSON.stringify({
      type: "only-description",
      description
    })
    setLoading(true)
    const response = await fetch("/api/idea", {
      method: "POST",
      body: data
    })
    const resData = await response.json()
    console.log({resData})
    setRestdata(resData)
    
    // store resData into a state
    // conditionally show the select box if data is there
    setLoading(false)
=======
    try {
      e.preventDefault()
      const data = JSON.stringify({
        idea: description
      })
      setLoading(true)
      const response = await fetch("/api/idea", {
        method: "POST",
        body: data
      })
      const resData = await response.json()
      console.log({ resData })
      setResponseData(resData)
      // store resData into a state
      // conditionally show the select box if data is there
      setLoading(false)
    } catch (error) {
      // todo error shabeera handle
    }
>>>>>>> 8a6f19792d91698535c98a4902024c0e76b0b346
  }

  return (

    <Box sx={{ display: "flex", flexDirection: "column", gap: "2px", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h3" gutterBottom>
        Idea Validation App
<<<<<<< HEAD
      </Typography>{console.log({restdata})}
      <TextField fullWidth label="Idea Description" value={description} onChange={changeHandle} sx={{ m: 1, width: 1000, mt: 3 }} />
      {restdata ?(
      


      <FormControl sx={{ m: 1, width: 1000, mt: 3 }}>
=======
      </Typography>
      {!responseData ? <TextField fullWidth label="Idea Description" value={description} onChange={changeHandle} sx={{ m: 1, width: 1000, mt: 3 }} /> : <></>}
      {responseData ? <>
        <TextField label="Name" variant="outlined" sx={{ m: 1, width: 1000, mt: 3 }} value={responseData.name} />
        <TextField label="website description" variant="outlined" sx={{ m: 1, width: 1000, mt: 3 }} value={responseData.description} />
      </> : <></>}

      {/* <FormControl sx={{ m: 1, width: 1000, mt: 3 }}>
>>>>>>> 8a6f19792d91698535c98a4902024c0e76b0b346
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Target Audience</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Target Audience</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>):null}
      {/* <TextField label="pricing" variant="outlined" sx={{ m: 1, width: 1000, mt: 3 }} value={pricing} onChange={priceHandle} /> */}
      <Button variant="contained" sx={{ display: "block" }} onClick={handleSubmit}>{loading ? <CircularProgress size={24} color="error" /> : "SUBMIT"}</Button>

    </Box>
  );
}