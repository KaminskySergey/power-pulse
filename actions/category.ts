'use server'

import { BASIC_URL } from "@/app/const/basic-server-url"
import { auth } from "@/auth"

export async function getCategory() {
    const session = await auth()
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
