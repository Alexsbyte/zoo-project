import { useEffect, useState } from "react"
import { setAccessToken } from '../../shared/lib/axiosInstance'
import apiUser from "../../entities/apiUser"
import { useNavigate } from "react-router-dom"

export default function LoginForm( { setUser }) {

  const [formData, setFormData] = useState({email: '', password: ''})
  const [isDisabled, setDisabled] = useState(true)

  const navigete = useNavigate()
  useEffect(() => {
    const {email, password} = formData
    if (
      email.trim() &&
      password.trim() &&
      password.trim().length >=8
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData])


  async function regHandler(e) {
    e.preventDefault()
    const {email, password} = formData
    const { data } = await apiUser.login({ email, password })
    // console.log('LOGINFORM', data);
    setAccessToken(data.accessToken)
    setUser(data.user)
    navigete('/')
  }

  return (
    <form onSubmit={regHandler}> 
          <div className="field">
            <div className="control">
              <input 
              className="input"  
              onChange={(e)=>setFormData({...formData, email: e.target.value})} 
              name="email" 
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
              name="password" 
              value={formData.password} 
              type="password" 
              placeholder="Введите пароль" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button 
              type='submit' 
              className="button is-primary" 
              style={{color: "rgb(56, 40, 40)"}}
              disabled={isDisabled}
            >Войти</button>
            </div>
          </div>
        </form>
  )
}