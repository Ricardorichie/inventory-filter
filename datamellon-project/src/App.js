import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import Container from './components/layouts/Container';
import { ContentContainer, DataDisplayContainer, FilterContainer } from './components/common/StyledComponents';
import axios from 'axios';
import "antd/dist/antd.css";

import { Col, notification, Row } from 'antd';
import { LoadingScreen } from './components/common/LoadingScreen';
import { DatePicker, TextInput } from './components/common/TextInput';
import { Button } from './components/common/Button';
import moment from 'moment';
import Table from 'rc-table';
import { TableComponent } from './components/common/Table';
function App() {
  const [loading, setLoading] = useState(false)
  const [defaultList, setDefaultList] = useState([])
  const [updatedList, setUpdatedList] = useState([])
  const [date, setDate] = useState("")
  const [fields, setFields] = useState({
    orderId: "",
    customerName: "",
    productName: "",
    country: "",
    city: "",
    date: ""
  })
  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
    // console.log("fields", fields)
  };
  const handleDateChange = (e) => {
    // console.log(moment(e).format("D/M/YYYY"))
    setDate(moment(e).format("M/D/YYYY"))
  }
  const handleFilterAction = () => {
    const filteredData = defaultList.filter(items => {
      var countryFilter = items?.Country?.toLowerCase().indexOf(fields?.country.toLowerCase()) > -1
      var cityFilter = items?.City?.toLowerCase().indexOf(fields?.city.toLowerCase()) > -1
      var productNameFilter = items?.[`Product Name`].toLowerCase().indexOf(fields?.productName.toLowerCase()) > -1
      var customerNameFilter = items?.[`Customer Name`].toLowerCase().indexOf(fields?.customerName.toLowerCase()) > -1
      var dateFilter = items?.[`Order Date`].toLowerCase().indexOf(date.toLowerCase()) > -1
      return countryFilter && cityFilter && productNameFilter && customerNameFilter && dateFilter
    })

    setUpdatedList(filteredData)
  }
  const handleClearFilter = () => {
    setUpdatedList(defaultList)
    setFields({
      orderId: "",
      customerName: "",
      productName: "",
      country: "",
      city: "",
      date: ""
    })
    setDate("")
  }
  const fetchList = async () => {
    setLoading(true)
    const body = {
      "angular_test": "angular-developer"
    }
    try {
      const response = await axios.post("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub", body)
      if (response) {
        setLoading(false)
        if (response?.data) {
          setDefaultList(response?.data)
        }

      }
      console.log("my response is ", response?.data)
    } catch (e) {
      console.log("the error", e)
      notification.error("Error Occured", "Kindly refresh")
    }
  }
  console.log("updated List", updatedList)
  useEffect(() => {
    setUpdatedList(defaultList)
  }, [defaultList])

  useEffect(() => {
    fetchList()
  }, [])
  return (
    <>
      {loading && <LoadingScreen />}
      {!loading &&
        <Container>
          <FilterContainer>
            <div style={{ padding: "20px 10px" }}>
              <h3 style={{ marginBottom: "30px" }}>
                Filter record:
              </h3>
              <TextInput
                placeholder="Order ID"
                label="By order-id"
                name="orderId"
                onChange={handleInputChange}
                value={fields.orderId}
              />
              <TextInput
                placeholder="Customer Name"
                label="By customer name"
                name="customerName"
                onChange={handleInputChange}
                value={fields.customerName}
              />
              <TextInput
                onChange={handleInputChange}
                placeholder="Product name"
                label="By product name"
                name="productName"
                value={fields.productName}
              />
              <TextInput
                onChange={handleInputChange}
                placeholder="Country"
                label="By country"
                name="country"
                value={fields.country}
              />
              <TextInput
                placeholder="City"
                onChange={handleInputChange}
                label="By city"
                name="city"
                value={fields.city}
              />
              <DatePicker onChange={(e) => handleDateChange(e)} />
            </div>
            <Row style={{ width: "100%" }} justify={'space-between'}>
              <Col span={10}>
                <Button onClick={handleFilterAction} text="Filter" />
              </Col>
              <Col span={10}>
                <Button text="Clear" onClick={handleClearFilter} style={{ background: "red" }} />
              </Col>
            </Row>
          </FilterContainer>
          <ContentContainer>
            <div style={{ padding: "20px 10px" }}>
              <h3 style={{ marginBottom: "30px" }}>
                Information Output
              </h3>
              <DataDisplayContainer>
                <TableComponent data={updatedList} />
              </DataDisplayContainer>
            </div>
          </ContentContainer>
        </Container>}

    </>
  );

}

export default App;
