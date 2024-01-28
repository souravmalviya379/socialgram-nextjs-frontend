'use client'

import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  username: string
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
  }

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex h-4/5 w-3/5 justify-evenly">
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
            <div className="bg-white border border-gray-300 py-8 flex items-center flex-col mb-3">
              <h1 className="bg-no-repeat instagram-logo text-2xl text-gray-700 font-serif">
                Socialgram
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 w-4/5 flex flex-col">
                <input
                  {...register('username')}
                  className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-gray-600"
                  placeholder="Username or Email"
                  type="text"
                />
                {errors.username && (
                  <p className="text-red-600 mt-0 mb-2">{errors.username?.message}</p>
                )}
                <input
                  {...register('password')}
                  className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-gray-600"
                  placeholder="Password"
                  type="password"
                />
                {errors.password && (
                  <p className="text-red-600 mt-0 mb-2">{errors.password?.message}</p>
                )}
                <button className="text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
                  Login{' '}
                </button>
              </form>
              <div className="flex justify-evenly space-x-2 w-64 mt-4">
                <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
                <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
                  or
                </span>
                <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
              </div>
              <a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
                Forgot password?
              </a>
            </div>
            <div className="bg-white border border-gray-300 text-center py-4">
              <span className="text-sm text-gray-700">
                Don&#8217;t have an account?
              </span>
              <a href='/register' className="text-blue-500 text-sm font-semibold"> Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
