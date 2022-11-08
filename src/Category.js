import React from 'react'
import CatName from './CatName'

export default function category({catData}) {
  return (
        catData.map(name => {
            return <CatName key={name.name} name={name} />
        })
    )
}
