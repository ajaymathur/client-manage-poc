import React, { Component } from 'react';
import filter from 'lodash/filter';
import './searchClient.scss';

class SearchClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allClientDetails: [],
            clientDetails: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    search() {
        const filteredClients = filter(this.state.allClientDetails, allclients => {
            if (this.state.firstName && allclients.firstName.toLowerCase().indexOf(this.state.firstName.toLowerCase()) === -1) {
                return false;
            }
            if (this.state.lastName && allclients.lastName.toLowerCase().indexOf(this.state.lastName.toLowerCase()) === -1) {
                return false;
            }
            if (this.state.email && allclients.email.toLowerCase().indexOf(this.state.email.toLowerCase()) === -1) {
                return false;
            }
            if (this.state.phone && allclients.phone.toLowerCase().indexOf(this.state.phone.toLowerCase()) === -1) {
                return false;
            }
            return true;
        }
        );
        this.setState({
            clientDetails: filteredClients,
        });
    }

    componentWillMount() {
        fetch('/stubs/clientDetails.json')
            .then(res => res.json())
            .then(clientDetails => {
                this.setState({
                    clientDetails,
                    allClientDetails: clientDetails,
                })
            });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div style={{ 'margin-left': '300px' }}>
                <input type="text" placeholder="Search first name" name="firstName" onChange={this.handleInputChange} />
                <input type="text" placeholder="Search last name" name="lastName" onChange={this.handleInputChange} />
                <input type="text" placeholder="Search email name" name="email" onChange={this.handleInputChange} />
                <input type="text" placeholder="Search phone number" name="phone" onChange={this.handleInputChange} />
                <button onClick={() => this.search()}>Search</button>
                <table>
                    <tbody>
                        {this.state.clientDetails.map(client => (
                            <tr key={client.id}>
                                <td className="table-cell">{client.firstName}</td>
                                <td className="table-cell">{client.lastName}</td>
                                <td className="table-cell">{client.email}</td>
                                <td className="table-cell">{client.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SearchClient;