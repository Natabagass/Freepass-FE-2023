const Profile = () => {
    return (
        <>
            <div class="bg-[#2A3342]">
                <h1 class="text-[36px] pt-[20px] justify-center font-bold flex text-white">PROFILE</h1>
                <div class="flex flex-row justify-center">
                    <div class="flex flex-col">
                        <label class="text-white mt-[45px] font-bold">First Name</label>
                        <label class="text-white mt-[45px] font-bold">Last Name</label>
                        <label class="text-white font-bold mt-[50px]">Phone Number</label>
                    </div>
                    <div class="flex flex-col mx-[100px]">
                        <input type="text" name="first_name" class="border rounded-md mt-8 p-2" value="{{ old('first_name', $user->first_name) }}" />
                        <input type="text" name="last_name" class="w-[300px] border rounded-md shadow-md mt-8 p-2" value="{{ old('last_name', $user->last_name) }}" />
                        <input type="number" name="phone" class="w-[300px] border rounded-md shadow-md mt-8 p-2" value="{{ old('phone', $user->phone) }}" />
                    </div>
                </div>
            </div>
            <img class="absolute" src="/image/bg-wave.png" alt="" />
        </>
    );
}

export default Profile;