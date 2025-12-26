import {useState} from "react";

const EditProfile = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleClickSave   =()=>{
        //TODO: Implement edit profile save and close logic
        alert('Profile updated!')
    }

    const handleClickClose = ()=>{
        //TODO: Implement close profile without save
        alert('Profile closed!')
    }

    const handleClickClear = ()=>{
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
            <button onClick = {handleClickSave}>Save and close</button>
            <button onClick={handleClickClose}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
            </>
    )
}

export default EditProfile;