import React from 'react';
import Layout from '../layout/layout';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../components/ui/resizable"
import RegexOptions from '../components/regex-options';

type Engine = {
  name: string;
}

const engines: Engine[] = [
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'Java' },
  { name: 'PCRE' },
]

const Regex: React.FC = () => {
  return (
    <Layout>
      <div className="flex w-full h-full">
        <ResizablePanelGroup direction="horizontal" className="w-full h-full">
            <ResizablePanel defaultSize={60}>
              <div className = "flex flex-col m-5">
                <RegexOptions engines={engines}/>
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