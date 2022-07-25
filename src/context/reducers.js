import { useState, useEffect } from "react";
import { Alert } from "react-native";

export default function (state, action) {

    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            const { favoriteJob } = action.payload
            const findJob = state.favoritesList.find(item => item.id === favoriteJob.id)

            if(findJob) {
                Alert.alert('This job is already on your list');
                return state;
            }
            else{
                const newFavoritesList = [...state.favoritesList,favoriteJob];
                return {...state,favoritesList:newFavoritesList}
            }

        case 'REMOVE_JOB':
           return {
            favoritesList : [
                ...state.favoritesList.filter(favorite => favorite !== action.payload.favorite)
            ]
           }

        default:
            return state;

    }


}