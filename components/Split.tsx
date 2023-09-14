'use client'

import Split from 'react-split';
import { Context, Dispatch, FC, ProviderProps, SetStateAction, useState } from 'react';
import { CodeContext, CodeResultContext } from '@/context/CodeContext';


interface SplitComponentProps {
    children?: React.ReactNode
}

const SplitComponent: FC<SplitComponentProps> = ({ children }) => {

    const [code, setCode] :  [String,Dispatch<SetStateAction<string>>] = useState("");
    const [result, setResult] : [String,Dispatch<SetStateAction<string>>] = useState("");

    const [sizes, setSizes] = useState(() => {
        return [70, 30]
    })

    function handleDragEnd(e: any) {
        const [left, right] = e
        setSizes([left, right])
        window.localStorage.setItem('split-sizes', JSON.stringify([left, right]))
    }


    return (
        <CodeContext.Provider value={{ code, setCode }}>
            <CodeResultContext.Provider value={{ result, setResult }}>
                <Split
                    className={`flex h-full overflow-hidden bg-gray-800`}
                    sizes={sizes}
                    gutterSize={4}
                    cursor="col-resize"
                    onDragEnd={handleDragEnd}
                >
                    {children}
                </Split>
            </CodeResultContext.Provider>
        </CodeContext.Provider>
    )
}

SplitComponent.displayName = 'SplitComponent';

export default SplitComponent;
