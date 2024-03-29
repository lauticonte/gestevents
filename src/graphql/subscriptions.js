/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
