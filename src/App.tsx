import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./components/Router"
import { client } from "./lib/apollo"
import { Event } from './pages/Event'


function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
