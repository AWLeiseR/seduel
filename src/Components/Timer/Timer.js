import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
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

    return (
        <View>
            <Text style={Styles.text}><Text style={Styles.Number}>{formattedDuration.days}</Text> dias <Text style={Styles.Number}>{formattedDuration.hours}</Text> horas <Text style={Styles.Number}>{formattedDuration.minutes}</Text> minutos <Text style={Styles.Number}>{formattedDuration.seconds.toFixed(0)}</Text> segundos</Text>
        </View>
    )
}

export default Countdown