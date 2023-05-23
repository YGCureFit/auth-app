import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login(){
    const {data : session} = useSession();

    if(session){
        return(
            <div>
                <img src='/session.jpg' width={400}></img>
                <br />
                <button onClick={()=>signOut()}> Sign Out</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <Image src='/nosession.jpeg' width={206} height={245}></Image>
                <br />
                <button onClick={()=>signIn()}> Sign In</button>
            </div>
        )
    }
}