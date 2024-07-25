

const Table = ({users}) => {
    return (
        <>
            {
                users.map((current) => {
                    const {firstName, maidenName, lastName, age, gender, phone} = current;
                    const {city, address} = current.address;

                    return (
                        <tr>
                            <td>{firstName + ' ' + maidenName + ' ' + lastName}</td>
                            <td>{age}</td>
                            <td>{gender}</td>
                            <td>{phone}</td>
                            <td>{city + ', ' + address}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Table;


