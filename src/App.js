import { GlobalStyle } from "./styles/globalStyles"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'

import {useSelector} from "react-redux"
import {ThemeProvider} from "styled-components"

function App() {
  const {theme} = useSelector(state => state.toggleTheme)

  let Theme = theme ? theme : {}

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <GlobalStyle />
        <main className="contentwrap">
          <Header />
          <Switch>
            <Route path="/movie/">
              {/* <Movie /> */}
            </Route>
            <Route path="/person/">
              {/* <Person /> */}
            </Route>
            <Route path="/persons/">
              {/* <PersonsList /> */}
            </Route>
            <Route path="/" exact>
              {/* <MoviesList /> */}
            </Route>
        </Switch>
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default App