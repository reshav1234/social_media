import {useState} from 'react'

const UserProfile = () => {
    const user_details = [
        {
            'name':'Reshav',
            'contact': 1,
            'id': 1,
        },
        {
            'name':"tarjan",
            'contact':3,
            'id':3
        }
    ]
  return (
    <>
        <div>
            {user_details.map((user) =>{user.id})}
        </div>
    </>

  )
}

export default UserProfile