// "use client"
// import React from 'react'
// import { useRouter } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'

// const Dashboard = () => {
//   const { data: session } = useSession()
//   if (!session) {
//     const router = useRouter()
//     router.push('/login')
//   }
//   return (
//     <div>
//       This is profile
//     </div>
//   )
// }

// export default Dashboard


import Dashboard from '@/components/Dashboard'

const DashboardPage = () => {
    return (
        <Dashboard/>
    )
}

export default DashboardPage

export const metadata = {
    title: "Dashboard - Get Me A Chai",
  }
   