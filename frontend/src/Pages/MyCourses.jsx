import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../Redux/store'
import { Heading } from '@chakra-ui/react'

const MyCourses = () => {

    return (
    <div>
        <Heading as={'h2'}>My Courses</Heading>
    </div>
  )
}

export default MyCourses