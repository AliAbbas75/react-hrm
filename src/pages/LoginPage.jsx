import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="bg-background flex m-0 min-w-svw min-h-svh flex-col items-center justify-center">
      <div className="w-full h-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}
