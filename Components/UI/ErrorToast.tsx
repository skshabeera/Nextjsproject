import { FC, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
interface ErrorToastProps {
  error: boolean;
  message?: string;
}

const ErrorToast: FC<ErrorToastProps> = ({ error, message }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleShowError = () => {
    setOpen(true);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert elevation={6} variant="filled" severity="error" {...(message && { children: message } as AlertProps)}>
        {message || 'There was an error.'}
      </MuiAlert>
    </Snackbar>
  );
};

export default ErrorToast;
