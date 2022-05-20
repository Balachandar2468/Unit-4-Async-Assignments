import React from 'react'
import { useState } from 'react/cjs/react.production.min'

const Parent = () => {
    const[info,setInfo]=useState("")
  return (
    <div>Parent:{info}
    </div>
  )
}

export default Parent