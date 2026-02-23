import React from 'react'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'
import { ReactComponent as Twitter } from '../assets/svg/twitter.svg'
import { ReactComponent as Instagram } from '../assets/svg/instagram.svg'
import { ReactComponent as Discord } from '../assets/svg/discord.svg'
import Ellipse from '../assets/img/ellipse.png'
import LetterSend from '../assets/img/letter-send.png'
import phoneCall from '../assets/img/phone-call.svg'
import sharpEmail from '../assets/img/sharp-email.svg'
import locationFilled from '../assets/img/location-filled.svg'
function ContactPage() {
  return (
    <section className='contact'>
      <div className='container'>
        <div className='contact__inner'>
          <h1>Contact Us</h1>
          <p>Any question or remarks? Just write us a message!</p>
          <div className='contact__inner-card'>
            <img src={LetterSend} alt="" />
            <div className='contact__inner-card-info' style={{backgroundImage: `url(${Ellipse})`}}>
              <div className='contact__inner-card-info-text'>
                <div className='contact__inner-card-info-title'>
                  Contact Information
                </div>
                <div className='contact__inner-card-info-subtitle'>
                  Say something to start a live chat!
                </div>
              </div>
              <div className='contact__inner-card-info-contact'>
                <ul>
                  <li>
                    <img src={phoneCall} alt='Phone' />
                    <a href='tel:+10123456789'>+1012 3456 789</a>
                  </li>
                  <li>
                    <img src={sharpEmail} alt='Email' />
                    <a href='mailto:demo@gmail.com'>demo@gmail.com</a>
                  </li>
                  <li>
                    <img src={locationFilled} alt='Location' />
                    <a
                      href='https://maps.app.goo.gl/XP3n3AsamR8oAZ7n9'
                      target='_blank'
                    >
                      132 Dartmouth Street Boston, Massachusetts 02156 United
                      States
                    </a>
                  </li>
                </ul>
              </div>
              <div className='contact__inner-card-info-social'>
                <a href='https://twitter.com/' target='_blank'>
                  <Twitter />
                </a>
                <a href='https://www.instagram.com/' target='_blank'>
                  <Instagram />
                </a>
                <a href='https://discord.com/' target='_blank'>
                  <Discord />
                </a>
              </div>
            </div>
            <div className='contact__inner-card-form'>
              <form>
                <div className='form-input-inner'>
                  <Input label={'First Name'} />
                  <Input label={'Last Name'} />
                </div>
                <div className='form-input-inner'>
                  <Input label={'Email'} type={'email'} />
                  <Input label={'Phone Number'} type={'tel'} />
                </div>
                <div className='form-checkbox'>
                  <div className='form-checkbox-title'>Select Subject?</div>
                  <div className='form-checkbox-inner'>
                    <div className='checkbox-item'>
                      <input
                        className='checkbox-radio'
                        id='generalInquiry1'
                        type='checkbox'
                        defaultChecked
                      />
                      <label htmlFor='generalInquiry1'>General Inquiry</label>
                    </div>
                    <div className='checkbox-item'>
                      <input
                        className='checkbox-radio'
                        id='generalInquiry2'
                        type='checkbox'
                      />
                      <label htmlFor='generalInquiry2'>General Inquiry</label>
                    </div>
                    <div className='checkbox-item'>
                      <input
                        className='checkbox-radio'
                        id='generalInquiry3'
                        type='checkbox'
                      />
                      <label htmlFor='generalInquiry3'>General Inquiry</label>
                    </div>
                    <div className='checkbox-item'>
                      <input
                        className='checkbox-radio'
                        id='generalInquiry4'
                        type='checkbox'
                      />
                      <label htmlFor='generalInquiry4'>General Inquiry</label>
                    </div>
                  </div>
                </div>
                <Textarea label={'Message'} />
                <button className='btn'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ContactPage }
