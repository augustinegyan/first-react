function ProfilePicture (){
    const imageUrl = "./src/assets/react.jpg"; 
    const handleClickE =(e)=>{
        e.target.style.display="none"
    }
    const handleClick =()=>{
        console.log('OUCH');
    }
    
    return(
        <img onClick={(e) => handleClickE(e)}src={imageUrl}></img>
    )
}
export default ProfilePicture;
