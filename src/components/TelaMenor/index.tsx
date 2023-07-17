import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import Fade from '@mui/material/Fade';
import { MenuMobile } from './styles';
import { List } from '@phosphor-icons/react';
import UnidadeContext from '../../UnidadeContext';


export function TelaMenor(){

  const { unidadeSelecionada } = React.useContext(UnidadeContext);

  const navigate = useNavigate();

        const handleHome = () => {unidadeSelecionada === "Ferraz" ? navigate('/ferraz/home') : navigate('/guaianases/home')}
        const handleProgramacao = () => {unidadeSelecionada === "Ferraz" ? navigate('/ferraz/programacao') : navigate('/guaianases/programacao')}
        const handleCultos = () => {unidadeSelecionada === "Ferraz" ? navigate('/ferraz/cultos') : navigate('/guaianases/cultos')}
        const handleSobre = () => {unidadeSelecionada === "Ferraz" ? navigate('/ferraz/sobre') : navigate('/guaianases/sobre')}
        const handleMinisterios = () => {unidadeSelecionada === "Ferraz" ? navigate('/ferraz/Ministerios') : navigate('/guaianases/Ministerios')}

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuMobile>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <List color='black' size={30} />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleHome}>INÍCIO</MenuItem>
        <MenuItem onClick={handleProgramacao}>PROGRAMAÇÃO</MenuItem>
        <MenuItem onClick={handleCultos}>CULTOS</MenuItem>
        <MenuItem onClick={handleMinisterios}>MINISTÉRIOS</MenuItem>
        <MenuItem onClick={handleSobre}>SOBRE NÓS</MenuItem>
      </Menu>
    </MenuMobile>
  );}
