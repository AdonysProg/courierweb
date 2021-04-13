import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
  WalletOutlined,
  InboxOutlined,
  SettingOutlined,
  HomeOutlined,
} from '@ant-design/icons';
const drawerWidth = 240;

const { SubMenu } = Menu;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: 'red',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    '&:visited': {
      color: '#000',
    },
  },
}));

const DrawerSide = ({ title, ...props }) => {
  const { window } = props;
  const classes = useStyles();

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Menu
        onClick={() => {}}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item>
          <Link to="/home">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Dashboard
            </Menu.Item>
          </Link>
        </Menu.Item>
        <SubMenu key="sub2" icon={<InboxOutlined />} title="Almacen">
          <Menu.Item>
            <Link to="/almacen">
              <Menu.Item key="2">Total de paquetes</Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">Paquetes enviados</Menu.Item>
          <Menu.Item key="4">Paquetes en almacen</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Clientes">
          <Menu.Item key="9">Remitente</Menu.Item>
          <Menu.Item key="10">Destinatario</Menu.Item>
        </SubMenu>
        <Menu.Item>
          <Link to="/facturas">
            <Menu.Item key="11" icon={<WalletOutlined />}>
              Facturas
            </Menu.Item>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default DrawerSide;
