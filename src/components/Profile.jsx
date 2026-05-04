import{ useState} from "react"

function Profile ({name, role}) {
    const [following, setFollowing] = useState(false)
    return (
        <div className = "profile-section">
            <h2>{name}</h2>
             <p id = 'role'>{role}</p>
