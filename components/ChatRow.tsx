'use client'
import { useState, useEffect } from 'react'
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

type Props = {
	id: string
}
const ChatRow = ({ id }: Props) => {
	const pathname = usePathname()
	const router = useRouter()
	const { data: session } = useSession()
	const [active, setActive] = useState<boolean>(false)
	const [messages] = useCollection(
		collection(db, 'users', session?.user?.email!, 'chats', id, 'messages')
	)

	useEffect(() => {
		if (!pathname) return

		setActive(pathname.includes(id))

	}, [pathname])

	const removeChat = async () => {
		await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id))
		router.replace('/')
	}

	return (
		<Link
			href={`/chat/${id}`}
			className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}
		>
			<ChatBubbleLeftIcon className="w-5 h-5" />
			<p className="flex-1 hidden md:inline-flex truncate">
				{messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
			</p>
			<TrashIcon
				className="w-5 h-5 ml-auto cursor-pointer hover:text-red-700"
				onClick={removeChat}
			/>
		</Link>
	)
}

export default ChatRow