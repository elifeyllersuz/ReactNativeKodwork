import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, ScrollView, useWindowDimensions, View, Alert } from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import styles from './DetailStyle';
import Config from 'react-native-config';
import RenderHTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

const Details = ({ route }) => {
    const { width } = useWindowDimensions();
    const { id } = route.params;

    const { loading, data, error } = useFetch(`${Config.API_DETAILS}${id}`);


    const source = {
        html: data.contents
    }

    if (loading) {
        return <Loading />;
    }

    if (error) {
        //  return <Text>{error}</Text>
        return <Error />;
    }

    const dispatch = useDispatch();
    const jobSubmit = () => {
        Alert.alert('Success')
    }

    const addToFavorites = favoriteJob => {
        dispatch({type : 'ADD_TO_FAVORITES' , payload : {favoriteJob}})
    }
    return (

        <View style={styles.container}>
            <View style={styles.details}>

                <Text style={styles.name}> {data.name}</Text>
                <Text style={styles.location}> Locations: {data.locations[0].name}</Text>
                <Text style={styles.level}>Job Level: {data.levels[0].name}</Text>

                <Text style={styles.title}>Job Details</Text>
            </View>
            <ScrollView style={styles.content_container}>

                <RenderHTML
                    source={source}
                    contentWidth={width} />
            </ScrollView>
            <View style={styles.footer_container}>
                <TouchableOpacity
                onPress={jobSubmit}
                style={styles.button}>
                    <Icon name='login' color='white' size={20} />
                    <Text style={styles.footer_title}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => addToFavorites(data) }
                style={styles.button}>
                    <Icon name='heart' color='white' size={20} />
                    <Text style={styles.footer_title}>Favorite</Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

export default Details;