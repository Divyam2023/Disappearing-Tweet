import React ,{useState} from 'react'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import './Input.css';
import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import Post from './Post';

import  {postAdded}  from './PostsSlice';

const Input = () => {
    
    const [tweet, setTweet] = useState('');
    const [dates , setDates] = useState('');
    const [cardState, setCardState] = useState(false)
   
   
    const dispatch = useDispatch();

  

    const onTweetChanged = e => setTweet(e.target.value);
    const onDateChanged = e => setDates(e.target.value);
    //  const posts = useSelector(state=> state.posts)


  
    const handleSubmit = () =>
    {
        if(tweet && dates){
        dispatch(
             postAdded({
                id:nanoid(),
                tweet,
                dates
            }),
            
        )
            setTweet('')
            setDates('')
            setCardState(true);
        }
   
    }


    
    
    
    



   const minDate = new Date();

    return (

        <div className='input'>
             <div className='inputMain'>
                 <input
                value={tweet}
                onChange={onTweetChanged}
                 className='inputElement'
                  type='text' 
                  placeholder='Please enter a tweet here' />
            
                <DateTimePickerComponent min={minDate}
                value={dates}
                onChange={onDateChanged}  
                className='inputDate' 
                id="datetimepicker" 
                placeholder='Select date and time' />;
            </div>
            <div className='inputButton'>
                <button onClick={handleSubmit}  className='inputButtonMain' type='submit' >Tweet</button>
            </div>
            {cardState && <Post /> }
           
        </div>
    )
}

export default Input;