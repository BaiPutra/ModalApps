import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export default class FlatListComponent extends Component {
  state = {
    is_food: true,
    // is_transport: true,
    // is_payments: false,
  };

  handlePayments = () => {
    this.setState({
      is_payments: true,
      is_transport: false,
      is_food: false,
    });
  };

  handleFood = () => {
    this.setState({
      is_payments: false,
      is_transport: false,
      is_food: true,
    });
  };

  handleTransport = () => {
    this.setState({
      is_payments: false,
      is_transport: true,
      is_food: false,
    });
  };

  render() {
    return (
      <View>
        <View style={{paddingTop: 20, paddingLeft: 20, paddingBottom: 5}}>
          <Text style={{fontWeight: 'bold', fontSize:16}}>Top Picks For You</Text>
        </View>
        <View>
          <Text>{this.state.title}</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={[
                styles.loginButton,
                {
                  backgroundColor: this.state.is_food ? '#30B055' : 'white',
                },
              ]}
              onPress={this.handleFood}>
              <Text
                style={{
                  color: this.state.is_food ? 'white' : '#2C2C2C',
                  fontWeight: this.state.is_food ? 'bold' : '100',
                  fontSize: 12,
                }}>
                Food
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.loginButton,
                {
                  backgroundColor: this.state.is_transport
                    ? '#30B055'
                    : 'white',
                },
              ]}
              onPress={this.handleTransport}>
              <Text
                style={{
                  color: this.state.is_transport ? 'white' : '#2C2C2C',
                  fontWeight: this.state.is_transport ? 'bold' : '100',
                  fontSize: 12,
                }}>
                Transport
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.loginButton,
                {
                  backgroundColor: this.state.is_payments ? '#30B055' : 'white',
                },
              ]}
              onPress={this.handlePayments}>
              <Text
                style={{
                  color: this.state.is_payments ? 'white' : '#2C2C2C',
                  fontWeight: this.state.is_payments ? 'bold' : '100',
                  fontSize: 12,
                }}>
                Payments
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginButton: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 120,
    marginBottom: 40,
  },
});

// import React, {Component} from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Modal,
//   Image,
//   Dimensions,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Fontisto';
// Icon.loadFont();
// const myIcon = <Icon name="close" size={30} color="#900" />;
//
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
//
// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'EVOS Legend',
//     info:
//       'Merupakan salah satu tim E-Sport di Indonesia yang sangat kuat dan juga telah membawa nama Indonesia di turnamen Internasional',
//     url:
//       'https://www.gametweeps.com/wp-content/uploads/2019/07/Joey-Evos-3.jpg',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Onic ESport',
//     info:
//       'Merupakan salah satu tim E-Sport di Indonesia yang sangat kuat dan juga telah membawa nama Indonesia di turnamen Internasional',
//     url:
//       'https://merahputih.com/media/50/ab/dd/50abdd6b69a9a060bab1d4b25ef0253d.JPG',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'RRQ Hoshi',
//     info:
//       'Merupakan salah satu tim E-Sport di Indonesia yang sangat kuat dan juga telah membawa nama Indonesia di turnamen Internasional',
//     url: 'https://redeem.duniagames.co.id/image/jpg/149340/1000/571',
//   },
// ];
//
// function Item({title, onPress}) {
//   return (
//     <TouchableOpacity onPress={() => onPress()}>
//       <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }
//
// export default class App extends Component {
//   state = {
//     is_visible_modal: false,
//     title: '',
//     info: '',
//     url: '',
//   };
//
//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <View>
//           <Text style={styles.header}>
//             Top Three Mobile Legend E-Sport Team
//           </Text>
//         </View>
//         <FlatList
//           data={DATA}
//           renderItem={({item}) => (
//             <Item
//               onPress={() =>
//                 this.setState({
//                   is_visible_modal: true,
//                   title: item.title,
//                   info: item.info,
//                   url: item.url,
//                 })
//               }
//               title={item.title}
//             />
//           )}
//           keyExtractor={item => item.id}
//         />
//         <Modal
//           animationType="fade"
//           transparent={true}
//           visible={this.state.is_visible_modal}
//           onRequestClose={data => this.setState({is_visible_modal: true})}>
//           <View
//             style={{
//               // flex: 1,
//               backgroundColor: '#F9FAFC',
//             }}>
//             <TouchableOpacity
//               onPress={() => this.setState({is_visible_modal: false})}>
//               <View
//                 style={{
//                   // marginTop: 40,
//                   // width: 80,
//                   // height: 30,
//                   // backgroundColor: '#909090',
//                   alignItems: 'flex-end',
//                   padding: 25,
//                   // alignItems: 'center',
//                   // borderRadius: 10,
//                 }}>
//                 {myIcon}
//               </View>
//             </TouchableOpacity>
//             <View
//               style={{
//                 alignItems: 'center',
//                 paddingLeft: 35,
//                 paddingRight: 35,
//               }}>
//               <Image
//                 style={{
//                   width: windowWidth * 0.75,
//                   height: (windowHeight * 2) / 4,
//                   borderTopLeftRadius: 20,
//                   borderTopRightRadius: 20,
//                 }}
//                 source={{
//                   uri: this.state.url,
//                 }}
//               />
//               <View
//                 style={{
//                   width: 310,
//                   height: 40,
//                   backgroundColor: '#E5E5E5',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   borderBottomLeftRadius: 20,
//                   borderBottomRightRadius: 20,
//                   marginBottom: 30,
//                 }}>
//                 <Text>{this.state.title}</Text>
//               </View>
//               <Text>{this.state.info}</Text>
//             </View>
//           </View>
//         </Modal>
//       </SafeAreaView>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 30,
//     backgroundColor: '#F9FAFC',
//   },
//   item: {
//     backgroundColor: '#459CDD',
//     padding: 19,
//     marginVertical: 13,
//     marginHorizontal: 32,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//
//     elevation: 3,
//   },
//   title: {
//     color: 'white',
//     fontSize: 20,
//   },
//   header: {
//     fontSize: 20,
//     paddingBottom: 36,
//     paddingLeft: 26,
//     fontWeight: 'bold',
//   },
// });
