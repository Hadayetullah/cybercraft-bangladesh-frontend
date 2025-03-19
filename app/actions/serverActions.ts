'use server'

import { cookies } from "next/headers"

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
    const cookieStore = await cookies(); // Await the cookies() promise

    cookieStore.set('session_userid', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
    });

    cookieStore.set('session_access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, // One hour
        path: '/',
    });

    cookieStore.set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
    });
}

export async function resetAuthCookies() {
    const cookieStore = await cookies(); // Await the cookies() promise

    cookieStore.set('session_userid', '', { path: '/' });
    cookieStore.set('session_access_token', '', { path: '/' });
    cookieStore.set('session_refresh_token', '', { path: '/' });
}

export async function getUserId() {
    const cookieStore = await cookies(); // Await the cookies() promise
    const userId = cookieStore.get('session_userid')?.value;

    return userId ? userId : null;
}

export async function getAccessToken() {
    const cookieStore = await cookies(); // Await the cookies() promise
    return cookieStore.get('session_access_token')?.value;
}
