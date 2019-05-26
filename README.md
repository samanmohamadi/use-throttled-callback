# useThrottledEffect react hook

Install it with yarn:

```
yarn add use-throttled-effect
```

Or with npm:

```
npm i use-throttled-effect --save
```

#Example
```javascript
import React, { useState } from 'react';
import { useThrottledEffect } from 'use-throttled-effect';
import useInterval from '@use-it/interval';

export default function Input() {
  const [count, setCount] = useState(0);

  useThrottledEffect(()=>{
    console.log(count)
  }, 1000,[counter]);


  // Increment the counter.
  useInterval(() => {
    setCount(count + 1);
  }, 1000);
  
  return (
    {count}
  );
}
```
