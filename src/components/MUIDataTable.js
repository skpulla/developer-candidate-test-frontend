import React from 'react';
import MUIDataTable from "mui-datatables";

const columns = [
    {
        name: "name",
        label: "Name",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "age",
        label: "Age",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "gender",
        label: "Gender",
        options: {
            filter: true,
            sort: true,
        }
    },
];

const options = {
    filterType: 'multiselect',
    selectableRows: 'none'
};

class MyDataTable extends React.Component {

    render() {

        return (
            <MUIDataTable
                title={this.props.filter}
                data={this.props.people}
                columns={columns}
                options={options}
            />

        );

    }
}

export default (MyDataTable);