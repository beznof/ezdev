import React from 'react';
import Layout from '../layout/layout';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../components/ui/resizable"
import RegexOptions from '../components/regex-options';
import RegexInput from '../components/RegexInput';
import type { Engine } from "../types/regex";
import { engines } from "../data/regex";
import { JavaScriptRegexEngine } from '../utils/regex-engines/jsRegexParser';
import type { RegexMatch } from '../types/regex';

const Regex: React.FC = () => {
  const [selectedEngine, setSelectedEngine] = React.useState<Engine>(engines[0]);
  const [selectedFlags, setSelectedFlags] = React.useState<string[]>([]);
  const [testString, setTestString] = React.useState<string>("");
  const [regexPattern, setRegexPattern] = React.useState<string>("");
  const [matches, setMatches] = React.useState<RegexMatch[]>([]);

  React.useEffect(() => {
    const delay = setTimeout(() => {
      const engine = new JavaScriptRegexEngine();
      const newMatches = engine.match(regexPattern, testString, selectedFlags);
      setMatches(newMatches);
    }, 50);
    return () => clearTimeout(delay);
  },[testString, regexPattern, selectedFlags, selectedEngine])

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
                    matches={matches}
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