import * as React from 'react';
import { useTheme  } from '@mui/material/styles';
import { TextField ,Button ,Typography} from '@mui/material';
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
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [description,setDescription] = React.useState("123")
  const [pricing,setPricing]= React.useState("")

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const changeHandle=(e)=>{
    e.preventDefault()
    setDescription(e.target.value)
  }
  const priceHandle=(e)=>{
    e.preventDefault()
    setPricing(e.target.value)
  }

  return (
    <div>
      <Typography variant="h1" gutterBottom>
        IdeaValidationApp
      </Typography>

      <TextField fullWidth label="idea-Description" id="fullWidth" value={description} onChange={changeHandle} />
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
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField id="outlined-basic margin-none" label="pricing" variant="outlined" sx={{width:'50ch'}} value={pricing} onChange={priceHandle}/>

      <Button  variant="contained">Submit</Button>

    </div>
  );
}