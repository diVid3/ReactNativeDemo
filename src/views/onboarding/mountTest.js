import
  React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

import {
  MountItem
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
  { name: 'item8', height: 129, width: 135 },
  { name: 'item9', height: 157, width: 189 },
  { name: 'item10', height: 128, width: 167 },
  { name: 'item11', height: 184, width: 159 },
  { name: 'item12', height: 106, width: 157 },
  { name: 'item13', height: 151, width: 159 },
  { name: 'item14', height: 140, width: 159 },
];

export class MountTest extends Component {

  flatListRef = null;
  itemHeights = {};
  didScroll = false;

  onFlatlistLayout = (event) => {

    console.warn('Flatlist layout event height is: ', event.nativeEvent.layout.height);
  };

  componentDidMount = () => {

    console.warn('Flatlist mounted!');

    // this.flatListRef.scrollToIndex({
    //   index: 7,
    //   animated: true
    // });
  };

  render = () => {

    return (

      <FlatList
        ref={(ref) => this.flatListRef = ref}
        contentContainerStyle={styles.container}
        data={itemsMock}
        keyExtractor={(item) => item.name}
        renderItem={({item, index}) =>

          <MountItem
            height={item.height}
            width={item.width}
            name={item.name}/>
        }
        onLayout={this.onFlatlistLayout}>

      </FlatList>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
