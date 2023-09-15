'use client'

import { CodeContext, CodeResultContext } from '@/context/CodeContext';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useContext, useRef } from 'react';
import { useDebouncedFunction } from "@/hooks/useDebouce";
import { run, transformCode } from "@/lib/code/run";

export default function EditorComponent() {

  const { code, setCode } : any = useContext(CodeContext);
  const { setResult } : any = useContext(CodeResultContext);
  const monacoRef = useRef(null);

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

  function handleEditorDidMount(monaco: any) {
    // here is another way to get monaco instance
    // you can also store it in `useRef` for further usage
    monacoRef.current = monaco;
  }
  async function RunCode(e : any) {
    setResult("");
    try {
      const tranformed = transformCode(e);

      const element = await run(tranformed);

      setResult(element);
    } catch (e : any) {
      console.log(e);
      setResult([{ element: { content: e.message }, type: "error" }]);
    }
    setCode(e);
  }
  const debouncedRunner = useDebouncedFunction(RunCode, 250);

  function handler(e : any) {
    debouncedRunner(e);
  }



  return (
    <>

      <Editor
        className='bg-[#0E1016]'
        height="100vh"
        defaultLanguage="typescript"
        theme="vs-dark"
        options={{
          useTabStops: true,
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
        }}
        onChange={handler}
        loading={''}
        defaultValue={code}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
      />
    </>
  )
}
