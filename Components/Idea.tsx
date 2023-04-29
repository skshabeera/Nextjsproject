import * as React from 'react';
import Box from '@mui/material/Box';

import { TextField, Button, Typography, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

export default function IdeaInput() {
  const [loading,setLoading]=React.useState(false)
  const [isEditing,setisEditing]= React.useState(false)
  
  const [description, setDescription] = React.useState("")
  const [restdata,setRestdata]=React.useState(null)
  const [traget,setTarget] = React.useState([])



  const [responseData, setResponseData] = React.useState<null | { name: string, description: string, targetAudience: any[]; }>(null)
  const handleDescription=(event:any)=>{
    // clue use object spreading
    setResponseData(
       event.target.value)

  }
  
   
  const changeHandle = (e: any) => {
    setDescription(e.target.value)
  }
  const handleChange = (event:any) => {
    setTarget(event.target.value);
  };


  const handleSubmit = async (e: React.FormEvent) => {

    if(responseData) {
      console.log("i am in");
      return
    }
    e.preventDefault()
    const data = JSON.stringify({
      type: "only-description",
      
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
      console.log(responseData)
      
      setLoading(false)
    } catch (error) {
      console.error({error:"error"})
    }

  }

  return (
    
    

    <Box 
       component="span" 
        sx={{ display: "flex", flexDirection: "column", gap: "2px", justifyContent: "center", alignItems: "center" }}>
    <Typography variant="h3" gutterBottom>
        Idea Validation App
    </Typography>
      {!responseData ? <TextField fullWidth label="Idea Description" value={description} onChange={changeHandle} sx={{ m: 1, width: 1000, mt: 3 }} /> : <></>}
      ,{responseData ? <>
        <TextField label="Name" variant="outlined" sx={{ m: 1, width: 1000, mt: 3 }} value={responseData.name} />
        <TextField label="website description" variant="outlined" sx={{ m: 1, width: 1000, mt: 3 }} value={responseData.description} onChange={handleDescription} />

      </> : <></>}
      
      {responseData ? (
      <FormControl sx={{ m: 1, width: 1000, mt: 3 }}>
        <InputLabel>targetAudience</InputLabel>
        <Select
        
        multiple
        displayEmpty
        value={responseData.targetAudience}
      
        >
          {responseData.targetAudience && responseData.targetAudience.map((name) => (
            <MenuItem
              key={name}
              value={name}
        
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    ):<></>}
      <Button variant="contained" sx={{ display: "block" }} onClick={handleSubmit}>{loading ? <CircularProgress size={24} color="error" /> : !responseData ? "SUBMIT" : "Update"}</Button>
      </Box>

   )
  

    

} 