import React from 'react'
import {View } from 'react-native'
import { Calendar, CalendarList } from 'react-native-calendars'

class DatePickerForm extends React.Component{
    render(){
        return (
            <View>
            <Calendar
                // Initially visible month. Default = Date()
                current={Date()}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={Date()}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                // maxDate={}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {console.log('selected day', day)}}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {console.log('selected day', day)}}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'MMM yyyy'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => {console.log('month changed', month)}}
                // Hide month navigation arrows. Default = false
                // hideArrows={false}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                //renderArrow={(direction) => (<Arrow />)}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={true}
                // Show week numbers to the left. Default = false
                showWeekNumbers={true}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={substractMonth => substractMonth()}
                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                markedDates={{

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