import
  React, {
  Component
} from 'react';

import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import {
  Dropdown
} from './components';

const itemsMock = [
  { name: 'item0', height: 100, width: 100 },
  { name: 'item1', height: 124, width: 142 },
  { name: 'item2', height: 170, width: 112 },
  { name: 'item3', height: 137, width: 200 },
  { name: 'item4', height: 200, width: 173 },
  { name: 'item5', height: 127, width: 178 },
  { name: 'item6', height: 189, width: 144 },
  { name: 'item7', height: 184, width: 137 },
];

const dropdownItems = [
  { name: 'item8', height: 129, width: 135 },
  { name: 'item9', height: 157, width: 189 },
  { name: 'item10', height: 128, width: 167 },
  { name: 'item11', height: 184, width: 159 },
  { name: 'item12', height: 106, width: 157 },
  { name: 'item13', height: 151, width: 159 },
  { name: 'item14', height: 140, width: 159 },
];

export class BridgeProblem extends Component {

  state = {
    components: []
  };

  scrollViewRef = null;
  shouldScroll = false;

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

  setShouldScroll = (value) => {

    this.shouldScroll = value;
  };

  scrollToEnd = () => {

    if (!this.scrollViewRef) {
      return;
    }

    this.scrollViewRef.scrollToEnd({
      animated: true
    });
  };

  componentDidMount = () => {

  };

  componentDidUpdate = () => {

  };

  render = () => {

    const components = this.createComponents(itemsMock);

    return (

        <ScrollView
          ref={(ref) => this.scrollViewRef = ref}
          onContentSizeChange={() => {

            // if (this.shouldScroll) {

            //   this.shouldScroll = false;
            //   this.scrollToEnd();
            // }
          }}>

          { components }

          <Dropdown
            items={dropdownItems}
            scrollToEnd={this.scrollToEnd}
            setShouldScroll={this.setShouldScroll}/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
