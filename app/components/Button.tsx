import React from 'react'

export const Button = (props:any) => {
  return (
    <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-zinc-800">{props.data}</button>
  )
}
