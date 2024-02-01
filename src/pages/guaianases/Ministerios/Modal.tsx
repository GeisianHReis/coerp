import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Liderança } from '../../styles/Ministerios/styles';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ModalMin{
  titulo: string;
  texto: React.ReactNode;
  nomeLider1: string;
  nomeLider2?: string;
}

export default function AlertDialogSlide({titulo, texto, nomeLider1, nomeLider2}: ModalMin) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <Button
        variant="contained"
        onClick={handleClickOpen}
        style={{ borderRadius: '14px', fontSize: '13px' , width: '202px',
        padding: '3px 16px', textTransform: 'capitalize'}}
      >
        Saber Mais
        
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{titulo}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {texto}
          </DialogContentText>
          <h3>Liderança</h3>
          <Liderança>
           {nomeLider1}
          </Liderança>
          <Liderança>
           {nomeLider2}
          </Liderança>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar!</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}