


const Profile = props => (
    
<div>
    {console.log(props)}
    <div><h2>Name: {props.data.name}</h2></div>
    <div><img src={props.data.image}></img></div>
    <div>Age: {props.data.age}</div>
</div>
)
export default Profile;

