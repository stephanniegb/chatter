import { ref, set } from 'firebase/database'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { db } from '../firebase/firebase'
import { log } from 'console'

// write

function SignIn() {
  const [content, setContent] = useState('')
  const handleContentChanges = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }
  const writeToDB = () => {
    const uid = uuidv4()
    console.log(uid)
    set(ref(db, `/${uid}`), { content, uid })
    setContent('')
  }

  return (
    <div>
      <textarea value={content} onChange={handleContentChanges} />
      <button onClick={writeToDB}>Submit</button>
    </div>
  )
}

export default SignIn
