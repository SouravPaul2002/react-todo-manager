import React from 'react'

export default function footer() {
  const footerStyle={
    position:"sticky",
    top:"100vh",
    width:"100%",
  }
  return (
    <footer style={footerStyle}>
      <p className="bg-dark text-light text-center my-0 py-3">Copyright &copy; MyTodoList.com</p>
    </footer>
  )
}
