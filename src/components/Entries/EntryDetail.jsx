import React from 'react'

export default function EntryDetail({ entry: { name, message } }) {

    return (
        <>
            <h4>{name}</h4>
            <p>{message}</p>
        </>
    )
}
