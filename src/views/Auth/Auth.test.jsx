import { render } from "@testing-library/react"
import { MemoryRouter, Route, Switch } from "react-router-dom";
import { UserProvider } from "../../context/UserContext";
import Auth from "./Auth";

it('should test the code for the login page', async () => {
const container = render(
    <UserProvider>
        <MemoryRouter initialEntries={["/login"]}>
            <Switch>
                <Route path='/login'>
                    <Auth />
                </Route>
            </Switch>
        </MemoryRouter>
    </UserProvider>
)
expect(container).toMatchSnapshot();
}
)