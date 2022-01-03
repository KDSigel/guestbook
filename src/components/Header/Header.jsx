import React from 'react'
import { useUser } from '../../context/UserContext'

export default function Header() {

    const {user} = useUser()

    return (
        <div>
            {user
            ? `Logged in as ${user}`
            : 'Log in already'
            }
        </div>
    )
}
