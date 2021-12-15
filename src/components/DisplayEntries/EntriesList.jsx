import React from 'react'
import { useEntry } from '../../context/EntryContext'
import EntryDetail from '../Entries/EntryDetail'
import './EntriesList.css'

export default function EntriesList() {

const {entries} = useEntry([])

    return (
        <ul>
            {entries.map((entry) => {
            return (
                <li>
                    <EntryDetail entry={entry}/>
                </li>
            )   
            }
            )
            }
        </ul>
    )
}
