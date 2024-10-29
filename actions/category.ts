'use server'

import { BASIC_URL } from "@/app/const/basic-server-url"
import { authOptions } from "@/auth"
import { getServerSession } from "next-auth"


export async function getCategory() {
    const session = await getServerSession(authOptions)
    const response = await fetch(`${BASIC_URL}/categories`, {
     method: 'GET',
     headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`
    },
    })
    const res = await response.json()
    return res
} 
