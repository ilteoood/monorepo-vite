import React, {useCallback, useEffect} from 'react'

const MonacoEditorComponent = React.lazy(() => import('react-monaco-editor'))

const Editor = ({initialValue, language}) => {
  useEffect(() => {
    import('./monaco-imports')
  }, [])

  const editorDidMount = useCallback((editor) => {
    editor.focus()
  }, [])

  const editorWillMount = useCallback((monaco) => {
    if (monaco.languages.json) {
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        allowComments: false,
        enableSchemaRequest: true,
        validate: true
      })
    }
  }, [])

  return (
    <MonacoEditorComponent
      defaultValue={initialValue}
      editorDidMount={editorDidMount}
      editorWillMount={editorWillMount}
      height={100}
      language={language}
      options={{
        selectOnLineNumbers: true,
        roundedSelection: false,
        cursorStyle: 'line',
        automaticLayout: true,
        fontLigatures: true,
        fontSize: 14
      }}
      theme="vs-dark"
    />
  )
}

export default Editor
