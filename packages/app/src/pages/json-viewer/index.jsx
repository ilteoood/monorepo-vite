import React from 'react'

import {JsonViewer} from '@ilteoood/ui'

const schemaToView = {
  hello: {
    this: {
      is: {
        jsonViewer: ''
      }
    }
  }
}

const JsonViewerPage = () => <JsonViewer schema={schemaToView}/>

export default JsonViewerPage
