import { Button, Divider, Space, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
import ContentForm from "../content-form/content-form";

const { Title } = Typography;

export default function content() {
  return (
    <div className="pb-2 overflow-example">
      <div className="container flex flex-col m-4 h-78 flex-nowrap border-sm-blue">
        <div className="flex flex-row justify-between w-full p-3 border-b-sm-blue">
          <Space size="2" direction="horizontal" wrap>
            <Title level={3} className="m-0">
              Paciente
            </Title>
            <Divider type="vertical" />
            <Button type="primary">Guardar Cambios</Button>
            <Divider type="vertical" />
            <Button type="default">Cancelar</Button>
            <Divider type="vertical" />
          </Space>
          <Space>
            <DownOutlined />
          </Space>
        </div>
        <div className="w-full p-4">
          <ContentForm />
        </div>
      </div>
    </div>
  );
}
