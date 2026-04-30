import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    bruteLimit: number | null;
    gold: number | null;
    fightSpeed: number | null;
    transferedBrutesCount: number | null;
};
export type UserSumAggregateOutputType = {
    bruteLimit: number | null;
    gold: number | null;
    fightSpeed: number | null;
    transferedBrutesCount: number | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    lang: $Enums.Lang | null;
    name: string | null;
    admin: boolean | null;
    moderator: boolean | null;
    connexionToken: string | null;
    bruteLimit: number | null;
    gold: number | null;
    fightSpeed: number | null;
    backgroundMusic: boolean | null;
    dinorpgDone: Date | null;
    createdAt: Date | null;
    bannedAt: Date | null;
    banReason: string | null;
    displayVersusPage: boolean | null;
    displayOpponentDetails: boolean | null;
    transferedBrutesCount: number | null;
    lastSeen: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    lang: $Enums.Lang | null;
    name: string | null;
    admin: boolean | null;
    moderator: boolean | null;
    connexionToken: string | null;
    bruteLimit: number | null;
    gold: number | null;
    fightSpeed: number | null;
    backgroundMusic: boolean | null;
    dinorpgDone: Date | null;
    createdAt: Date | null;
    bannedAt: Date | null;
    banReason: string | null;
    displayVersusPage: boolean | null;
    displayOpponentDetails: boolean | null;
    transferedBrutesCount: number | null;
    lastSeen: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    lang: number;
    name: number;
    admin: number;
    moderator: number;
    connexionToken: number;
    bruteLimit: number;
    gold: number;
    fightSpeed: number;
    backgroundMusic: number;
    dinorpgDone: number;
    ips: number;
    fingerprints: number;
    createdAt: number;
    bannedAt: number;
    banReason: number;
    displayVersusPage: number;
    displayOpponentDetails: number;
    transferedBrutesCount: number;
    lastSeen: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    bruteLimit?: true;
    gold?: true;
    fightSpeed?: true;
    transferedBrutesCount?: true;
};
export type UserSumAggregateInputType = {
    bruteLimit?: true;
    gold?: true;
    fightSpeed?: true;
    transferedBrutesCount?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    lang?: true;
    name?: true;
    admin?: true;
    moderator?: true;
    connexionToken?: true;
    bruteLimit?: true;
    gold?: true;
    fightSpeed?: true;
    backgroundMusic?: true;
    dinorpgDone?: true;
    createdAt?: true;
    bannedAt?: true;
    banReason?: true;
    displayVersusPage?: true;
    displayOpponentDetails?: true;
    transferedBrutesCount?: true;
    lastSeen?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    lang?: true;
    name?: true;
    admin?: true;
    moderator?: true;
    connexionToken?: true;
    bruteLimit?: true;
    gold?: true;
    fightSpeed?: true;
    backgroundMusic?: true;
    dinorpgDone?: true;
    createdAt?: true;
    bannedAt?: true;
    banReason?: true;
    displayVersusPage?: true;
    displayOpponentDetails?: true;
    transferedBrutesCount?: true;
    lastSeen?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    lang?: true;
    name?: true;
    admin?: true;
    moderator?: true;
    connexionToken?: true;
    bruteLimit?: true;
    gold?: true;
    fightSpeed?: true;
    backgroundMusic?: true;
    dinorpgDone?: true;
    ips?: true;
    fingerprints?: true;
    createdAt?: true;
    bannedAt?: true;
    banReason?: true;
    displayVersusPage?: true;
    displayOpponentDetails?: true;
    transferedBrutesCount?: true;
    lastSeen?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    lang: $Enums.Lang;
    name: string;
    admin: boolean;
    moderator: boolean;
    connexionToken: string;
    bruteLimit: number;
    gold: number;
    fightSpeed: number;
    backgroundMusic: boolean;
    dinorpgDone: Date | null;
    ips: string[];
    fingerprints: string[];
    createdAt: Date;
    bannedAt: Date | null;
    banReason: string | null;
    displayVersusPage: boolean;
    displayOpponentDetails: boolean;
    transferedBrutesCount: number;
    lastSeen: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.UuidFilter<"User"> | string;
    lang?: Prisma.EnumLangFilter<"User"> | $Enums.Lang;
    name?: Prisma.StringFilter<"User"> | string;
    admin?: Prisma.BoolFilter<"User"> | boolean;
    moderator?: Prisma.BoolFilter<"User"> | boolean;
    connexionToken?: Prisma.UuidFilter<"User"> | string;
    bruteLimit?: Prisma.IntFilter<"User"> | number;
    gold?: Prisma.IntFilter<"User"> | number;
    fightSpeed?: Prisma.IntFilter<"User"> | number;
    backgroundMusic?: Prisma.BoolFilter<"User"> | boolean;
    dinorpgDone?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    ips?: Prisma.StringNullableListFilter<"User">;
    fingerprints?: Prisma.StringNullableListFilter<"User">;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    bannedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    banReason?: Prisma.StringNullableFilter<"User"> | string | null;
    displayVersusPage?: Prisma.BoolFilter<"User"> | boolean;
    displayOpponentDetails?: Prisma.BoolFilter<"User"> | boolean;
    transferedBrutesCount?: Prisma.IntFilter<"User"> | number;
    lastSeen?: Prisma.DateTimeFilter<"User"> | Date | string;
    brutes?: Prisma.BruteListRelationFilter;
    achievements?: Prisma.AchievementListRelationFilter;
    reports?: Prisma.BruteReportListRelationFilter;
    tournamentGolds?: Prisma.TournamentGoldListRelationFilter;
    inventory?: Prisma.InventoryItemListRelationFilter;
    favoriteFights?: Prisma.FightListRelationFilter;
    following?: Prisma.BruteListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    reportsHandled?: Prisma.BruteReportListRelationFilter;
    logs?: Prisma.UserLogListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lang?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    admin?: Prisma.SortOrder;
    moderator?: Prisma.SortOrder;
    connexionToken?: Prisma.SortOrder;
    bruteLimit?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    fightSpeed?: Prisma.SortOrder;
    backgroundMusic?: Prisma.SortOrder;
    dinorpgDone?: Prisma.SortOrderInput | Prisma.SortOrder;
    ips?: Prisma.SortOrder;
    fingerprints?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    bannedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    banReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    displayVersusPage?: Prisma.SortOrder;
    displayOpponentDetails?: Prisma.SortOrder;
    transferedBrutesCount?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
    brutes?: Prisma.BruteOrderByRelationAggregateInput;
    achievements?: Prisma.AchievementOrderByRelationAggregateInput;
    reports?: Prisma.BruteReportOrderByRelationAggregateInput;
    tournamentGolds?: Prisma.TournamentGoldOrderByRelationAggregateInput;
    inventory?: Prisma.InventoryItemOrderByRelationAggregateInput;
    favoriteFights?: Prisma.FightOrderByRelationAggregateInput;
    following?: Prisma.BruteOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    reportsHandled?: Prisma.BruteReportOrderByRelationAggregateInput;
    logs?: Prisma.UserLogOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    lang?: Prisma.EnumLangFilter<"User"> | $Enums.Lang;
    name?: Prisma.StringFilter<"User"> | string;
    admin?: Prisma.BoolFilter<"User"> | boolean;
    moderator?: Prisma.BoolFilter<"User"> | boolean;
    connexionToken?: Prisma.UuidFilter<"User"> | string;
    bruteLimit?: Prisma.IntFilter<"User"> | number;
    gold?: Prisma.IntFilter<"User"> | number;
    fightSpeed?: Prisma.IntFilter<"User"> | number;
    backgroundMusic?: Prisma.BoolFilter<"User"> | boolean;
    dinorpgDone?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    ips?: Prisma.StringNullableListFilter<"User">;
    fingerprints?: Prisma.StringNullableListFilter<"User">;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    bannedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    banReason?: Prisma.StringNullableFilter<"User"> | string | null;
    displayVersusPage?: Prisma.BoolFilter<"User"> | boolean;
    displayOpponentDetails?: Prisma.BoolFilter<"User"> | boolean;
    transferedBrutesCount?: Prisma.IntFilter<"User"> | number;
    lastSeen?: Prisma.DateTimeFilter<"User"> | Date | string;
    brutes?: Prisma.BruteListRelationFilter;
    achievements?: Prisma.AchievementListRelationFilter;
    reports?: Prisma.BruteReportListRelationFilter;
    tournamentGolds?: Prisma.TournamentGoldListRelationFilter;
    inventory?: Prisma.InventoryItemListRelationFilter;
    favoriteFights?: Prisma.FightListRelationFilter;
    following?: Prisma.BruteListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    reportsHandled?: Prisma.BruteReportListRelationFilter;
    logs?: Prisma.UserLogListRelationFilter;
}, "id" | "id">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lang?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    admin?: Prisma.SortOrder;
    moderator?: Prisma.SortOrder;
    connexionToken?: Prisma.SortOrder;
    bruteLimit?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    fightSpeed?: Prisma.SortOrder;
    backgroundMusic?: Prisma.SortOrder;
    dinorpgDone?: Prisma.SortOrderInput | Prisma.SortOrder;
    ips?: Prisma.SortOrder;
    fingerprints?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    bannedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    banReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    displayVersusPage?: Prisma.SortOrder;
    displayOpponentDetails?: Prisma.SortOrder;
    transferedBrutesCount?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"User"> | string;
    lang?: Prisma.EnumLangWithAggregatesFilter<"User"> | $Enums.Lang;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    admin?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    moderator?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    connexionToken?: Prisma.UuidWithAggregatesFilter<"User"> | string;
    bruteLimit?: Prisma.IntWithAggregatesFilter<"User"> | number;
    gold?: Prisma.IntWithAggregatesFilter<"User"> | number;
    fightSpeed?: Prisma.IntWithAggregatesFilter<"User"> | number;
    backgroundMusic?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    dinorpgDone?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    ips?: Prisma.StringNullableListFilter<"User">;
    fingerprints?: Prisma.StringNullableListFilter<"User">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    bannedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    banReason?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    displayVersusPage?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    displayOpponentDetails?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    transferedBrutesCount?: Prisma.IntWithAggregatesFilter<"User"> | number;
    lastSeen?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportUncheckedCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightUncheckedCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteUncheckedCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportUncheckedCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUncheckedUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUncheckedUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUncheckedUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUncheckedUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUncheckedUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lang?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    admin?: Prisma.SortOrder;
    moderator?: Prisma.SortOrder;
    connexionToken?: Prisma.SortOrder;
    bruteLimit?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    fightSpeed?: Prisma.SortOrder;
    backgroundMusic?: Prisma.SortOrder;
    dinorpgDone?: Prisma.SortOrder;
    ips?: Prisma.SortOrder;
    fingerprints?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    bannedAt?: Prisma.SortOrder;
    banReason?: Prisma.SortOrder;
    displayVersusPage?: Prisma.SortOrder;
    displayOpponentDetails?: Prisma.SortOrder;
    transferedBrutesCount?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    bruteLimit?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    fightSpeed?: Prisma.SortOrder;
    transferedBrutesCount?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lang?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    admin?: Prisma.SortOrder;
    moderator?: Prisma.SortOrder;
    connexionToken?: Prisma.SortOrder;
    bruteLimit?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    fightSpeed?: Prisma.SortOrder;
    backgroundMusic?: Prisma.SortOrder;
    dinorpgDone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    bannedAt?: Prisma.SortOrder;
    banReason?: Prisma.SortOrder;
    displayVersusPage?: Prisma.SortOrder;
    displayOpponentDetails?: Prisma.SortOrder;
    transferedBrutesCount?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lang?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    admin?: Prisma.SortOrder;
    moderator?: Prisma.SortOrder;
    connexionToken?: Prisma.SortOrder;
    bruteLimit?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    fightSpeed?: Prisma.SortOrder;
    backgroundMusic?: Prisma.SortOrder;
    dinorpgDone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    bannedAt?: Prisma.SortOrder;
    banReason?: Prisma.SortOrder;
    displayVersusPage?: Prisma.SortOrder;
    displayOpponentDetails?: Prisma.SortOrder;
    transferedBrutesCount?: Prisma.SortOrder;
    lastSeen?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    bruteLimit?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    fightSpeed?: Prisma.SortOrder;
    transferedBrutesCount?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserCreateipsInput = {
    set: string[];
};
export type UserCreatefingerprintsInput = {
    set: string[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumLangFieldUpdateOperationsInput = {
    set?: $Enums.Lang;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type UserUpdateipsInput = {
    set?: string[];
    push?: string | string[];
};
export type UserUpdatefingerprintsInput = {
    set?: string[];
    push?: string | string[];
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type UserCreateNestedOneWithoutLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLogsInput, Prisma.UserUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLogsInput, Prisma.UserUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLogsInput;
    upsert?: Prisma.UserUpsertWithoutLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLogsInput, Prisma.UserUpdateWithoutLogsInput>, Prisma.UserUncheckedUpdateWithoutLogsInput>;
};
export type UserCreateNestedOneWithoutBrutesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBrutesInput, Prisma.UserUncheckedCreateWithoutBrutesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBrutesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedManyWithoutFollowingInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput> | Prisma.UserCreateWithoutFollowingInput[] | Prisma.UserUncheckedCreateWithoutFollowingInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowingInput | Prisma.UserCreateOrConnectWithoutFollowingInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput> | Prisma.UserCreateWithoutFollowingInput[] | Prisma.UserUncheckedCreateWithoutFollowingInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowingInput | Prisma.UserCreateOrConnectWithoutFollowingInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateOneWithoutBrutesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBrutesInput, Prisma.UserUncheckedCreateWithoutBrutesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBrutesInput;
    upsert?: Prisma.UserUpsertWithoutBrutesInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBrutesInput, Prisma.UserUpdateWithoutBrutesInput>, Prisma.UserUncheckedUpdateWithoutBrutesInput>;
};
export type UserUpdateManyWithoutFollowingNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput> | Prisma.UserCreateWithoutFollowingInput[] | Prisma.UserUncheckedCreateWithoutFollowingInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowingInput | Prisma.UserCreateOrConnectWithoutFollowingInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutFollowingInput | Prisma.UserUpsertWithWhereUniqueWithoutFollowingInput[];
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutFollowingInput | Prisma.UserUpdateWithWhereUniqueWithoutFollowingInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutFollowingInput | Prisma.UserUpdateManyWithWhereWithoutFollowingInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput> | Prisma.UserCreateWithoutFollowingInput[] | Prisma.UserUncheckedCreateWithoutFollowingInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowingInput | Prisma.UserCreateOrConnectWithoutFollowingInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutFollowingInput | Prisma.UserUpsertWithWhereUniqueWithoutFollowingInput[];
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutFollowingInput | Prisma.UserUpdateWithWhereUniqueWithoutFollowingInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutFollowingInput | Prisma.UserUpdateManyWithWhereWithoutFollowingInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedManyWithoutFavoriteFightsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFavoriteFightsInput, Prisma.UserUncheckedCreateWithoutFavoriteFightsInput> | Prisma.UserCreateWithoutFavoriteFightsInput[] | Prisma.UserUncheckedCreateWithoutFavoriteFightsInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFavoriteFightsInput | Prisma.UserCreateOrConnectWithoutFavoriteFightsInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutFavoriteFightsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFavoriteFightsInput, Prisma.UserUncheckedCreateWithoutFavoriteFightsInput> | Prisma.UserCreateWithoutFavoriteFightsInput[] | Prisma.UserUncheckedCreateWithoutFavoriteFightsInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFavoriteFightsInput | Prisma.UserCreateOrConnectWithoutFavoriteFightsInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutFavoriteFightsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFavoriteFightsInput, Prisma.UserUncheckedCreateWithoutFavoriteFightsInput> | Prisma.UserCreateWithoutFavoriteFightsInput[] | Prisma.UserUncheckedCreateWithoutFavoriteFightsInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFavoriteFightsInput | Prisma.UserCreateOrConnectWithoutFavoriteFightsInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutFavoriteFightsInput | Prisma.UserUpsertWithWhereUniqueWithoutFavoriteFightsInput[];
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutFavoriteFightsInput | Prisma.UserUpdateWithWhereUniqueWithoutFavoriteFightsInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutFavoriteFightsInput | Prisma.UserUpdateManyWithWhereWithoutFavoriteFightsInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutFavoriteFightsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFavoriteFightsInput, Prisma.UserUncheckedCreateWithoutFavoriteFightsInput> | Prisma.UserCreateWithoutFavoriteFightsInput[] | Prisma.UserUncheckedCreateWithoutFavoriteFightsInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFavoriteFightsInput | Prisma.UserCreateOrConnectWithoutFavoriteFightsInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutFavoriteFightsInput | Prisma.UserUpsertWithWhereUniqueWithoutFavoriteFightsInput[];
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutFavoriteFightsInput | Prisma.UserUpdateWithWhereUniqueWithoutFavoriteFightsInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutFavoriteFightsInput | Prisma.UserUpdateManyWithWhereWithoutFavoriteFightsInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutTournamentGoldsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTournamentGoldsInput, Prisma.UserUncheckedCreateWithoutTournamentGoldsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTournamentGoldsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTournamentGoldsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTournamentGoldsInput, Prisma.UserUncheckedCreateWithoutTournamentGoldsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTournamentGoldsInput;
    upsert?: Prisma.UserUpsertWithoutTournamentGoldsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTournamentGoldsInput, Prisma.UserUpdateWithoutTournamentGoldsInput>, Prisma.UserUncheckedUpdateWithoutTournamentGoldsInput>;
};
export type UserCreateNestedOneWithoutAchievementsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAchievementsInput, Prisma.UserUncheckedCreateWithoutAchievementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAchievementsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutAchievementsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAchievementsInput, Prisma.UserUncheckedCreateWithoutAchievementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAchievementsInput;
    upsert?: Prisma.UserUpsertWithoutAchievementsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAchievementsInput, Prisma.UserUpdateWithoutAchievementsInput>, Prisma.UserUncheckedUpdateWithoutAchievementsInput>;
};
export type UserCreateNestedManyWithoutReportsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput> | Prisma.UserCreateWithoutReportsInput[] | Prisma.UserUncheckedCreateWithoutReportsInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsInput | Prisma.UserCreateOrConnectWithoutReportsInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserCreateNestedOneWithoutReportsHandledInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsHandledInput, Prisma.UserUncheckedCreateWithoutReportsHandledInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsHandledInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUncheckedCreateNestedManyWithoutReportsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput> | Prisma.UserCreateWithoutReportsInput[] | Prisma.UserUncheckedCreateWithoutReportsInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsInput | Prisma.UserCreateOrConnectWithoutReportsInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutReportsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput> | Prisma.UserCreateWithoutReportsInput[] | Prisma.UserUncheckedCreateWithoutReportsInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsInput | Prisma.UserCreateOrConnectWithoutReportsInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutReportsInput | Prisma.UserUpsertWithWhereUniqueWithoutReportsInput[];
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutReportsInput | Prisma.UserUpdateWithWhereUniqueWithoutReportsInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutReportsInput | Prisma.UserUpdateManyWithWhereWithoutReportsInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUpdateOneWithoutReportsHandledNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsHandledInput, Prisma.UserUncheckedCreateWithoutReportsHandledInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsHandledInput;
    upsert?: Prisma.UserUpsertWithoutReportsHandledInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReportsHandledInput, Prisma.UserUpdateWithoutReportsHandledInput>, Prisma.UserUncheckedUpdateWithoutReportsHandledInput>;
};
export type UserUncheckedUpdateManyWithoutReportsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput> | Prisma.UserCreateWithoutReportsInput[] | Prisma.UserUncheckedCreateWithoutReportsInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsInput | Prisma.UserCreateOrConnectWithoutReportsInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutReportsInput | Prisma.UserUpsertWithWhereUniqueWithoutReportsInput[];
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutReportsInput | Prisma.UserUpdateWithWhereUniqueWithoutReportsInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutReportsInput | Prisma.UserUpdateManyWithWhereWithoutReportsInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutInventoryInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutInventoryInput, Prisma.UserUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutInventoryInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutInventoryInput, Prisma.UserUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutInventoryInput;
    upsert?: Prisma.UserUpsertWithoutInventoryInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutInventoryInput, Prisma.UserUpdateWithoutInventoryInput>, Prisma.UserUncheckedUpdateWithoutInventoryInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateWithoutLogsInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportCreateNestedManyWithoutHandlerInput;
};
export type UserUncheckedCreateWithoutLogsInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportUncheckedCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightUncheckedCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteUncheckedCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportUncheckedCreateNestedManyWithoutHandlerInput;
};
export type UserCreateOrConnectWithoutLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLogsInput, Prisma.UserUncheckedCreateWithoutLogsInput>;
};
export type UserUpsertWithoutLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLogsInput, Prisma.UserUncheckedUpdateWithoutLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLogsInput, Prisma.UserUncheckedCreateWithoutLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLogsInput, Prisma.UserUncheckedUpdateWithoutLogsInput>;
};
export type UserUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUpdateManyWithoutHandlerNestedInput;
};
export type UserUncheckedUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUncheckedUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUncheckedUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUncheckedUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUncheckedUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUncheckedUpdateManyWithoutHandlerNestedInput;
};
export type UserCreateWithoutBrutesInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    achievements?: Prisma.AchievementCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutBrutesInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    achievements?: Prisma.AchievementUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportUncheckedCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightUncheckedCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteUncheckedCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportUncheckedCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutBrutesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBrutesInput, Prisma.UserUncheckedCreateWithoutBrutesInput>;
};
export type UserCreateWithoutFollowingInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightCreateNestedManyWithoutFavoritedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFollowingInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportUncheckedCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightUncheckedCreateNestedManyWithoutFavoritedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportUncheckedCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFollowingInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput>;
};
export type UserUpsertWithoutBrutesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBrutesInput, Prisma.UserUncheckedUpdateWithoutBrutesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBrutesInput, Prisma.UserUncheckedCreateWithoutBrutesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBrutesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBrutesInput, Prisma.UserUncheckedUpdateWithoutBrutesInput>;
};
export type UserUpdateWithoutBrutesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    achievements?: Prisma.AchievementUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutBrutesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    achievements?: Prisma.AchievementUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUncheckedUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUncheckedUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUncheckedUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUncheckedUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUncheckedUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutFollowingInput, Prisma.UserUncheckedUpdateWithoutFollowingInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput>;
};
export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFollowingInput, Prisma.UserUncheckedUpdateWithoutFollowingInput>;
};
export type UserUpdateManyWithWhereWithoutFollowingInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutFollowingInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.UuidFilter<"User"> | string;
    lang?: Prisma.EnumLangFilter<"User"> | $Enums.Lang;
    name?: Prisma.StringFilter<"User"> | string;
    admin?: Prisma.BoolFilter<"User"> | boolean;
    moderator?: Prisma.BoolFilter<"User"> | boolean;
    connexionToken?: Prisma.UuidFilter<"User"> | string;
    bruteLimit?: Prisma.IntFilter<"User"> | number;
    gold?: Prisma.IntFilter<"User"> | number;
    fightSpeed?: Prisma.IntFilter<"User"> | number;
    backgroundMusic?: Prisma.BoolFilter<"User"> | boolean;
    dinorpgDone?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    ips?: Prisma.StringNullableListFilter<"User">;
    fingerprints?: Prisma.StringNullableListFilter<"User">;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    bannedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    banReason?: Prisma.StringNullableFilter<"User"> | string | null;
    displayVersusPage?: Prisma.BoolFilter<"User"> | boolean;
    displayOpponentDetails?: Prisma.BoolFilter<"User"> | boolean;
    transferedBrutesCount?: Prisma.IntFilter<"User"> | number;
    lastSeen?: Prisma.DateTimeFilter<"User"> | Date | string;
};
export type UserCreateWithoutFavoriteFightsInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemCreateNestedManyWithoutUserInput;
    following?: Prisma.BruteCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFavoriteFightsInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportUncheckedCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutUserInput;
    following?: Prisma.BruteUncheckedCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportUncheckedCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFavoriteFightsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFavoriteFightsInput, Prisma.UserUncheckedCreateWithoutFavoriteFightsInput>;
};
export type UserUpsertWithWhereUniqueWithoutFavoriteFightsInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutFavoriteFightsInput, Prisma.UserUncheckedUpdateWithoutFavoriteFightsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFavoriteFightsInput, Prisma.UserUncheckedCreateWithoutFavoriteFightsInput>;
};
export type UserUpdateWithWhereUniqueWithoutFavoriteFightsInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFavoriteFightsInput, Prisma.UserUncheckedUpdateWithoutFavoriteFightsInput>;
};
export type UserUpdateManyWithWhereWithoutFavoriteFightsInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutFavoriteFightsInput>;
};
export type UserCreateWithoutTournamentGoldsInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportCreateNestedManyWithoutUsersInput;
    inventory?: Prisma.InventoryItemCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutTournamentGoldsInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportUncheckedCreateNestedManyWithoutUsersInput;
    inventory?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightUncheckedCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteUncheckedCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportUncheckedCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutTournamentGoldsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTournamentGoldsInput, Prisma.UserUncheckedCreateWithoutTournamentGoldsInput>;
};
export type UserUpsertWithoutTournamentGoldsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTournamentGoldsInput, Prisma.UserUncheckedUpdateWithoutTournamentGoldsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTournamentGoldsInput, Prisma.UserUncheckedCreateWithoutTournamentGoldsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTournamentGoldsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTournamentGoldsInput, Prisma.UserUncheckedUpdateWithoutTournamentGoldsInput>;
};
export type UserUpdateWithoutTournamentGoldsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUpdateManyWithoutUsersNestedInput;
    inventory?: Prisma.InventoryItemUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutTournamentGoldsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUncheckedUpdateManyWithoutUsersNestedInput;
    inventory?: Prisma.InventoryItemUncheckedUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUncheckedUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUncheckedUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUncheckedUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAchievementsInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAchievementsInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportUncheckedCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightUncheckedCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteUncheckedCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportUncheckedCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAchievementsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAchievementsInput, Prisma.UserUncheckedCreateWithoutAchievementsInput>;
};
export type UserUpsertWithoutAchievementsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAchievementsInput, Prisma.UserUncheckedUpdateWithoutAchievementsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAchievementsInput, Prisma.UserUncheckedCreateWithoutAchievementsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAchievementsInput, Prisma.UserUncheckedUpdateWithoutAchievementsInput>;
};
export type UserUpdateWithoutAchievementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAchievementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUncheckedUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUncheckedUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUncheckedUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUncheckedUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUncheckedUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutReportsInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementCreateNestedManyWithoutUserInput;
    tournamentGolds?: Prisma.TournamentGoldCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReportsInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementUncheckedCreateNestedManyWithoutUserInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightUncheckedCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteUncheckedCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportUncheckedCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReportsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput>;
};
export type UserCreateWithoutReportsHandledInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    logs?: Prisma.UserLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReportsHandledInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportUncheckedCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightUncheckedCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteUncheckedCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    logs?: Prisma.UserLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReportsHandledInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportsHandledInput, Prisma.UserUncheckedCreateWithoutReportsHandledInput>;
};
export type UserUpsertWithWhereUniqueWithoutReportsInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutReportsInput, Prisma.UserUncheckedUpdateWithoutReportsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput>;
};
export type UserUpdateWithWhereUniqueWithoutReportsInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReportsInput, Prisma.UserUncheckedUpdateWithoutReportsInput>;
};
export type UserUpdateManyWithWhereWithoutReportsInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutReportsInput>;
};
export type UserUpsertWithoutReportsHandledInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReportsHandledInput, Prisma.UserUncheckedUpdateWithoutReportsHandledInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportsHandledInput, Prisma.UserUncheckedCreateWithoutReportsHandledInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReportsHandledInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReportsHandledInput, Prisma.UserUncheckedUpdateWithoutReportsHandledInput>;
};
export type UserUpdateWithoutReportsHandledInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    logs?: Prisma.UserLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReportsHandledInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUncheckedUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUncheckedUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUncheckedUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUncheckedUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    logs?: Prisma.UserLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutInventoryInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutInventoryInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportUncheckedCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightUncheckedCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteUncheckedCreateNestedManyWithoutFollowersInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    reportsHandled?: Prisma.BruteReportUncheckedCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutInventoryInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutInventoryInput, Prisma.UserUncheckedCreateWithoutInventoryInput>;
};
export type UserUpsertWithoutInventoryInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutInventoryInput, Prisma.UserUncheckedUpdateWithoutInventoryInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutInventoryInput, Prisma.UserUncheckedCreateWithoutInventoryInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutInventoryInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutInventoryInput, Prisma.UserUncheckedUpdateWithoutInventoryInput>;
};
export type UserUpdateWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUncheckedUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUncheckedUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUncheckedUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUncheckedUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteCreateNestedManyWithoutFollowersInput;
    reportsHandled?: Prisma.BruteReportCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id: string;
    lang?: $Enums.Lang;
    name: string;
    admin?: boolean;
    moderator?: boolean;
    connexionToken: string;
    bruteLimit?: number;
    gold?: number;
    fightSpeed?: number;
    backgroundMusic?: boolean;
    dinorpgDone?: Date | string | null;
    ips?: Prisma.UserCreateipsInput | string[];
    fingerprints?: Prisma.UserCreatefingerprintsInput | string[];
    createdAt?: Date | string;
    bannedAt?: Date | string | null;
    banReason?: string | null;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: number;
    lastSeen?: Date | string;
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutUserInput;
    achievements?: Prisma.AchievementUncheckedCreateNestedManyWithoutUserInput;
    reports?: Prisma.BruteReportUncheckedCreateNestedManyWithoutUsersInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedCreateNestedManyWithoutUserInput;
    inventory?: Prisma.InventoryItemUncheckedCreateNestedManyWithoutUserInput;
    favoriteFights?: Prisma.FightUncheckedCreateNestedManyWithoutFavoritedByInput;
    following?: Prisma.BruteUncheckedCreateNestedManyWithoutFollowersInput;
    reportsHandled?: Prisma.BruteReportUncheckedCreateNestedManyWithoutHandlerInput;
    logs?: Prisma.UserLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUpdateManyWithoutFollowersNestedInput;
    reportsHandled?: Prisma.BruteReportUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUncheckedUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUncheckedUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUncheckedUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUncheckedUpdateManyWithoutFollowersNestedInput;
    reportsHandled?: Prisma.BruteReportUncheckedUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpdateWithoutFollowingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUpdateManyWithoutFavoritedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUncheckedUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUncheckedUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUncheckedUpdateManyWithoutFavoritedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUncheckedUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutFollowingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUpdateWithoutFavoriteFightsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUpdateManyWithoutUserNestedInput;
    following?: Prisma.BruteUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFavoriteFightsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUncheckedUpdateManyWithoutUserNestedInput;
    reports?: Prisma.BruteReportUncheckedUpdateManyWithoutUsersNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUncheckedUpdateManyWithoutUserNestedInput;
    following?: Prisma.BruteUncheckedUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUncheckedUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutFavoriteFightsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUpdateWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUpdateManyWithoutUserNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutUserNestedInput;
    achievements?: Prisma.AchievementUncheckedUpdateManyWithoutUserNestedInput;
    tournamentGolds?: Prisma.TournamentGoldUncheckedUpdateManyWithoutUserNestedInput;
    inventory?: Prisma.InventoryItemUncheckedUpdateManyWithoutUserNestedInput;
    favoriteFights?: Prisma.FightUncheckedUpdateManyWithoutFavoritedByNestedInput;
    following?: Prisma.BruteUncheckedUpdateManyWithoutFollowersNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    reportsHandled?: Prisma.BruteReportUncheckedUpdateManyWithoutHandlerNestedInput;
    logs?: Prisma.UserLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lang?: Prisma.EnumLangFieldUpdateOperationsInput | $Enums.Lang;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    moderator?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    connexionToken?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    fightSpeed?: Prisma.IntFieldUpdateOperationsInput | number;
    backgroundMusic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dinorpgDone?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ips?: Prisma.UserUpdateipsInput | string[];
    fingerprints?: Prisma.UserUpdatefingerprintsInput | string[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bannedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    banReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    displayVersusPage?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOpponentDetails?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    transferedBrutesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeen?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    brutes: number;
    achievements: number;
    reports: number;
    tournamentGolds: number;
    inventory: number;
    favoriteFights: number;
    following: number;
    notifications: number;
    reportsHandled: number;
    logs: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brutes?: boolean | UserCountOutputTypeCountBrutesArgs;
    achievements?: boolean | UserCountOutputTypeCountAchievementsArgs;
    reports?: boolean | UserCountOutputTypeCountReportsArgs;
    tournamentGolds?: boolean | UserCountOutputTypeCountTournamentGoldsArgs;
    inventory?: boolean | UserCountOutputTypeCountInventoryArgs;
    favoriteFights?: boolean | UserCountOutputTypeCountFavoriteFightsArgs;
    following?: boolean | UserCountOutputTypeCountFollowingArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    reportsHandled?: boolean | UserCountOutputTypeCountReportsHandledArgs;
    logs?: boolean | UserCountOutputTypeCountLogsArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountBrutesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BruteWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAchievementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AchievementWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BruteReportWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountTournamentGoldsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentGoldWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountInventoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryItemWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFavoriteFightsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FightWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BruteWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReportsHandledArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BruteReportWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserLogWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lang?: boolean;
    name?: boolean;
    admin?: boolean;
    moderator?: boolean;
    connexionToken?: boolean;
    bruteLimit?: boolean;
    gold?: boolean;
    fightSpeed?: boolean;
    backgroundMusic?: boolean;
    dinorpgDone?: boolean;
    ips?: boolean;
    fingerprints?: boolean;
    createdAt?: boolean;
    bannedAt?: boolean;
    banReason?: boolean;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: boolean;
    lastSeen?: boolean;
    brutes?: boolean | Prisma.User$brutesArgs<ExtArgs>;
    achievements?: boolean | Prisma.User$achievementsArgs<ExtArgs>;
    reports?: boolean | Prisma.User$reportsArgs<ExtArgs>;
    tournamentGolds?: boolean | Prisma.User$tournamentGoldsArgs<ExtArgs>;
    inventory?: boolean | Prisma.User$inventoryArgs<ExtArgs>;
    favoriteFights?: boolean | Prisma.User$favoriteFightsArgs<ExtArgs>;
    following?: boolean | Prisma.User$followingArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    reportsHandled?: boolean | Prisma.User$reportsHandledArgs<ExtArgs>;
    logs?: boolean | Prisma.User$logsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lang?: boolean;
    name?: boolean;
    admin?: boolean;
    moderator?: boolean;
    connexionToken?: boolean;
    bruteLimit?: boolean;
    gold?: boolean;
    fightSpeed?: boolean;
    backgroundMusic?: boolean;
    dinorpgDone?: boolean;
    ips?: boolean;
    fingerprints?: boolean;
    createdAt?: boolean;
    bannedAt?: boolean;
    banReason?: boolean;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: boolean;
    lastSeen?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lang?: boolean;
    name?: boolean;
    admin?: boolean;
    moderator?: boolean;
    connexionToken?: boolean;
    bruteLimit?: boolean;
    gold?: boolean;
    fightSpeed?: boolean;
    backgroundMusic?: boolean;
    dinorpgDone?: boolean;
    ips?: boolean;
    fingerprints?: boolean;
    createdAt?: boolean;
    bannedAt?: boolean;
    banReason?: boolean;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: boolean;
    lastSeen?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    lang?: boolean;
    name?: boolean;
    admin?: boolean;
    moderator?: boolean;
    connexionToken?: boolean;
    bruteLimit?: boolean;
    gold?: boolean;
    fightSpeed?: boolean;
    backgroundMusic?: boolean;
    dinorpgDone?: boolean;
    ips?: boolean;
    fingerprints?: boolean;
    createdAt?: boolean;
    bannedAt?: boolean;
    banReason?: boolean;
    displayVersusPage?: boolean;
    displayOpponentDetails?: boolean;
    transferedBrutesCount?: boolean;
    lastSeen?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lang" | "name" | "admin" | "moderator" | "connexionToken" | "bruteLimit" | "gold" | "fightSpeed" | "backgroundMusic" | "dinorpgDone" | "ips" | "fingerprints" | "createdAt" | "bannedAt" | "banReason" | "displayVersusPage" | "displayOpponentDetails" | "transferedBrutesCount" | "lastSeen", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brutes?: boolean | Prisma.User$brutesArgs<ExtArgs>;
    achievements?: boolean | Prisma.User$achievementsArgs<ExtArgs>;
    reports?: boolean | Prisma.User$reportsArgs<ExtArgs>;
    tournamentGolds?: boolean | Prisma.User$tournamentGoldsArgs<ExtArgs>;
    inventory?: boolean | Prisma.User$inventoryArgs<ExtArgs>;
    favoriteFights?: boolean | Prisma.User$favoriteFightsArgs<ExtArgs>;
    following?: boolean | Prisma.User$followingArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    reportsHandled?: boolean | Prisma.User$reportsHandledArgs<ExtArgs>;
    logs?: boolean | Prisma.User$logsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        brutes: Prisma.$BrutePayload<ExtArgs>[];
        achievements: Prisma.$AchievementPayload<ExtArgs>[];
        reports: Prisma.$BruteReportPayload<ExtArgs>[];
        tournamentGolds: Prisma.$TournamentGoldPayload<ExtArgs>[];
        inventory: Prisma.$InventoryItemPayload<ExtArgs>[];
        favoriteFights: Prisma.$FightPayload<ExtArgs>[];
        following: Prisma.$BrutePayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        reportsHandled: Prisma.$BruteReportPayload<ExtArgs>[];
        logs: Prisma.$UserLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lang: $Enums.Lang;
        name: string;
        admin: boolean;
        moderator: boolean;
        connexionToken: string;
        bruteLimit: number;
        gold: number;
        fightSpeed: number;
        backgroundMusic: boolean;
        dinorpgDone: Date | null;
        ips: string[];
        fingerprints: string[];
        createdAt: Date;
        bannedAt: Date | null;
        banReason: string | null;
        displayVersusPage: boolean;
        displayOpponentDetails: boolean;
        transferedBrutesCount: number;
        lastSeen: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brutes<T extends Prisma.User$brutesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$brutesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    achievements<T extends Prisma.User$achievementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reports<T extends Prisma.User$reportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tournamentGolds<T extends Prisma.User$tournamentGoldsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$tournamentGoldsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inventory<T extends Prisma.User$inventoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    favoriteFights<T extends Prisma.User$favoriteFightsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$favoriteFightsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    following<T extends Prisma.User$followingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reportsHandled<T extends Prisma.User$reportsHandledArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reportsHandledArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    logs<T extends Prisma.User$logsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly lang: Prisma.FieldRef<"User", 'Lang'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly admin: Prisma.FieldRef<"User", 'Boolean'>;
    readonly moderator: Prisma.FieldRef<"User", 'Boolean'>;
    readonly connexionToken: Prisma.FieldRef<"User", 'String'>;
    readonly bruteLimit: Prisma.FieldRef<"User", 'Int'>;
    readonly gold: Prisma.FieldRef<"User", 'Int'>;
    readonly fightSpeed: Prisma.FieldRef<"User", 'Int'>;
    readonly backgroundMusic: Prisma.FieldRef<"User", 'Boolean'>;
    readonly dinorpgDone: Prisma.FieldRef<"User", 'DateTime'>;
    readonly ips: Prisma.FieldRef<"User", 'String[]'>;
    readonly fingerprints: Prisma.FieldRef<"User", 'String[]'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly bannedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly banReason: Prisma.FieldRef<"User", 'String'>;
    readonly displayVersusPage: Prisma.FieldRef<"User", 'Boolean'>;
    readonly displayOpponentDetails: Prisma.FieldRef<"User", 'Boolean'>;
    readonly transferedBrutesCount: Prisma.FieldRef<"User", 'Int'>;
    readonly lastSeen: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.brutes
 */
export type User$brutesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: Prisma.BruteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brute
     */
    omit?: Prisma.BruteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteInclude<ExtArgs> | null;
    where?: Prisma.BruteWhereInput;
    orderBy?: Prisma.BruteOrderByWithRelationInput | Prisma.BruteOrderByWithRelationInput[];
    cursor?: Prisma.BruteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BruteScalarFieldEnum | Prisma.BruteScalarFieldEnum[];
};
/**
 * User.achievements
 */
