import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { AUTH_ROUTES, PROTECTED_ROUTES, PUBLIC_ROUTES } from './lib/routes';

export async function middleware(request: Request | any) {
  const token = await getToken({ req: request });
  console.log(token, 'Token'); // Для отладки
  const pathname = request.nextUrl.pathname;

  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  if (AUTH_ROUTES.includes(pathname)) {
    if (token) {
      return NextResponse.redirect(new URL(PROTECTED_ROUTES[0], request.url)); 
    }
    return NextResponse.next();
  }

  const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route));

  if (isProtectedRoute) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',               
    '/auth/:path*',    
    '/profile',        
    '/diary',
    '/products',
    '/exercises/:path*',
  ],
};