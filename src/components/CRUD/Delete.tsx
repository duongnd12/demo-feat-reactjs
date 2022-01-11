import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, Input, InputNumber } from "antd";

interface IItem {
  name?: string;
  age?: number;
  email?: string;
  address?: string;
}

export const Delete = () => {
  let history = useHistory();
  const { id: itemId } = useParams<{ id: string }>();
  const [data, setData] = useState<IItem>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IItem>(
          `https://61b1d4fec8d4640017aaef72.mockapi.io/api/v1/school/${itemId}`
        );
        setData(response.data);
      } catch (error) {
        Promise.reject();
      }
    };
    fetchData();
  }, [itemId]);

  const handleDelete = () => {
    axios.delete(
      `https://61b1d4fec8d4640017aaef72.mockapi.io/api/v1/school/${itemId}`)
      .then(() => {
        history.push('/')
    })
  };

  return (
    <div>
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
            value={data?.name}
            name="name"
          />
        </Form.Item>

        <Form.Item label="Age" rules={[{ required: true, type: "number", min: 0, max: 99 }]}>
          <InputNumber
            value={data?.age}
            name="age"
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
            value={data?.email}
            name="email"
          />
        </Form.Item>

        <Form.Item
          label="Address"
          rules={[{ required: true, message: "Please input your Address!" }]}
        >
          <Input
            placeholder="Enter your Address..."
            value={data?.address}
            name="address"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <h3>Are you sure delete {data?.name}?</h3>
          <Button type="primary" danger htmlType="submit" onClick={handleDelete}>
            Delete
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
