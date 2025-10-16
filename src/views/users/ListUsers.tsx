import {useEffect} from "react";
import {useUsers} from "@/hooks";

const ListUsers = (): React.JSX.Element => {

    useEffect(() => {
        useUsers().fetchUsers().catch(console.error);
    }, []);

    return (
        <div>
            <h1>List Users</h1>
        </div>
    )
}

export default ListUsers