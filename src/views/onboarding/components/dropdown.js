import
  React, {
  Component
} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export class Dropdown extends Component {

  state = {
    isOpen: false,
    components: []
  };

  createComponents = (items) => {

    const components = [];

    for (const item of items) {

      components.push(

        <View
          key={item.name}
          style={styles.row}>

          <View style={[
            styles.rect,
            {
              height: item.height,
              width: item.width
            }
          ]}>

            <Text>
              {item.name}
            </Text>
          </View>
        </View>
      );
    }

    return components;
  };

  onPress = () => {

    this.setState({
      isOpen: !this.state.isOpen
    });

    // this.props.scrollToEnd();
    // setTimeout(this.props.scrollToEnd, 100);
    // this.props.setShouldScroll(true);

    // console.warn('triggered scroll to end!');
  };

  componentDidUpdate = () => {

    // this.props.scrollToEnd();
  };

  componentDidMount = () => {
    
  };

  render = () => {

    const components = this.createComponents(this.props.items);

    return (

      <View
        style={styles.container}>

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}>

            <Text>

              { this.state.isOpen
                  ? 'Close'
                  : 'Open'
              }
            </Text>
          </TouchableOpacity>          
        </View>

        { this.state.isOpen
            ? components
            : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddf',
    borderRadius: 5,
    borderColor: '#aaa',
    paddingVertical: 10,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  rect: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddf',
  },
});
