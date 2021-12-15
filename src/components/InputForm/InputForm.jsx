import React, { useState } from 'react'
import { useEntry } from '../../context/EntryContext'
import { useUser } from '../../context/UserContext'

export default function InputForm() {
//context
const {user, setUser} = useUser()
const {entries, setEntries} = useEntry([])
//regular states/hooks
const [name, setName] = useState('')
const [guestEntry, setGuestEntry] = useState('')

function updateGuestName() {
    
    if (!guestEntry) return

    setUser(name)
    setEntries([...entries, { name, message: guestEntry }])
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
                {user
                    ? null 
                    : <div>
                        Guest Name
                        <input 
                            placeholder="Guest Name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            >
                        </input>
                    </div>
                }

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
                        onClick={() => {
                        setUser('')
                        setName('')
                      }}
                      >not {user}?</button>
                )}
            </form>
        </>
    )
}
