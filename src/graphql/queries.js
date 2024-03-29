/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        customerEventsId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoID
        name
        lastname
        company
        companycuit
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
