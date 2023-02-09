import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

export default function Article({ infos }) {
  return (
    <>
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="null" />}
        >
            <Meta title={infos.nomArticle} description={infos.desc} />
        </Card>
    </>

  )
}
