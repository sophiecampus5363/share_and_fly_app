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

const feedbackGiven = props => {

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.label}>Avis laissés</Text>

            <Text style={styleSheet.title}>Vous avez laissé NOMBRE avis</Text>


        </View>
    );
};

feedbackGiven.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(feedbackGiven);