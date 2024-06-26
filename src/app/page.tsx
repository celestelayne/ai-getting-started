import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  // Use `user` to render user details or create UI elements
  let fullname = "Guest";

  if (user) {
    const { firstName, lastName } = user;
    fullname = (firstName ? `${firstName} `: "") + (lastName ? lastName : "");
    if (!fullname) fullname = "User" 
  }

  return (
    
    <main className="flex min-h-screen flex-col">

        <h1 className="mt-16 mx-auto max-w-2xl text-center text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Landing Page
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-center text-xl leading-8 text-slate-400">
          Hello, {fullname}! This is the landing page.
        </p>

    </main>
  );
}
