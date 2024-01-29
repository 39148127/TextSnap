import React from 'react';
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="text-white justify-center flex flex-col bg-blue w-full">
      <nav className="flex justify-between items-center mb-10   p-4 w-full">
        <div className="flex items-center">
          <img src={logo} alt='textlogo' className="w-28 mr-4 "/>
          <span className="logo_name">TextSnap Summarizer</span>
        </div>
          <button
            type='button'
            onClick={() => window.open("https://github.com/39148127")}
            className='black_btn'
          >
            GitHub
          </button>

          <button
            type='button'
            onClick={() => window.open("")}
            className='black_btn'
          >
            Support
          </button>
        
      </nav>
      <h1 className='head_text'>TextSnap AI Summary Generator</h1>
      <h2 className='toe_text'>Streamline your reading and research with TextSnap AI, <br />your go-to article 
      summarizer powered by the cutting-edge GPT-4 technology.<br /> Say goodbye to information overload 
      as TextSnap intelligently condenses <br /> extensive web articles into crisp and straightforward summaries.</h2>
    </header>
    
  )
}

export default Hero;
