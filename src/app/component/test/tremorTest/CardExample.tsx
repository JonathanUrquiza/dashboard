'use client'
import { Card, Text, Title } from '@tremor/react';

export function CardExample({titleOut,dataTitle1, data1,dataTitle2, data2,dataTitle3, data3}) {
  return (
    <Card
      className="mx-auto w-full"
      decoration="top"
      decorationColor="indigo"
    >
      <Title className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{titleOut}</Title>
      <div className='flex flex-row gap-2'>
      <Card className='w-fit text-center'>
        <Title>{dataTitle1}</Title>
        <Text>{data1}</Text>
      </Card>
      <Card className='w-fit text-center'>
        <Title>{dataTitle2}</Title>
        <Text>{data2}</Text>
      </Card>
      <Card className='w-fit text-center'>
        <Title>{dataTitle3}</Title>
        <Text>{data3}</Text>
      </Card>
      </div>
    </Card>
  );
}