/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      name
      lastname
      email
      phone
      adress
      city
      province
      country
      postalcode
      comment
      company
      events {
        items {
          id
          type
          date
          time
          observation
          qtyInv
          qtyTables
          total
          downPayment
          paymethod
          qtyBankFee
          qtyHoursRes
          dateRegister
          company
          createdAt
          updatedAt
          customerEventsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      name
      lastname
      email
      phone
      adress
      city
      province
      country
      postalcode
      comment
      company
      events {
        items {
          id
          type
          date
          time
          observation
          qtyInv
          qtyTables
          total
          downPayment
          paymethod
          qtyBankFee
          qtyHoursRes
          dateRegister
          company
          createdAt
          updatedAt
          customerEventsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      name
      lastname
      email
      phone
      adress
      city
      province
      country
      postalcode
      comment
      company
      events {
        items {
          id
          type
          date
          time
          observation
          qtyInv
          qtyTables
          total
          downPayment
          paymethod
          qtyBankFee
          qtyHoursRes
          dateRegister
          company
          createdAt
          updatedAt
          customerEventsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      type
      date
      time
      observation
      qtyInv
      qtyTables
      total
      downPayment
      paymethod
      qtyBankFee
      qtyHoursRes
      dateRegister
      company
      customer {
        id
        name
        lastname
        email
        phone
        adress
        city
        province
        country
        postalcode
        comment
        company
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      customerEventsId
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      type
      date
      time
      observation
      qtyInv
      qtyTables
      total
      downPayment
      paymethod
      qtyBankFee
      qtyHoursRes
      dateRegister
      company
      customer {
        id
        name
        lastname
        email
        phone
        adress
        city
        province
        country
        postalcode
        comment
        company
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      customerEventsId
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      type
      date
      time
      observation
      qtyInv
      qtyTables
      total
      downPayment
      paymethod
      qtyBankFee
      qtyHoursRes
      dateRegister
      company
      customer {
        id
        name
        lastname
        email
        phone
        adress
        city
        province
        country
        postalcode
        comment
        company
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      customerEventsId
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      cognitoID
      name
      lastname
      company
      companycuit
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      cognitoID
      name
      lastname
      company
      companycuit
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      cognitoID
      name
      lastname
      company
      companycuit
      createdAt
      updatedAt
    }
  }
`;
