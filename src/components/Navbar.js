import {Button, AppBar, Toolbar, Typography}from '@mui/material';

export function Navbar(){
    return (
        <div className="App">
          <AppBar position="static">
          <Toolbar>         
              <Typography variant="h6" color="secondary" component="div" sx={{ flexGrow: 1 }}>
                Álvaro Huamán Sihuin
              </Typography>
              <Button color="secondary">Acerca de mi</Button>
              <Button color="secondary">Estudios</Button>
              <Button color="secondary">Contáctame</Button>
              <Button color="secondary">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
}