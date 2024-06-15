import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserWhereInput = {
  accountBalance?: FloatNullableFilter;
  balance?: FloatNullableFilter;
  chatId?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  points?: IntNullableFilter;
  pointsCount?: IntNullableFilter;
  referralCount?: IntNullableFilter;
  referrals?: IntNullableFilter;
  username?: StringFilter;
  userPoints?: IntNullableFilter;
};
