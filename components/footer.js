import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    background: 'blue',
    color: '#fff',
    height: '60px',
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.footer}>Footer</div>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Footer)
