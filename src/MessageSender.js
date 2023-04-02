import React from 'react'
import {useState} from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import { PhotoLibrary } from '@mui/icons-material';
import { InsertEmoticon } from '@mui/icons-material';
import { useStateValue } from './StateProvider';
import db from './firebase'
import firebase from 'firebase' 


function MessageSender() {
  const [{user}, dispatch ] = useStateValue()
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = (e) => {
    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl
    })

    setImageUrl("")
    setImageUrl("")
}
  
  return (
    <div className='messageSender'>
      <div className='messageSender_top'>
        <Avatar
          src={ user.photoURL } />
        <form>
          <input
            value={ input }
            onChange={(e) => setInput(e.target.value)}
            className='messageSender_input'
            placeholder={ `What's on your mind, ${user.displayName}? ` } />
          
          <input
            value={ imageUrl }
            onChange={(e) => setImageUrl(e.target.value) }
            placeholder='image URl (Optional)' />
          
          <button onClick={ handleSubmit } type="submit">
          Hidden submit 
          </button>
        </form>
      </div>

      <div className='messageSender_bottom' >
        <div className='messageSender_option'>
          <VideocamIcon style={{color: 'red'}} />
        <h3>Live Video</h3>  
        </div>

        <div className='messageSender_option' >
          <PhotoLibrary style={ { color: 'green' } } />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender_option'>
          <InsertEmoticon style={ { color:'orange'} } />
  <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}
export default MessageSender