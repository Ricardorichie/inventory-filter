import styled from "styled-components";
import { Table } from "antd";


export const TableComponent = ({ data }) => {
    const columns = [
        {
            title: "Order ID",
            dataIndex: "Order ID",
            key: "Order ID",
        },
        {
            title: "Profit",
            dataIndex: "Profit",
            key: "Profit",
        },
        {
            title: "City",
            dataIndex: "City",
            key: "City",
        },
        {
            title: "Customer Name",
            dataIndex: "Customer Name",
            key: "Customer Name",
        }, {
            title: "Product Name",
            dataIndex: "Product Name",
            key: "Product Name",
        }, {
            title: "Row ID",
            dataIndex: "Row ID",
            key: "Row ID",
        }, {
            title: "Country",
            dataIndex: "Country",
            key: "Country",
        }, {
            title: "Discount",
            dataIndex: "Discount",
            key: "Discount",
        }, {
            title: "Customer ID",
            dataIndex: "Customer ID",
            key: "Customer ID",
        }, {
            title: "Region",
            dataIndex: "Region",
            key: "Region",
        }, {
            title: "Quantity",
            dataIndex: "Quantity",
            key: "Quantity",
        }, {
            title: "Segment",
            dataIndex: "Segment",
            key: "Segment",
        }, {
            title: "State",
            dataIndex: "State",
            key: "State",
        }, {
            title: "Ship Mode",
            dataIndex: "Ship Mode",
            key: "Ship Mode",
        }, {
            title: "Sub-Category",
            dataIndex: "Sub-Category",
            key: "Sub-Category",
        }, {
            title: "Postal Code",
            dataIndex: "Postal Code",
            key: "Postal Code",
        },
        {
            title: "Ship Date",
            dataIndex: "Ship Date",
            key: "Ship Date",
        }, {
            title: "Category",
            dataIndex: "Category",
            key: "Category",
        }, {
            title: "Product ID",
            dataIndex: "Product ID",
            key: "Product ID",
        }, {
            title: "Sales",
            dataIndex: "Sales",
            key: "Sales",
        }, {
            title: "Order Date",
            dataIndex: "Order Date",
            key: "Order Date",
        },
    ]

    return (
        <StyledTable size={"small"} dataSource={data} columns={columns} />
    )
}


const StyledTable = styled(Table)`
width: 100%;
  .ant-table-thead {
    ${'' /* display: none; */}
    ${'' /* padding-top: 15px; */}
    font-weight: 700;
  }
  .ant-table {
    padding: 15px 0 0 0;
    box-shadow: 0px 5.65659px 28.2829px rgba(212, 226, 247, 0.25);
    border: 1px solid #ebebeb;
  }
`;
