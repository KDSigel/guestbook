import React from 'react'
import { render } from '@testing-library/react'
import { EntryProvider } from '../../context/EntryContext.jsx'
import { UserProvider } from '../../context/UserContext.jsx'
import Home from './Home.jsx'

it('should check App', () => {
const { container } = render(
    <EntryProvider>
    <UserProvider>
        <Home />
    </UserProvider>
    </EntryProvider>
)
expect(container).toMatchSnapshot()
}
)