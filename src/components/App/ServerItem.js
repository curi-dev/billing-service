import React from 'react';

import { ItemContainer } from './styles';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';


const ItemRow = ({ props }) => {
    return (
        <ItemContainer>
            <td>{props.id}</td>
            <td>{props.instance}</td>
            <td>{props.type}</td>
            <td>{props.launchTime}</td>
            <td>{props.privateIp}</td>
            <td>{props.state}</td>
        </ItemContainer>
    )
}

export default ItemRow;