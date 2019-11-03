import React, {useEffect} from 'react'
import {BackHandler} from 'react-native'

export default function mapBackhandler(action, aux, state){

    BackHandler.addEventListener("hardwareBackPress", () => {

        if(state == 1){
            aux()
            return true
        }else{
            action()
            return true
        }
        
    })
        
}