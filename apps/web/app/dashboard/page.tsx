import React from 'react'

const DashboardPage = () => {
  return (
    <div>
        <h1>protected route</h1>
        <a href="/api/auth/logut">Logout</a>
    </div>
  )
}

export default DashboardPage