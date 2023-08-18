import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
  <div className="flex lg:justify-end justify-center lg:pr-48 lg:pt-40 pt-60 z-1000">
    <SignIn />;
  </div>
  )
}