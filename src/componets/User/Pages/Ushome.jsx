import React, { useEffect, useRef, useState } from 'react'
import 
Swal from 'react-sweetalert2';

function Ushome() {
    const fname = useRef();
    const lname = useRef();
    const age = useRef();

    const [result, setresult] = useState();
    const [view, setview] = useState();


    var index = 0;
    const arr = JSON.parse(localStorage.getItem("data")) || [];

    const handleSave = () => {
        const data = {
            fname: fname.current.value,
            lname: lname.current.value,
            age: age.current.value
        };
        console.log(data);
        arr.push(data);
        localStorage.setItem("data", JSON.stringify(arr));
        setresult(arr);

    }

    const handleDelete = (index) => {
        console.log(index);
        arr.splice(index, 1);
        console.log(arr);
        localStorage.setItem("data", JSON.stringify(arr));
        setresult(arr);
    };

    const handleView = (val, ind) => {
        index = ind;
        console.log(val);
        setview(val);
    }

    const handle = (e) => {
        setview({ ...view, [e.target.name]: e.target.value })
    }

    const handleUpdate = () => {
        console.log(view);
        arr.splice(index, 1, view);
        localStorage.setItem("deta", JSON.stringify(arr));
        setresult([...arr])
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }

    useEffect(() => {
        setresult([...arr]);
    }, []);

    return (
        <div>
            <input type="text" name='fname' value={view.fname} onChange={(e) => handle(e)} />
            <input type="text" name='lname' value={view.lname} onChange={(e) => handle(e)} />
            <input type="number" name='age' value={view.age} onChange={(e) => handle(e)} />
            <button onClick={handleUpdate}>Update</button>
            <br />


            <input type="text" name='fname' placeholder='fname' ref={fname} />
            <input type="text" name='lname' placeholder='lname' ref={lname} />
            <input type="number" name='age' placeholder='age' ref={age} />
            <button onClick={handleSave}>Save</button>
            {
                result?.map((val, ind) => {
                    return (
                        <>
                            <h1>{val.fname}</h1>
                            <h1>{val.lname}</h1>
                            <h1>{val.age}</h1>
                            <button onClick={() => handleDelete(ind)}>Delete</button>
                            <button onClick={() => handleView(val, ind)}>View</button>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Ushome;