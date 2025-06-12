import React from 'react'
import { Textarea } from './ui/textarea'

const MAX_REGEX_LENGTH = 1000;    // 1000 characters
const MAX_STRING_LENGTH = 10000;  // 10 000 characters

type RegexInputProps = {
  testString: string;
  regexPattern: string;
  setTestString: (testString: string) => void;
  setRegexPattern: (regexPattern: string) => void;
}

const RegexInput: React.FC<RegexInputProps> = ({ testString, regexPattern, setTestString, setRegexPattern }) => {
  const [testStringLength, setTestStringLength] = React.useState<number>(0);
  const [regexPatternLength, setRegexPatternLength] = React.useState<number>(0);

  React.useEffect(() => {
    setRegexPatternLength(regexPattern.length);
    console.log(regexPattern.length);
  },[regexPattern])

  React.useEffect(() => {
    setTestStringLength(testString.length);
    console.log(testString.length);
  },[testString])

  return (
    <div className='flex flex-col gap-y-5 h-full min-h-0 justify-start items-start'>
      <Textarea
        placeholder='Your regex pattern goes here...'
        className='min-h-[15%] max-h-[30%] h-fit'
        value={regexPattern}
        onChange={(e) => setRegexPattern(e.target.value)}
        maxLength={MAX_REGEX_LENGTH}
      />
      <Textarea
        placeholder='Your test string goes here...'
        className='flex-grow resize-none min-h-0 h-[50%] pb-5'
        value={testString}
        onChange={(e) => setTestString(e.target.value)}
        maxLength={MAX_STRING_LENGTH}
      />
    </div>
  )
}

export default RegexInput