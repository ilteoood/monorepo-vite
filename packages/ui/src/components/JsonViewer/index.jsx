import React from 'react'
import ReactJson from 'react-json-view'

const EXPANDED_LEVEL = 10

const MissingSchema = () => <div>{'Schema is missing!'}</div>

const JsonViewer = ({schema}) => {
  return (
    schema ?
    <ReactJson
        collapseStringsAfterLength={150}
        collapsed={EXPANDED_LEVEL}
        displayDataTypes={false}
        displayObjectSize={false}
        enableClipboard={false}
        name={false}
        quotesOnKeys={false}
        src={schema}
    /> :
      <MissingSchema />
  )
}

export default JsonViewer
