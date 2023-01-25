import logo from '../image/Logo-Elibs.png'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('auth');
        navigate('/')
    }
    return (
        <div class="bg-[#2A3342] fixed shadow-lg w-full top-0 z-50">
            <div class="py-5 flex w-full items-center">
                <div class="flex justify-between w-full mx-[50px] lg:mx-[150px]">
                    <img class="h-10" src={logo} alt="Logo" />
                    <div>
                        <button type="submit" onClick={logout} class="border flex border-[#c52222] hover:bg-[#9d1e1e] px-3 py-2 rounded-xl bg-[#c52222] text-white">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;