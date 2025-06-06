import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import type { Engine, Flag } from "../types/regex";

type RegexOptionsProps = {
  engines: Engine[];
  currentEngine: Engine;
  setCurrentEngine: (engine: Engine) => void;
  currentFlags: string[];
  setCurrentFlags: (flags: string[]) => void;
};

const RegexOptions: React.FC<RegexOptionsProps> = ({ engines, currentEngine, setCurrentEngine, currentFlags, setCurrentFlags }) => {

  return (
    <div className="flex flex-row w-full h-full items-center justify-start gap-5">
      Options:

      {/* Engines */}
      <Select value={currentEngine.name}
        onValueChange={(value) => {
          const newEngine = engines.find((engine) => engine.name === value);
          if (newEngine) {
            setCurrentEngine(newEngine);
          }
        }}
      >
        <SelectTrigger className="w-[130px]">
          <SelectValue/>
        </SelectTrigger>
        <SelectContent className="bg-gray-100/20 dark:bg-gray-950/20 backdrop-blur-md">
          <SelectGroup>
            <SelectLabel>Engines</SelectLabel>
            {
              engines.map((engine) => {
                return (
                  <SelectItem 
                    value={engine.name}
                    className="hover:bg-gray-100 dark:hover:bg-zinc-800 hover:!text-purple-500 hover:fill-purple-500"
                  >{engine.name}</SelectItem>
                )
              })
            }
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Flags */}
      <ToggleGroup 
        type="multiple"
        value={currentFlags}
        onValueChange={(value) => setCurrentFlags(value)}
      >
        {currentEngine.flags.map((flag) => {
          return (
            <ToggleGroupItem 
              value={flag.index}
            >
              {flag.index}
            </ToggleGroupItem>
          )
        })}
      </ToggleGroup>

    </div>
  )
}

export default RegexOptions;