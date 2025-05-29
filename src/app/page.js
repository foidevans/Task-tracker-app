import Header from '@/components/header';
import Taskapp from '@/components/taskapp'

export default function Home() {
  return (
    <div className='min-h-screen bg-linear-to-br from-blue-100 via-white to-purple-100'>
      <div className='container mx-auto px-4 py-4 max-w-4xl'>
              <Header />
              <Taskapp />

      </div>
    </div>
  )
}