import React from 'react';
import { Typography, Col, Row } from 'antd';
import { RightOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div>
        <Title level={2}>About Me</Title>
        <Title level={3}>I'm Tran Huu Le Huy and Software Developer</Title>
        <Paragraph>Hi! My name is Tran Huu Le Huy, and I am a Software Developer. I started my field in Computer Science since October 2017 and since then, I have daily learned and acquired good problem-solving mindset for programming skills and languages. Right now, I am working as a front-end developer focusing on React.</Paragraph>
        <Row gutter={[0, 12]}>
            <Col span={12}>
                <RightOutlined style={{color:'#149ddd'}} /> {' '}
                <strong>Birthday: </strong>
                <span>12 February 1999</span>
            </Col>
            <Col span={12}>
                <RightOutlined style={{color:'#149ddd'}} /> {' '}
                <strong>Age: </strong>
                <span>23</span>
            </Col>
            <Col span={12}>
                <RightOutlined style={{color:'#149ddd'}} /> {' '}
                <strong>Location: </strong>
                <span>Danang, Vietnam</span>
            </Col>
            <Col span={12}>
                <RightOutlined style={{color:'#149ddd'}} /> {' '}
                <strong>Interests: </strong>
                <span>PC gaming, Reading</span>
            </Col>
            <Col span={12}>
                <RightOutlined style={{color:'#149ddd'}} /> {' '}
                <strong>Study: </strong>
                <span>Frankfurt University of Applied Sciences</span>
            </Col>
            <Col span={12}>
                <RightOutlined style={{color:'#149ddd'}} /> {' '}
                <strong>Degree: </strong>
                <span>Bachelor</span>
            </Col>
            <Col span={12}>
                <RightOutlined style={{color:'#149ddd'}} /> {' '}
                <strong>Mail: </strong>
                <span>tranhuulehuywork@gmail.com</span>
            </Col>
            <Col span={12}>
                <RightOutlined style={{color:'#149ddd'}} /> {' '}
                <strong>Phone: </strong>
                <span>+84 774 199 25</span>
            </Col>
        </Row>
    </div>
  );
};

export default About;