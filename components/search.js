import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  search: {
    background: 'yellow',
    width: '400px',
    height: '60px',
    margin: '0 auto'
  },
});

function Search(props) {
  const { classes } = props;

  return (
    <div className={classes.search}>Search form goes here</div>
  )
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Search)
