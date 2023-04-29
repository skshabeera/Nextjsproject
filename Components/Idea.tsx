import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Button, Typography, CircularProgress } from '@mui/material';
import Website from './website';
import { AboutUsItem } from './website/AboutUs';

export default function IdeaInput() {
  const [loading, setLoading] = React.useState(false)
  const [description, setDescription] = React.useState("")
  const [responseData, setResponseData] = React.useState<null | { name: string, description: string, targetAudience: any[]; aboutUsItems: AboutUsItem }>(null)
  const changeHandle = (e: any) => {
    setDescription(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
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
      console.error({ error: "error" })
    }
  }

  const renderFormComponent = () => {
    return <Box
      component="span"
      sx={{ display: "flex", flexDirection: "column", gap: "2px", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h3" gutterBottom>
        Idea Validation App
      </Typography>
      {!responseData ? <TextField fullWidth label="Idea Description" value={description} onChange={changeHandle} sx={{ m: 1, width: 1000, mt: 3 }} /> : <></>}
      <Button variant="contained" sx={{ display: "block" }} onClick={handleSubmit}>{loading ? <CircularProgress size={24} color="error" /> : !responseData ? "SUBMIT" : "Update"}</Button>
    </Box>
  }

  const renderWebsiteComponent = () => {
    // todo make the below fine
    return responseData &&  <Website heroText={responseData?.description || ""} heroHeader={responseData?.name || ""} aboutUsItems={responseData?.aboutUsItems} />
  }
  return <>
    {!responseData ? renderFormComponent() : renderWebsiteComponent()}
  </>
} 