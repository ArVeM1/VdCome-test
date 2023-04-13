import React from 'react';
import {Table} from "react-bootstrap";
import ClientItem from "./ClientItem";

const TableClients = ({users, edit, deleteUser, sortData}) => {
    return (
        <Table striped bordered hover className="mt-3">
            <thead>
            <tr>
                <th className="d-flex align-items-center" style={{gap: 4}} >
                    Client ID
                    <div className="d-flex flex-column" style={{gap: 5}}>
                        <svg onClick={() => sortData("id", "ASC")} style={{cursor: "pointer"}} width="11" height="6" viewBox="0 0 11 6" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25 6.67572e-06L10.5 5.22501L0 5.22501L5.25 6.67572e-06Z" fill="black"/>
                        </svg>
                        <svg onClick={() => sortData("id", "DESC")} style={{cursor: "pointer"}} width="11" height="6" viewBox="0 0 11 6" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25 5.22491L0 -9.15527e-05H10.5L5.25 5.22491Z" fill="black"/>
                        </svg>
                    </div>
                </th>
                <th>
                    Client name
                </th>
                <th>
                    TRN/PPSN

                </th>
                <th>
                    Year end

                </th>
                <th className="d-flex align-items-center">
                    ARD

                </th>
                <th>
                    Company number

                </th>
                <th>
                    Email

                </th>
                <th>
                    Phone number

                </th>
                <th>
                    Company address

                </th>
                <th>
                    Edit

                </th>
                <th>
                    Delete

                </th>
            </tr>
            </thead>
            <tbody>

            {users.map((item, id) =>
                <ClientItem
                    key={item.id}
                    items={item}
                    deletItem={deleteUser}
                    editItem={edit}
                    index={id}
                />
            )}

            </tbody>
        </Table>
    );
};

export default TableClients;