import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import {Suspenser} from '@ilteoood/ui'

import './App.css'

const DateTimePage = React.lazy(() => import('./pages/date-time'))
const EditorPage = React.lazy(() => import('./pages/editor'))
const JsonViewerPage = React.lazy(() => import('./pages/json-viewer'))

const LINKS = {
  DATE_TIME: '/date-time',
  EDITOR: '/editor',
  JSON_VIEWER: '/json-viewer'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspenser>
          <Link to={LINKS.DATE_TIME}>{'Date time'}</Link>
          <Link to={LINKS.EDITOR}>{'Editor'}</Link>
          <Link to={LINKS.JSON_VIEWER}>{'JsonViewer'}</Link>
          <Routes>
            <Route element={<DateTimePage />} path={LINKS.DATE_TIME} />
            <Route element={<EditorPage />} path={LINKS.EDITOR} />
            <Route element={<JsonViewerPage />} path={LINKS.JSON_VIEWER} />
            <Route element={'Select one component'} path="/"/>
          </Routes>
        </Suspenser>
      </header>
    </div>
  )
}

export default App
