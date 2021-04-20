export interface settings {
    port: string
}

export const port = process.env.PORT || "3000";