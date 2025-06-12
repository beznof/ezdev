import React from 'react'
import { Textarea } from './ui/textarea'

type RegexInputProps = {
  testString: string;
  regexPattern: string;
  setTestString: (testString: string) => void;
  setRegexPattern: (regexPattern: string) => void;
}

const RegexInput: React.FC<RegexInputProps> = ({ testString, regexPattern, setTestString, setRegexPattern }) => {
  return (
    <div className='flex flex-col gap-y-5 h-full min-h-0'>
      <Textarea
        placeholder='Your regex pattern goes here...'
        className='min-h-[15%] max-h-[30%] h-fit'
        value={regexPattern}
        onChange={(e) => setRegexPattern(e.target.value)}
      />
      <Textarea
        placeholder='Your test string goes here...'
        className='flex-grow resize-none min-h-0 h-[50%]'
        value={testString}
        onChange={(e) => setTestString(e.target.value)}
      />
    </div>
  )
}

export default RegexInput