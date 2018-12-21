import React from 'react';
import { connect } from 'react-redux';
import { ReduxAppNavigator } from './addListener';


class ReduxNavigation extends React.Component {

  render() {
    const { dispatch, nav, navigation } = this.props;

    return (
      <ReduxAppNavigator 
        navigation={navigation} 
        dispatch={dispatch} 
        state={nav} 
      />
    );
  }
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
