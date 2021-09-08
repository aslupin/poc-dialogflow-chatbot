import styled from "@emotion/styled";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/Home'
import VaccinePage from './pages/VaccinePage'
import Navbar from  './components/Navbar'
import Chat from './components/Chat'
import CatListPage from './pages/CatListPage'
import DogListPage from './pages/DogListPage'
import StepPage from './pages/StepPage'

const Container = styled.div`
    width:  100%;
    position: relative;
`

const App = () => {
    return (
        <Container>
            <Router>
                <Navbar />
                <Chat />
                <Switch>
                    <Route path="/step">
                        <StepPage />
                    </Route>
                    <Route path="/list/dog">
                        <DogListPage />
                    </Route>
                    <Route path="/list/cat">
                        <CatListPage />
                    </Route>
                    <Route path="/vaccine">
                        <VaccinePage />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Container>
    )
}

export default App
