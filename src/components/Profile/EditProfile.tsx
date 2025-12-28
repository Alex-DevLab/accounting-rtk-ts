import {useState} from "react";

interface EditProfileProps{
    close: () => void,
}

const EditProfile = ({close}:EditProfileProps) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleClickSave = () => {
        //TODO: Implement edit profile save and close logic
        alert('Profile updated!')
        close();
    }


    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }

    return (
        <>
            <label htmlFor="">
                First Name:
                <input type="text"
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            <label htmlFor="">
                Last Name:
                <input type="text"
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}/>
            </label>
            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default EditProfile;