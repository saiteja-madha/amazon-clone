import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import MoreIcon from '@material-ui/icons/MoreVert'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import HistoryIcon from '@material-ui/icons/History'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../../contexts/StateProvider';
import { auth } from '../../lib/firebase';

import useStyles from './styles'

const NavBar = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [{ basket, user },] = useStateValue();
  const history = useHistory();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleAuthentication = () => {
    console.log('HANDLE AUTHENTICATION', user)
    if (user) {
      auth.signOut().then(_ => {
        console.log('LOGGED OUT')
      }).catch(e => {
        console.warn(e.message)
      })
    } else {
      history.push('/login');
    }
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleAuthentication}>
          <IconButton color='inherit'>
            <ExitToAppIcon />
          </IconButton>
          <p>{user ? 'Sign out' : 'Sign In'}</p>
      </MenuItem>
      <Link to='/orders' className={classes.linkStyle}>
        <MenuItem>
          <IconButton color='inherit'>
            <HistoryIcon />
          </IconButton>
          <p>Returns & Orders</p>
        </MenuItem>
      </Link>
      <Link to='/cart' className={classes.linkStyle}>
        <MenuItem>
          <IconButton color='inherit'>
            <Badge badgeContent={basket?.length} color='secondary'>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='static' className={classes.navBar}>
        <Toolbar>
          <Link to='/' className={classes.linkStyle}>
            <img className={classes.navLogo} src='../../img/amazon_nav.png' alt='Amazon Logo' />
          </Link>
          <div className={classes.navBarLocation}>
            <LocationOnIcon className={classes.navBarLocationIcon} />
            <div className={classes.navBarOption}>
              <span className={classes.navBarOptionOne}>Hello</span>
              <span className={classes.navBarOptionTwo}>Select your address</span>
            </div>
          </div>
          <div className={classes.navBarStretch}>
            <select className={classes.navBarCategory}>
              <option value='all'>All</option>
              <option value='deals'>Deals</option>
            </select>
            <input className={classes.navBarsearchInput} type='text' />
            <SearchIcon className={classes.navBarSearchIcon} />
          </div>
          <div className={classes.sectionDesktop}>
            <div onClick={handleAuthentication} className={classes.navBarOption}>
              <span className={classes.navBarOptionOne}>Hello, {user ? 'Sign out' : 'Sign In'}</span>
              <span className={classes.navBarOptionTwo}>Account & Lists</span>
            </div>
            <Link to='/orders' className={classes.linkStyle}>
              <div className={classes.navBarOption}>
                <span className={classes.navBarOptionOne}>Returns</span>
                <span className={classes.navBarOptionTwo}>& Orders</span>
              </div>
            </Link>
            <Link to='/cart' className={classes.linkStyle}>
              <div className={classes.optionBasket}>
                <Badge badgeContent={basket?.length} color='secondary'>
                  <ShoppingCartIcon style={{ marginLeft: 2, marginRight: '-5px' }} />
                </Badge>
                <div className={classes.navBarOption}>
                  <span className={classes.navBarOptionTwo}>Cart</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}


export default NavBar;