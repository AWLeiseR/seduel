/* COMPATIVEL APENAS COM HOOKS */

import React, {useEffect} from 'react'
import {BackHandler} from 'react-native'

export default function backhandler(action){

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            action()
            return true
        });
    
        return () => {
          BackHandler.removeEventListener("hardwareBackPress", () => action());
        };
      }, []);
}