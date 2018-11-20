/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import { incrementCount, decrementCount, resetCount } from '../../store';

/* Next JS */
import Head from 'next/head';
import Link from 'next/link';

/* Material UI */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

/* Internals */
import Page from '../../layouts/main';
import Search from '../../components/search';


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  section: {
    height: '200px',
  },
  button: {
    marginRight: '5px',
    marginLeft: '5px',
  }
});

class Index extends React.Component {
  state = {
    open: false,
  };

  increment = () => {
    const {dispatch} = this.props
    dispatch(incrementCount())
  }

  decrement = () => {
    const {dispatch} = this.props
    dispatch(decrementCount())
  }

  reset = () => {
    const {dispatch} = this.props
    dispatch(resetCount())
  }

  render() {
    const { count, classes } = this.props;

    return (
      <Page>
        <Head>
          <title>Homepage</title>
        </Head>
        <div className={classes.root}>
          <Search />
          <section className={classes.section}>
            <Typography variant="h4" gutterBottom>
              Section 1
            </Typography>
          </section>
          <section className={classes.section}>
            <Typography variant="h4" gutterBottom>
              Section 2
            </Typography>
          </section>
          <Search />
          <div>
            <h1>Count: <span>{count}</span></h1>
            <Button size="small" className={classes.button} onClick={this.increment} variant="contained" color="primary">
              +1
            </Button>
            <Button size="small" className={classes.button} onClick={this.decrement} variant="contained" color="secondary">
              -1
            </Button>
            <Button size="small" className={classes.button} onClick={this.reset} variant="outlined" color="primary">
              Reset
            </Button>
          </div>
        </div>
      </Page>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps (state) {
  const { count } = state;
  return { count }
}

export default withStyles(styles)(connect(mapStateToProps)(Index));
