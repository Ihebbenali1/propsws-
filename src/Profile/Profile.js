import PropTypes from 'prop-types'; 
const Profile=({fullName,bio,profession,handlehi,children})=>{
    return(
        <div>
            <h1>My name is : {fullName}</h1>
            <h2>{bio}</h2>
            <h2>{profession}</h2>
            {children}
            <button onClick={()=>handlehi(fullName)}>Hello</button>

        </div>

    )
}
Profile.defaultProps={
    name : "Student",
    age : 23
}

Profile.propTypes = {
    name: PropTypes.string
}

export default Profile