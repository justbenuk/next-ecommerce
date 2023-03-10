import { useState } from 'react'
import SingleLayout from "@/layouts/SingleLayout";
import { useSelector, useDispatch } from 'react-redux';
import { login } from '@/features/auth/authSlice';
import { useRouter } from 'next/router'
import Link from 'next/link';
export default function Login() {
  const initialState = {
    email: '',
    password: '',
  }
  const [ formData, setFormData ] = useState( initialState )

  const { email, password } = formData
  const router = useRouter()
  const dispatch = useDispatch()
  const handleChange = ( e ) => {
    setFormData( ( prevState ) => ( {
      ...prevState,
      [ e.target.id ]: e.target.value
    } ) )
  }
  const handleSubmit = ( e, formData ) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch( login( userData ) )
      .unwrap()
      .then( ( user ) => {
        console.log( 'logged in' )
        router.push( '/' )
      } )
  }
  return (
    <SingleLayout title='Log In'>
      <div className='w-1/3 bg-white shadow-xl border mx-auto'>
        <form onSubmit={ handleSubmit } className='flex flex-col items-center justify-center p-6'>
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
            <Link href='/auth/register' className='text-sm'>Dont Have An account? Register</Link>
          </div>
        </form>
      </div>
    </SingleLayout>
  )
}
