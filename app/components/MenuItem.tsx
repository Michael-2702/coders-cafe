"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface IMenuItem {
    imageURL: string,
    title: string,
    description: string
}

const imageVariant = {
    hover: {
      scale: 1.1,
      y: -10,
      boxShadow: "black",
      transition:{
        type: "spring",
        stiffness: 280
      }
    }
  }

export const MenuItem = ({imageURL, title, description}: IMenuItem) => {
  return (
    <div className='h-60 w-72 flex flex-col items-center'>
        <motion.img src={imageURL} width={200} height={200} className='cursor-pointer [filter:drop-shadow(5px_15px_35px_#222)] '
            variants={imageVariant}
            whileHover={"hover"}
        />
        <h3 className='text-amber-500 font-extrabold text-xl'>{title}</h3>
        <p className='text-center text-sm sm:text-md'>{description}</p>
    </div>
  )
}
