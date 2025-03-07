import React, { useEffect, useRef, useState } from 'react'

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null)

  useEffect(() => {
    if (isPlaying) {
      console.log('Calling video.play()')
      ref.current.play()
    } else {
      console.log('Calling video.pause()')
      ref.current.pause()
    }
  }, [isPlaying])

  return <video className='w-[1000px] rounded-[18px] border-gray-900 border-[2px] ' src={src} ref={ref} loop playsInline />
}

const UseEffect = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [text, setText] = useState('')
  return (
      <div className='flex justify-center items-center flex-col-reverse gap-8 h-screen'>
        <input className='border border-black' type={text} onChange={e => setText(e.target.value)} />
        <button className='bg-red-600 py-2 px-6 text-white text-2xl rounded-[50px] w-[150px] flex justify-center items-center ' onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <VideoPlayer isPlaying={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
      </div>
  )
}

export default UseEffect
