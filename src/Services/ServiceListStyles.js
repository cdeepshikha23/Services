import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,

    },
    rowStyles: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,

        elevation: 4
    },
    leftStyle: {
        flex: 0.7,
    },
    rightStyle: {
        flex: 0.3,
    },
    headerStyles: {
        color: 'green',
        fontSize: 20,
    },
    contentStyle: {


    },
    viewStyle: {
        
    },
    buttonStyle: {
        flex:0.3,
        backgroundColor:'orange',
        flexDirection: 'row',
        marginVertical: 13,
        marginHorizontal:35,
        elevation: 4,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    buttoTextStyle: {
        fontSize: 20,
        fontWeight:'bold',
        color:'white'
        
    }

})
export default Styles;