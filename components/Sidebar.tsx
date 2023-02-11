import NewChat from "./NewChat"

const Sidebar = () => {
    return (
        <div className="p-2 flex flex-col h-screen">
					<div className="flex-1">
						<NewChat />

						<div>
							{/* ModelSelection */}
						</div>

						{/* Map through the ChatRows */}
					</div>
        </div>
    )
}

export default Sidebar