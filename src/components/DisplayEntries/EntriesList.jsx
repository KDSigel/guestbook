import React from 'react'
import { useEntry } from '../../context/EntryContext'
import EntryDetail from '../Entries/EntryDetail'

export default function EntriesList() {

const {entries} = useEntry([])

    return (
        <ul>
            {entries.map((entry, i) => {
            return (
                <li key={i}>
                    <EntryDetail entry={entry}/>
                </li>
            )   
            }
            )
            }
        </ul>
    )
}
