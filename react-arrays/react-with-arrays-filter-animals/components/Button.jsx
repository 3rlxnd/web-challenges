import React from 'react'

export default function Button({onFilter, habitat}) {
  return (
    <button onClick={onFilter}>{habitat}</button>
  )
}
