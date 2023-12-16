
const Navbar = () => {
    const profile = "jonahyordy"

    return (
        <div className="navbar">
            <div className="left">
                <a href="/homefeed">Home</a>
                <a href="/createpost">Create</a>
            </div>
            <div className="right">
                
                <a href="/search">Search</a>
                <a href="/notifications">Notifs</a>
                <a href="/messages">Messages</a>
                <a href={"/" + profile}>Profile</a>
            </div>
        </div>
    )
}

export default Navbar