import Image from 'next/image'

export const metadata ={
  title:"Home: Work Manager"
}

export default function Home() {
  return (
    <main>
      <h1 className='text-5xl text-center mt-4 text-orange-700 font-semibold'>
        Welcome to TODOIST
      </h1>
    </main>
  )
}
