import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model UserLog
 *
 */
export type UserLogModel = runtime.Types.Result.DefaultSelection<Prisma.$UserLogPayload>;
export type AggregateUserLog = {
    _count: UserLogCountAggregateOutputType | null;
    _avg: UserLogAvgAggregateOutputType | null;
    _sum: UserLogSumAggregateOutputType | null;
    _min: UserLogMinAggregateOutputType | null;
    _max: UserLogMaxAggregateOutputType | null;
};
export type UserLogAvgAggregateOutputType = {
    gold: number | null;
};
export type UserLogSumAggregateOutputType = {
    gold: number | null;
};
export type UserLogMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    userId: string | null;
    type: $Enums.UserLogType | null;
    bruteId: string | null;
    gold: number | null;
    oldName: string | null;
    targetUserId: string | null;
};
export type UserLogMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    userId: string | null;
    type: $Enums.UserLogType | null;
    bruteId: string | null;
    gold: number | null;
    oldName: string | null;
    targetUserId: string | null;
};
export type UserLogCountAggregateOutputType = {
    id: number;
    date: number;
    userId: number;
    type: number;
    bruteId: number;
    gold: number;
    oldName: number;
    targetUserId: number;
    _all: number;
};
export type UserLogAvgAggregateInputType = {
    gold?: true;
};
export type UserLogSumAggregateInputType = {
    gold?: true;
};
export type UserLogMinAggregateInputType = {
    id?: true;
    date?: true;
    userId?: true;
    type?: true;
    bruteId?: true;
    gold?: true;
    oldName?: true;
    targetUserId?: true;
};
export type UserLogMaxAggregateInputType = {
    id?: true;
    date?: true;
    userId?: true;
    type?: true;
    bruteId?: true;
    gold?: true;
    oldName?: true;
    targetUserId?: true;
};
export type UserLogCountAggregateInputType = {
    id?: true;
    date?: true;
    userId?: true;
    type?: true;
    bruteId?: true;
    gold?: true;
    oldName?: true;
    targetUserId?: true;
    _all?: true;
};
export type UserLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserLog to aggregate.
     */
    where?: Prisma.UserLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: Prisma.UserLogOrderByWithRelationInput | Prisma.UserLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserLogs
    **/
    _count?: true | UserLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UserLogAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UserLogSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserLogMaxAggregateInputType;
};
export type GetUserLogAggregateType<T extends UserLogAggregateArgs> = {
    [P in keyof T & keyof AggregateUserLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserLog[P]> : Prisma.GetScalarType<T[P], AggregateUserLog[P]>;
};
export type UserLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserLogWhereInput;
    orderBy?: Prisma.UserLogOrderByWithAggregationInput | Prisma.UserLogOrderByWithAggregationInput[];
    by: Prisma.UserLogScalarFieldEnum[] | Prisma.UserLogScalarFieldEnum;
    having?: Prisma.UserLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserLogCountAggregateInputType | true;
    _avg?: UserLogAvgAggregateInputType;
    _sum?: UserLogSumAggregateInputType;
    _min?: UserLogMinAggregateInputType;
    _max?: UserLogMaxAggregateInputType;
};
export type UserLogGroupByOutputType = {
    id: string;
    date: Date;
    userId: string;
    type: $Enums.UserLogType;
    bruteId: string | null;
    gold: number | null;
    oldName: string | null;
    targetUserId: string | null;
    _count: UserLogCountAggregateOutputType | null;
    _avg: UserLogAvgAggregateOutputType | null;
    _sum: UserLogSumAggregateOutputType | null;
    _min: UserLogMinAggregateOutputType | null;
    _max: UserLogMaxAggregateOutputType | null;
};
export type GetUserLogGroupByPayload<T extends UserLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserLogGroupByOutputType[P]>;
}>>;
export type UserLogWhereInput = {
    AND?: Prisma.UserLogWhereInput | Prisma.UserLogWhereInput[];
    OR?: Prisma.UserLogWhereInput[];
    NOT?: Prisma.UserLogWhereInput | Prisma.UserLogWhereInput[];
    id?: Prisma.UuidFilter<"UserLog"> | string;
    date?: Prisma.DateTimeFilter<"UserLog"> | Date | string;
    userId?: Prisma.UuidFilter<"UserLog"> | string;
    type?: Prisma.EnumUserLogTypeFilter<"UserLog"> | $Enums.UserLogType;
    bruteId?: Prisma.UuidNullableFilter<"UserLog"> | string | null;
    gold?: Prisma.IntNullableFilter<"UserLog"> | number | null;
    oldName?: Prisma.StringNullableFilter<"UserLog"> | string | null;
    targetUserId?: Prisma.UuidNullableFilter<"UserLog"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    brute?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
};
export type UserLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    gold?: Prisma.SortOrderInput | Prisma.SortOrder;
    oldName?: Prisma.SortOrderInput | Prisma.SortOrder;
    targetUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    brute?: Prisma.BruteOrderByWithRelationInput;
};
export type UserLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.UserLogWhereInput | Prisma.UserLogWhereInput[];
    OR?: Prisma.UserLogWhereInput[];
    NOT?: Prisma.UserLogWhereInput | Prisma.UserLogWhereInput[];
    date?: Prisma.DateTimeFilter<"UserLog"> | Date | string;
    userId?: Prisma.UuidFilter<"UserLog"> | string;
    type?: Prisma.EnumUserLogTypeFilter<"UserLog"> | $Enums.UserLogType;
    bruteId?: Prisma.UuidNullableFilter<"UserLog"> | string | null;
    gold?: Prisma.IntNullableFilter<"UserLog"> | number | null;
    oldName?: Prisma.StringNullableFilter<"UserLog"> | string | null;
    targetUserId?: Prisma.UuidNullableFilter<"UserLog"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    brute?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
}, "id" | "id">;
export type UserLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    gold?: Prisma.SortOrderInput | Prisma.SortOrder;
    oldName?: Prisma.SortOrderInput | Prisma.SortOrder;
    targetUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserLogCountOrderByAggregateInput;
    _avg?: Prisma.UserLogAvgOrderByAggregateInput;
    _max?: Prisma.UserLogMaxOrderByAggregateInput;
    _min?: Prisma.UserLogMinOrderByAggregateInput;
    _sum?: Prisma.UserLogSumOrderByAggregateInput;
};
export type UserLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserLogScalarWhereWithAggregatesInput | Prisma.UserLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserLogScalarWhereWithAggregatesInput | Prisma.UserLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"UserLog"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"UserLog"> | Date | string;
    userId?: Prisma.UuidWithAggregatesFilter<"UserLog"> | string;
    type?: Prisma.EnumUserLogTypeWithAggregatesFilter<"UserLog"> | $Enums.UserLogType;
    bruteId?: Prisma.UuidNullableWithAggregatesFilter<"UserLog"> | string | null;
    gold?: Prisma.IntNullableWithAggregatesFilter<"UserLog"> | number | null;
    oldName?: Prisma.StringNullableWithAggregatesFilter<"UserLog"> | string | null;
    targetUserId?: Prisma.UuidNullableWithAggregatesFilter<"UserLog"> | string | null;
};
export type UserLogCreateInput = {
    id?: string;
    date?: Date | string;
    type: $Enums.UserLogType;
    gold?: number | null;
    oldName?: string | null;
    targetUserId?: string | null;
    user: Prisma.UserCreateNestedOneWithoutLogsInput;
    brute?: Prisma.BruteCreateNestedOneWithoutUserlogsInput;
};
export type UserLogUncheckedCreateInput = {
    id?: string;
    date?: Date | string;
    userId: string;
    type: $Enums.UserLogType;
    bruteId?: string | null;
    gold?: number | null;
    oldName?: string | null;
    targetUserId?: string | null;
};
export type UserLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumUserLogTypeFieldUpdateOperationsInput | $Enums.UserLogType;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    oldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutLogsNestedInput;
    brute?: Prisma.BruteUpdateOneWithoutUserlogsNestedInput;
};
export type UserLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUserLogTypeFieldUpdateOperationsInput | $Enums.UserLogType;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    oldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserLogCreateManyInput = {
    id?: string;
    date?: Date | string;
    userId: string;
    type: $Enums.UserLogType;
    bruteId?: string | null;
    gold?: number | null;
    oldName?: string | null;
    targetUserId?: string | null;
};
export type UserLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumUserLogTypeFieldUpdateOperationsInput | $Enums.UserLogType;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    oldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUserLogTypeFieldUpdateOperationsInput | $Enums.UserLogType;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    oldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserLogListRelationFilter = {
    every?: Prisma.UserLogWhereInput;
    some?: Prisma.UserLogWhereInput;
    none?: Prisma.UserLogWhereInput;
};
export type UserLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    oldName?: Prisma.SortOrder;
    targetUserId?: Prisma.SortOrder;
};
export type UserLogAvgOrderByAggregateInput = {
    gold?: Prisma.SortOrder;
};
export type UserLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    oldName?: Prisma.SortOrder;
    targetUserId?: Prisma.SortOrder;
};
export type UserLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    oldName?: Prisma.SortOrder;
    targetUserId?: Prisma.SortOrder;
};
export type UserLogSumOrderByAggregateInput = {
    gold?: Prisma.SortOrder;
};
export type UserLogCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserLogCreateWithoutUserInput, Prisma.UserLogUncheckedCreateWithoutUserInput> | Prisma.UserLogCreateWithoutUserInput[] | Prisma.UserLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserLogCreateOrConnectWithoutUserInput | Prisma.UserLogCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserLogCreateManyUserInputEnvelope;
    connect?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
};
export type UserLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserLogCreateWithoutUserInput, Prisma.UserLogUncheckedCreateWithoutUserInput> | Prisma.UserLogCreateWithoutUserInput[] | Prisma.UserLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserLogCreateOrConnectWithoutUserInput | Prisma.UserLogCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserLogCreateManyUserInputEnvelope;
    connect?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
};
export type UserLogUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserLogCreateWithoutUserInput, Prisma.UserLogUncheckedCreateWithoutUserInput> | Prisma.UserLogCreateWithoutUserInput[] | Prisma.UserLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserLogCreateOrConnectWithoutUserInput | Prisma.UserLogCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserLogUpsertWithWhereUniqueWithoutUserInput | Prisma.UserLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserLogCreateManyUserInputEnvelope;
    set?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    disconnect?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    delete?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    connect?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    update?: Prisma.UserLogUpdateWithWhereUniqueWithoutUserInput | Prisma.UserLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserLogUpdateManyWithWhereWithoutUserInput | Prisma.UserLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserLogScalarWhereInput | Prisma.UserLogScalarWhereInput[];
};
export type UserLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserLogCreateWithoutUserInput, Prisma.UserLogUncheckedCreateWithoutUserInput> | Prisma.UserLogCreateWithoutUserInput[] | Prisma.UserLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserLogCreateOrConnectWithoutUserInput | Prisma.UserLogCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserLogUpsertWithWhereUniqueWithoutUserInput | Prisma.UserLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserLogCreateManyUserInputEnvelope;
    set?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    disconnect?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    delete?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    connect?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    update?: Prisma.UserLogUpdateWithWhereUniqueWithoutUserInput | Prisma.UserLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserLogUpdateManyWithWhereWithoutUserInput | Prisma.UserLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserLogScalarWhereInput | Prisma.UserLogScalarWhereInput[];
};
export type EnumUserLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserLogType;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserLogCreateNestedManyWithoutBruteInput = {
    create?: Prisma.XOR<Prisma.UserLogCreateWithoutBruteInput, Prisma.UserLogUncheckedCreateWithoutBruteInput> | Prisma.UserLogCreateWithoutBruteInput[] | Prisma.UserLogUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.UserLogCreateOrConnectWithoutBruteInput | Prisma.UserLogCreateOrConnectWithoutBruteInput[];
    createMany?: Prisma.UserLogCreateManyBruteInputEnvelope;
    connect?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
};
export type UserLogUncheckedCreateNestedManyWithoutBruteInput = {
    create?: Prisma.XOR<Prisma.UserLogCreateWithoutBruteInput, Prisma.UserLogUncheckedCreateWithoutBruteInput> | Prisma.UserLogCreateWithoutBruteInput[] | Prisma.UserLogUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.UserLogCreateOrConnectWithoutBruteInput | Prisma.UserLogCreateOrConnectWithoutBruteInput[];
    createMany?: Prisma.UserLogCreateManyBruteInputEnvelope;
    connect?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
};
export type UserLogUpdateManyWithoutBruteNestedInput = {
    create?: Prisma.XOR<Prisma.UserLogCreateWithoutBruteInput, Prisma.UserLogUncheckedCreateWithoutBruteInput> | Prisma.UserLogCreateWithoutBruteInput[] | Prisma.UserLogUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.UserLogCreateOrConnectWithoutBruteInput | Prisma.UserLogCreateOrConnectWithoutBruteInput[];
    upsert?: Prisma.UserLogUpsertWithWhereUniqueWithoutBruteInput | Prisma.UserLogUpsertWithWhereUniqueWithoutBruteInput[];
    createMany?: Prisma.UserLogCreateManyBruteInputEnvelope;
    set?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    disconnect?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    delete?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    connect?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    update?: Prisma.UserLogUpdateWithWhereUniqueWithoutBruteInput | Prisma.UserLogUpdateWithWhereUniqueWithoutBruteInput[];
    updateMany?: Prisma.UserLogUpdateManyWithWhereWithoutBruteInput | Prisma.UserLogUpdateManyWithWhereWithoutBruteInput[];
    deleteMany?: Prisma.UserLogScalarWhereInput | Prisma.UserLogScalarWhereInput[];
};
export type UserLogUncheckedUpdateManyWithoutBruteNestedInput = {
    create?: Prisma.XOR<Prisma.UserLogCreateWithoutBruteInput, Prisma.UserLogUncheckedCreateWithoutBruteInput> | Prisma.UserLogCreateWithoutBruteInput[] | Prisma.UserLogUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.UserLogCreateOrConnectWithoutBruteInput | Prisma.UserLogCreateOrConnectWithoutBruteInput[];
    upsert?: Prisma.UserLogUpsertWithWhereUniqueWithoutBruteInput | Prisma.UserLogUpsertWithWhereUniqueWithoutBruteInput[];
    createMany?: Prisma.UserLogCreateManyBruteInputEnvelope;
    set?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    disconnect?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    delete?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    connect?: Prisma.UserLogWhereUniqueInput | Prisma.UserLogWhereUniqueInput[];
    update?: Prisma.UserLogUpdateWithWhereUniqueWithoutBruteInput | Prisma.UserLogUpdateWithWhereUniqueWithoutBruteInput[];
    updateMany?: Prisma.UserLogUpdateManyWithWhereWithoutBruteInput | Prisma.UserLogUpdateManyWithWhereWithoutBruteInput[];
    deleteMany?: Prisma.UserLogScalarWhereInput | Prisma.UserLogScalarWhereInput[];
};
export type UserLogCreateWithoutUserInput = {
    id?: string;
    date?: Date | string;
    type: $Enums.UserLogType;
    gold?: number | null;
    oldName?: string | null;
    targetUserId?: string | null;
    brute?: Prisma.BruteCreateNestedOneWithoutUserlogsInput;
};
export type UserLogUncheckedCreateWithoutUserInput = {
    id?: string;
    date?: Date | string;
    type: $Enums.UserLogType;
    bruteId?: string | null;
    gold?: number | null;
    oldName?: string | null;
    targetUserId?: string | null;
};
export type UserLogCreateOrConnectWithoutUserInput = {
    where: Prisma.UserLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserLogCreateWithoutUserInput, Prisma.UserLogUncheckedCreateWithoutUserInput>;
};
export type UserLogCreateManyUserInputEnvelope = {
    data: Prisma.UserLogCreateManyUserInput | Prisma.UserLogCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserLogUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserLogUpdateWithoutUserInput, Prisma.UserLogUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserLogCreateWithoutUserInput, Prisma.UserLogUncheckedCreateWithoutUserInput>;
};
export type UserLogUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserLogUpdateWithoutUserInput, Prisma.UserLogUncheckedUpdateWithoutUserInput>;
};
export type UserLogUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserLogScalarWhereInput;
    data: Prisma.XOR<Prisma.UserLogUpdateManyMutationInput, Prisma.UserLogUncheckedUpdateManyWithoutUserInput>;
};
export type UserLogScalarWhereInput = {
    AND?: Prisma.UserLogScalarWhereInput | Prisma.UserLogScalarWhereInput[];
    OR?: Prisma.UserLogScalarWhereInput[];
    NOT?: Prisma.UserLogScalarWhereInput | Prisma.UserLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"UserLog"> | string;
    date?: Prisma.DateTimeFilter<"UserLog"> | Date | string;
    userId?: Prisma.UuidFilter<"UserLog"> | string;
    type?: Prisma.EnumUserLogTypeFilter<"UserLog"> | $Enums.UserLogType;
    bruteId?: Prisma.UuidNullableFilter<"UserLog"> | string | null;
    gold?: Prisma.IntNullableFilter<"UserLog"> | number | null;
    oldName?: Prisma.StringNullableFilter<"UserLog"> | string | null;
    targetUserId?: Prisma.UuidNullableFilter<"UserLog"> | string | null;
};
export type UserLogCreateWithoutBruteInput = {
    id?: string;
    date?: Date | string;
    type: $Enums.UserLogType;
    gold?: number | null;
    oldName?: string | null;
    targetUserId?: string | null;
    user: Prisma.UserCreateNestedOneWithoutLogsInput;
};
export type UserLogUncheckedCreateWithoutBruteInput = {
    id?: string;
    date?: Date | string;
    userId: string;
    type: $Enums.UserLogType;
    gold?: number | null;
    oldName?: string | null;
    targetUserId?: string | null;
};
export type UserLogCreateOrConnectWithoutBruteInput = {
    where: Prisma.UserLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserLogCreateWithoutBruteInput, Prisma.UserLogUncheckedCreateWithoutBruteInput>;
};
export type UserLogCreateManyBruteInputEnvelope = {
    data: Prisma.UserLogCreateManyBruteInput | Prisma.UserLogCreateManyBruteInput[];
    skipDuplicates?: boolean;
};
export type UserLogUpsertWithWhereUniqueWithoutBruteInput = {
    where: Prisma.UserLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserLogUpdateWithoutBruteInput, Prisma.UserLogUncheckedUpdateWithoutBruteInput>;
    create: Prisma.XOR<Prisma.UserLogCreateWithoutBruteInput, Prisma.UserLogUncheckedCreateWithoutBruteInput>;
};
export type UserLogUpdateWithWhereUniqueWithoutBruteInput = {
    where: Prisma.UserLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserLogUpdateWithoutBruteInput, Prisma.UserLogUncheckedUpdateWithoutBruteInput>;
};
export type UserLogUpdateManyWithWhereWithoutBruteInput = {
    where: Prisma.UserLogScalarWhereInput;
    data: Prisma.XOR<Prisma.UserLogUpdateManyMutationInput, Prisma.UserLogUncheckedUpdateManyWithoutBruteInput>;
};
export type UserLogCreateManyUserInput = {
    id?: string;
    date?: Date | string;
    type: $Enums.UserLogType;
    bruteId?: string | null;
    gold?: number | null;
    oldName?: string | null;
    targetUserId?: string | null;
};
export type UserLogUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumUserLogTypeFieldUpdateOperationsInput | $Enums.UserLogType;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    oldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brute?: Prisma.BruteUpdateOneWithoutUserlogsNestedInput;
};
export type UserLogUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumUserLogTypeFieldUpdateOperationsInput | $Enums.UserLogType;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    oldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserLogUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumUserLogTypeFieldUpdateOperationsInput | $Enums.UserLogType;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    oldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserLogCreateManyBruteInput = {
    id?: string;
    date?: Date | string;
    userId: string;
    type: $Enums.UserLogType;
    gold?: number | null;
    oldName?: string | null;
    targetUserId?: string | null;
};
export type UserLogUpdateWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumUserLogTypeFieldUpdateOperationsInput | $Enums.UserLogType;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    oldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutLogsNestedInput;
};
export type UserLogUncheckedUpdateWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUserLogTypeFieldUpdateOperationsInput | $Enums.UserLogType;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    oldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserLogUncheckedUpdateManyWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUserLogTypeFieldUpdateOperationsInput | $Enums.UserLogType;
    gold?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    oldName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    userId?: boolean;
    type?: boolean;
    bruteId?: boolean;
    gold?: boolean;
    oldName?: boolean;
    targetUserId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brute?: boolean | Prisma.UserLog$bruteArgs<ExtArgs>;
}, ExtArgs["result"]["userLog"]>;
export type UserLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    userId?: boolean;
    type?: boolean;
    bruteId?: boolean;
    gold?: boolean;
    oldName?: boolean;
    targetUserId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brute?: boolean | Prisma.UserLog$bruteArgs<ExtArgs>;
}, ExtArgs["result"]["userLog"]>;
export type UserLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    userId?: boolean;
    type?: boolean;
    bruteId?: boolean;
    gold?: boolean;
    oldName?: boolean;
    targetUserId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brute?: boolean | Prisma.UserLog$bruteArgs<ExtArgs>;
}, ExtArgs["result"]["userLog"]>;
export type UserLogSelectScalar = {
    id?: boolean;
    date?: boolean;
    userId?: boolean;
    type?: boolean;
    bruteId?: boolean;
    gold?: boolean;
    oldName?: boolean;
    targetUserId?: boolean;
};
export type UserLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "userId" | "type" | "bruteId" | "gold" | "oldName" | "targetUserId", ExtArgs["result"]["userLog"]>;
export type UserLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brute?: boolean | Prisma.UserLog$bruteArgs<ExtArgs>;
};
export type UserLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brute?: boolean | Prisma.UserLog$bruteArgs<ExtArgs>;
};
export type UserLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    brute?: boolean | Prisma.UserLog$bruteArgs<ExtArgs>;
};
export type $UserLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserLog";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        brute: Prisma.$BrutePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        userId: string;
        type: $Enums.UserLogType;
        bruteId: string | null;
        gold: number | null;
        oldName: string | null;
        targetUserId: string | null;
    }, ExtArgs["result"]["userLog"]>;
    composites: {};
};
export type UserLogGetPayload<S extends boolean | null | undefined | UserLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserLogPayload, S>;
export type UserLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: UserLogCountAggregateInputType | true;
};
export interface UserLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserLog'];
        meta: {
            name: 'UserLog';
        };
    };
    /**
     * Find zero or one UserLog that matches the filter.
     * @param {UserLogFindUniqueArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLogFindUniqueArgs>(args: Prisma.SelectSubset<T, UserLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserLogClient<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one UserLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLogFindUniqueOrThrowArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserLogClient<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindFirstArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLogFindFirstArgs>(args?: Prisma.SelectSubset<T, UserLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserLogClient<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindFirstOrThrowArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserLogClient<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more UserLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLogs
     * const userLogs = await prisma.userLog.findMany()
     *
     * // Get first 10 UserLogs
     * const userLogs = await prisma.userLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userLogWithIdOnly = await prisma.userLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserLogFindManyArgs>(args?: Prisma.SelectSubset<T, UserLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a UserLog.
     * @param {UserLogCreateArgs} args - Arguments to create a UserLog.
     * @example
     * // Create one UserLog
     * const UserLog = await prisma.userLog.create({
     *   data: {
     *     // ... data to create a UserLog
     *   }
     * })
     *
     */
    create<T extends UserLogCreateArgs>(args: Prisma.SelectSubset<T, UserLogCreateArgs<ExtArgs>>): Prisma.Prisma__UserLogClient<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many UserLogs.
     * @param {UserLogCreateManyArgs} args - Arguments to create many UserLogs.
     * @example
     * // Create many UserLogs
     * const userLog = await prisma.userLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserLogCreateManyArgs>(args?: Prisma.SelectSubset<T, UserLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many UserLogs and returns the data saved in the database.
     * @param {UserLogCreateManyAndReturnArgs} args - Arguments to create many UserLogs.
     * @example
     * // Create many UserLogs
     * const userLog = await prisma.userLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserLogs and only return the `id`
     * const userLogWithIdOnly = await prisma.userLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a UserLog.
     * @param {UserLogDeleteArgs} args - Arguments to delete one UserLog.
     * @example
     * // Delete one UserLog
     * const UserLog = await prisma.userLog.delete({
     *   where: {
     *     // ... filter to delete one UserLog
     *   }
     * })
     *
     */
    delete<T extends UserLogDeleteArgs>(args: Prisma.SelectSubset<T, UserLogDeleteArgs<ExtArgs>>): Prisma.Prisma__UserLogClient<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one UserLog.
     * @param {UserLogUpdateArgs} args - Arguments to update one UserLog.
     * @example
     * // Update one UserLog
     * const userLog = await prisma.userLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserLogUpdateArgs>(args: Prisma.SelectSubset<T, UserLogUpdateArgs<ExtArgs>>): Prisma.Prisma__UserLogClient<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more UserLogs.
     * @param {UserLogDeleteManyArgs} args - Arguments to filter UserLogs to delete.
     * @example
     * // Delete a few UserLogs
     * const { count } = await prisma.userLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLogs
     * const userLog = await prisma.userLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserLogUpdateManyArgs>(args: Prisma.SelectSubset<T, UserLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserLogs and returns the data updated in the database.
     * @param {UserLogUpdateManyAndReturnArgs} args - Arguments to update many UserLogs.
     * @example
     * // Update many UserLogs
     * const userLog = await prisma.userLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserLogs and only return the `id`
     * const userLogWithIdOnly = await prisma.userLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one UserLog.
     * @param {UserLogUpsertArgs} args - Arguments to update or create a UserLog.
     * @example
     * // Update or create a UserLog
     * const userLog = await prisma.userLog.upsert({
     *   create: {
     *     // ... data to create a UserLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLog we want to update
     *   }
     * })
     */
    upsert<T extends UserLogUpsertArgs>(args: Prisma.SelectSubset<T, UserLogUpsertArgs<ExtArgs>>): Prisma.Prisma__UserLogClient<runtime.Types.Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of UserLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogCountArgs} args - Arguments to filter UserLogs to count.
     * @example
     * // Count the number of UserLogs
     * const count = await prisma.userLog.count({
     *   where: {
     *     // ... the filter for the UserLogs we want to count
     *   }
     * })
    **/
    count<T extends UserLogCountArgs>(args?: Prisma.Subset<T, UserLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a UserLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLogAggregateArgs>(args: Prisma.Subset<T, UserLogAggregateArgs>): Prisma.PrismaPromise<GetUserLogAggregateType<T>>;
    /**
     * Group by UserLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserLogGroupByArgs['orderBy'];
    } : {
        orderBy?: UserLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserLog model
     */
    readonly fields: UserLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for UserLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    brute<T extends Prisma.UserLog$bruteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserLog$bruteArgs<ExtArgs>>): Prisma.Prisma__BruteClient<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the UserLog model
 */
export interface UserLogFieldRefs {
    readonly id: Prisma.FieldRef<"UserLog", 'String'>;
    readonly date: Prisma.FieldRef<"UserLog", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"UserLog", 'String'>;
    readonly type: Prisma.FieldRef<"UserLog", 'UserLogType'>;
    readonly bruteId: Prisma.FieldRef<"UserLog", 'String'>;
    readonly gold: Prisma.FieldRef<"UserLog", 'Int'>;
    readonly oldName: Prisma.FieldRef<"UserLog", 'String'>;
    readonly targetUserId: Prisma.FieldRef<"UserLog", 'String'>;
}
/**
 * UserLog findUnique
 */
export type UserLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserLog to fetch.
     */
    where: Prisma.UserLogWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * UserLog findUniqueOrThrow
 */
export type UserLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserLog to fetch.
     */
    where: Prisma.UserLogWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * UserLog findFirst
 */
export type UserLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserLog to fetch.
     */
    where?: Prisma.UserLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: Prisma.UserLogOrderByWithRelationInput | Prisma.UserLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserLogs.
     */
    cursor?: Prisma.UserLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserLogs.
     */
    distinct?: Prisma.UserLogScalarFieldEnum | Prisma.UserLogScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * UserLog findFirstOrThrow
 */
export type UserLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserLog to fetch.
     */
    where?: Prisma.UserLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: Prisma.UserLogOrderByWithRelationInput | Prisma.UserLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserLogs.
     */
    cursor?: Prisma.UserLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserLogs.
     */
    distinct?: Prisma.UserLogScalarFieldEnum | Prisma.UserLogScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * UserLog findMany
 */
export type UserLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UserLogs to fetch.
     */
    where?: Prisma.UserLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: Prisma.UserLogOrderByWithRelationInput | Prisma.UserLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserLogs.
     */
    cursor?: Prisma.UserLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserLogs.
     */
    distinct?: Prisma.UserLogScalarFieldEnum | Prisma.UserLogScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * UserLog create
 */
export type UserLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a UserLog.
     */
    data: Prisma.XOR<Prisma.UserLogCreateInput, Prisma.UserLogUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * UserLog createMany
 */
export type UserLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLogs.
     */
    data: Prisma.UserLogCreateManyInput | Prisma.UserLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * UserLog createManyAndReturn
 */
export type UserLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: Prisma.UserLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLog
     */
    omit?: Prisma.UserLogOmit<ExtArgs> | null;
    /**
     * The data used to create many UserLogs.
     */
    data: Prisma.UserLogCreateManyInput | Prisma.UserLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * UserLog update
 */
export type UserLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a UserLog.
     */
    data: Prisma.XOR<Prisma.UserLogUpdateInput, Prisma.UserLogUncheckedUpdateInput>;
    /**
     * Choose, which UserLog to update.
     */
    where: Prisma.UserLogWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * UserLog updateMany
 */
export type UserLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLogs.
     */
    data: Prisma.XOR<Prisma.UserLogUpdateManyMutationInput, Prisma.UserLogUncheckedUpdateManyInput>;
    /**
     * Filter which UserLogs to update
     */
    where?: Prisma.UserLogWhereInput;
    /**
     * Limit how many UserLogs to update.
     */
    limit?: number;
};
/**
 * UserLog updateManyAndReturn
 */
