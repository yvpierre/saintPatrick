import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

export default function Biere() {
  return (
    <>
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="null" />}
        >
            <Meta title="Bière de fou" description="Pour boire la bière" />
        </Card>
    </>

  )
}
