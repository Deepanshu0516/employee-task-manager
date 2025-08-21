import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null) // role: 'admin' or 'employee'
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext) // all employees

  // Load logged-in user from localStorage
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userDataFromStorage = JSON.parse(loggedInUser)
      setUser(userDataFromStorage.role)
      setLoggedInUserData(userDataFromStorage.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    const { admin } = getLocalStorage()

    // Admin Login
    if (admin.some(a => a.email === email && a.password === password)) {
      const adminData = admin.find(a => a.email === email)
      setUser('admin')
      setLoggedInUserData(adminData)
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'admin', data: adminData })
      )
      return
    }

    // Employee Login
    if (userData) {
      const employee = userData.find(
        e => e.email === email && e.password === password
      )
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        )
        return
      }
    }

    // If neither matched
    alert('Invalid Credentials')
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      )}

      {user === 'employee' && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  )
}

export default App
