import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'

import DateTimePage from './pages/date-time'
import EditorPage from './pages/editor'
import JsonViewerPage from './pages/json-viewer'

import './App.css'

const LINKS = {
  DATE_TIME: '/date-time',
  EDITOR: '/editor',
  JSON_VIEWER: '/json-viewer'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={LINKS.DATE_TIME}>{'Date time'}</Link>
        <Link to={LINKS.EDITOR}>{'Editor'}</Link>
        <Link to={LINKS.JSON_VIEWER}>{'JsonViewer'}</Link>
        <Routes>
          <Route element={<DateTimePage />} path={LINKS.DATE_TIME} />
          <Route element={<EditorPage />} path={LINKS.EDITOR} />
          <Route element={<JsonViewerPage />} path={LINKS.JSON_VIEWER} />
        </Routes>
      </header>
    </div>
  )
}

export default App
