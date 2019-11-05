import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button, Dimensions, AsyncStorage, TouchableOpacity} from "react-native";
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
        backgroundColor: 'white',
        borderRadius: 5,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        radius: 5
    },
};

const carpoolSearch = props => {

return (
    <View style={styleSheet.container}>
        <Text style={styleSheet.label}>Rechercher un trajet</Text>
        <Text style={styleSheet.label}>Adresse de départ</Text>
        <TextInput
            style={styleSheet.input}
        />
        <Text style={styleSheet.label}>Adresse de d'arrivée</Text>
        <TextInput
            style={styleSheet.input}
        />
        <Text style={styleSheet.label}>Date et heure</Text>
        <TextInput
            style={styleSheet.input}
        />
        <TouchableOpacity style={styleSheet.button}>
            <Text> Rechercher </Text>
        </TouchableOpacity>
    </View>
);
};

carpoolSearch.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(carpoolSearch);