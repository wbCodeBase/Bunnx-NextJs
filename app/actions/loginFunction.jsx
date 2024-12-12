"use server"


import { signIn } from "../auth";

const credentialsLogin = async({email, password})=>{


    try {
        
        await signIn("credentials", {
            email,
            password,
            callbackUrl: "/bunnx-admin"
        });
    

    
    } catch (err) {
        console.log("err", err.message);
        return err.cause;
    }

}


export { credentialsLogin }