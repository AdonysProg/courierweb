import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DrawerSide from '../components/DrawerSide';

const useStyles = makeStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  row: {
    margin: '10px',
  },
  table: {
    minWidth: 650,
    padding: '',
  },
  content: {
    flexGrow: 1,
    marginLeft: '240px',
    marginTop: '120px',
  },
}));

function createData(
  id,
  nombre,
  descripcion,
  remitente,
  destinatario,
  direccion,
  costo
) {
  return { id, nombre, descripcion, remitente, destinatario, direccion, costo };
}

const rows = [
  createData(
    213213,
    '---x---',
    'x--25--x',
    'x--25--x',
    'x--25--x',
    'x--25--x',
    'x--25--x'
  ),
  createData(
    213213,
    '---x---',
    'x--25--x',
    'x--25--x',
    'x--25--x',
    'x--25--x',
    'x--25--x'
  ),
  createData(
    213213,
    '---x---',
    'x--25--x',
    'x--25--x',
    'x--25--x',
    'x--25--x',
    'x--25--x'
  ),
];

const Almacen = () => {
  const classes = useStyles();

  return (
    <>
      id, nombre, descripcion, remitente, destinatario, direccion, costo
      <DrawerSide title="Almacen" />
      <div className={classes.content}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right">Descripcion</TableCell>
                <TableCell align="right">Remitente</TableCell>
                <TableCell align="right">Destinatario</TableCell>
                <TableCell align="right">Direccion</TableCell>
                <TableCell align="right">Costo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.nombre}</TableCell>
                  <TableCell align="right">{row.descripcion}</TableCell>
                  <TableCell align="right">{row.remitente}</TableCell>
                  <TableCell align="right">{row.destinatario}</TableCell>
                  <TableCell align="right">{row.direccion}</TableCell>
                  <TableCell align="right">{row.costo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Almacen;
