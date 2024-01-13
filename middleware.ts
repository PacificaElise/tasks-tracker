import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({   
//   afterAuth() {
//   return NextResponse.redirect('http://localhost:3000');
// },
    debug: true,
}
);

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};