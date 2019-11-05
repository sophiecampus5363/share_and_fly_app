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

const moneyTransferHistory = props => {

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.label}>Historique des virements</Text>
            <Text style={styleSheet.label}>Retrouvez ici les virements en cours ou déjà effectués</Text>
            <Text style={styleSheet.label}>Prénom</Text>
            <Text style={styleSheet.label}>Nombre de places</Text>
            <Text style={styleSheet.label}>Date</Text>
            <Text style={styleSheet.label}>montant</Text>
            <Text style={styleSheet.label}>Ville de départ </Text>
            <Text style={styleSheet.label}>Ville d'arrivée </Text>
            <Text style={styleSheet.label}>Date à laquelle le virement a été effectué</Text>

        </View>
    );
};

moneyTransferHistory.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(moneyTransferHistory);