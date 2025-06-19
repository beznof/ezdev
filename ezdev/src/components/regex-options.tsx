import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import type { Engine } from "../types/regex";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

type RegexOptionsProps = {
  engines: Engine[];
  currentEngine: Engine;
  setCurrentEngine: (engine: Engine) => void;
  currentFlags: string[];
  setCurrentFlags: (flags: string[]) => void;
};

const RegexOptions: React.FC<RegexOptionsProps> = ({ engines, currentEngine, setCurrentEngine, currentFlags, setCurrentFlags }) => {
  const handleEngineChange = (value: string) => {
    const newEngine = engines.find((engine) => engine.name === value);
    if (newEngine) {
      setCurrentEngine(newEngine);
      setCurrentFlags([]);
    }
  }

  return (
    <div className="flex flex-row items-center justify-start w-full gap-5 select-none h-fit">
      <p className="font-semibold">
        Options:
      </p>

      {/* Engines */}
      <Select value={currentEngine.name} onValueChange={(value) => handleEngineChange(value)}>
        <SelectTrigger className="w-[130px] border-1 ezdev-seperator ">
          <SelectValue/>
        </SelectTrigger>
        <SelectContent className="ezdev-hover-window">
          <SelectGroup className="flex flex-col gap-y-[1px]">
            <SelectLabel>Engines</SelectLabel>
            {
              engines.map((engine) => {
                return (
                  <SelectItem 
                    value={engine.name}
                    className="hover:bg-gray-100 dark:hover:bg-zinc-800 hover:!text-purple-500 custom-text-color ezdev-select"
                  >
                    {engine.name}
                  </SelectItem>
                )
              })
            }
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Flags */}
      <ToggleGroup 
        type="multiple"
        variant="outline"
        value={currentFlags}
        onValueChange={(value) => setCurrentFlags(value)}
        className="overflow-hidden bg-transparent rounded-md ezdev-seperator"
      >
        {currentEngine.flags.map((flag) => {
          return (
            <HoverCard>
              <HoverCardTrigger>
                <ToggleGroupItem 
                  value={flag.index}
                  className="px-2 overflow-hidden border-0 rounded-none ezdev-select"
                >
                  {flag.index}
                </ToggleGroupItem>
              </HoverCardTrigger>
              <HoverCardContent className="w-fit ezdev-hover-window">
                <div className="flex flex-col items-start justify-center w-full h-full gap-2">
                  <p className="font-semibold text-md">{flag.name}</p>
                  <p className="text-xs ezdev-text-secondary">{flag.description}</p>
                  {flag.example}
                </div>
              </HoverCardContent>
            </HoverCard>
          )
        })}
      </ToggleGroup>

    </div>
  )
}

export default RegexOptions;