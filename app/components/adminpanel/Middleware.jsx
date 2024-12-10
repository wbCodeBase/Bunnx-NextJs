"use server"

import { auth } from "@/auth";
import { redirect } from "next/navigation"

const Middleware = async () => {

    const session = await auth()
    if (!session?.user) redirect("/login")

    return (
        <></>
    )
}

export default Middleware