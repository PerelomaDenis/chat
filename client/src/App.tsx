import * as React from 'react';

import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  InputAdornment,
  Radio,
  TextField,
} from '@mui/material';

import './App.css';
import { CheckBox, CheckBoxChecked, CheckBoxError, Search } from './components/Icons';

declare module '@mui/material/Alert' {
  interface AlertPropsVariantOverrides {
    filledMedium: true;
    filledLarge: true;
  }
}

const App: React.FC = () => {
  const aaa = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }];

  return (
    <div className="App" style={{ backgroundColor: '#111823', height: '100vh' }}>
      <Button color="error" variant="contained" size="medium">
        {'Example'}
      </Button>
      <Box display="flex" justifyContent="center">
        <Autocomplete
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              {option.name}
            </Box>
          )}
          getOptionLabel={(option) => option.name}
          sx={{ width: 400 }}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              placeholder="Example"
            />
          )}
          options={aaa}
        />
      </Box>
      <TextField label="Name" value="Denis" />
      <TextField label="2222" value="" />
      <TextField label="2222" value="" disabled />
      <TextField label="2222" value="222" disabled />
      <TextField label="2222" value="222" error />
      <TextField label="2222" value="" error helperText="ssss" />
      <Box display="flex" justifyContent="center">
        <FormControlLabel
          control={<Checkbox checkedIcon={<CheckBoxChecked />} icon={<CheckBox />} />}
          label="Label"
        />
        <FormControlLabel
          control={
            <Checkbox defaultChecked checkedIcon={<CheckBoxChecked />} icon={<CheckBox />} />
          }
          label="Label"
        />
        <FormControlLabel
          control={<Checkbox checkedIcon={<CheckBoxChecked />} icon={<CheckBoxError />} />}
          label="Label"
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <FormControlLabel control={<Radio />} label="Label" />
        <FormControlLabel control={<Radio />} label="Label" />
      </Box>
      <Box display="flex" justifyContent="center">
        <Chip label="sss" color="success" />
        <Chip label="sss" color="warning" />
        <Chip label="sss" color="error" />
      </Box>
      <Box width={500} margin="0 auto">
        <Alert icon={false} color="success" variant="filledMedium">
          This is a success alert — check it out!
        </Alert>
        <Alert icon={false} color="error" variant="filledMedium">
          This is a error alert — check it out!
        </Alert>
        <Alert icon={false} color="success" variant="filledLarge">
          This is a success alert — check it out!
        </Alert>
        <Alert icon={false} color="error" variant="filledLarge">
          This is a error alert — check it out!
        </Alert>
      </Box>
    </div>
  );
};

export default App;
