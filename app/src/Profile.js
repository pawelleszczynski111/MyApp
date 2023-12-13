import Sidebar from "./Sidebar";

const Profile = () => {
    return ( 
    <div className="profile">
        <Sidebar />
        <div className="tiles">

            <a href="">
            <div className="tile">
                mój profil
            </div>
            </a>

            <a href="">
            <div className="tile">
                moje dane
            </div>
            </a>

            <a href="">
            <div className="tile">
                moje badania
            </div>
            </a>
        </div>
    </div> );
}
 
export default Profile;