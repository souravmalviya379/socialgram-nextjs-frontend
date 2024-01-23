'use client'

import React, { useEffect } from 'react'

export default function Error() {
  useEffect(() => {
    console.log('we will be sending to the same page from where error occured')
  }, [])

  return (
    <>
      <h1>Something Unexpected Occurred</h1>
    </>
  )
}
