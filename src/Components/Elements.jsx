import React from 'react'
// import {useState} from 'react'
import './Element.css';
const Elements = (props) => {
  // const [data ,setData] = useState(props)
  // console.log(props.name)
  return (
    <div  id='elmnt'>
        <div><b>{props.name}</b></div>
        <div><i>{props.region}</i></div>
        <div>{props.area}</div>
    </div>
  )
}

export default Elements