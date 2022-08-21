import React from 'react';
import { Typography, Collapse } from 'antd';
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Education = () => {
  return (
    <div>
        <Title level={2}>Education</Title>
        <Collapse accordion>
            <Panel header="BACHELOR DEGREE OF COMPUTER SCIENCE" key="1">
                <p>{text}</p>
            </Panel>
            <Panel header="HIGH SCHOOL DIPLOMA" key="2">
                <p>{text}</p>
            </Panel>
        </Collapse>
    </div>
  )
}

export default Education