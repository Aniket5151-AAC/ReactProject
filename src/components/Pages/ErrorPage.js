import React from 'react'
import ErrorImage from './ErrorLogo.gif'

const ErrorPage = () => {
  return (
  <>
    <div className="mx-auto text-center mt-3">
        <h1>ERROR 404 !!!</h1>
        <h1>PAGE NOT FOUND</h1>
        <img src={ErrorImage} alt='error page 404' width={600} className='rounded-4'/>
        


    </div>
    </>
  )
}
export default ErrorPage