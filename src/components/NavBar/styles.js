import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  linkStyle: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  grow: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: '#131921',
    zIndex: 100,
  },
  navLogo: {
    width: 100,
    marginTop: 18,
    marginRight: 10,
  },
  navBarCategory: {
    fontSize: 13,
    padding: 10,
    border: 'none',
    borderRadius: 2,
    backgroundColor: '#F3F3F3',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  navBarStretch: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  navBarsearchInput: {
    height: 18,
    padding: 10,
    border: 'none',
    borderRadius: 2,
    width: '100%',
  },
  navBarOption: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  navBarOptionOne: {
    fontSize: 12,
    height: 17, 
  },
  navBarOptionTwo: {
    fontSize: 14,
    fontWeight: 700, 
  },
  optionBasket: {
    display: 'flex',
    color: 'white',
    alignItems: 'center',
  },
  navBarSearchIcon: {
    height: '28px !important',
    width: '40px !important',
    padding: 5,
    borderRadius: '0 4px 4px 0',
    backgroundColor: '#febd69',
    border: 'none',
    cursor: 'pointer',
    color: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));