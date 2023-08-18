import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
  <div className="flex justify-center pt-28 z-1000">
    <SignUp />;
  </div>
  )
}