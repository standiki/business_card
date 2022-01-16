import data from "../data";

const Header = () => {
    return (
        <div className="profile_details">
            <h3>{data.name}</h3>
        </div>
    )
}

export default Header;