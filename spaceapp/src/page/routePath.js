import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from '../component/navBar'
import Launch from './launch'
import Rocket from './rocket'
import Home from './home'
import '../styles/stylesPages.css'
import RocketDetail from './RocketDetail'
import LaunchDetail from './LaunchDetail'

const RoutePath = () => {
    return (
        <Router>
            <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/launch">
                        <Launch />
                    </Route>
                    <Route path="/rocket">
                        <Rocket />
                    </Route>
                        <Route  path="/RocketDetail" component={RocketDetail}>
                    </Route>
                        <Route  path="/LaunchDetail" component={LaunchDetail}>
                    </Route>
                </Switch>
        </Router>
      )
}



export default RoutePath