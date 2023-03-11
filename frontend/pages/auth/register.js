import React, { useState } from 'react'
import SingleLayout from '@/layouts/SingleLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { register } from '@/features/auth/authSlice'

export default function Register() {
  const initialState = {
    name: '',
    email: '',
    password: '',
  }
  const [ formData, setFormData ] = useState( initialState )

  const { name, email, password } = formData

  const router = useRouter()
  const dispatch = useDispatch()
  const handleChange = ( e ) => {
    setFormData( ( prevState ) => ( {
      ...prevState,
      [ e.target.id ]: e.target.value
    } ) )
  }
  const handleSubmit = ( e ) => {
    e.preventDefault()
    const userData = {
      name,
      email,
      password
    }
    dispatch( register( userData ) )
      .unwrap()
      .then( ( user ) => {
        console.log( 'logged in' )
        router.push( '/' )
      } )
      .catch( err => {
        console.log( err )
      } )
  }
  return (
    <SingleLayout>
      <div className='w-1/3 bg-white shadow-xl border mx-auto'>
        <form onSubmit={ handleSubmit } className='flex flex-col items-center justify-center p-6'>
          <div className='w-full pt-4'>
            <input className='w-full border p-2' type='name' id='name' placeholder='Enter Your Name' onChange={ handleChange } value={ formData.name } />
          </div>
          <div className='w-full pt-4'>
            <input className='w-full border p-2' type='email' id='email' placeholder='Enter Your Email' onChange={ handleChange } value={ formData.email } />
          </div>
          <div className='w-full pt-4'>
            <input className='w-full border p-2' type='password' id='password' placeholder='Enter Your Password' onChange={ handleChange } value={ formData.password } />
          </div>
          <div className='pt-4 w-full'>
            <button className='bg-gray-800 text-white py-2 w-full'>Sign In</button>
          </div>
          <div className='flex flex-row items-end pt-4 justify-end w-full underline'>
            <Link href='/auth/register' className='text-sm'>Already Have An account? Login</Link>
          </div>
        </form>
      </div>
    </SingleLayout>
  )
}
