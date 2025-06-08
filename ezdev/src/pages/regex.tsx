import React from 'react';
import Layout from '../layout/layout';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../components/ui/resizable"
import RegexOptions from '../components/regex-options';
import type { Engine } from "../types/regex";
import { engines } from "../data/regex";

const Regex: React.FC = () => {
  const [selectedEngine, setSelectedEngine] = React.useState<Engine>(engines[0]);
  const [selectedFlags, setSelectedFlags] = React.useState<string[]>([]);

  React.useEffect(() => { console.log(selectedEngine.name) }, [selectedEngine]);
  React.useEffect(() => { console.log(selectedFlags) }, [selectedFlags]);

  return (
    <Layout>
      <div className="flex w-full h-full">
        <ResizablePanelGroup direction="horizontal" className="w-full h-full">
            <ResizablePanel defaultSize={60}>
              <div className = "flex flex-col m-5">
                <RegexOptions 
                  engines={engines} 
                  currentEngine={selectedEngine} 
                  setCurrentEngine={setSelectedEngine}
                  currentFlags={selectedFlags}
                  setCurrentFlags={setSelectedFlags}
                />
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle className="bg-gray-950/5 dark:bg-white/5"/>

            <ResizablePanel defaultSize={40}>
                <ResizablePanelGroup direction="vertical" className="w-full h-full">
                  <ResizablePanel defaultSize={50}>Two</ResizablePanel>

                  <ResizableHandle withHandle className="bg-gray-950/5 dark:bg-white/5"/>

                  <ResizablePanel defaultSize={50}>Three</ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </Layout>
  );
};

export default Regex;