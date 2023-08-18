import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
  <div className="flex justify-end lg:pr-48 lg:pt-40 pt-60 z-1000">
    <SignIn />;
  </div>
  )
}