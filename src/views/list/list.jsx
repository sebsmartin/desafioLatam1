import React, { Component } from 'react';
import { getAll } from './../../service/hero.service';
import Table from './../../components/table/Table';
import Thead from './../../components/table/Thead';
import Tbody from './../../components/table/Tbody';
import Th from './../../components/table/Th';
import Tr from './../../components/table/Tr';
import Td from './../../components/table/Td';
import Div from './../../components/table/Div';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getAll(),
        };
    }
    render() {
        const { data } = this.state;
        return (
            <body>
                <div class="index">
                    <h2>Fellowship of the Ring</h2>
                    <Div>
                        <div class="search-input">
                        <input type="text" placeholder="search hero" />
                        </div>
                        <Table>
                            <Tbody>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Race</Th>
                                    <Th>Age</Th>
                                    <Th>Weapon</Th>
                                    <Th></Th>
                                </Tr>
                                {data.map((element, index) => (
                                    <Tr key={element.index}>
                                        <Td>{element.name}</Td>
                                        <Td>{element.race}</Td>
                                        <Td>{element.age}</Td>
                                        <Td>{element.weapon}</Td>
                                        <Td>
                                            <div class="controls">
                                                <div>☠ Kill</div>
                                                <div>💍 Use Ring</div>
                                            </div>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Div>
                </div>
            </body>
        )
    }
}
export default List;