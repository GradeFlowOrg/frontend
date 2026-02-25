import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from './app/(authentication)/lib/session';

const protectedRoutes = ["/dashboard", "/profile", "/settings"];    
const publicRoutes = ['/login', '/signup']

export default async function middleware(req: NextRequest){
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)

    if(isProtectedRoute && !session?.userId){
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if(isPublicRoute && session?.userId){
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return NextResponse.next();
}