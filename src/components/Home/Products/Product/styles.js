import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: 300,
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    "&:hover": {
      boxShadow: '0 0 4px #000',
    },
  },
  title : {
    fontSize: 18,
    paddingRight: 10,
  },
  price : {
    fontSize: 16,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain',
    marginTop: 10,
    transition: 'transform .2s',
    "&:hover": {
      transform: 'scale(1.1)',
    }
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    color: '#FFA41C',
    display: 'flex',
    marginBottom: 20,
    marginLeft: 10,
    flexGrow: 1,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    marginLeft: 15,
    marginRight: 10,
  },
  quantity: {
    fontSize: 10
  }
}));