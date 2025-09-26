import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const top100Films = [
  { label: 'The Shawshank Redemption' },
  { label: 'The Godfather' },
  { label: 'The Dark Knight'},
  { label: 'Pulp Fiction'},
];

export default function Auto() {
  return (
    <div className='mx-25 my-10 flex justify-end'>
        <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    </div>
  );
}
