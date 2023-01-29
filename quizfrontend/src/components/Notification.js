import { Alert } from '@mui/material'

const Notification = ({ message, severity }) => {
  return (
    <Alert
      severity={severity}
      sx={{
        marginTop: 2,
        marginBottom: 2,
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 'larger'
      }}
    >
      {message}
    </Alert>
  )
}

export default Notification
