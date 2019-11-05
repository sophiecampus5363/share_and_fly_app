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

const bookingHistory = props => {

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.label}>Historique de réservation</Text>
            <Text style={styleSheet.label}>Retrouvez ici tous vos paiements effectués sur l'application ainsi que vos remboursements en cours ou effectués</Text>
            <Text style={styleSheet.label}>Date</Text>
            <Text style={styleSheet.label}>montant</Text>
            <Text style={styleSheet.label}>Ville de départ </Text>
            <Text style={styleSheet.label}>Ville d'arrivée </Text>
            <Text style={styleSheet.label}>Nombre de places </Text>

        </View>
    );
};

bookingHistory.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(bookingHistory);