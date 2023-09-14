'use client'

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { Context, FC, ServerContext, useContext } from 'react';
import { CodeResultContext } from "../context/CodeContext";

const Result: FC = () => {

  const  {result} : any = useContext(CodeResultContext);

  console.log(result);

  const LastLineNumber = result ? result.at(-1)?.lineNumber : 0;
  const AllResults = Array.from({ length: LastLineNumber }).fill("\n");
  result &&
    result.forEach((data: any) => {
      const { element, lineNumber } = data;
      const codeResult = element.content;

      DiffResult({ codeResult, lineNumber });
    });
  function DiffResult({ codeResult, lineNumber }) {
    AllResults.splice(lineNumber - 1, 1, codeResult + "\n");
  }


  function handleEditorWillMount(monaco: any) {
    // here is the monaco instance
    import("./onedark.json")

      .then((data) => {
        monaco.editor.defineTheme("vs-dark", data);
      })
      .catch((e) => console.log(e));
    // do something before editor is mounted
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }



  return (
    <>

      <Editor
        className='bg-[#0E1016]'
        height="100vh"
        defaultLanguage="typescript"
        theme="vs-dark"
        options={{
          domReadOnly: true,
          experimentalWhitespaceRendering: "svg",
          dragAndDrop: true,
          minimap: {
            enabled: false,
          },
          overviewRulerLanes: 0,
          scrollbar: {
            vertical: "hidden",
          },
          fontSize: 14,
          wordWrap: "on",
          readOnly: true,
          lineNumbers: "off",
          renderLineHighlight: "none",
          showUnused: false,
          suggest: {
            selectionMode: "never",
            previewMode: "prefix",
          },
        }}
        value={AllResults.join("")}
        // onChange={handler}
        // defaultValue={code}
        beforeMount={handleEditorWillMount}
      // onMount={handleEditorDidMount}
      />
    </>
  )
}

Result.displayName = 'Result';

export default Result;