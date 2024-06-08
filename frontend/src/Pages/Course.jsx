import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../Redux/CourseReducer/action'
import { Button, Heading, Text, useToast } from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'
import './Course.css'

const Course = () => {

  const dispatch = useDispatch()
  const courses = useSelector(store=> store.courseReducer.courses)
  const toast = useToast()
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(()=> {
    dispatch(getAllCourses())
  }, [])

  const renderRatings = (ratings)=>{
    let stars = []

    for(let i=0; i<ratings; i++){
      stars.push(<StarIcon key={i} />);
    }

    return stars
  }

  function handleClick(courseId){
    toast({
      title: 'Enrolled Successfully',
      description: "Go to my course to access this course",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    setEnrolledCourses([...enrolledCourses, courseId]);
  }

  const isEnrolled = (courseId) => {
    return enrolledCourses.includes(courseId);
  };

  return (
    <div style={{ display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap:'25px', marginTop:'20px'}}>
      {courses.map(item=> {
        return <div id='course-card' style={{border:'1px solid grey', width:'78.4%', textAlign:'left', borderRadius:'15px', margin:'auto', height:'500px'}}>
          <img style={{width: '384px', height:'180px', borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}} src={item.thumbnail} alt={item._id} />
        <div style={{paddingLeft:'20px'}}>
        <Heading >{item.title}</Heading>
        <Text style={{marginTop:'10px'}}>{item.description}</Text>
        <div style={{display:'flex', gap:'10px', padding:'5px', marginTop:'5px'}}>
          <Text><b>{item.rating}</b></Text>
          <Text style={{marginTop:'-2px'}}>{renderRatings(item.rating)}</Text>
          <Text>{`(${item.totalReviews})`}</Text>
        </div>
        <Text style={{marginTop:'10px'}}>Instructor: {item.instructor}</Text>
        <div style={{display:'flex', gap:'40px' ,alignItems:'center', textAlign:'left'}}>
        <div>
        <Text style={{marginTop:'10px'}}>Total Students: {`${item.enrolledStudents}+`}</Text>
        <Text style={{marginTop:'10px'}}><b>{item.price}</b></Text>
        </div>
        <div>
        <Button onClick={()=>handleClick(item._id)} width={'150px'} colorScheme={`${isEnrolled(item._id) ? 'green' : 'blue'}`}>{isEnrolled(item._id) ? 'Enrolled' :'Enroll Now'}</Button>
        </div>
        </div>
        </div>
      </div>
      })}
    </div>
  )
}

export default Course