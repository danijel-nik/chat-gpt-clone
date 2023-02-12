'use client'
import { useSession, signOut } from "next-auth/react"
import NewChat from "./NewChat"

const Sidebar = () => {
	const { data: session } = useSession()
	return (
		<div className="p-2 flex flex-col h-screen">
			<div className="flex-1">
				<NewChat />

				<div>
					{/* ModelSelection */}
				</div>

				{/* Map through the ChatRows */}
			</div>

			{session && (
				<img
					onClick={() => signOut()}
					src={session.user?.image || ''}
					alt="Profile picture"
					className="w-12 h-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
				/>
			)}
		</div>
	)
}

export default Sidebar