import FormControl from '@mui/material/FormControl';
import { TextField, Box, Button } from '@mui/material';
import '../css/formulario.css';
const Formulario= () =>{
    
return(
<FormControl>
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className="titulo">
        <h2>Formulario de Contacto</h2>
        </div>

<div className="form">
    
<TextField
          required
          id="outlined-required"
          label="Nombre"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Apellidos"
          size="small"
          
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          size="small"
          type="email"
        />
          <TextField
          id="outlined-multiline-flexible"
          label="Escribe tu Pedido"
          multiline
          maxRows={4}
         
        />

<Button variant="contained" size="medium" type='submit'>
          Enviar
        </Button>
</div>
</Box>
</FormControl>


)
    
}
export default Formulario;