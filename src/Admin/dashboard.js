import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <div>
      <Link to='/admin/cars'>Cars</Link>
      <br />
      <Link to='/Rentals'>Rentals</Link>
      <br />
      <Link to='/Users'>Users</Link>
    </div>
  )
}

export default Dashboard
