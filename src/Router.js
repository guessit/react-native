'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Navigator,
  Text,
  TouchableOpacity
} = React;

var MainScene = require('./scenes/MainScene');
var LevelScene = require('./scenes/LevelScene');

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (route.id === 'main_scene') {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarLeftButtonText]}>
          &lt;
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    if (route.id === 'main_scene') {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={() => navigator.push({
        })}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarRightButtonText]}>
          ?
        </Text>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    if (route.id === 'main_scene') {
      return null;
    }

    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  }

};

class Router extends React.Component {

  constructor(props: {}) {
    super(props);
    this.state = {
      isNavigationBarHidden: false
    };
  }

  render() {
    var props = {
      style: styles.container,
      initialRoute: {
        id: 'main_scene'
      },
      renderScene: (route, nav) => {
        switch (route.id) {
          case 'level_scene':
            return (
              <LevelScene
                navigator={nav}
                hideNavigationBar={this._hideNavigationBar.bind(this)}
                showNavigationBar={this._showNavigationBar.bind(this)}
              />
            );
          default:
            return (
              <MainScene
                navigator={nav}
                hideNavigationBar={this._hideNavigationBar.bind(this)}
                showNavigationBar={this._showNavigationBar.bind(this)}
              />
            );
        }
      },
      configureScene: (route) => Navigator.SceneConfigs.HorizontalSwipeJump
    };

    if (!this.state.isNavigationBarHidden) {
      props.navigationBar = (
        <Navigator.NavigationBar
          routeMapper={NavigationBarRouteMapper}
          style={styles.navBar}
        />
      );
    }

    return <Navigator {...props} />;
  }

  _hideNavigationBar() {
    if (!this.state.isNavigationBarHidden) {
      this.setState({
        isNavigationBarHidden: true
      });
    }
  }

  _showNavigationBar() {
    if (this.state.isNavigationBarHidden) {
      this.setState({
        isNavigationBarHidden: false
      });
    }
  }
}

var styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#262626'
  },
  navBarLeftButtonText: {
    fontFamily: 'EuphemiaUCAS',
    fontSize: 28,
    marginTop: 2,
    paddingLeft: 20,
  },
  navBarRightButtonText: {
    fontFamily: 'JotiOne-Regular',
    fontSize: 34,
    paddingRight: 20
  },
  navBarText: {
    color: '#84ff00'
  },
  navBarTitleText: {
    fontFamily: 'Lobster',
    fontSize: 30,
    marginTop: 0,
    paddingLeft: 2,
    paddingRight: 2
  }
});

module.exports = Router;
