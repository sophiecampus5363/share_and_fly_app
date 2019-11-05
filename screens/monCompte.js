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

const monCompte = props => {

    return (
        <View style={styleSheet.container}>

            <Text style={styleSheet.title}>Avis</Text>

            <Text style={styleSheet.text}>Avis reçus</Text>
            <Text style={styleSheet.text}>Avis laissés</Text>

            <Text style={styleSheet.title}>Préférences</Text>

            <Text style={styleSheet.text}>Notifications et communication</Text>
            <Text style={styleSheet.text}>Mot de passe</Text>
            <Text style={styleSheet.text}>Adresse postale</Text>

            <Text style={styleSheet.title}>Argent</Text>
            <Text style={styleSheet.text}>Virements en attente</Text>
            <Text style={styleSheet.text}>Historique de réservation</Text>
            <Text style={styleSheet.text}>Préférences de virement</Text>
            <Text style={styleSheet.text}>Historique des virements</Text>

            <Text style={styleSheet.title}>A propos</Text>

            <Text style={styleSheet.text}>Aide</Text>
            <Text style={styleSheet.text}>Conditions générales</Text>
            /*renvoie vers le site*/
            <Text style={styleSheet.text}>Protection des données</Text>
            /*renvoie vers le site ou le blog*/
            <Text style={styleSheet.text}>Licences</Text>
            /*renvoie vers les licences (?)*/

            <Text style={styleSheet.text}>DECONNEXION</Text>
        </View>
    );
};

monCompte.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(monCompte);