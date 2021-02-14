import React, { useState, useEffect } from 'react'

function CountFunc3() {
  const [total, setTotal] = useState(0)
  const [isUserStartToClick, setIsUserStartToClick] = useState(false)

  useEffect(() => {
    console.log('component did mount')
  }, [])

  useEffect(() => {
    if (isUserStartToClick) {
      console.log('component did update')
      console.log(total)
    }
  }, [total, isUserStartToClick])

  useEffect(() => {
    return () => {
      console.log('component will unmount')
    }
  }, [])

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setIsUserStartToClick(true)
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setIsUserStartToClick(true)
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default CountFunc3
