export type EmporixState = {
    isLoggedIn?: boolean
    accessToken?: string
    tenant?: string
    user?: {
        email?: string
    }
}

export type EmporixOrder = {
    id: string
    customer: {
        email: string
    }
}
