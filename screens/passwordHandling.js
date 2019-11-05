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
    },
};

const passwordHandling = props => {

    return (
        <View style={styleSheet.container}>
            <TextInput
                style={styleSheet.input}
                placeholder="Mot de passe actuel"
                />
            <TextInput
                style={styleSheet.input}
                placeholder="Nouveau mot de passe"
            />
            <TextInput
                style={styleSheet.input}
                placeholder="Confirmer le nouveau mot de passe"
            />
            <TouchableOpacity style={styleSheet.button}>
                <Text style={styleSheet.buttontext}> Enregistrer le nouveau mot de passe </Text>
            </TouchableOpacity>
        </View>
    );
};

passwordHandling.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(passwordHandling);