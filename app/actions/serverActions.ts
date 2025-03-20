'use server'

import { cookies } from "next/headers"

export async function decodeToken(token:string) {
    const [, payloadBase64] = token.split(".");
    const decodedBuffer = Buffer.from(payloadBase64, "base64");
    const decodedString = decodedBuffer.toString("utf-8");
    const payload = JSON.parse(decodedString);
    return payload
}

export async function setCredentials(accessToken: string, refreshToken: string) {
    const cookieStore = await cookies(); // Await the cookies() promise

    const decodedAccessToken = await decodeToken(accessToken);
    const decodedRefreshToken = await decodeToken(refreshToken);

    // const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    // cookieStore.set('session_userid', userId, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production',
    //     maxAge: 60 * 60 * 24 * 7, // One week
    //     path: '/',
    // });

    cookieStore.set('session_access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: decodedAccessToken.exp > 0 ? decodedAccessToken.exp : 0,
        path: '/',
    });

    cookieStore.set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: decodedRefreshToken.exp > 0 ? decodedRefreshToken.exp : 0,
        path: '/',
    });
}

export async function resetAuthCookies() {
    const cookieStore = await cookies(); // Await the cookies() promise

    // cookieStore.set('session_userid', '', { path: '/' });
    cookieStore.set('session_access_token', '', { path: '/' });
    cookieStore.set('session_refresh_token', '', { path: '/' });
}

// export async function getUserId() {
//     const cookieStore = await cookies(); // Await the cookies() promise
//     const userId = cookieStore.get('session_userid')?.value;

//     return userId ? userId : null;
// }

export async function getAccessToken() {
    const cookieStore = await cookies(); // Await the cookies() promise
    return cookieStore.get('session_access_token')?.value;
}

export async function getRefreshToken() {
    const cookieStore = await cookies(); // Await the cookies() promise
    return cookieStore.get('session_refresh_token')?.value;
}
