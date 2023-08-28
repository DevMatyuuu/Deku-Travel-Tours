import React from 'react'

export default function Country<countryProps>({params}: { params:{ country: string}}) {
  return (
    <div>{params.country}</div>
  )
}

