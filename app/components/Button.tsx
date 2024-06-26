import React from 'react'

export const Button = (props:any) => {
  return (
    <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-zinc-800  hover:scale-105 transition-all ease-in-out dark:bg-violet-500 dark:border dark:border-black dark:text-white ">{props.data}</button>
  )
}
