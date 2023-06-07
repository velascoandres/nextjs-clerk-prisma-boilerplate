import { prisma } from "database";
import Link from "next/link";

export default async function IndexPage() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/auth/sign-in">Sign in</Link>
      <br />
      <Link href="/auth/sign-up">Sign up</Link>
    </div>
  );
}
