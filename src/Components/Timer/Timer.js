import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { DateTime } from 'luxon'

import Styles from './Styles'

export const useTime = (refreshCycle = 100) => {
    const [now, setNow] = useState(getTime())

    useEffect(() => {
        const intervalId = setInterval(
            () => setNow(getTime()),
            refreshCycle,
        )

        return () => clearInterval(intervalId)
        },
        [refreshCycle, setInterval, clearInterval, setNow, getTime]
    )
  return now
}

export const getTime = () => {

  return DateTime.local()
}

const Countdown = ({ end }) => {
    const now = useTime(200)

    const diff = end.diff(now)

    const formattedDuration = diff.shiftTo('days', 'hours', 'minutes', 'seconds', 'milliseconds').toObject()


    if(formattedDuration.days <= 0 && formattedDuration.hours <= 0 && formattedDuration.minutes <= 0 && formattedDuration.seconds <= 0 ) {
        return(
            <View>
                <Text style={Styles.text}><Text style={Styles.Number}>Começou o Evento!</Text></Text>
            </View>
        )
    } else if (formattedDuration.days <= 0 && formattedDuration.hours <= 0 && formattedDuration.minutes <= 0) {
        return(
            <View>
                <Text style={{ fontSize: Dimensions.get('screen').fontScale*13.5 }}>faltam apenas</Text>
                <View style={{alignItems:'center'}}>
                    <Text style={Styles.text}><Text style={[Styles.Number, { fontSize: Dimensions.get('screen').fontScale*24, alignSelf: 'center' }]}>{ formattedDuration.seconds }</Text></Text>
                    <Text style={{ fontSize: Dimensions.get('screen').fontScale*13.5 }} >segundos</Text>
                </View>
            </View>
        )
    } else {
        return(
            <View style={{alignItems:'center'}}>
                <Text style={{ fontSize: Dimensions.get('screen').fontScale*13.5 }}>faltam apenas</Text>
                <Text style={Styles.text}><Text style={Styles.Number}>{formattedDuration.days > 0 ? formattedDuration.days : ''}</Text>{ formattedDuration.days > 0 ? ' dias ' : '' }<Text style={Styles.Number}>{formattedDuration.hours > 0 || formattedDuration.days > 0 ? formattedDuration.hours : ''}</Text>{formattedDuration.hours > 0 || formattedDuration.days > 0 ? ' horas ' : ''}<Text style={Styles.Number}>{formattedDuration.minutes}</Text> minutos <Text style={Styles.Number}>{formattedDuration.seconds.toFixed(0)}</Text> segundos</Text>
            </View>
        )
    }
}

export default Countdown