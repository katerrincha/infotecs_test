

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



    /*constructor(props) {
        //super(props);
        this.state = { //состояния в state
            error: null, //отслеживаем ошибки
            isLoaded: false,
            items: [] // массив набор получаемых компонентов
        };
        }

        componentDidMount(){
            fetch('https://dummyjson.com/users')
                .then(res => res.json()) //получаем json файл
                .then(
                    (data) => { // изменяем состояния
                        this.setState({
                            isLoaded: true,
                            items: data.users
                        });
                    }, 
                    (error) => { // обработка ошибок
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }

        render() {
            const {error, isLoaded, items} = this.state;
            if (error) {
                return <p>Error {error.message}</p>
            } else if (!isLoaded) {
                return <p>Loading...</p>
            } else {
                return (
                    <ul>
                        {items.map(item => (
                            <li key={item.name}>
                                {item.id}
                            </li>
                        ))}
                    </ul>
                )
            }
        }*/

