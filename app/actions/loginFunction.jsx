"use server"


import { signIn } from "../auth";

const credentialsLogin = async ({ email, password }) => {


    try {

        await signIn("credentials", {
            email,
            password, 
        });

        return { success: true };

    } catch (err) {
        if (err) {
          switch (err.type) {
            case "CredentialsSignin":
              return { error: "Invalid credentials" };
            default:
              return { error: "Something went wrong" };
          }
        }
        
        // Handle NEXT_REDIRECT error
        if (err.message.includes("NEXT_REDIRECT")) {
          return { success: true };
        }
    
        console.log("err from loginFunction", err.message);
        return { error: err.message };
      }
    }
    
    export default credentialsLogin;
