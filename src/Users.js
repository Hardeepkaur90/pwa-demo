import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
export default function Users() {
    const [data, setdata] = useState([])
    const [mode, setmode] = useState('online')
    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.log("result", result);
                setdata(result)
                localStorage.setItem("users", JSON.stringify(result))
            })
        }).catch(err => {
            console.log(err);
            let collection = localStorage.getItem("users")
            setdata(JSON.parse(collection))
            setmode('offline')
        })


    }, [])

    return (
        <div>
            <div>
                {
                    mode === 'offline' ?
                        <div class="alert alert-warning" role="alert">
                            You are in offline mode or some issue occurs!
                        </div> : null
                }
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            return <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
