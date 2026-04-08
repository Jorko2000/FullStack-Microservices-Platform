import { Kafka } from 'kafkajs';
const kafka = new Kafka({ clientId: 'notif', brokers: ['kafka:9092'] });
export const producer = kafka.producer();
export const sendMessage = async (topic:string, message:string) => {
  await producer.connect();
  await producer.send({ topic, messages: [{ value: message }] });
  await producer.disconnect();
};
