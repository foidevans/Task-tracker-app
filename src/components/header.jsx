'use client';

import { Button } from './ui/button'
export default function header() {
  return (
    <>
     <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-400 mb-2">Task Tracker</h1>
      <p className="text-gray-400">Stay organized and get things done</p>
      {/* <Button variant= 'destructive' onclick = {() => console.log('clicked')}>Click me !</Button> */}
     </div>
    </>
  
  )
}