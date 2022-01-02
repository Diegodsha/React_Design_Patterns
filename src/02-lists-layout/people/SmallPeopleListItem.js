import React from 'react'

const SmallPeopleListItem = ({person}) => {
    const {name, age} = person
    return (
    <p>Name: {name}, Age: {age} years</p>
    )
}

export default SmallPeopleListItem
