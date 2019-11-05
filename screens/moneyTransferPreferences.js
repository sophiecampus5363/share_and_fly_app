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
    information: {
        color: 'grey',
    },
    input: {
        width: '50%',
        height : 40,
        borderColor: 'gray',
        borderWidth: 1,
    }
};

const moneyTransferPreferences = props => {

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.label}>Sur quel compte souhaitez-vous recevoir l'argent disponible?</Text>
            <Text style={styleSheet.label}>Virement</Text>
            <Text style={styleSheet.label}>Titulaire du compte</Text>
            <Text style={styleSheet.information}>Prénom Nom</Text>
            <Text style={styleSheet.label}>Nom de l'établissement </Text>
            <Text style={styleSheet.information}>Nom de l'agence </Text>
            <Text style={styleSheet.label}>IBAN </Text>
            <Text style={styleSheet.information}>chiffres de l'iban </Text>
            <Text style={styleSheet.label}>métode de paiement par défaut (modifier) </Text>
            <Text style={styleSheet.label}>PayPal </Text>
            <Text style={styleSheet.information}> Pour ajouter votre compte PayPal, saisissez votre adresse e-mail </Text>
            <TouchableOpacity style={styleSheet.button}>
                <Text style={styleSheet.buttontext}> Ajouter un compte </Text>
            </TouchableOpacity>

        </View>
    );
};

moneyTransferPreferences.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(moneyTransferPreferences);