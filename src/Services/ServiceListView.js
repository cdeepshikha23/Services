import React, { Component, useState } from 'react';
import Styles from './ServiceListStyles';
import { View, Container, Left, Right } from 'native-base';
import { Text, FlatList, Image, TouchableOpacity } from 'react-native';


const RenderItem = ({ id, item, changeCheck}) => {
    
console.log(item.check)
  return (
    <TouchableOpacity onPress={() => changeCheck(id)}>
      <View style={Styles.rowStyles}>
        <Left style={Styles.leftStyle}>
          <Text style={Styles.headerStyles}> {item.title} </Text>
          <Text style={Styles.contentStyle}> {item.description} </Text>
        </Left>
        <Right style={Styles.rightStyle}>
          <Image
            source={item.check ? require('../assets/image_2.png') : require('../assets/image_1.png')}
          />
        </Right>
      </View>
    </TouchableOpacity >
  )


}



const ServiceListView = (props) => {
  const {changeCheck,Data } = props
  
    
  return (
    <Container style={Styles.container}>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RenderItem
          item={item}
          id={item.id}
          changeCheck={() => changeCheck(item.id)}
        />}
      />

      <TouchableOpacity style={Styles.buttonStyle}>
        <Text style={Styles.buttoTextStyle}>Assign A Payment Method</Text>
      </TouchableOpacity>

    </Container>


  );

}
export default ServiceListView;