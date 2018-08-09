import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class ListItem extends React.Component {
  render() {
    const { item, navigation } = this.props;
    if(!item) return (<View/>)

    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate({ routeName: 'DetailItem', params: { item } }); }}>
            <Image source={require("../../../img/icoRg.png")} style={styles.icoRg} />
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
  }
}
