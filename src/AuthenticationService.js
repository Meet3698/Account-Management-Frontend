
class AuthenticationService{
    setSession(username){
        sessionStorage.setItem("email",username)
    }

    removeSession()
    {
        sessionStorage.removeItem("email")
    }

    isUserLoggedIn()
    {
        let user = sessionStorage.getItem("email")
        if(user===null)
        {
            return false
        }
        else
        {
            return true
        }
    }
}

export default new AuthenticationService()