"use server"


import { signIn } from "../auth";

const credentialsLogin = async({email, password})=>{


    try {
        
        await signIn("credentials", {
            email,
            password,
        });
    

    
    } catch (err) {
        console.log("err from loginFunction", err.message);
        return err.cause;
    }

}


export { credentialsLogin }