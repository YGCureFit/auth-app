import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login(){
    const {data : session} = useSession();

    if(session){
        return(
            <div>
                <p>Welcome, {session.user.name}</p>
                <button onClick={()=>signOut()}> Sign Out</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <p>Please log in</p>
                <button onClick={()=>signIn()}> Sign In</button>
            </div>
        )
    }
}