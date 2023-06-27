import { child, get, ref } from "@firebase/database"
import FirebaseConnection from "../../configDB"

type LoginUserProps = {
    login:string,
    password:string
}

const db = FirebaseConnection()

export const LoginUser = ({login, password}:LoginUserProps) => {
    const dbRef = ref(db);
    
    get(child(dbRef, 'users/' + login)).then((e) =>{
        console.log('response: ', e)
        console.log("if exist: ", e.exists())
        console.log('e: ', e.val())
    }).catch((e) => {
        console.log("Error: ", e)
    })
}