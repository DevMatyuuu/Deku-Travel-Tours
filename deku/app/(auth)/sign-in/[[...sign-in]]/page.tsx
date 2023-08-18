import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
  <div className="flex justify-center pt-40  z-1000">
    <SignIn />;
  </div>
  )
}