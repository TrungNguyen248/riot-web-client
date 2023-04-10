import { AuthContext } from "../../context/AuthProvider";
import { useContext, useState } from "react";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"


function UserMenu() {
    let [checKUser, setCheckUser] = useState(false)

    let auth = getAuth();
    const {
      user: { displayName, photoURL},
    } = useContext(AuthContext);
    
    const handleLoginWithGoogle = async () => {
      const provider = new GoogleAuthProvider()

      const res = await signInWithPopup(auth, provider)
        if(res) {
          setCheckUser(true)
        }
    }

    const hanldeLogout = () => {
      setCheckUser(false)
      auth.signOut()
    }

    return ( 
      <div>
        {!checKUser && 
        <button 
            onClick={handleLoginWithGoogle}
            className={"w-24 h-8 rounded-full bg-button-sign-in text-black font-semibold uppercase text-sm "}>
                Sign in
        </button>
        }                
        {checKUser &&
        <div>
          <div className={"flex"}>
            <p className={"truncate text-sm mr-2"}>{displayName}</p>
            <img className={"w-5 h-5 rounded-full"} src={photoURL}/>
          </div>
          <button
            onClick={hanldeLogout}
          >
            Log out
          </button>
        </div>
        }
      </div>

    );
}

export default UserMenu;