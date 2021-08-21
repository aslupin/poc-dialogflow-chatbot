import styled from "@emotion/styled";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/Home'
import Navbar from  './components/Navbar'
import Chat from './components/Chat'

const Container = styled.div`
    width:  100%;
    position: relative;
`


const App = () => {
    return (
        <Container>
            <Navbar />
            <Chat />
            <Router>
                <Switch>
                <Route path="/">
                    <Home />
                </Route>
                </Switch>
            </Router>
        </Container>
    )
}

export default App
