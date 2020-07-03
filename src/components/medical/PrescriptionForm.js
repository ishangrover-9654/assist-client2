import axios from "axios";
import React, { useState, useEffect } from "react";
import { Divider, Input, Form, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

let index = 0;

function PrescriptionForm() {
  const [problemTags, setProblemTags] = useState([]);
  const [persons, setPersons] = useState(["Ishan", "Shweta"]);
  const [personName, setPersonName] = useState("");

  useEffect(() => {
    const apiUrl = "http://localhost:8080/problems/";
    axios.get(apiUrl).then((response) => {
      console.log(response);
      setProblemTags(response.data.name || []);
    });
  }, []);

  return (
    <Form>
      <Form.Item label="Tag the Prescription" />

      <Form.Item
        name="problem"
        rules={[
          {
            required: true,
            message: "Please select Problem!",
            type: "array",
          },
        ]}
      >
        <Select mode="tags" placeholder="Problems"></Select>
      </Form.Item>

      <Form.Item
        name="medicines"
        rules={[
          {
            message: "Please select Problem!",
            type: "array",
          },
        ]}
      >
        <Select mode="tags" placeholder="Medicines"></Select>
      </Form.Item>

      <Form.Item
        name="person"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please Select Family Person",
          },
        ]}
      >
        <Select
          placeholder="Person"
          dropdownRender={(menu) => (
            <div>
              {menu}
              <Divider style={{ margin: "4px 0" }} />
              <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
                <Input
                  style={{ flex: "auto" }}
                  value={personName}
                  onChange={(event) => {
                    setPersonName(event.target.value);
                  }}
                />
                <a
                  style={{
                    flex: "none",
                    padding: "8px",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    console.log("addItem");
                    setPersons([
                      ...persons,
                      personName || `New item ${index++}`,
                    ]);
                    setPersonName("");
                  }}
                >
                  <PlusOutlined /> Add Member
                </a>
              </div>
            </div>
          )}
        >
          {persons.map((item) => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
}

export default PrescriptionForm;
