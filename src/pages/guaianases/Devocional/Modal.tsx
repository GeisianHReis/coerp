import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { WhatsappLogo } from '@phosphor-icons/react';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ModalMin {
  titulo: string;
  texto: React.ReactNode;
  id: string;
  isOpen: boolean
}

export default function AlertDialogSlide({ id, titulo, isOpen, texto }: ModalMin) {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClickOpen = () => {
    setOpen(true);
    const modalId = id || getIdFromURL();
    if (modalId) {
      navigate(`?modal=${modalId}`);
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate({ search: '' });
  };

  const getIdFromURL = () => {
    const parsed = queryString.parse(window.location.search);
    return parsed.modal || null;
  };

  const shareOnWhatsApp = () => {
    const siteUrl = encodeURIComponent(window.location.href);
    const text = `Leia o devocional "${titulo}": ${siteUrl}`;
    const modalId = id || getIdFromURL();
    const whatsappUrl = `https://api.whatsapp.com/send?text=${text}&modal=${modalId}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} style={{ position: 'relative', top: '11px', width: '249px' }}>
        LEIA MAIS
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

        </DialogContent>
        <DialogActions style={{ justifyContent: 'space-between' }}>
          <p>Compartilhe:  &nbsp;<WhatsappLogo size={32} color='green' onClick={shareOnWhatsApp} style={{ cursor: 'pointer' }} /></p>
          <Button onClick={handleClose}>Fechar!</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}