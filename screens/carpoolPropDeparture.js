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
        borderRadius: 5,
    },

    buttontext: {
        color: 'pink',
    }
};

const carpoolPropDeparture = props => {

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.text}>D'où partez-vous?</Text>

            <TextInput
                style={styleSheet.input}
                placeholder="Ex: aéroport d'Orly"
            />

            <TouchableOpacity style={styleSheet.button}>
                <Text style={styleSheet.buttontext}> Envoyer </Text>
            </TouchableOpacity>
        </View>
    );
};

carpoolPropDeparture.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(carpoolPropDeparture);