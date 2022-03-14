import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";


export default function AddNew() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tên Phim">
        <Input />
      </Form.Item>
    
      <Form.Item label="Trailer">
        <Input />
      </Form.Item>
    
      <Form.Item label="Mô Tả">
        <Input />
      </Form.Item>
    
      <Form.Item label="">
        <Input />
      </Form.Item>
    
 
   
      <Form.Item label="Ngày Khởi Chiếu">
        <DatePicker />
      </Form.Item>
   
      <Form.Item label="Đang Chiếu" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item label="Sắp Chiếu" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item label="Hot" valuePropName="checked">
        <Switch />
      </Form.Item>

      <file/> 

      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
}
