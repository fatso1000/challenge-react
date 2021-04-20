import React from "react";
import { Menu, Button, Dropdown, Space, Divider } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  CloseOutlined,
  FullscreenExitOutlined,
  MoreOutlined,
  ClockCircleFilled,
} from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);
const menu_2 = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
    <Menu.Item key="4">4th item</Menu.Item>
    <Menu.Item key="5">5th item</Menu.Item>
    <Menu.Item key="6">6th item</Menu.Item>
  </Menu>
);

export default function navbar() {
  return (
    <nav className="flex flex-row flex-wrap justify-between w-auto p-4 border-b-sm-blue bg-navbar">
      <Space wrap size={4}>
        <Dropdown.Button overlay={menu} type="primary">
          Facturar 10-2020
        </Dropdown.Button>
        <Button type="primary" shape="round">
          No Facturar
        </Button>
        <Button type="primary" shape="round">
          No Controlado
        </Button>
        <Dropdown overlay={menu_2}>
          <a
            href
            className="h-6 ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            <MoreOutlined style={{ color: "black" }} />
          </a>
        </Dropdown>
        <Divider
          type="vertical"
          style={{ height: 24, borderColor: "#91d5ff" }}
        />
        <Button type="text" className="h-" shape="round">
          <ClockCircleFilled /> Boton con icono
        </Button>
      </Space>

      <Space wrap>
        <Divider
          type="vertical"
          style={{ height: 24, borderColor: "#91d5ff" }}
        />
        <FullscreenExitOutlined width="24" style={{ color: "#1890ff" }} />
        <Divider
          type="vertical"
          style={{ height: 24, borderColor: "#91d5ff" }}
        />
        <ArrowUpOutlined />
        <ArrowDownOutlined />
        <CloseOutlined />
      </Space>
    </nav>
  );
}
