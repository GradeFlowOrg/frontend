"use server"

const testUser = {
    id: "1",
    identifier: 'abdulazizyusupaliev009@gmail.com',
    password: '123',
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function login(prevState: any, formData: FormData) {
    if (formData.get("identifier") === testUser.identifier && formData.get("password") === testUser.password) {

    }else{
        return{
            error: {
                root: ['Invalid username/email or password.']
            }
        }
    }
}

export async function logout() {}