export type User$achievementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: Prisma.AchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Achievement
     */
    omit?: Prisma.AchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AchievementInclude<ExtArgs> | null;
    where?: Prisma.AchievementWhereInput;
    orderBy?: Prisma.AchievementOrderByWithRelationInput | Prisma.AchievementOrderByWithRelationInput[];
    cursor?: Prisma.AchievementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AchievementScalarFieldEnum | Prisma.AchievementScalarFieldEnum[];
};
/**
 * User.reports
 */
export type User$reportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteReport
     */
    select?: Prisma.BruteReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteReport
     */
    omit?: Prisma.BruteReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteReportInclude<ExtArgs> | null;
    where?: Prisma.BruteReportWhereInput;
    orderBy?: Prisma.BruteReportOrderByWithRelationInput | Prisma.BruteReportOrderByWithRelationInput[];
    cursor?: Prisma.BruteReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BruteReportScalarFieldEnum | Prisma.BruteReportScalarFieldEnum[];
};
/**
 * User.tournamentGolds
 */
export type User$tournamentGoldsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGold
     */
    select?: Prisma.TournamentGoldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentGold
     */
    omit?: Prisma.TournamentGoldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentGoldInclude<ExtArgs> | null;
    where?: Prisma.TournamentGoldWhereInput;
    orderBy?: Prisma.TournamentGoldOrderByWithRelationInput | Prisma.TournamentGoldOrderByWithRelationInput[];
    cursor?: Prisma.TournamentGoldWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TournamentGoldScalarFieldEnum | Prisma.TournamentGoldScalarFieldEnum[];
};
/**
 * User.inventory
 */
