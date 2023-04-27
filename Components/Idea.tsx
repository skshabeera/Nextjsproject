import * as React from 'react';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { TextField, Button, Typography, Box, CircularProgress } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 68;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const names = [
  'target1',
  'target2',
  'target3',
  'target4',
  'target5',
  'target6',
  'target7',
  'target8',
  'target9',
  'target10',
];

function getStyles(name: string, personName: string, theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function IdeaInput() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [loading, setLoading] = React.useState(false)
  const [description, setDescription] = React.useState("")
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
  const changeHandle = (e: any) => {
    setDescription(e.target.value)
  }
  const priceHandle = (e: any) => {
    e.preventDefault()
    setPricing(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
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
  }

  return (
    
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2px", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h3" gutterBottom>
        Idea Validation App
      </Typography>{console.log({restdata})}
      <TextField fullWidth label="Idea Description" value={description} onChange={changeHandle} sx={{ m: 1, width: 1000, mt: 3 }} />
      {restdata ?(
      


      <FormControl sx={{ m: 1, width: 1000, mt: 3 }}>
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