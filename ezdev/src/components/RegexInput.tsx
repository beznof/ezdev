import React from 'react'
import type { RegexMatch } from '../types/regex';
import InputWordCounter from './InputWordCounter';

const MAX_REGEX_LENGTH = 1000;    // 1.000 max characters
const MAX_STRING_LENGTH = 10000;  // 10.000 max characters

type RegexInputProps = {
  testString: string;
  regexPattern: string;
  setTestString: (testString: string) => void;
  setRegexPattern: (regexPattern: string) => void;
  matches: RegexMatch[]
}

const RegexInput: React.FC<RegexInputProps> = ({ testString, regexPattern, setTestString, setRegexPattern, matches }) => {
  const [testStringLength, setTestStringLength] = React.useState<number>(0);
  const [regexPatternLength, setRegexPatternLength] = React.useState<number>(0);
  const highlightRef = React.useRef<HTMLDivElement>(null);

  // Copies the textarea's scroll to the highlight layer
  const copyScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const scrollLeft = e.currentTarget.scrollLeft;
    
    if(highlightRef.current) {
      highlightRef.current.scrollTop = scrollTop;
      highlightRef.current.scrollLeft = scrollLeft;
    }
  }


  return (
    <div className='flex flex-col w-full h-full min-h-0 p-3 gap-y-5'>
      {/* Regex pattern input */}
      <div className='relative min-h-[15%] max-h-[30%] resize-y ezdev-input-box overflow-hidden'>
        <textarea
        placeholder='Your regex pattern goes here...'
        className='w-full h-[85%] max-h-[85%] p-2 resize-none border-0 ring-0 outline-0 overflow-auto'
        value={regexPattern}
        onChange={(e) => {
          setRegexPattern(e.target.value);
          setRegexPatternLength(e.target.value.length);
        }}
        maxLength={MAX_REGEX_LENGTH}
        spellCheck={false}
        />
        {/* Input analytics */}
        {regexPatternLength > 0 && <InputWordCounter wordCount={regexPatternLength} wordLimit={MAX_STRING_LENGTH}
          className="absolute bottom-1 right-2"
        />}
      </div>

      {/* Test string input */}
      <div className='flex-grow relative min-h-0 h-[50%] w-full ezdev-input-box'>  {/* Container */}
        {/* Visual layer layer */}
        <div className='absolute z-0 w-full h-[90%] max-w-full p-2 overflow-auto pointer-events-none' ref={highlightRef}>
          <div className='break-all whitespace-pre-wrap bg-transparent'>
            <HighlightedText
              testString={testString}
              matches={matches}
            />
          </div>
        </div>
        {/* Input layer */}
        <textarea
          placeholder='Your test string goes here...'
          className='text-transparent resize-none w-full h-[90%] m-0 p-2 border-0 outline-0 ring-0 whitespace-pre-wrap break-all placeholder:!text-zinc-600 dark:placeholder:!text-zinc-400 max-w-full'
          value={testString}
          onChange={(e) => { 
            setTestString(e.target.value);
            setTestStringLength(e.target.value.length) 
          }}
          maxLength={MAX_STRING_LENGTH}
          spellCheck={false}
          onScroll={copyScroll}
        />
        {/* Input analytics */}
        {testStringLength > 0 && <InputWordCounter wordCount={testStringLength} wordLimit={MAX_STRING_LENGTH}
          className="absolute bottom-1 right-2"
        />}
      </div>

    </div>
  )
}

type HighlightedTextProps = {
  testString: string;
  matches: RegexMatch[];
}

// Used to highlight matches within the textarea
const HighlightedText: React.FC<HighlightedTextProps> = ({ testString, matches }) => {
  if(matches.length < 1) return <>{testString}</>

  const sortedMatches: RegexMatch[] = [...matches].sort((a,b) => a.startIndex - b.startIndex);

  const highlighted: React.ReactNode[] = []
  let lastIndex = 0;

  for(const match of sortedMatches) {
    if(match.startIndex > lastIndex) {
      highlighted.push(testString.slice(lastIndex, match.startIndex));
    }

    highlighted.push(<mark className="break-words dark:text-white text-zinc-950 bg-fuchsia-500/60">{match.fullMatch}</mark>);

    lastIndex = match.endIndex;
  }

  if(lastIndex < testString.length) {
    highlighted.push(testString.slice(lastIndex));
  }

  return <>{highlighted}</>
}

export default RegexInput