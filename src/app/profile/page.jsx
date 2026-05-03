"use client";
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";


const Profilepage = () => {
    const userData = authClient.useSession();

    const user = userData.data?.user;
    console.log(user);
    return (
        <div>
            <Card className="w-96 mx-auto mt-10 flex flex-col items-center gap-4 p-6 *:bg-gray-50   rounded-lg border mt-10">
                <Avatar className="w-24 h-24">
                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <h2 className="text-xl font-semibold">{user?.name}</h2>
                <p className="text-gray-600">{user?.email}</p>
                <UpdateUserModal />
            </Card>
        </div>
    );
};

export default Profilepage;