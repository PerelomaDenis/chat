import * as React from 'react';

import { Autocomplete, Box, Button, InputAdornment, TextField } from '@mui/material';

import './App.css';
import { Search } from './components/Icons';

const App: React.FC = () => {
  const aaa = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }];

  return (
    <div className="App" style={{ backgroundColor: '#111823' }}>
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
    </div>
  );
};

export default App;
