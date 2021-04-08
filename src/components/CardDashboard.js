import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
    width: '220px',
    height: '120px',
    backgroundColor: 'red',
    borderRadius: 20,
    textAlign: 'center',
    color: 'white',
    margin: theme.spacing(2),
  },
}));
const CardDashboard = ({ cantidad, title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h4">{cantidad}</Typography>
      <Typography>{title}</Typography>
    </Box>
  );
};

export default CardDashboard;
