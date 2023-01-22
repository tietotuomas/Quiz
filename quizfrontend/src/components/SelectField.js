import { TextField, MenuItem } from '@mui/material'

const SelectField = ({ options, option, label, handleOptionChange }) => {
  console.log('SelectField renderöityy')
  return (
    <>
      <TextField style={{marginTop: "10px", marginBottom: "10px"}}
        label={label}
        value={option}
        onChange={handleOptionChange}
        select
        fullWidth
        color="secondary"
      >
        {options.map((o) => (
          <MenuItem value={o} key={o}>
            {o}
          </MenuItem>
        ))}
      </TextField>
    </>
  )
}

export default SelectField
