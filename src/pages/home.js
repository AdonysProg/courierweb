import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardDashboard from '../components/CardDashboard';
import Box from '@material-ui/core/Box';
import DrawerSide from '../components/DrawerSide';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DrawerSide title="Dashboard" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box display="flex" flexBasis="33.3333%" flexWrap="wrap">
          <CardDashboard cantidad="999,999" title="Almacen 1" />
          <CardDashboard cantidad="999,999" title="Almacen 2" />
          <CardDashboard cantidad="999,999" title="Almacen 3" />
          <CardDashboard cantidad="999,999" title="Almacen 4" />
          <CardDashboard cantidad="999,999" title="Almacen 5" />
        </Box>
      </main>
    </div>
  );
}

export default Home;
