import React from 'react'
import {MdOutlineMailOutline} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {FaTelegramPlane} from "react-icons/fa"
import { useRef } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_qi6m3o2', 'template_wp7azfv', form.current, 'r4KBcVW_DHJVPq5EJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return( 
    <div className='text-white flex flex-col items-center text-center w-full pb-5'>
      <div className='w-full items-center flex flex-col my-5 mb-10'>
        <div className="h-[1px] w-[65%] bg-gray-400 my-2" />
        <div className='text-4xl items-center text-center'>
          Contact Me
        </div>
        <div className="h-[1px] w-[75%] bg-gray-400 my-2" />
      </div>

      <div>
        <div className="contact-grid w-full justify-center">
          <div className='w-[58%]'>
            <div>
              <div className='mb-5'>
                <div className='flex flex-row gap-3 ml-5'>
                  <MdOutlineMailOutline className="text-[1.5rem]"/>
                  <h4>Email</h4>
                </div>
                <h5 className='mb-1'>jakub@janicek.tech</h5>
                <a href="mailto:random@mail.com" target="_blank" rel='noreferrer' className='text-center bg-[#2952e3] p-1 rounded-full cursor-pointer hover:bg-[#2546bd]'>Send a message</a>
              </div>
              <div className='mb-5'>
                <div className='flex flex-row gap-3 ml-5'>
                  <RiMessengerLine className="text-[1.5rem]"/>
                  <h4>Messenger</h4>
                </div>
                <h5 className='mb-1'>Jakub Janicek</h5>
                <a href="https://m.me/kuba.janicek/" target="_blank" rel='noreferrer' className='text-center bg-[#2952e3] p-1 rounded-full cursor-pointer hover:bg-[#2546bd]'>Send a message</a>
              </div>
              <div className='mb-5'>
                <div className='flex flex-row gap-3 ml-5'>
                  <FaTelegramPlane className="text-[1.5rem]"/>
                  <h4>Telegram</h4>
                </div>
                <h5 className='mb-1'>@VeolCZ</h5>
                <a href="https://t.me/Veolcz" target="_blank" rel='noreferrer' className='text-center bg-[#2952e3] p-1 rounded-full cursor-pointer hover:bg-[#2546bd]'>Send a message</a>
              </div>
            </div>
          </div>
          
          <div className='w-[95%] md:w-[65%] blue-glassmorphism'>
            <form ref={form} onSubmit={sendEmail} className="display-flex flex-col gap-6 border-neutral-900 divide-y">
              <input type="text" name="name"  id="contacts_form_name" placeholder='Your Full Name' required className='w-full p-6 bg-transparent no-outline'/>
              <input type="email" name="email" id="contacts_form_email" placeholder='Your Email' required className='w-full p-6 bg-transparent no-outline'/>
              <textarea name="message" id="contacts_form_text" rows="7" placeholder='Your Message' required className='w-full p-6 bg-transparent no-outline'></textarea>
              <button type='submit' className='text-center bg-[#2952e3] py-1 px-3 mx-5 mb-3 rounded-full cursor-pointer hover:bg-[#2546bd]'>Send Message</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact