import React from 'react'
import {FaCheckCircle} from "react-icons/fa"

const Experience = () => {
  return (
    <div className='text-white md:mt-[8vh] mt-5 flex flex-col items-center'>
      <div className='w-full items-center flex flex-col my-5'>
        <div className="h-[1px] w-[65%] bg-gray-400 my-2" />
        <div className='text-4xl items-center text-center'>
          What Skills I Have
        </div>
        <div className="h-[1px] w-[75%] bg-gray-400 my-2" />
      </div>  
      <div className='container experience_container'>
        <div className='experience_frontend blue-glassmorphism'>
          <h3 className='text-center mb-[2rem]'>Frontend Developer</h3>
          <div className='experience_content'>
            <div className='flex gap-4'>
              <FaCheckCircle className="mb-[6px]"/>
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </div>
            <div className='flex gap-4'>
              <FaCheckCircle className="mb-[6px]"/>
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </div>
            <div className='flex gap-4'>
              <FaCheckCircle className="mb-[6px]"/>
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </div>
            <div className='flex gap-4'>
              <FaCheckCircle className="mb-[6px]"/>
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </div>
          </div>
        </div>
        <div className='experience_backend blue-glassmorphism'>

        <h3 className='text-center mb-[2rem]'>Backend Developer</h3>
          <div className='experience_content'>
            <div className='flex gap-4'>
              <FaCheckCircle className="mb-[6px]"/>
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>
            </div>
            <div className='flex gap-4'>
              <FaCheckCircle className="mb-[6px]"/>
              <div>
                <h4>Solidity</h4>
                <small> Some Experience</small>
              </div>
            </div>
            <div className='flex gap-4'>
              <FaCheckCircle className="mb-[6px]"/>
              <div>
                <h4>Pandas</h4>
                <small>Some Experience</small>
              </div>
            </div>
            <div className='flex gap-4'>
              <FaCheckCircle className="mb-[6px]"/>
              <div>
                <h4>Tensor Flow</h4>
                <small>Some Experience</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience