import React from 'react';
import Layout from '../layout/layout';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../components/ui/resizable"
import RegexOptions from '../components/regex-options';
import RegexInput from '../components/RegexInput';
import type { Engine } from "../types/regex";
import { engines } from "../data/regex";

const Regex: React.FC = () => {
  const [selectedEngine, setSelectedEngine] = React.useState<Engine>(engines[0]);
  const [selectedFlags, setSelectedFlags] = React.useState<string[]>([]);
  const [testString, setTestString] = React.useState<string>("");
  const [regexPattern, setRegexPattern] = React.useState<string>("");

  return (
    <Layout>
      <div className="flex w-full flex-grow min-h-0">
        <ResizablePanelGroup direction="horizontal" className="w-full flex-grow min-h-0 h-full">
            <ResizablePanel defaultSize={60} className="min-h-0 h-full">
              <div className = "flex flex-col h-full p-5 gap-y-4 min-h-0">
                <div className='flex shrink-0'>
                  <RegexOptions 
                    engines={engines} 
                    currentEngine={selectedEngine} 
                    setCurrentEngine={setSelectedEngine}
                    currentFlags={selectedFlags}
                    setCurrentFlags={setSelectedFlags}
                  />
                </div>
                <div className='flex flex-col flex-grow min-h-0 overflow-hidden'>
                  <RegexInput
                    testString={testString}
                    regexPattern={regexPattern}
                    setRegexPattern={setRegexPattern}
                    setTestString={setTestString}
                  />
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle className="bg-gray-950/5 dark:bg-white/5"/>

            <ResizablePanel defaultSize={40}>
                <ResizablePanelGroup direction="vertical" className="w-full h-full min-h-0">
                  <ResizablePanel defaultSize={50} className="h-full min-h-0">Two</ResizablePanel>

                  <ResizableHandle withHandle className="bg-gray-950/5 dark:bg-white/5"/>

                  <ResizablePanel defaultSize={50} className=" h-full min-h-0">Three</ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </Layout>
  );
};

export default Regex;