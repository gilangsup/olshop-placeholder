import React, { useEffect, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useCookies } from 'react-cookie';
import axios from 'axios'
import Router from 'next/router';

const index = () => {

    const [hidePassword, setHidePassword] = useState(true);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [cookies, setCookies] = useCookies(['role'])

const onLogin = async (e:any) => {
    e.preventDefault()
    await axios.post('http://localhost:3004/login', {
        email: email,
        password: password
    })
    .then(res => {
        const data = res.data.user.role
        console.log(res.data.user.role)
        setCookies("role", data, { path: "/"})
        { cookies.role === 'costumer' ? Router.push('/product') : Router.push('/') }
    })
    .catch(err => {
        console.log(err)
    })
}

  return (
      <form className='mt-12 container mx-auto' onSubmit={onLogin}>
          <div className="w-full">
              <label className="label">
                  <span className="label-text">Email Address</span>
              </label>
              <div className='relative'>
                  <input
                      type="text"
                      placeholder="yourmail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="p-5 bg-[#3333330F] w-full border-t-0 border-l-0 border-r-0 border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                  />
                  <label htmlFor="" className='absolute bottom-5 right-5 cursor-pointer text-[#00000061]' onClick={() => setHidePassword(!hidePassword)}>
                      @gmail.com
                  </label>
              </div>
          </div>
          <div className="form-control w-full">
              <label className="label">
                  <span className="label-text">Password</span>
              </label>
              <div className='relative'>
                  <input type={`${hidePassword ? `password` : `text`}`}
                      placeholder="absdgr&#"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="p-5 w-full bg-[#3333330F] border-t-0 border-l-0 border-r-0 border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                  />
                  {
                      password !== '' && (
                          <label htmlFor="" className='absolute bottom-5 right-5 cursor-pointer text-2xl' onClick={() => setHidePassword(!hidePassword)}>
                              {hidePassword ? <IoEye /> : <IoEyeOff />}
                          </label>
                      )
                  }
              </div>
          </div>
          <div className="mt-6 w-full text-end">
              <button type='submit' className="btn bg-stay-secondary w-52 border-none">Login</button>
          </div>
      </form>
  )
}

export default index
