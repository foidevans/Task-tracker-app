  // import {useState} from 'react'

  // const [isDialogOpen, setisDialogOpen] = useState(false)
  // const taskapp = () => {
  //   return (
  //     <div className='mb-8 text-center'>
  //       <button className=''>Add new Task</button>
  //       <dialog open = {isDialogOpen}> 
  //         <dialogTrigger>
  //           Open 
  //         </dialogTrigger>
  //         <dialogContent>
  //           <dialogHeader>
  //             <DialogTitle>
  //               Are you absolutely sure ?
  //             </DialogTitle>
  //             <dialogDesciption>
  //               This action can not be undone. This will permanently delete your account and remove your data from our servers
  //             </dialogDesciption>
  //           </dialogHeader>
  //         </dialogContent>
  //       </dialog>
  //     </div>
  //   )
  // }

  // export default taskapp

import React from 'react'
import {Button} from './ui/button'
import { Plus } from 'lucide-react'

const TaskApp = () => {
  return (
    <div className='mb-8 text-center'>
      <Button size='lg' className=' text-white shadow-lg bg-gradient-to-r from-blue-400  via-indigo-500 to-purple-700 hover:cursor-pointer hover:to-purple-800'>
      <Plus />
    Add New Task
    </Button>
    </div>
  )
}

export default TaskApp