export type User$inventoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where?: Prisma.InventoryItemWhereInput;
    orderBy?: Prisma.InventoryItemOrderByWithRelationInput | Prisma.InventoryItemOrderByWithRelationInput[];
    cursor?: Prisma.InventoryItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryItemScalarFieldEnum | Prisma.InventoryItemScalarFieldEnum[];
};
/**
 * User.favoriteFights
 */
export type User$favoriteFightsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightInclude<ExtArgs> | null;
    where?: Prisma.FightWhereInput;
    orderBy?: Prisma.FightOrderByWithRelationInput | Prisma.FightOrderByWithRelationInput[];
    cursor?: Prisma.FightWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FightScalarFieldEnum | Prisma.FightScalarFieldEnum[];
};
/**
 * User.following
 */
export type User$followingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: Prisma.BruteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Brute
     */
    omit?: Prisma.BruteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteInclude<ExtArgs> | null;
    where?: Prisma.BruteWhereInput;
    orderBy?: Prisma.BruteOrderByWithRelationInput | Prisma.BruteOrderByWithRelationInput[];
    cursor?: Prisma.BruteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BruteScalarFieldEnum | Prisma.BruteScalarFieldEnum[];
};
/**
 * User.notifications
 */
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * User.reportsHandled
 */
export type User$reportsHandledArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteReport
     */
    select?: Prisma.BruteReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteReport
     */
    omit?: Prisma.BruteReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteReportInclude<ExtArgs> | null;
    where?: Prisma.BruteReportWhereInput;
    orderBy?: Prisma.BruteReportOrderByWithRelationInput | Prisma.BruteReportOrderByWithRelationInput[];
    cursor?: Prisma.BruteReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BruteReportScalarFieldEnum | Prisma.BruteReportScalarFieldEnum[];
};
/**
 * User.logs
 */
export type User$logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: Prisma.UserLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLog
     */
    omit?: Prisma.UserLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserLogInclude<ExtArgs> | null;
    where?: Prisma.UserLogWhereInput;
    orderBy?: Prisma.UserLogOrderByWithRelationInput | Prisma.UserLogOrderByWithRelationInput[];
    cursor?: Prisma.UserLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserLogScalarFieldEnum | Prisma.UserLogScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
