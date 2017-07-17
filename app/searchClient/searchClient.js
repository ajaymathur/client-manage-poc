import React, { Component } from 'react';
import filter from 'lodash/filter';
import {classNames} from '../helpers';
import {ValidatedInputText} from '../components';
import './searchClient.scss';

class SearchClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allClientDetails: [],
            clientDetails: [],
            filerVisible: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        console.log(classNames('test','test1'))
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

    reset() {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        })
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
        const value = event.value;
        const name = event.name;

        this.setState({
            [name]: value
        });
    }

    toggleFiltersView() {
        this.setState({
            filerVisible: !this.state.filerVisible,
        })
    }

    render() {
        return (
            <div className="search-client">
                <h2>Search Client</h2>
                <div className="table-filter">
                    <ValidatedInputText
                        className="search-field"
                        name="firstName"
                        placeholder="Search first name"
                        populateState={(param) => this.handleInputChange(param)}
                    />
                    <ValidatedInputText
                        className="search-field"
                        name="lastName"
                        placeholder="Search last name"
                        populateState={(param) => this.handleInputChange(param)}
                    />
                    <ValidatedInputText
                        className="search-field"
                        name="email"
                        placeholder="Search email"
                        populateState={(param) => this.handleInputChange(param)}
                    />
                    <ValidatedInputText
                        className="search-field"
                        name="phone"
                        placeholder="Search phone"
                        populateState={(param) => this.handleInputChange(param)}
                    />
                </div>
                <hr/>
                <div className="search-button-group">
                    <button className="search-button"
                            onClick={() => this.search()}>
                        Search
                    </button>
                </div>
                <hr/>
                <table cellSpacing={0} className="client-list-table">
                    <thead className="table-head">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
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