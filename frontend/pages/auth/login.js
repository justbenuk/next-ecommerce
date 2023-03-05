import { useState } from 'react'
import SingleLayout from "@/layouts/SingleLayout";
import { useSelector, useDispatch } from 'react-redux';
import { login } from '@/features/auth/authSlice';
import { useRouter } from 'next/router'
export default function Login() {
  const initialState = {
    email: '',
    password: '',
  }
  const [formData, setFormData] = useState(initialState)

  const { email, password } = formData
  const router = useRouter()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  const handleSubmit = (e, formData) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
      .unwrap()
      .then((user) => {
        console.log('logged in')
        router.push('/')
      })
  }
  return (
    <SingleLayout title='Log In'>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='email' id='email' placeholder='Enter Your Email' onChange={handleChange} value={formData.email} />
          <input type='password' id='password' placeholder='Enter Your Password' onChange={handleChange} value={formData.password} />
          <button>Sign In</button>
        </form>
      </div>
    </SingleLayout>
  )
}
