import React from 'react'

const fgh = "3"
const User = ({Obj, testObj, abc, cde}) => {
    return (
        <div>
            {abc}
            <br/>
            {cde}
            <br/>
            {testObj.name}
            <br/>
            {Obj.tech}
            <br/>
            Himanshu Mehta
        </div>
    )
}

export default User
