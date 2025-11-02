import passport_photo from '../assets/passport_photo.jpg'

const Header = () => {
    return <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center">
        <div>
            <div className="font-bold text-3xl">Ankush Patel</div>
            <div className="text-xl">Student</div>
        </div>
        <img className="rounded-full w-24" src={passport_photo} alt=""></img>
    </header>;
}

export default Header; 