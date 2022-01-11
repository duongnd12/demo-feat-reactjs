import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, InputNumber } from "antd";
import { useHistory, useParams } from "react-router-dom";
import "antd/dist/antd.css";
import "./Create.module.less";
interface IItem {
  name?: string;
  age?: number;
  email?: string;
  address?: string;
}
export const Update = () => {
  let history = useHistory();
  const { id: itemId } = useParams<{ id: string }>();

  const [data, setData] = useState<IItem>();

  useEffect(() => {
    // api: https://61b1d4fec8d4640017aaef72.mockapi.io/api/v1/school/1
    const fetchData = async () => {
      try {
        const response = await axios.get<IItem>(
          `https://61b1d4fec8d4640017aaef72.mockapi.io/api/v1/school/${itemId}`
        );
        setData(response.data);
      } catch (error) {
        Promise.reject()
      }
    };
    fetchData();
  }, [itemId]);

  const handleUpdate = () => {
    axios
      .put(
        `https://61b1d4fec8d4640017aaef72.mockapi.io/api/v1/school/${itemId}`,
        data
      )
      .then(() => {
        history.push("/");
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setData({ ...data, [name]: e.target.value });
  };

  if (!data) return <></>;
  return (
    <Form
      className="createForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
      style={{ width: "400px" }}
    >
      <Form.Item
        label="Name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input
          placeholder="Enter your name..."
          value={data.name}
          name="name"
          onChange={handleInputChange}
        />
      </Form.Item>

      <Form.Item label="Age" rules={[{ type: "number", min: 0, max: 99 }]}>
        <InputNumber
          onChange={(value) => {
            setData({...data, age: value})
          }}
          value={data.age}
        />
      </Form.Item>

      <Form.Item
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          placeholder="Enter your email..."
          onChange={handleInputChange}
          value={data.email}
          name="email"
        />
      </Form.Item>

      <Form.Item
        label="Address"
        rules={[{ required: true, message: "Please input your Address!" }]}
      >
        <Input
          placeholder="Enter your Address..."
          onChange={handleInputChange}
          value={data.address}
          name="address"
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={handleUpdate}>
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};
