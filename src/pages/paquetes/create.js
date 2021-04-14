import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DrawerSide from '../../components/DrawerSide';
import { useForm } from 'react-hook-form';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: '300px',
    marginRight: '50px',
    marginTop: '120px',
  },
  formContainer: {},
  formInput: {
    marginLeft: '30px',
  },
  guardarBtn: {
    width: '220px',
    margin: '1rem',
    backgroundColor: '#FA0000',
    color: '#fff',
    fontWeight: 700,
    padding: '15px 30px',
    borderRadius: '2rem',
    '&:hover': {
      backgroundColor: '#A00000',
    },
  },
  btnContainer: {
    flexFlow: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
}));

function PaqueteCreate() {
  const classes = useStyles();
  const onSubmit = (data) => alert(JSON.stringify(data));
  const { register, handleSubmit } = useForm();
  const { ref, ...rest } = register('value_name');
  const history = useHistory();
  return (
    <div className={classes.root}>
      <DrawerSide title="Crear paquete" showCreate={false} />
      <main className={classes.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" className={classes.formContainer}>
            <Typography variant="h6">Nombre</Typography>
            <Input
              name="nombre"
              {...register('nombre')}
              className={classes.formInput}
            />
          </Box>
          <Box display="flex" className={classes.formContainer}>
            <Typography variant="h6">Descripcion</Typography>
            <Input
              name="descripcion"
              {...register('descripcion')}
              className={classes.formInput}
            />
          </Box>
          <Box display="flex" className={classes.formContainer}>
            <Typography variant="h6">Peso</Typography>
            <Input
              name="peso"
              {...register('peso')}
              placeholder="999.99"
              type="number"
              className={classes.formInput}
            />
          </Box>

          <Box display="flex" className={classes.formContainer}>
            <Typography variant="h6">Cantidad</Typography>
            <Input
              name="cantidad"
              {...register('cantidad')}
              placeholder="999"
              type="number"
              className={classes.formInput}
            />
          </Box>
          <Box display="flex" className={classes.formContainer}>
            <Typography variant="h6">Costo</Typography>
            <Input
              name="costo"
              {...register('costo')}
              placeholder="999,999.99"
              type="number"
              className={classes.formInput}
            />
          </Box>
          <Box display="flex" className={classes.formContainer}>
            <Typography variant="h6">Remitente</Typography>
            <Input
              name="remitente"
              {...register('remitente')}
              className={classes.formInput}
            />
          </Box>
          <Box display="flex" className={classes.formContainer}>
            <Typography variant="h6">Destinatario</Typography>
            <Input
              name="destinatario"
              {...register('destinatario')}
              className={classes.formInput}
            />
          </Box>
          <Box display="flex" className={classes.formContainer}>
            <Typography variant="h6">Direccion - Destinatario</Typography>
            <Input
              name="direccionDestinatario"
              {...register('direccionDestinatario')}
              className={classes.formInput}
            />
          </Box>
          <Box display="flex" className={classes.formContainer}>
            <Typography variant="h6">Fecha de llegada al almacen</Typography>
            <Input
              name="fechaAlmacen"
              {...register('fechaAlmacen')}
              className={classes.formInput}
              type="date"
            />
          </Box>
          <Box display="flex" className={classes.formContainer}>
            <Typography variant="h6">Fecha de entrega</Typography>
            <Input
              name="fechaEntrega"
              {...register('fechaEntrega')}
              className={classes.formInput}
              type="date"
            />
          </Box>
          <Box display="flex" className={classes.btnContainer}>
            <Button type="submit" className={classes.guardarBtn}>
              Guardar
            </Button>
            <Button className={classes.guardarBtn}>Cancelar</Button>
          </Box>
        </form>
      </main>
    </div>
  );
}

export default PaqueteCreate;
