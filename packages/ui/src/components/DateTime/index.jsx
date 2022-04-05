import React, {useEffect, useState} from 'react'
import {now} from 'lodash'

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(now())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(now())
    })
    return () => clearInterval(interval)
  })

  return (
      <div>{'Milliseconds since 1 January 1970 00:00:00 UTC: '} {currentTime}</div>
  )
}

export default DateTime
