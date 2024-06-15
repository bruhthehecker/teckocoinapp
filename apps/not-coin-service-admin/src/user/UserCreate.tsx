import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="accountBalance" source="accountBalance" />
        <NumberInput label="balance" source="balance" />
        <TextInput label="chatId" source="chatId" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <NumberInput step={1} label="points" source="points" />
        <NumberInput step={1} label="pointsCount" source="pointsCount" />
        <NumberInput step={1} label="referralCount" source="referralCount" />
        <NumberInput step={1} label="referrals" source="referrals" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <NumberInput step={1} label="userPoints" source="userPoints" />
      </SimpleForm>
    </Create>
  );
};
