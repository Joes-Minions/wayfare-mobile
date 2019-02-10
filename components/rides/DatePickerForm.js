import React from 'react'
import {View } from 'react-native'
import { Calendar, CalendarList } from 'react-native-calendars'

class DatePickerForm extends React.Component{
    render(){
        return (
            <View>
                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={0}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={3}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}
                    style={{
                        height:'90%',
                        borderWidth:3
                    }}
                />
            
            </View>
        )
    }
}

const styles = {
    calendarContainerStyle: {

    }
}
export default DatePickerForm