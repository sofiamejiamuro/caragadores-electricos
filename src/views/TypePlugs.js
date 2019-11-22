import { data } from '../data.json';
import React, { Component } from 'react';
import Toggle from '../components/toggle'
import Navigation from '../components/Navigation'


export default class TypePlugs extends Component {
    render() {
        return (

            <div>
                <Navigation text="Tipo de conexión" />
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tipo de cargador</th>
                                <th>Habilitar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((data, index) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.plug_type}</td>
                                        <td><Toggle /></td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}