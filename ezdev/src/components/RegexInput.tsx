import React from 'react'
import { Textarea } from './ui/textarea'

type RegexInputProps = {
  testString: string;
  regexPattern: string;
  setTestString: (testString: string) => void;
  setRegexPattern: (regexPattern: string) => void;
}

const RegexInput: React.FC<RegexInputProps> = ({ testString, regexPattern, setTestString, setRegexPattern }) => {
  console.log(testString, regexPattern);

  return (
    <div className='flex flex-col gap-y-5 h-full overflow-y-auto'>
      <Textarea
        placeholder='Your regex pattern goes here...'
        className='shrink-0'
        value={regexPattern}
        onChange={(e) => setRegexPattern(e.target.value)}
      />
      <Textarea
        placeholder='Your test string goes here...'
        className='flex-grow resize-none'
        value={testString}
        onChange={(e) => setTestString(e.target.value)}
      />
    </div>
  )
}

export default RegexInput