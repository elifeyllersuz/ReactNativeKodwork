import React, { useState,useEffect } from 'react';
import { SafeAreaView, Text, View,StyleSheet ,FlatList,TouchableOpacity} from 'react-native';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import JobCard from '../../components/JobCard/JobCard';
import useFetch from '../../hooks/useFetch/useFetch';


const Jobs = ({navigation}) => {
       const [page,setPage] = useState(1);

    const {loading,data,error} = useFetch(`${Config.API_JOBS}?page=${page}`);
    //console.log(data);

    useEffect(() => {
      page;
    }, []);

    const goToDetail = id => {
       navigation.navigate('Details',{id});
    }

     const increasePage = () => {
      return setPage(page + 1);
    };
    const decreasePage = () => {
      return page === 1 ? setPage(1) : setPage(page - 1);
    };
  
    const renderJob = ({item}) => ( 
      // <Text>{item.locations[0].name}</Text>
     
        
        <JobCard job={item.name} locations={item.locations[0].name} levels={item.levels[0].name}
        onSelect={() => goToDetail(item.id)}/>
        
    
    )
    
    
    if(loading){
        return <Loading/>
      }
    
      if(error){
        return <Error/>
      }

      const Footer = () => {
        return (
          <View style={styles.button_container}>
          <TouchableOpacity onPress={decreasePage}
          >
            <Icon name='arrow-up-drop-circle-outline' size={25}
            style={styles.button}/>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={increasePage}
          >
            <Icon name='arrow-down-drop-circle-outline' size={25}/>
          </TouchableOpacity>
          </View>
        );
      };
    
    return (
        <View style={styles.container} >
           <FlatList
           data={data.results}
           renderItem={renderJob}
           keyExtractor={item => item.id}
           ListFooterComponent={<Footer />}
           />
          
          
        </View>
    )

}

export default Jobs;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f2f2f2',
    
  },
  button_container:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:10
  },
 
})

