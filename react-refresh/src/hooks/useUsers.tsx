import { useEffect, useRef, useState } from "react"

import { reqResAPI } from "../api/reqRes"
import { User, ReqRes } from "../interfaces/reqRes"

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const pageRef = useRef(1)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        await reqResAPI.get<ReqRes>(`/users`, {
            params: {page: pageRef.current}
        })
        .then(response => {
            const users = response.data.data

            if(users.length > 0) {
                setUsers(users)
            } else {
                pageRef.current--
            }
        })
        .catch(console.warn)
    }
    
    const nextPage = () => {
        pageRef.current++
        getUsers()
    }

    const prevPage = () => {
        if(pageRef.current > 1) {
            pageRef.current--
            getUsers()
        }
    }
    
    return {users, nextPage, prevPage}
}
