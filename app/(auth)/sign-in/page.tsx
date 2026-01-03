'use client'
import FooterLink from '@/components/forms/FooterLink'
import InputField from '@/components/forms/InputField'
import React from 'react'
import { useForm } from 'react-hook-form'

const SignInPage = () => {
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur',
  }, )
  const onSubmit = async (data: SignUpFormData) => {
    try {
        console.log(data);
    } catch (error) {
        console.error('failed to sign up:', error);
    }
  }
  return (
    <>
        <h1 className='form-title'>Welcome back</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            <InputField 
                name='email'
                label='Email'
                placeholder='john.doe@gmail.com'
                register={register}
                error={errors.email}
                validation={{ required: 'Email is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email is invalid' }}
            />
            <InputField 
                name='password'
                label='Password'
                placeholder='Enter a strong password'
                type='password'
                register={register}
                error={errors.password}
                validation={{ required: 'Password is required', minLength: 8 }}
            />
            <button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                {isSubmitting ? 'Logging In...' : 'Sign In'}
            </button>
            <FooterLink text="Don't have an account?" linkText="Sign Up" href="/sign-up" />
        </form>
    </>
  )
}

export default SignInPage