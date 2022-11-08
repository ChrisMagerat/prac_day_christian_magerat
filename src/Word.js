import React from 'react'
import PrintWord from './PrintWord'

export default function Word({wordData}) {
  return (
    wordData.map(word => {
        return <PrintWord key={word.name} word={word} />
    })
  )
}
