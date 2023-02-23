import React from "react";
import { Col, Form, Row, Tooltip } from "react-bootstrap";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import AdminLinks from "../../../components/admin/AdminLinks";

const AdminAnalyticsLayout = () => {
  const data = [
    {
      name: "0:00 AM",
      "2022 year": 4000,
      "2021 year": 4100,
    },
    {
      name: "4:00 AM",
      "2022 year": 4200,
      "2021 year": 4300,
    },
    {
      name: "8:00 AM",
      "2022 year": 4500,
      "2021 year": 4600,
    },
    {
      name: "12:00 PM",
      "2022 year": 3000,
      "2021 year": 2800,
    },
    {
      name: "16:00 PM",
      "2022 year": 5000,
      "2021 year": 5800,
    },
    {
      name: "20:00 PM",
      "2022 year": 1000,
      "2021 year": 1800,
    },
  ];
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinks />
      </Col>
      <Col md={10}>
        <h1>Chart</h1>
        <Form.Group controlId="firstDateToCompare">
          <Form.Label>Select First Date To Compare</Form.Label>
          <Form.Control
            type="date"
            name="firstDateToCompare"
            placeholder="First Date To Compare"
          />
        </Form.Group>
        <br />
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{
                value: "TIME",
                offset: 50,
                position: "insideBottomRight",
              }}
              allowDuplicatedCategory={false}
            />
            <YAxis
              label={{ value: "REVENUE $", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="2021 year"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={4}
            />
            <Line
              type="monotone"
              dataKey="2022 year"
              stroke="#82ca9d"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
};

export default AdminAnalyticsLayout;
