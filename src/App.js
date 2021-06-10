import './App.scss'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Context from './Context';
import Home from './components/Home/Home'
import AddProject from './components/Add&EditProject/AddProject/AddProject'
import EditProject from './components/Add&EditProject/EditProject/EditProject'
import moment from 'moment'

function App() {

  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')) || [
    {
      projectId: 1,
      projectName: 'Landing page',
      projectDescription: 'Some description',
      projectManager: 'Walt Cosani',
      assignedTo: 'Ignacio Truffa',
      status: 'Enabled',
      creationDate: moment('09/09/2020 10:30 am')
    },
    {
      projectId: 2,
      projectName: 'E-Commerce Shop',
      projectDescription: 'Some description',
      projectManager: 'Walt Cosani',
      assignedTo: 'Ignacio Truffa',
      status: 'Enabled',
      creationDate: moment('09/09/2020 10:30 am')
    },
    {
      projectId: 3,
      projectName: 'CRM Linkroom',
      projectDescription: 'Some description',
      projectManager: 'Walt Cosani',
      assignedTo: 'Ignacio Truffa',
      status: 'Enabled',
      creationDate: moment('09/09/2020 10:30 am')
    }
  ])

  useEffect(() => {localStorage.setItem('projects', JSON.stringify(projects))}, [projects])

  const projectManagers = ['Walt Cosani', 'Máximo Cozzetti', 'León Stofenmacher', 'Jacques Dupont', 'Basilio Dos Reyes']
  const developers = ['Ignacio Truffa', 'Germán Cocca', 'Franco Milazzo', 'Marcos Molero', 'Pedro Velazco']

  return (
      <Router>
          <Context.Provider value={{projects:projects, setProjects:setProjects, projectManagers:projectManagers, developers:developers}}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/add">
                <AddProject />
              </Route>
              <Route path="/edit/:projectId">
                <EditProject />
              </Route>
          </Switch>
        </Context.Provider>
      </Router>
  )
}

export default App;
