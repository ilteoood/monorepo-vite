import React, {useEffect, useState} from 'react'
import dayjs from 'dayjs'
import startCase from 'lodash/startCase'

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(dayjs().format())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format())
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
