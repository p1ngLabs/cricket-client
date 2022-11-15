import { faker } from '@faker-js/faker';

export type CustomersType = {
  _id: string;
  firstname: string;
  lastname: string;
  sex: string;
  username: string;
  email: string;
  avatar: string;
  active: boolean;
  phone: string;
  createdAt: Date;
};

const numberOfCustomers = 20;
const customers: CustomersType[] = [];
// const customers: CustomersType[] = [
//   {
//     _id: 'asdlkfj',
//     firstname: 'phuc',
//     lastname: 'nguyen',
//     sex: 'male',
//     username: 'phuc1nguyen',
//     email: 'phuc.ng13988@gmail.com',
//     avatar: testLogo,
//     active: true,
//     phone: '0129348023',
//     createdAt: new Date(),
//   },
// ];

function createCustomer(): CustomersType {
  const sex = faker.name.sexType();
  const firstname = faker.name.firstName(sex);
  const lastname = faker.name.lastName();
  const email = faker.helpers.unique(faker.internet.email, [firstname, lastname]);

  return {
    _id: faker.datatype.uuid(),
    firstname,
    lastname,
    sex,
    username: faker.internet.userName(),
    email,
    avatar: faker.image.avatar(),
    active: faker.datatype.boolean(),
    phone: faker.phone.number('0### ### ###'),
    createdAt: faker.date.past(),
  };
}

for (let i = 0; i < numberOfCustomers; i++) {
  customers.push(createCustomer());
}

export default customers;
