import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <div>
      <Link to='/cars'>Cars</Link>
      <br />
      <Link to='/Rentals'>Rentals</Link>
      <br />
      <Link to='/Users'>Users</Link>
    </div>
  )
}

export default Dashboard
