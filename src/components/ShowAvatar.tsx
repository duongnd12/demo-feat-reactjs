import React from "react";

const ShowAvatar = () => {
    
    const [avatar, setAvatar] = React.useState<any>()

    React.useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar])

    const handleChangeFile = (e:any) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }
    
    return (
        <div>
            <input onChange={handleChangeFile} type="file" />
            {avatar && (<img src={avatar.preview}  alt="" width="80%"/>)}
        </div>
    )
}

export default ShowAvatar;