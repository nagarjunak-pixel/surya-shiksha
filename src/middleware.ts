import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware() {},
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const p = req.nextUrl.pathname;
        if (p.startsWith('/dashboard/admin')) return token?.role === 'ADMIN';
        if (p.startsWith('/dashboard/teacher')) return token?.role === 'TEACHER' || token?.role === 'ADMIN';
        if (p.startsWith('/dashboard/parent')) return token?.role === 'PARENT' || token?.role === 'ADMIN';
        return !!token;
      }
    }
  }
);

export const config = {
  matcher: ['/dashboard/:path*', '/curriculum/:path*', '/learn/:path*', '/assessment/:path*', '/progress/:path*', '/settings/:path*']
};
