'use client';
import React, { useState } from 'react';
import {Button} from './ui/button';
import { Plus } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { 
  Dialog, 
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';


const TaskApp = () => {
  const [isDialogOpen, setisDialogOpen] = useState(false)
  return (
    
    <div className='mb-8 text-center'>
      <Button size='lg' className=' text-white shadow-lg bg-gradient-to-r from-blue-400  via-indigo-500 to-purple-700 hover:cursor-pointer hover:to-purple-800' onClick = {() => setisDialogOpen(true)}>
      <Plus className='w-5 h-5 mr-2' />
    Add New Task
    </Button>

    <Dialog open = {isDialogOpen} onOpenChange={setisDialogOpen}>
  <DialogContent className='sm:max-w-md'>
    <DialogHeader>
      <DialogTitle>Create New Task</DialogTitle>
      <div className='space-y-4'>
        <div className='my-4'>
          <Input
          id='title' 
          placeholder='Enter task title...'/>
      
        </div>

        <div>
          <div className='flex gap-2 pt-4'>
            <Button className='flex-1'>Create Task</Button>
             </div>
        </div>
        </div>
    </DialogHeader>
  </DialogContent>
    </Dialog>
    </div>
  )
}

export default TaskApp
