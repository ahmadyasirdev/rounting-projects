'use client'

import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {
    let block = useParams();
    console.log(block)
  return (
    <div>
      this is dynamic rounte page{block.id}
    </div>
  )
}

export default page
