import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  menu: {
    background: 'red',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    height: '60px'
  },
});

function Menu(props) {
  const { classes } = props;

  return (
    <div className={classes.menu}>Menu</div>
  )
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Menu)

