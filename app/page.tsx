import EditorComponent from '@/components/Editor';
import Result from '@/components/Result';
import SplitComponent from '@/components/Split';


export default function Home() {



  return (
    <SplitComponent >
      <EditorComponent />
      <Result />
    </SplitComponent>
  )
}
