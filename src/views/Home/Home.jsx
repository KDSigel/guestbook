import React from 'react'
import DisplayEntries from '../../components/DisplayEntries/DisplayEntries'
import InputForm from '../../components/InputForm/InputForm'
import Request from '../../components/Request/Request'

export default function Home() {
    return (
        <div>
            <Request />
            <InputForm />
            <DisplayEntries />
        </div>
    )
}
