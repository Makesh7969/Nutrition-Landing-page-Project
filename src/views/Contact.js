import React from 'react'
import { Header } from './Header'
import Avatar from "../assets/avatar.png"

export const Contact = () => {
  return (
      <><Header /><div className='container'>
          <div className='row mt-4'>
              <div className='col-lg-4'>
                  <img src={Avatar} alt="avatarImage" />
               </div>
              <div className='col-lg-8'>
                  <h3 className='font-weight-bold'>Mangalambika B</h3>
              </div>
          </div>
          </div></>
  )
}
