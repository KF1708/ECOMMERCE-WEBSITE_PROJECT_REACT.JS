import React from "react";
import { Badge, Card, Space } from "antd";
const Ribbon = () => (
  <Space
    direction="vertical"
    size="middle"
    style={{
      width: "100%",
    }}
  >
    <Badge.Ribbon text="25% 0ff" color="red"></Badge.Ribbon>
  </Space>
);
export default Ribbon;
