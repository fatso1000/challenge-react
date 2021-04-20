import {
  Form,
  Input,
  Select,
  Divider,
  Row,
  DatePicker,
  Col,
  Typography,
  Radio
} from "antd";
import React from "react";

const { Option } = Select;
const { Text } = Typography;

export default function content_form() {
  return (
    <Form layout="vertical">
      <Row className="mb-4" gutter={16}>
        <Col span={24}>
          <Text className="text-2xl">Datos Personales</Text>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item label="Apellido" required>
            <Input value="Connor" className="w-90" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Nombre" required>
            <Row>
              <Col span={24}>
                <Input value="John" className="w-90" />
              </Col>
            </Row>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Documento de identidad">
            <Row>
              <Col span={12}>
                <Select defaultValue="D.N.I." className="w-90 no-custom-size">
                  <Option value="D.N.I.">D.N.I.</Option>
                </Select>
              </Col>
              <Col span={12} className="">
                <Input value="14325232" className="w-90" />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Text type="secondary">Tipo</Text>
              </Col>
              <Col span={12}>
                <Text type="secondary">Nr (Ingrese solo num.)</Text>
              </Col>
            </Row>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Sexo">
            <Row>
              <Col span={24}>
                <Select
                  defaultValue="Masculino"
                  className="w-auto no-custom-size"
                >
                  <Option value="Masculino">Masculino</Option>
                </Select>
              </Col>
            </Row>
          </Form.Item>
        </Col>
      </Row>
      {/* SECOND FLOOR */}
      <Row>
        <Col span={6}>
          <Form.Item label="Fecha de nacimiento">
            <DatePicker className="w-90" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Anios">
            <Row>
              <Col span={24}>
                <Input disabled className="w-90" />
              </Col>
            </Row>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Meses">
            <Row>
              <Col span={24}>
                <Input disabled className="w-90" />
              </Col>
            </Row>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Tipo de paciente">
            <Row>
              <Col span={24}>
                <Select
                  defaultValue="Persona no grata"
                  className="w-auto no-custom-size"
                >
                  <Option value="Persona no grata">Persona no grata</Option>
                </Select>
              </Col>
            </Row>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item label="HISTORIA CLINICA">
            <Input className="w-90" />
          </Form.Item>
        </Col>
      </Row>
      {/* SECOND CLIENT */}
      <Divider />
      <Row className="mb-4">
        <Col span={24}>
          <Text className="text-2xl">Datos de contacto</Text>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item label="Telefono particular">
            <Input value="43215436" className="w-90" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Telefono laboral">
            <Row>
              <Col span={24}>
                <Input className="w-90" />
              </Col>
            </Row>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Telefono Movil">
            <Row>
              <Col span={6}>
                <Select defaultValue="🇦🇷+54" className="w-90 no-custom-size">
                  <Option value="D.N.I.">🇦🇷+54</Option>
                </Select>
              </Col>
              <Col span={6} className="">
                <Input value="911" className="w-90" />
              </Col>
              <Col span={6} className="">
                <Input value="765432145" className="w-90" />
              </Col>
              <Col>
                <Divider />
              </Col>
              <Col>
                <Radio>No tiene</Radio>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <Text type="secondary">Codigo de pais</Text>
              </Col>
              <Col span={6}>
                <Text type="secondary">Cod. de Area</Text>
              </Col>
              <Col span={6}>
                <Text type="secondary">Numero</Text>
              </Col>
            </Row>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
