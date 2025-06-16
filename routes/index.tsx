import { FreshContext, Handlers } from "$fresh/server.ts";
import LoginForm from "../components/LoginForm.tsx";

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    const password = url.searchParams.get("password");
    if (!name || !password) {
      return ctx.render();
    }

    const headers = new Headers();
    headers.append("Set-Cookie", `name=${name}; path=/`);
    headers.append("Set-Cookie", `password=${password}; path=/`);
    headers.append("location", "/characters");
    return new Response(null, {
      status: 302,
      headers,
    });
  },
};

const Page = () => {
  return <LoginForm />;
};

export default Page;
