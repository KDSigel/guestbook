import React, { useState } from 'react'
import { useEntry } from '../../context/EntryContext'
import { useUser } from '../../context/UserContext'

export default function InputForm() {
//context
const {user, logout} = useUser()
const {entries, setEntries} = useEntry([])
//regular states/hooks
const [guestEntry, setGuestEntry] = useState('')

function updateGuestName() {
    
    if (!guestEntry) return

    setEntries([...entries, { name: user, message: guestEntry }])
    setGuestEntry('')
  }

const handleSubmit = (e) => {
    e.preventDefault()
    updateGuestName()
}

const greeting = user 
                ? `Thanks for signing ${user}!`
                : 'Sign the guestbook, now!'

    return (
        <>
        <h2>{greeting}</h2>
            <form 
            onSubmit={handleSubmit}
            >
                <div>
                    Guest Entry
                    <textarea
                        placeholder='write something meaningful'
                        value={guestEntry}
                        onChange={(e) => setGuestEntry(e.target.value)}
                    />
                </div>

                <button>Sign</button>

                {user && (
                    <button
                    type='button'
                        onClick={logout}
                      >not {user}?</button>
                )}
            </form>
        </>
    )
}
