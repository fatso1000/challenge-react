import React from "react";
import { Space, Divider, Typography } from "antd";

const { Text } = Typography;

export default function navbar_content() {
  return (
    <div className="flex flex-row w-auto h-auto p-4 border-b-sm-grey bg-subnav">
      <Space size={2} direction="horizontal" wrap>
        <Text type="secondary">
          Paciente:<Text> John Connor</Text>
        </Text>{" "}
        <Divider type="vertical" />
        <Text type="secondary">
          Protocolo:<Text> 002-003-12345678</Text>
        </Text>{" "}
        <Divider type="vertical" />
        <Text type="secondary">
          Servicio:<Text> RADIOLOGIA</Text>
        </Text>{" "}
        <Divider type="vertical" />
        <Text type="secondary">
          Especialidad:<Text> Colonoscopia</Text>
        </Text>
        <Divider type="vertical" />
        <Text type="secondary">
          OS:<Text> SALUD PLENA MOA HEALTH GROUP</Text>
        </Text>{" "}
        <Divider type="vertical" />
        <Text type="secondary">
          Plan:<Text> PLAN 250/PLAN MOA 200, PLAN MOA 250</Text>
        </Text>{" "}
        <Divider type="vertical" />
        <Text type="secondary">
          Registracion:<Text> No Registrado</Text>
        </Text>{" "}
        <Divider type="vertical" />
        <Text type="secondary">
          N°Transaccion: <Text>-</Text>
        </Text>
      </Space>
    </div>
  );
}
