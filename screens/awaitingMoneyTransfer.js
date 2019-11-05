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

const awaitingMoneyTransfer = props => {

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.label}>Virements en attente</Text>
            <Text style={styleSheet.label}>Montant </Text>
            <Text style={styleSheet.title}>L'argent est automatiquement viré sur votre compte</Text>
            <Text style={styleSheet.label}>L'argent est automatiquement viré sur votre compte 48 heures après l'heure de départ prévue.
                Il apparaîtra ensuite sur votre compte bancaire ou Paypal sous 1 à 5 jours ouvrés.
            </Text>
            <Text style={styleSheet.label}>Proposer un trajet </Text>

        </View>
    );
};

awaitingMoneyTransfer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(awaitingMoneyTransfer);