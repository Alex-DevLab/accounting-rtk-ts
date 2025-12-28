import {Navigate, Outlet} from "react-router";

interface TokenProps {
    token: string;
}

const ProtectedGuest = ({token}:TokenProps) => {
    return token === '' ? <Outlet /> : <Navigate to={'/profile'} />;
}

export default ProtectedGuest;