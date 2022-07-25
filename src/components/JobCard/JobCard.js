import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './JobCardStyle'

const JobCard = ({ job, locations, levels , onSelect }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <Text style={styles.title}>{job}</Text>
                    <View style={styles.content_container}>
                        <View style={styles.info_container}>
                            <Text style={styles.location_title}>{locations}</Text>
                        </View>
                        <View style={styles.level_container}>
                            <Text style={styles.level_title}>{levels}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default JobCard;