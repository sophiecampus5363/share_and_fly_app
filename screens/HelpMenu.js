import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button, Dimensions, AsyncStorage} from "react-native";
import * as navigation from "react-navigation";

const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightskyblue',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
    },
    label: {
        color: 'black',
    },
    input: {
        width: '50%',
        height : 40,
        borderColor: 'gray',
        borderWidth: 1,
    }
};

const HelpMenu = props => {

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.label}>Comment ça marche</Text>
            <Text style={styleSheet.label}>FAQ</Text>
            <Text style={styleSheet.label}>Assurance</Text>
            <Text style={styleSheet.label}>Nous contacter</Text>
        </View>
    //    renvoie vers site qui répond aux différents besoins d'aide
    );
};

HelpMenu.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(HelpMenu);