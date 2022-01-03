import React from 'react'
import DisplayEntries from '../../components/DisplayEntries/EntriesList'
import InputForm from '../../components/InputForm/InputForm'

export default function Home() {
    return (
        <div>
            <InputForm />
            <DisplayEntries />
        </div>
    )
}
