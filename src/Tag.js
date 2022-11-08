import React from 'react'
import PrintTag from './PrintTag'

export default function Tag({tags}) {
  return (
    tags.map(tag => {
        return <PrintTag key={tag.name} tag={tag} />
    })
  )
}
