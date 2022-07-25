import React from 'react';
import { SafeAreaView, Text, View,TouchableOpacity,StyleSheet ,FlatList} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';

const Favorites = () => {

    const favoritesList = useSelector(s => s.favoritesList)
    const dispatch = useDispatch();

    const removeJob = item => {
        dispatch({type:'REMOVE_JOB', payload : {favoriteJob : item}})
    }

    const renderFavorites = ({item}) => (
        <View>
       <JobCard job={item.name} locations={item.locations[0].name} levels={item.levels[0].name}
       onSelect={() => removeJob(item)}
     />
        <TouchableOpacity
        style = {styles.button}
        onPress={() => removeJob(item)}>
         <Text style={styles.text}>Remove</Text>
        </TouchableOpacity>
        </View>
    )
    return (
        <SafeAreaView>
          <FlatList
          data={favoritesList}
          renderItem={renderFavorites}/>
        </SafeAreaView>
    )

}

export default Favorites;

const styles = StyleSheet.create({

    button : {
        backgroundColor : '#ef5350',
        alignItems:'center',
        alignSelf:'center',
        width:200,
        borderRadius:10
    },
    text:{
        color :'white',
        fontSize:20,
        fontWeight:'bold'
    }
})

