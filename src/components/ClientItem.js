import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import EditUser from "./modals/EditUser";

const ClientItem = ({items, deletItem, editItem, index}) => {
    const [editVisible, setEditVisible] = useState(false)
    return (
        <>
            <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.trn}</td>
                <td>{items.yearEnd}</td>
                <td>{items.ard}</td>
                <td>{items.compNum}</td>
                <td>{items.email}</td>
                <td>{items.phone}</td>
                <td>{items.address}</td>
                <td>
                    <Button
                        onClick={() => setEditVisible(true)}
                    >Edit</Button>
                </td>
                <td>
                    <Button
                        variant="danger"
                        onClick={() => deletItem(items)}
                    >
                        Delete</Button>
                </td>
            </tr>
            <EditUser
                show={editVisible}
                onHide={() => setEditVisible(false)}
                index={index}
                prevUser={items}
                onEdit={editItem}
            />
        </>

    );
};

export default ClientItem;