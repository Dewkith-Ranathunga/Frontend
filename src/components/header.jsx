import UserData from './userData.jsx';

export default function Header() {
    return(
        <div className="bg-red-800 text-white p-4">
            <h1 className="text-[30px] font-bold text-blue-700" >Crystal Beauty Clear</h1> 
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ipsa similique, cum minus animi voluptatibus perferendis libero in? Sit dolorem autem suscipit rem, voluptate est enim illo asperiores beatae eligendi!</p>
            <UserData></UserData>
        </div>
    )
}