export type UserLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: Prisma.UserLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserLog
     */
    omit?: Prisma.UserLogOmit<ExtArgs> | null;
    /**
     * The data used to update UserLogs.
     */
    data: Prisma.XOR<Prisma.UserLogUpdateManyMutationInput, Prisma.UserLogUncheckedUpdateManyInput>;
    /**
     * Filter which UserLogs to update
     */
    where?: Prisma.UserLogWhereInput;
    /**
     * Limit how many UserLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * UserLog upsert
 */
export type UserLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the UserLog to update in case it exists.
     */
    where: Prisma.UserLogWhereUniqueInput;
    /**
     * In case the UserLog found by the `where` argument doesn't exist, create a new UserLog with this data.
     */
    create: Prisma.XOR<Prisma.UserLogCreateInput, Prisma.UserLogUncheckedCreateInput>;
    /**
     * In case the UserLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserLogUpdateInput, Prisma.UserLogUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * UserLog delete
 */
export type UserLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which UserLog to delete.
     */
    where: Prisma.UserLogWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * UserLog deleteMany
 */
export type UserLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UserLogs to delete
     */
    where?: Prisma.UserLogWhereInput;
    /**
     * Limit how many UserLogs to delete.
     */
    limit?: number;
};
/**
 * UserLog.brute
 */
export type UserLog$bruteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * UserLog without action
 */
export type UserLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
