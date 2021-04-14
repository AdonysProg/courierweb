import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import DrawerSide from '../../components/DrawerSide';
import {
  Table,
  TableContainer,
  Paper,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  head: {
    backgroundColor: '#ff0000',
  },
  row: {
    marginBottom: '1rem',
  },
  table: {
    padding: '',
  },
  content: {
    flexGrow: 1,
    marginLeft: '300px',
    marginRight: '50px',
    marginTop: '120px',
  },
  cell: {
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.1rem',
  },
}));

const Paquetes = () => {
  const classes = useStyles();
  const data = [
    {
      id: '123',
      nombre: 'pepe',
      descripcion: '123',
      remitente: '123',
      destinatario: '123',
      direccion: '123',
      costo: '123',
    },
    {
      id: '123',
      nombre: 'pepe',
      descripcion: '123',
      remitente: '123',
      destinatario: '123',
      direccion: '123',
      costo: '123',
    },
    {
      id: '123',
      nombre: 'pepe',
      descripcion: '123',
      remitente: '123',
      destinatario: '123',
      direccion: '123',
      costo: '123',
    },
  ];

  return (
    <>
      <div>
        <DrawerSide title="Paquetes en Almacén" arial="paquetes" />
      </div>
      <div className={classes.content}>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead className={classes.head}>
              <TableRow>
                <TableCell align="center" className={classes.cell}>
                  ID
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  Nombre
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  Descripción
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  Remitente
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  Destinatario
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  Dirección - Destinatario
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  Costo de envío
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow className={classes.row}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.nombre}</TableCell>
                  <TableCell align="center">{row.descripcion}</TableCell>
                  <TableCell align="center">{row.remitente}</TableCell>
                  <TableCell align="center">{row.destinatario}</TableCell>
                  <TableCell align="center">{row.direccion}</TableCell>
                  <TableCell align="center">{row.costo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Paquetes;
