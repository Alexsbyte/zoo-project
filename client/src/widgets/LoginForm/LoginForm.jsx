import { useEffect, useState } from "react"
import { setAccessToken } from '../../shared/lib/axiosInstance'
import apiUser from "../../entities/apiUser"
import { useNavigate } from "react-router-dom"

export default function LoginForm( { setUser }) {

  const [formData, setFormData] = useState({email: '', password: ''})
  const [isDisabled, setDisabled] = useState(true)
  const [error, setError] = useState(null);

  const navigete = useNavigate()
  useEffect(() => {
    const { email, password } = formData;

    if (
      email.trim() &&
      password.trim() &&
      password.trim().length >= 8
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);


  async function regHandler(e) {
    e.preventDefault()
    try {
      const {email, password} = formData
      const  {data}  = await apiUser.login({ email, password })
      setAccessToken(data.accessToken)
      setUser(data.user)
      navigete('/')
    } catch (error) {
      setAccessToken('')
      setUser({})
      const { message } = error.response.data
      setError(message || 'An error occurred during login')
      setTimeout(() => {
        setError(null)
      }, 4000)
      
    }
  }

  return (
    <form onSubmit={regHandler} noValidate style={{width: "350px"}}> 
      {error && <div className="notification is-danger">{error}</div>}
      <div className="field">
        <div className="control">
          <input 
          className="input"  
          onChange={(e)=>setFormData({...formData, email: e.target.value})}  
          value={formData.email} 
          type="email" 
          placeholder="Введите email" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input 
          className="input" 
          onChange={(e)=>setFormData({...formData, password: e.target.value})} 
          value={formData.password} 
          type="password" 
          placeholder="Введите пароль не менее 8 символов" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button 
          type='submit' 
          className="button is-primary" 
          disabled={isDisabled}
        >Войти</button>
        </div>
      </div>
    </form>
  )
}