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

function createData(id, fecha, destinatario, total) {
  return { id, fecha, destinatario, total };
}

const rows = [
  createData(213213, '---x---', 'x--25--x', 'x--25--x', 'x--25--x'),
];

const Facturas = () => {
  const classes = useStyles();

  return (
    <>
      <DrawerSide title="Facturas" />
      <div className={classes.content}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Fecha</TableCell>
                <TableCell align="right">Destinatario</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.fecha}</TableCell>
                  <TableCell align="right">{row.destinatario}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Facturas;
