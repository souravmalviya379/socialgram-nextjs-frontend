'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import fetchCountries from '../../../utils/utilityFunctions'

const schema = yup
  .object({
    name: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().required('Please enter email'),
    gender: yup
      .string()
      .oneOf(['Male', 'Female', 'Other'], 'Please select gender')
      .required('Please select gender'), // Make sure gender is required in the schema
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], 'Passwords must match')
      .required(),
    country: yup.string().optional(),
  })
  .required()

enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
}

export default function Register() {
  const [countries, setCountries] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const getCountries = async () => {
    const res = await fetchCountries()
    console.log('res', res)
    setCountries(res)
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex h-5/6 w-3/5 justify-evenly">
          <div className="bg-gray-200 w-full">
            <Image
              src="/media.png"
              alt="insta-mobile-screenshot"
              height={300}
              width={300}
              className="w-full h-full"
            />
          </div>
          <div className="bg-purple-200 w-full">
            <div className="bg-white border border-gray-300 py-3 flex items-center flex-col mb-3">
              <h1 className="bg-no-repeat instagram-logo text-2xl text-gray-700 font-serif">
                Socialgram
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-5 w-4/5 h-full flex flex-col">
                {errors.name && (
                  <p className="text-red-600 m-0 text-xs">
                    {errors.name?.message}
                  </p>
                )}
                <input
                  {...register('name')}
                  className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-gray-600"
                  placeholder="Full name"
                  type="text"
                />

                {errors.username && (
                  <p className="text-red-600 m-0 text-xs">
                    {errors.username?.message}
                  </p>
                )}
                <input
                  {...register('username')}
                  className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-gray-600"
                  placeholder="Username"
                  type="text"
                />

                {errors.email && (
                  <p className="text-red-600 m-0 text-xs">
                    {errors.email?.message}
                  </p>
                )}
                <input
                  {...register('email')}
                  className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-gray-600"
                  placeholder="Email"
                  type="text"
                />

                {errors.gender && (
                  <p className="text-red-600 m-0 text-xs">
                    {errors.gender.message}
                  </p>
                )}
                <select
                  defaultValue={''}
                  {...register('gender')}
                  className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-gray-600">
                  <option value={''}>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

                {errors.country && (
                  <p className="text-red-600 m-0 text-xs">
                    {errors.country.message}
                  </p>
                )}
                <select
                  defaultValue={''}
                  {...register('country')}
                  className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-gray-600">
                  <option value={''}>Select Country</option>
                  {countries &&
                    countries.length &&
                    countries.map((country: any, index) => {
                      return (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      )
                    })}
                </select>

                {errors.password && (
                  <p className="text-red-600 m-0 text-xs">
                    {errors.password?.message}
                  </p>
                )}
                <input
                  {...register('password')}
                  className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-gray-600"
                  placeholder="Password"
                  type="password"
                />

                {errors.confirmPassword && (
                  <p className="text-red-600 m-0 text-xs">
                    {errors.confirmPassword?.message}
                  </p>
                )}
                <input
                  {...register('confirmPassword')}
                  className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-gray-600"
                  placeholder="Confirm Password"
                  type="confirmPassword"
                />

                <button className="text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
                  Register{' '}
                </button>
              </form>
              <div className="flex justify-evenly space-x-2 w-64 mt-4">
                <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
                <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
                  OR
                </span>
                <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
              </div>
              <span className="text-sm text-gray-700">
                Already have an account?
                <a href="/" className="text-blue-500 text-sm font-semibold">
                  {' '}
                  Sign in
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
