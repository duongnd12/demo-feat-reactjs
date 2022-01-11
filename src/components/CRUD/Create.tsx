import { useState } from "react";
import axios from 'axios';
import { Form, Input, Button, InputNumber } from "antd";
import "antd/dist/antd.css";
import './Create.module.less'
import { useHistory } from "react-router-dom";
interface Props {}

export const Create = (props: Props) => {

    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [email, setEmail] = useState<string>('')
    const [address, setAddress] = useState<string>('')

    let history = useHistory()

    const handleChangAge = (value: number) => {
        setAge(value)
    }

    const handleSubmit = () => {
        axios.post('https://61b1d4fec8d4640017aaef72.mockapi.io/api/v1/school', {
            name,
            age,
            email,
            address,
        }).then(() => {
          history.push('/')
        })
    }
  return (
    <Form
        className='createForm'
        name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
      style={{width: "400px"}}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input placeholder="Enter your name..." onChange={e => {setName(e.target.value)}}/>
      </Form.Item>
        
      <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber onChange={handleChangAge}/>
    </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: "Please input your Email!" }]}
      >
        <Input placeholder="Enter your email..." onChange={e => {setEmail(e.target.value)}}/>
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please input your Address!" }]}
      >
        <Input placeholder="Enter your Address..." onChange={e => {setAddress(e.target.value)}}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
