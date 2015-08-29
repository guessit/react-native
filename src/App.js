'use strict';

var React = require('react-native');
var {
  StyleSheet
} = React;

var Router = require('./Router');

class App extends React.Component {

  render() {
    return (
      <Router style={styles.container} />
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = App;
