import React from 'react'
import { Textarea } from './ui/textarea'
import type { RegexMatch } from '../types/regex';

const MAX_REGEX_LENGTH = 1000;    // 1000 characters
const MAX_STRING_LENGTH = 10000;  // 10 000 characters

type RegexInputProps = {
  testString: string;
  regexPattern: string;
  setTestString: (testString: string) => void;
  setRegexPattern: (regexPattern: string) => void;
  matches: RegexMatch[]
}

const RegexInput: React.FC<RegexInputProps> = ({ testString, regexPattern, setTestString, setRegexPattern, matches }) => {
  return (
    <div className='flex flex-col gap-y-5 h-full min-h-0 justify-start items-start'>
      <Textarea
        placeholder='Your regex pattern goes here...'
        className='min-h-[15%] max-h-[30%] h-fit'
        value={regexPattern}
        onChange={(e) => setRegexPattern(e.target.value)}
        maxLength={MAX_REGEX_LENGTH}
      />

      <div className='flex-grow relative min-h-0 h-[50%] w-full bg-black/20'>
        <div className='absolute inset-0 pointer-events-none overflow-auto'>
          <div className='whitespace-pre-wrap break-words text-transparent bg-transparent'>
            <HighlightedText
              testString={testString}
              matches={matches}
            />
          </div>
        </div>
          <textarea
            placeholder='Your test string goes here...'
            className='resize-none w-full h-full bg-transparent m-0 rounded-none absolute'
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            maxLength={MAX_STRING_LENGTH}
          />
      </div>
    </div>
  )
}

type HighlightedTextProps = {
  testString: string;
  matches: RegexMatch[];
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ testString, matches }) => {
  if(matches.length < 1) return <>{testString}</>

  const sortedMatches: RegexMatch[] = [...matches].sort((a,b) => a.startIndex - b.startIndex);

  const highlighted: React.ReactNode[] = []
  let lastIndex = 0;

  for(const match of sortedMatches) {
    if(match.startIndex > lastIndex) {
      highlighted.push(testString.slice(lastIndex, match.startIndex));
    }

    highlighted.push(<mark className="bg-emerald-500">{match.fullMatch}</mark>);

    lastIndex = match.endIndex;
  }

  if(lastIndex < testString.length) {
    highlighted.push(testString.slice(lastIndex));
  }

  return <>{highlighted}</>
}

export default RegexInput