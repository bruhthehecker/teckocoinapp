import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="accountBalance" source="accountBalance" />
        <TextField label="balance" source="balance" />
        <TextField label="chatId" source="chatId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="points" source="points" />
        <TextField label="pointsCount" source="pointsCount" />
        <TextField label="referralCount" source="referralCount" />
        <TextField label="referrals" source="referrals" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="userPoints" source="userPoints" />
      </Datagrid>
    </List>
  );
};
