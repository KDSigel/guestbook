import React from 'react'
import { useUser } from '../../context/UserContext'

export default function InputForm() {

const {user, setUser} = useUser()

function handleSubmit() {
    setUser(guest)
}

    return (
        <div>
            <form onSubmit={{handleSubmit}}>
                {user ? null :
                    <div>Guest Name<input></input></div>
                }
                <div>Guest Entry<textarea/></div>
                <button>Sign</button>
                {user && (
                    <button>not user?</button>
                )}
            </form>
        </div>
    )
}
