import React from 'react'
import { render } from '@testing-library/react'
import App from './App.jsx'
import { EntryProvider } from './context/EntryContext.jsx'
import { UserProvider } from './context/UserContext.jsx'

it('should check App', () => {
const { container } = render(
    <EntryProvider>
    <UserProvider>
        <App />
    </UserProvider>
    </EntryProvider>
)
expect(container).toMatchSnapshot()
}
)