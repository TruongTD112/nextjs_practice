'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [counter, setCounter] = useState(0)

  const adjustCounterValue = (value: number) => {
    if (value >= 100) return value - 100
    if (value <= -100) return value + 100
    return value
  }

  const handleSetCounter = (value: number) => {
    setCounter(adjustCounterValue(value))
  }

  return (
    <>
      <header className="logo">
        <a href="https://www.jetbrains.com/webstorm/">
          <Image
            src="/webstorm-logo.svg"
            alt="WebStorm logo"
            width={344}
            height={90}
            priority
          />
        </a>
      </header>
      <main id="app">
        <h1 className="title">
          Thank you for trying it out. <br /> Your first project is up and running
          now.
        </h1>
        <section className="counter">
          <div className="counter-info">
            <p className="counter-text">Counter is</p>
            <p className="counter-value">{counter}</p>
          </div>
          <div className="counter-interaction">
            <button
              id="increaseByOne"
              type="button"
              onClick={() => handleSetCounter(counter + 1)}
            >
              +1
            </button>
            <button
              id="increaseByTwo"
              type="button"
              onClick={() => handleSetCounter(counter + 2)}
            >
              +2
            </button>
            <button
              id="decreaseByOne"
              type="button"
              onClick={() => handleSetCounter(counter - 1)}
            >
              -1
            </button>
            <button
              id="decreaseByTwo"
              type="button"
              onClick={() => handleSetCounter(counter - 2)}
            >
              -2
            </button>
          </div>
        </section>
      </main>
      <footer className="technologies">
        <Image
          src="/technologies.svg"
          alt="List of supported technologies"
          width={800}
          height={200}
        />
      </footer>
    </>
  )
}

