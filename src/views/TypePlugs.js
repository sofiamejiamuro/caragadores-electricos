import { data } from '../data.json';
import React, { Component, Fragment } from 'react';
import Toggle from '../components/toggle'
import SideBar from '../components/Navigation';
import './TypePlugs.css'




export default class TypePlugs extends Component {
    render() {
        return (
            <Fragment>

                <Title text="Tipo de conexión" />

                <div id="TypePlugs">
                    <SideBar pageWrapId={"page-wrap"} outerContainerId={"TypePlugs"} />
                </div>
                <div>
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
            </Fragment>
        )
    }
}