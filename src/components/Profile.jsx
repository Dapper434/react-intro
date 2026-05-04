import{ useState} from "react"

function Profile ({name, role}) {
    const [following, setFollowing] = useState(false)
    return (
        <div className = "profile-section">
            <h2>{name}</h2>
             <p id = 'role'>{role}</p>
             <button className = "buton" onClick={() =>
setFollowing(!following)}
style = {{
    backgroundColor:following? "#ccc" : "#646cff",
    color : following? "#333" : "white"
}}        
>
    
{folllowing? "Following" : "Follow" }
</button>
</div>
    )
}

export default Profile