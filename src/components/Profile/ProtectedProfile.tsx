import {Navigate, Outlet} from "react-router";

interface TokenProps {
    token: string;
}

const ProtectedProfile = ({token}:TokenProps) => {
    return token !== '' ? <Outlet /> : <Navigate to={'/'} />;
}

export default ProtectedProfile;