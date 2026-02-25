import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { SessionPayload } from '@/types';

const secretKey = process.env.SESSION_SECRET || 'default_secret';
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload){
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
    if (!session) {
        return null;
    }
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        });
        return payload as SessionPayload;
    } catch (error) {
        console.error('Failed to decrypt session:', error);
        return null;
    }
}