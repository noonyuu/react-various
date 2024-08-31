import { useState, useRef } from 'react'

export const Sound = () => {
  const [currentSoundIndex, setCurrentSoundIndex] = useState(0)

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([])

  const sounds = ['/Hit09-1.mp3', '/Hit09-2.mp3', '/Hit09-3.mp3']

  const handleKeyDown = () => {
    const audio = audioRefs.current[currentSoundIndex]
    if (audio) {
      audio.currentTime = 0
      audio.play()
    }
    setCurrentSoundIndex((currentSoundIndex + 1) % sounds.length)
  }

  return (
    <div>
      {sounds.map((sound, index) => (
        <audio
          key={index}
          ref={(e) => (audioRefs.current[index] = e)}
          src={sound}
          preload="auto"
        />
      ))}
      <input type="text" onKeyDown={handleKeyDown} className='text-white bg-black' />
    </div>
  )
}
