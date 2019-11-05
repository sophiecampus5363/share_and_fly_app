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
            <Text style={styleSheet.label}>Adresse postale</Text>
            <Text style={styleSheet.label}>Prénom</Text>
            <TextInput
                style={styleSheet.input}
                placeholder="Mot de passe actuel"
            />
            <Text style={styleSheet.label}>Nom</Text>
            <TextInput
                style={styleSheet.input}
                placeholder="Nouveau mot de passe"
            />
            <Text style={styleSheet.label}>Numéro de rue, rue, boîte postale...</Text>
            <TextInput
                style={styleSheet.input}
                placeholder="Confirmer le nouveau mot de passe"
            />
            <Text style={styleSheet.label}>Bâtiment, étage, appartement...</Text>
            <TextInput
                style={styleSheet.input}
            />
            <Text style={styleSheet.label}>Code postal</Text>
            <<TextInput
                style={styleSheet.input}
                />
            <Text style={styleSheet.label}>Ville</Text>
            <TextInput
                style={styleSheet.input}
            />
            <Text style={styleSheet.label}>Pays</Text>
            <TextInput
                style={styleSheet.input}
            />
            <Text style={styleSheet.label}>
                Nous ne diffuserons jamais votre adresse postale sur l'application. En cliquant sur "confirmer", vous nous
                autorisez simplement à partager votre adresse postale avec Total en vue de l'envoi de votre carte de bienvenue et acceptez
                les conditions générales de l'offre.
            </Text>
            <Text style={styleSheet.label}>
                Voir les conditions
            </Text>
            <TouchableOpacity style={styleSheet.button}>
                <Text style={styleSheet.buttontext}> Enregistrer</Text>
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