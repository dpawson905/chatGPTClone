import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";


export default function Home() {
  const { isLoading, error, user } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>Chatty Pete - Login or Signup</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-800 text-white text-center">
        <div className="flex items-center justify-center gap-2">
          {!user && (
            <>
              <Link className="btn btn--green" href="/api/auth/login">Login</Link>
              <Link className="btn btn--green" href="/api/auth/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}


export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx.req, ctx.res);
  if (!!session) {
    return {
      redirect: {
        destination: "/chat"
      },
    }
  }
  return {
    props: {},
  }
};