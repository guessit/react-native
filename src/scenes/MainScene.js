'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  View
} = React;

class MainScene extends React.Component {

  componentWillMount() {
    var navigator = this.props.navigator;

    if (navigator) {
      var adjustNavigationBar = (event) => {
        switch (event.data.route.id) {
          case 'level_scene':
            this.props.showNavigationBar();
            break;
          default:
            this.props.hideNavigationBar();
            break;
        }
      };

      this._listeners = [
        navigator.navigationContext.addListener('willfocus', adjustNavigationBar),
        navigator.navigationContext.addListener('didfocus', adjustNavigationBar)
      ];
    }
  }

  componentWillUnmount() {
    this._listeners && this._listeners.forEach(listener => listener.remove());
  }

  render() {
    return (
      <View
        style={styles.container}
        onTouchStart={(event) => this._handleTouchStart(event)}
      >
        <Image
          style={styles.backgroundImage}
          source={require('image!main_background')}>
          <Text style={styles.title}>Guess It!</Text>
          <Text style={styles.subtitle}>Tap to play!</Text>
        </Image>
      </View>
    );
  }

  _handleTouchStart(event: Object) {
    this.props.navigator.push({
      id: 'level_scene',
      title: 'Guess It!'
    });
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#262626',
    flex: 1,
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  title: {
    color: '#84ff00',
    fontFamily: 'Lobster',
    fontSize: 80,
    marginBottom: -12,
    marginTop: -50,
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 5
  },
  subtitle: {
    color: '#efefef',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'AvenirNextCondensed-Bold'
  }
});

module.exports = MainScene;
