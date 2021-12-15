import { render } from 'react-dom';
import App from './App';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';

render(
    <EntryProvider>
    <UserProvider>
        <App />
    </UserProvider>
    </EntryProvider>, 
document.getElementById('root')
);
