import React, {useEffect, useState} from 'react'
import moment from 'moment'
import {startCase} from 'lodash'

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(moment().format())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format())
    })
    return () => clearInterval(interval)
  })

  return (
      <div>
        {startCase('current date time: ')} {currentTime}
      </div>
  )
}

export default DateTime
