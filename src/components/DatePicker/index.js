import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Calendar from '../Calendar'
import classNames from 'classname'
import { IntlProvider } from 'react-intl'
import en from '../../languages/en'
import zh_CN from '../../languages/zh-CN'
import EnhanceCalendar from '../Calendar/EnhanceCalendar'

const messages = {
  en: en,
  cn: zh_CN
}

class DatePicker extends React.Component {

  constructor(props) {
    super(props)
    const { defaultValue } = props
    this.state = {
      defaultValue: defaultValue     // default is today
    }
  }

  render() {
    const {
      language = 'cn',
	    startDate,
	    endDate,
      hoveringDate,
      className,
    } = this.props
    const cls = classNames({
      [className]: !!className,
      'rdp-datepicker-container': true
    })
    return (
      <IntlProvider locale='en' messages={ messages[language] }>
        <div className={cls}>
          <Calendar
            { ...this.props }
            startDate={ startDate || hoveringDate }
            endDate={ endDate || hoveringDate }
          />
        </div>
      </IntlProvider>
    )
  }
}

DatePicker.propTypes = {
  // default selected dates
  defaultDate: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  // init visible current month, default is current month
  defaultValue: PropTypes.object,
  // set range
  ranges: PropTypes.array
}

DatePicker.defaultProps = {
  defaultValue: moment(),
  defaultDate: null,
  ranges: [],
  dateOnly: false
}

export default EnhanceCalendar(DatePicker)
