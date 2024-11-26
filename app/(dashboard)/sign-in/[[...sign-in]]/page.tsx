import { SignIn } from '@clerk/nextjs'

function SignInPage() {
  return (
    <main className='p-7 mx-auto'>
      <SignIn />
    </main>
  )
}

export default SignInPage