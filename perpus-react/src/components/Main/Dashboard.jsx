import dekorbawah from '../../image/dekor bawah.png'
import dekorAtas from '../../image/Frame 14.png'
import hero from '../../image/Image Container.png'
import wave from '../../image/bg-wave.png'
import Header from "./Navbar";

const Dashboard = () => {

    return (
        <>
        {<Header/>}
            <div className="bg-[#2A3342] w-full pt-24 p-[100px]">
                <div className="pt-20 flex lg:flex-row flex-col text-white font-Poppins">
                    <div className="flex font-bold flex-col w-1/2">
                        <h1 className="text-[60px]">E-libs</h1>
                        <h4 className="text-[30px]">ELECTRONIC LIBRARIES</h4>
                        <h6 className="mt-16 mb-[150px] font-medium text-[15px] text-[#BBC3CF]">"The more that you read, the more thinks you will know.<br /> The more that you learn, the more place<br /> that you'll go"</h6>
                        <div className="font-medium cursor-pointer">
                            <a href="/book" className="mr-5 p-3 rounded-lg bg-[#22C55E] hover:bg-[#1baa4f]">Read Book</a>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end">
                        <img className="h-32 -ml-[450px] -mt-[50px] absolute z-10" src={dekorAtas} alt="logo" />
                        <img className="h-[464px] w-[554px]" src={hero} alt="" />
                        <img className="absolute h-[90px] mt-[400px] ml-[30px] w-[148px]" src={dekorbawah} alt="dekor bawah" />
                    </div>
                </div>
            </div>
            <img className="w-full mb-[20px]" src={wave} alt=""></img>
        </>
    );
}

export default Dashboard;