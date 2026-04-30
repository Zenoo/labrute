import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model BruteReport
 *
 */
export type BruteReportModel = runtime.Types.Result.DefaultSelection<Prisma.$BruteReportPayload>;
export type AggregateBruteReport = {
    _count: BruteReportCountAggregateOutputType | null;
    _avg: BruteReportAvgAggregateOutputType | null;
    _sum: BruteReportSumAggregateOutputType | null;
    _min: BruteReportMinAggregateOutputType | null;
    _max: BruteReportMaxAggregateOutputType | null;
};
export type BruteReportAvgAggregateOutputType = {
    count: number | null;
};
export type BruteReportSumAggregateOutputType = {
    count: number | null;
};
export type BruteReportMinAggregateOutputType = {
    id: string | null;
    bruteId: string | null;
    bruteName: string | null;
    reason: $Enums.BruteReportReason | null;
    count: number | null;
    date: Date | null;
    status: $Enums.BruteReportStatus | null;
    handlerId: string | null;
    handledAt: Date | null;
};
export type BruteReportMaxAggregateOutputType = {
    id: string | null;
    bruteId: string | null;
    bruteName: string | null;
    reason: $Enums.BruteReportReason | null;
    count: number | null;
    date: Date | null;
    status: $Enums.BruteReportStatus | null;
    handlerId: string | null;
    handledAt: Date | null;
};
export type BruteReportCountAggregateOutputType = {
    id: number;
    bruteId: number;
    bruteName: number;
    reason: number;
    count: number;
    date: number;
    status: number;
    handlerId: number;
    handledAt: number;
    _all: number;
};
export type BruteReportAvgAggregateInputType = {
    count?: true;
};
export type BruteReportSumAggregateInputType = {
    count?: true;
};
export type BruteReportMinAggregateInputType = {
    id?: true;
    bruteId?: true;
    bruteName?: true;
    reason?: true;
    count?: true;
    date?: true;
    status?: true;
    handlerId?: true;
    handledAt?: true;
};
export type BruteReportMaxAggregateInputType = {
    id?: true;
    bruteId?: true;
    bruteName?: true;
    reason?: true;
    count?: true;
    date?: true;
    status?: true;
    handlerId?: true;
    handledAt?: true;
};
export type BruteReportCountAggregateInputType = {
    id?: true;
    bruteId?: true;
    bruteName?: true;
    reason?: true;
    count?: true;
    date?: true;
    status?: true;
    handlerId?: true;
    handledAt?: true;
    _all?: true;
};
export type BruteReportAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BruteReport to aggregate.
     */
    where?: Prisma.BruteReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BruteReports to fetch.
     */
    orderBy?: Prisma.BruteReportOrderByWithRelationInput | Prisma.BruteReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BruteReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BruteReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BruteReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BruteReports
    **/
    _count?: true | BruteReportCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BruteReportAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BruteReportSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BruteReportMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BruteReportMaxAggregateInputType;
};
export type GetBruteReportAggregateType<T extends BruteReportAggregateArgs> = {
    [P in keyof T & keyof AggregateBruteReport]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBruteReport[P]> : Prisma.GetScalarType<T[P], AggregateBruteReport[P]>;
};
export type BruteReportGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BruteReportWhereInput;
    orderBy?: Prisma.BruteReportOrderByWithAggregationInput | Prisma.BruteReportOrderByWithAggregationInput[];
    by: Prisma.BruteReportScalarFieldEnum[] | Prisma.BruteReportScalarFieldEnum;
    having?: Prisma.BruteReportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BruteReportCountAggregateInputType | true;
    _avg?: BruteReportAvgAggregateInputType;
    _sum?: BruteReportSumAggregateInputType;
    _min?: BruteReportMinAggregateInputType;
    _max?: BruteReportMaxAggregateInputType;
};
export type BruteReportGroupByOutputType = {
    id: string;
    bruteId: string | null;
    bruteName: string;
    reason: $Enums.BruteReportReason;
    count: number;
    date: Date;
    status: $Enums.BruteReportStatus;
    handlerId: string | null;
    handledAt: Date | null;
    _count: BruteReportCountAggregateOutputType | null;
    _avg: BruteReportAvgAggregateOutputType | null;
    _sum: BruteReportSumAggregateOutputType | null;
    _min: BruteReportMinAggregateOutputType | null;
    _max: BruteReportMaxAggregateOutputType | null;
};
export type GetBruteReportGroupByPayload<T extends BruteReportGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BruteReportGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BruteReportGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BruteReportGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BruteReportGroupByOutputType[P]>;
}>>;
export type BruteReportWhereInput = {
    AND?: Prisma.BruteReportWhereInput | Prisma.BruteReportWhereInput[];
    OR?: Prisma.BruteReportWhereInput[];
    NOT?: Prisma.BruteReportWhereInput | Prisma.BruteReportWhereInput[];
    id?: Prisma.UuidFilter<"BruteReport"> | string;
    bruteId?: Prisma.UuidNullableFilter<"BruteReport"> | string | null;
    bruteName?: Prisma.StringFilter<"BruteReport"> | string;
    reason?: Prisma.EnumBruteReportReasonFilter<"BruteReport"> | $Enums.BruteReportReason;
    count?: Prisma.IntFilter<"BruteReport"> | number;
    date?: Prisma.DateTimeFilter<"BruteReport"> | Date | string;
    status?: Prisma.EnumBruteReportStatusFilter<"BruteReport"> | $Enums.BruteReportStatus;
    handlerId?: Prisma.UuidNullableFilter<"BruteReport"> | string | null;
    handledAt?: Prisma.DateTimeNullableFilter<"BruteReport"> | Date | string | null;
    brute?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
    users?: Prisma.UserListRelationFilter;
    handler?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type BruteReportOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    bruteName?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    handlerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    handledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    brute?: Prisma.BruteOrderByWithRelationInput;
    users?: Prisma.UserOrderByRelationAggregateInput;
    handler?: Prisma.UserOrderByWithRelationInput;
};
export type BruteReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BruteReportWhereInput | Prisma.BruteReportWhereInput[];
    OR?: Prisma.BruteReportWhereInput[];
    NOT?: Prisma.BruteReportWhereInput | Prisma.BruteReportWhereInput[];
    bruteId?: Prisma.UuidNullableFilter<"BruteReport"> | string | null;
    bruteName?: Prisma.StringFilter<"BruteReport"> | string;
    reason?: Prisma.EnumBruteReportReasonFilter<"BruteReport"> | $Enums.BruteReportReason;
    count?: Prisma.IntFilter<"BruteReport"> | number;
    date?: Prisma.DateTimeFilter<"BruteReport"> | Date | string;
    status?: Prisma.EnumBruteReportStatusFilter<"BruteReport"> | $Enums.BruteReportStatus;
    handlerId?: Prisma.UuidNullableFilter<"BruteReport"> | string | null;
    handledAt?: Prisma.DateTimeNullableFilter<"BruteReport"> | Date | string | null;
    brute?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
    users?: Prisma.UserListRelationFilter;
    handler?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "id">;
export type BruteReportOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    bruteName?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    handlerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    handledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BruteReportCountOrderByAggregateInput;
    _avg?: Prisma.BruteReportAvgOrderByAggregateInput;
    _max?: Prisma.BruteReportMaxOrderByAggregateInput;
    _min?: Prisma.BruteReportMinOrderByAggregateInput;
    _sum?: Prisma.BruteReportSumOrderByAggregateInput;
};
export type BruteReportScalarWhereWithAggregatesInput = {
    AND?: Prisma.BruteReportScalarWhereWithAggregatesInput | Prisma.BruteReportScalarWhereWithAggregatesInput[];
    OR?: Prisma.BruteReportScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BruteReportScalarWhereWithAggregatesInput | Prisma.BruteReportScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BruteReport"> | string;
    bruteId?: Prisma.UuidNullableWithAggregatesFilter<"BruteReport"> | string | null;
    bruteName?: Prisma.StringWithAggregatesFilter<"BruteReport"> | string;
    reason?: Prisma.EnumBruteReportReasonWithAggregatesFilter<"BruteReport"> | $Enums.BruteReportReason;
    count?: Prisma.IntWithAggregatesFilter<"BruteReport"> | number;
    date?: Prisma.DateTimeWithAggregatesFilter<"BruteReport"> | Date | string;
    status?: Prisma.EnumBruteReportStatusWithAggregatesFilter<"BruteReport"> | $Enums.BruteReportStatus;
    handlerId?: Prisma.UuidNullableWithAggregatesFilter<"BruteReport"> | string | null;
    handledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BruteReport"> | Date | string | null;
};
export type BruteReportCreateInput = {
    id?: string;
    bruteName?: string;
    reason?: $Enums.BruteReportReason;
    count?: number;
    date?: Date | string;
    status?: $Enums.BruteReportStatus;
    handledAt?: Date | string | null;
    brute?: Prisma.BruteCreateNestedOneWithoutReportsInput;
    users?: Prisma.UserCreateNestedManyWithoutReportsInput;
    handler?: Prisma.UserCreateNestedOneWithoutReportsHandledInput;
};
export type BruteReportUncheckedCreateInput = {
    id?: string;
    bruteId?: string | null;
    bruteName?: string;
    reason?: $Enums.BruteReportReason;
    count?: number;
    date?: Date | string;
    status?: $Enums.BruteReportStatus;
    handlerId?: string | null;
    handledAt?: Date | string | null;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutReportsInput;
};
export type BruteReportUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    brute?: Prisma.BruteUpdateOneWithoutReportsNestedInput;
    users?: Prisma.UserUpdateManyWithoutReportsNestedInput;
    handler?: Prisma.UserUpdateOneWithoutReportsHandledNestedInput;
};
export type BruteReportUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handlerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.UserUncheckedUpdateManyWithoutReportsNestedInput;
};
export type BruteReportCreateManyInput = {
    id?: string;
    bruteId?: string | null;
    bruteName?: string;
    reason?: $Enums.BruteReportReason;
    count?: number;
    date?: Date | string;
    status?: $Enums.BruteReportStatus;
    handlerId?: string | null;
    handledAt?: Date | string | null;
};
export type BruteReportUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BruteReportUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handlerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BruteReportListRelationFilter = {
    every?: Prisma.BruteReportWhereInput;
    some?: Prisma.BruteReportWhereInput;
    none?: Prisma.BruteReportWhereInput;
};
export type BruteReportOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BruteReportCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    bruteName?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    handlerId?: Prisma.SortOrder;
    handledAt?: Prisma.SortOrder;
};
export type BruteReportAvgOrderByAggregateInput = {
    count?: Prisma.SortOrder;
};
export type BruteReportMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    bruteName?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    handlerId?: Prisma.SortOrder;
    handledAt?: Prisma.SortOrder;
};
export type BruteReportMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    bruteName?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    handlerId?: Prisma.SortOrder;
    handledAt?: Prisma.SortOrder;
};
export type BruteReportSumOrderByAggregateInput = {
    count?: Prisma.SortOrder;
};
export type BruteReportCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.BruteReportCreateWithoutUsersInput, Prisma.BruteReportUncheckedCreateWithoutUsersInput> | Prisma.BruteReportCreateWithoutUsersInput[] | Prisma.BruteReportUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.BruteReportCreateOrConnectWithoutUsersInput | Prisma.BruteReportCreateOrConnectWithoutUsersInput[];
    connect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
};
export type BruteReportCreateNestedManyWithoutHandlerInput = {
    create?: Prisma.XOR<Prisma.BruteReportCreateWithoutHandlerInput, Prisma.BruteReportUncheckedCreateWithoutHandlerInput> | Prisma.BruteReportCreateWithoutHandlerInput[] | Prisma.BruteReportUncheckedCreateWithoutHandlerInput[];
    connectOrCreate?: Prisma.BruteReportCreateOrConnectWithoutHandlerInput | Prisma.BruteReportCreateOrConnectWithoutHandlerInput[];
    createMany?: Prisma.BruteReportCreateManyHandlerInputEnvelope;
    connect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
};
export type BruteReportUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.BruteReportCreateWithoutUsersInput, Prisma.BruteReportUncheckedCreateWithoutUsersInput> | Prisma.BruteReportCreateWithoutUsersInput[] | Prisma.BruteReportUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.BruteReportCreateOrConnectWithoutUsersInput | Prisma.BruteReportCreateOrConnectWithoutUsersInput[];
    connect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
};
export type BruteReportUncheckedCreateNestedManyWithoutHandlerInput = {
    create?: Prisma.XOR<Prisma.BruteReportCreateWithoutHandlerInput, Prisma.BruteReportUncheckedCreateWithoutHandlerInput> | Prisma.BruteReportCreateWithoutHandlerInput[] | Prisma.BruteReportUncheckedCreateWithoutHandlerInput[];
    connectOrCreate?: Prisma.BruteReportCreateOrConnectWithoutHandlerInput | Prisma.BruteReportCreateOrConnectWithoutHandlerInput[];
    createMany?: Prisma.BruteReportCreateManyHandlerInputEnvelope;
    connect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
};
export type BruteReportUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.BruteReportCreateWithoutUsersInput, Prisma.BruteReportUncheckedCreateWithoutUsersInput> | Prisma.BruteReportCreateWithoutUsersInput[] | Prisma.BruteReportUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.BruteReportCreateOrConnectWithoutUsersInput | Prisma.BruteReportCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.BruteReportUpsertWithWhereUniqueWithoutUsersInput | Prisma.BruteReportUpsertWithWhereUniqueWithoutUsersInput[];
    set?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    disconnect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    delete?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    connect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    update?: Prisma.BruteReportUpdateWithWhereUniqueWithoutUsersInput | Prisma.BruteReportUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.BruteReportUpdateManyWithWhereWithoutUsersInput | Prisma.BruteReportUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.BruteReportScalarWhereInput | Prisma.BruteReportScalarWhereInput[];
};
export type BruteReportUpdateManyWithoutHandlerNestedInput = {
    create?: Prisma.XOR<Prisma.BruteReportCreateWithoutHandlerInput, Prisma.BruteReportUncheckedCreateWithoutHandlerInput> | Prisma.BruteReportCreateWithoutHandlerInput[] | Prisma.BruteReportUncheckedCreateWithoutHandlerInput[];
    connectOrCreate?: Prisma.BruteReportCreateOrConnectWithoutHandlerInput | Prisma.BruteReportCreateOrConnectWithoutHandlerInput[];
    upsert?: Prisma.BruteReportUpsertWithWhereUniqueWithoutHandlerInput | Prisma.BruteReportUpsertWithWhereUniqueWithoutHandlerInput[];
    createMany?: Prisma.BruteReportCreateManyHandlerInputEnvelope;
    set?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    disconnect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    delete?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    connect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    update?: Prisma.BruteReportUpdateWithWhereUniqueWithoutHandlerInput | Prisma.BruteReportUpdateWithWhereUniqueWithoutHandlerInput[];
    updateMany?: Prisma.BruteReportUpdateManyWithWhereWithoutHandlerInput | Prisma.BruteReportUpdateManyWithWhereWithoutHandlerInput[];
    deleteMany?: Prisma.BruteReportScalarWhereInput | Prisma.BruteReportScalarWhereInput[];
};
export type BruteReportUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.BruteReportCreateWithoutUsersInput, Prisma.BruteReportUncheckedCreateWithoutUsersInput> | Prisma.BruteReportCreateWithoutUsersInput[] | Prisma.BruteReportUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.BruteReportCreateOrConnectWithoutUsersInput | Prisma.BruteReportCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.BruteReportUpsertWithWhereUniqueWithoutUsersInput | Prisma.BruteReportUpsertWithWhereUniqueWithoutUsersInput[];
    set?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    disconnect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    delete?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    connect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    update?: Prisma.BruteReportUpdateWithWhereUniqueWithoutUsersInput | Prisma.BruteReportUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.BruteReportUpdateManyWithWhereWithoutUsersInput | Prisma.BruteReportUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.BruteReportScalarWhereInput | Prisma.BruteReportScalarWhereInput[];
};
export type BruteReportUncheckedUpdateManyWithoutHandlerNestedInput = {
    create?: Prisma.XOR<Prisma.BruteReportCreateWithoutHandlerInput, Prisma.BruteReportUncheckedCreateWithoutHandlerInput> | Prisma.BruteReportCreateWithoutHandlerInput[] | Prisma.BruteReportUncheckedCreateWithoutHandlerInput[];
    connectOrCreate?: Prisma.BruteReportCreateOrConnectWithoutHandlerInput | Prisma.BruteReportCreateOrConnectWithoutHandlerInput[];
    upsert?: Prisma.BruteReportUpsertWithWhereUniqueWithoutHandlerInput | Prisma.BruteReportUpsertWithWhereUniqueWithoutHandlerInput[];
    createMany?: Prisma.BruteReportCreateManyHandlerInputEnvelope;
    set?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    disconnect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    delete?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    connect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    update?: Prisma.BruteReportUpdateWithWhereUniqueWithoutHandlerInput | Prisma.BruteReportUpdateWithWhereUniqueWithoutHandlerInput[];
    updateMany?: Prisma.BruteReportUpdateManyWithWhereWithoutHandlerInput | Prisma.BruteReportUpdateManyWithWhereWithoutHandlerInput[];
    deleteMany?: Prisma.BruteReportScalarWhereInput | Prisma.BruteReportScalarWhereInput[];
};
export type BruteReportCreateNestedManyWithoutBruteInput = {
    create?: Prisma.XOR<Prisma.BruteReportCreateWithoutBruteInput, Prisma.BruteReportUncheckedCreateWithoutBruteInput> | Prisma.BruteReportCreateWithoutBruteInput[] | Prisma.BruteReportUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.BruteReportCreateOrConnectWithoutBruteInput | Prisma.BruteReportCreateOrConnectWithoutBruteInput[];
    createMany?: Prisma.BruteReportCreateManyBruteInputEnvelope;
    connect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
};
export type BruteReportUncheckedCreateNestedManyWithoutBruteInput = {
    create?: Prisma.XOR<Prisma.BruteReportCreateWithoutBruteInput, Prisma.BruteReportUncheckedCreateWithoutBruteInput> | Prisma.BruteReportCreateWithoutBruteInput[] | Prisma.BruteReportUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.BruteReportCreateOrConnectWithoutBruteInput | Prisma.BruteReportCreateOrConnectWithoutBruteInput[];
    createMany?: Prisma.BruteReportCreateManyBruteInputEnvelope;
    connect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
};
export type BruteReportUpdateManyWithoutBruteNestedInput = {
    create?: Prisma.XOR<Prisma.BruteReportCreateWithoutBruteInput, Prisma.BruteReportUncheckedCreateWithoutBruteInput> | Prisma.BruteReportCreateWithoutBruteInput[] | Prisma.BruteReportUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.BruteReportCreateOrConnectWithoutBruteInput | Prisma.BruteReportCreateOrConnectWithoutBruteInput[];
    upsert?: Prisma.BruteReportUpsertWithWhereUniqueWithoutBruteInput | Prisma.BruteReportUpsertWithWhereUniqueWithoutBruteInput[];
    createMany?: Prisma.BruteReportCreateManyBruteInputEnvelope;
    set?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    disconnect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    delete?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    connect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    update?: Prisma.BruteReportUpdateWithWhereUniqueWithoutBruteInput | Prisma.BruteReportUpdateWithWhereUniqueWithoutBruteInput[];
    updateMany?: Prisma.BruteReportUpdateManyWithWhereWithoutBruteInput | Prisma.BruteReportUpdateManyWithWhereWithoutBruteInput[];
    deleteMany?: Prisma.BruteReportScalarWhereInput | Prisma.BruteReportScalarWhereInput[];
};
export type BruteReportUncheckedUpdateManyWithoutBruteNestedInput = {
    create?: Prisma.XOR<Prisma.BruteReportCreateWithoutBruteInput, Prisma.BruteReportUncheckedCreateWithoutBruteInput> | Prisma.BruteReportCreateWithoutBruteInput[] | Prisma.BruteReportUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.BruteReportCreateOrConnectWithoutBruteInput | Prisma.BruteReportCreateOrConnectWithoutBruteInput[];
    upsert?: Prisma.BruteReportUpsertWithWhereUniqueWithoutBruteInput | Prisma.BruteReportUpsertWithWhereUniqueWithoutBruteInput[];
    createMany?: Prisma.BruteReportCreateManyBruteInputEnvelope;
    set?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    disconnect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    delete?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    connect?: Prisma.BruteReportWhereUniqueInput | Prisma.BruteReportWhereUniqueInput[];
    update?: Prisma.BruteReportUpdateWithWhereUniqueWithoutBruteInput | Prisma.BruteReportUpdateWithWhereUniqueWithoutBruteInput[];
    updateMany?: Prisma.BruteReportUpdateManyWithWhereWithoutBruteInput | Prisma.BruteReportUpdateManyWithWhereWithoutBruteInput[];
    deleteMany?: Prisma.BruteReportScalarWhereInput | Prisma.BruteReportScalarWhereInput[];
};
export type EnumBruteReportReasonFieldUpdateOperationsInput = {
    set?: $Enums.BruteReportReason;
};
export type EnumBruteReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.BruteReportStatus;
};
export type BruteReportCreateWithoutUsersInput = {
    id?: string;
    bruteName?: string;
    reason?: $Enums.BruteReportReason;
    count?: number;
    date?: Date | string;
    status?: $Enums.BruteReportStatus;
    handledAt?: Date | string | null;
    brute?: Prisma.BruteCreateNestedOneWithoutReportsInput;
    handler?: Prisma.UserCreateNestedOneWithoutReportsHandledInput;
};
export type BruteReportUncheckedCreateWithoutUsersInput = {
    id?: string;
    bruteId?: string | null;
    bruteName?: string;
    reason?: $Enums.BruteReportReason;
    count?: number;
    date?: Date | string;
    status?: $Enums.BruteReportStatus;
    handlerId?: string | null;
    handledAt?: Date | string | null;
};
export type BruteReportCreateOrConnectWithoutUsersInput = {
    where: Prisma.BruteReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.BruteReportCreateWithoutUsersInput, Prisma.BruteReportUncheckedCreateWithoutUsersInput>;
};
export type BruteReportCreateWithoutHandlerInput = {
    id?: string;
    bruteName?: string;
    reason?: $Enums.BruteReportReason;
    count?: number;
    date?: Date | string;
    status?: $Enums.BruteReportStatus;
    handledAt?: Date | string | null;
    brute?: Prisma.BruteCreateNestedOneWithoutReportsInput;
    users?: Prisma.UserCreateNestedManyWithoutReportsInput;
};
export type BruteReportUncheckedCreateWithoutHandlerInput = {
    id?: string;
    bruteId?: string | null;
    bruteName?: string;
    reason?: $Enums.BruteReportReason;
    count?: number;
    date?: Date | string;
    status?: $Enums.BruteReportStatus;
    handledAt?: Date | string | null;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutReportsInput;
};
export type BruteReportCreateOrConnectWithoutHandlerInput = {
    where: Prisma.BruteReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.BruteReportCreateWithoutHandlerInput, Prisma.BruteReportUncheckedCreateWithoutHandlerInput>;
};
export type BruteReportCreateManyHandlerInputEnvelope = {
    data: Prisma.BruteReportCreateManyHandlerInput | Prisma.BruteReportCreateManyHandlerInput[];
    skipDuplicates?: boolean;
};
export type BruteReportUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.BruteReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.BruteReportUpdateWithoutUsersInput, Prisma.BruteReportUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.BruteReportCreateWithoutUsersInput, Prisma.BruteReportUncheckedCreateWithoutUsersInput>;
};
export type BruteReportUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.BruteReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.BruteReportUpdateWithoutUsersInput, Prisma.BruteReportUncheckedUpdateWithoutUsersInput>;
};
export type BruteReportUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.BruteReportScalarWhereInput;
    data: Prisma.XOR<Prisma.BruteReportUpdateManyMutationInput, Prisma.BruteReportUncheckedUpdateManyWithoutUsersInput>;
};
export type BruteReportScalarWhereInput = {
    AND?: Prisma.BruteReportScalarWhereInput | Prisma.BruteReportScalarWhereInput[];
    OR?: Prisma.BruteReportScalarWhereInput[];
    NOT?: Prisma.BruteReportScalarWhereInput | Prisma.BruteReportScalarWhereInput[];
    id?: Prisma.UuidFilter<"BruteReport"> | string;
    bruteId?: Prisma.UuidNullableFilter<"BruteReport"> | string | null;
    bruteName?: Prisma.StringFilter<"BruteReport"> | string;
    reason?: Prisma.EnumBruteReportReasonFilter<"BruteReport"> | $Enums.BruteReportReason;
    count?: Prisma.IntFilter<"BruteReport"> | number;
    date?: Prisma.DateTimeFilter<"BruteReport"> | Date | string;
    status?: Prisma.EnumBruteReportStatusFilter<"BruteReport"> | $Enums.BruteReportStatus;
    handlerId?: Prisma.UuidNullableFilter<"BruteReport"> | string | null;
    handledAt?: Prisma.DateTimeNullableFilter<"BruteReport"> | Date | string | null;
};
export type BruteReportUpsertWithWhereUniqueWithoutHandlerInput = {
    where: Prisma.BruteReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.BruteReportUpdateWithoutHandlerInput, Prisma.BruteReportUncheckedUpdateWithoutHandlerInput>;
    create: Prisma.XOR<Prisma.BruteReportCreateWithoutHandlerInput, Prisma.BruteReportUncheckedCreateWithoutHandlerInput>;
};
export type BruteReportUpdateWithWhereUniqueWithoutHandlerInput = {
    where: Prisma.BruteReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.BruteReportUpdateWithoutHandlerInput, Prisma.BruteReportUncheckedUpdateWithoutHandlerInput>;
};
export type BruteReportUpdateManyWithWhereWithoutHandlerInput = {
    where: Prisma.BruteReportScalarWhereInput;
    data: Prisma.XOR<Prisma.BruteReportUpdateManyMutationInput, Prisma.BruteReportUncheckedUpdateManyWithoutHandlerInput>;
};
export type BruteReportCreateWithoutBruteInput = {
    id?: string;
    bruteName?: string;
    reason?: $Enums.BruteReportReason;
    count?: number;
    date?: Date | string;
    status?: $Enums.BruteReportStatus;
    handledAt?: Date | string | null;
    users?: Prisma.UserCreateNestedManyWithoutReportsInput;
    handler?: Prisma.UserCreateNestedOneWithoutReportsHandledInput;
};
export type BruteReportUncheckedCreateWithoutBruteInput = {
    id?: string;
    bruteName?: string;
    reason?: $Enums.BruteReportReason;
    count?: number;
    date?: Date | string;
    status?: $Enums.BruteReportStatus;
    handlerId?: string | null;
    handledAt?: Date | string | null;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutReportsInput;
};
export type BruteReportCreateOrConnectWithoutBruteInput = {
    where: Prisma.BruteReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.BruteReportCreateWithoutBruteInput, Prisma.BruteReportUncheckedCreateWithoutBruteInput>;
};
export type BruteReportCreateManyBruteInputEnvelope = {
    data: Prisma.BruteReportCreateManyBruteInput | Prisma.BruteReportCreateManyBruteInput[];
    skipDuplicates?: boolean;
};
export type BruteReportUpsertWithWhereUniqueWithoutBruteInput = {
    where: Prisma.BruteReportWhereUniqueInput;
    update: Prisma.XOR<Prisma.BruteReportUpdateWithoutBruteInput, Prisma.BruteReportUncheckedUpdateWithoutBruteInput>;
    create: Prisma.XOR<Prisma.BruteReportCreateWithoutBruteInput, Prisma.BruteReportUncheckedCreateWithoutBruteInput>;
};
export type BruteReportUpdateWithWhereUniqueWithoutBruteInput = {
    where: Prisma.BruteReportWhereUniqueInput;
    data: Prisma.XOR<Prisma.BruteReportUpdateWithoutBruteInput, Prisma.BruteReportUncheckedUpdateWithoutBruteInput>;
};
export type BruteReportUpdateManyWithWhereWithoutBruteInput = {
    where: Prisma.BruteReportScalarWhereInput;
    data: Prisma.XOR<Prisma.BruteReportUpdateManyMutationInput, Prisma.BruteReportUncheckedUpdateManyWithoutBruteInput>;
};
export type BruteReportCreateManyHandlerInput = {
    id?: string;
    bruteId?: string | null;
    bruteName?: string;
    reason?: $Enums.BruteReportReason;
    count?: number;
    date?: Date | string;
    status?: $Enums.BruteReportStatus;
    handledAt?: Date | string | null;
};
export type BruteReportUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    brute?: Prisma.BruteUpdateOneWithoutReportsNestedInput;
    handler?: Prisma.UserUpdateOneWithoutReportsHandledNestedInput;
};
export type BruteReportUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handlerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BruteReportUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handlerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BruteReportUpdateWithoutHandlerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    brute?: Prisma.BruteUpdateOneWithoutReportsNestedInput;
    users?: Prisma.UserUpdateManyWithoutReportsNestedInput;
};
export type BruteReportUncheckedUpdateWithoutHandlerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.UserUncheckedUpdateManyWithoutReportsNestedInput;
};
export type BruteReportUncheckedUpdateManyWithoutHandlerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BruteReportCreateManyBruteInput = {
    id?: string;
    bruteName?: string;
    reason?: $Enums.BruteReportReason;
    count?: number;
    date?: Date | string;
    status?: $Enums.BruteReportStatus;
    handlerId?: string | null;
    handledAt?: Date | string | null;
};
export type BruteReportUpdateWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.UserUpdateManyWithoutReportsNestedInput;
    handler?: Prisma.UserUpdateOneWithoutReportsHandledNestedInput;
};
export type BruteReportUncheckedUpdateWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handlerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.UserUncheckedUpdateManyWithoutReportsNestedInput;
};
export type BruteReportUncheckedUpdateManyWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteName?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.EnumBruteReportReasonFieldUpdateOperationsInput | $Enums.BruteReportReason;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumBruteReportStatusFieldUpdateOperationsInput | $Enums.BruteReportStatus;
    handlerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    handledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type BruteReportCountOutputType
 */
export type BruteReportCountOutputType = {
    users: number;
};
export type BruteReportCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | BruteReportCountOutputTypeCountUsersArgs;
};
/**
 * BruteReportCountOutputType without action
 */
export type BruteReportCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteReportCountOutputType
     */
    select?: Prisma.BruteReportCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * BruteReportCountOutputType without action
 */
export type BruteReportCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type BruteReportSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bruteId?: boolean;
    bruteName?: boolean;
    reason?: boolean;
    count?: boolean;
    date?: boolean;
    status?: boolean;
    handlerId?: boolean;
    handledAt?: boolean;
    brute?: boolean | Prisma.BruteReport$bruteArgs<ExtArgs>;
    users?: boolean | Prisma.BruteReport$usersArgs<ExtArgs>;
    handler?: boolean | Prisma.BruteReport$handlerArgs<ExtArgs>;
    _count?: boolean | Prisma.BruteReportCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bruteReport"]>;
export type BruteReportSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bruteId?: boolean;
    bruteName?: boolean;
    reason?: boolean;
    count?: boolean;
    date?: boolean;
    status?: boolean;
    handlerId?: boolean;
    handledAt?: boolean;
    brute?: boolean | Prisma.BruteReport$bruteArgs<ExtArgs>;
    handler?: boolean | Prisma.BruteReport$handlerArgs<ExtArgs>;
}, ExtArgs["result"]["bruteReport"]>;
export type BruteReportSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bruteId?: boolean;
    bruteName?: boolean;
    reason?: boolean;
    count?: boolean;
    date?: boolean;
    status?: boolean;
    handlerId?: boolean;
    handledAt?: boolean;
    brute?: boolean | Prisma.BruteReport$bruteArgs<ExtArgs>;
    handler?: boolean | Prisma.BruteReport$handlerArgs<ExtArgs>;
}, ExtArgs["result"]["bruteReport"]>;
export type BruteReportSelectScalar = {
    id?: boolean;
    bruteId?: boolean;
    bruteName?: boolean;
    reason?: boolean;
    count?: boolean;
    date?: boolean;
    status?: boolean;
    handlerId?: boolean;
    handledAt?: boolean;
};
export type BruteReportOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bruteId" | "bruteName" | "reason" | "count" | "date" | "status" | "handlerId" | "handledAt", ExtArgs["result"]["bruteReport"]>;
export type BruteReportInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BruteReport$bruteArgs<ExtArgs>;
    users?: boolean | Prisma.BruteReport$usersArgs<ExtArgs>;
    handler?: boolean | Prisma.BruteReport$handlerArgs<ExtArgs>;
    _count?: boolean | Prisma.BruteReportCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BruteReportIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BruteReport$bruteArgs<ExtArgs>;
    handler?: boolean | Prisma.BruteReport$handlerArgs<ExtArgs>;
};
export type BruteReportIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BruteReport$bruteArgs<ExtArgs>;
    handler?: boolean | Prisma.BruteReport$handlerArgs<ExtArgs>;
};
export type $BruteReportPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BruteReport";
    objects: {
        brute: Prisma.$BrutePayload<ExtArgs> | null;
        users: Prisma.$UserPayload<ExtArgs>[];
        handler: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bruteId: string | null;
        bruteName: string;
        reason: $Enums.BruteReportReason;
        count: number;
        date: Date;
        status: $Enums.BruteReportStatus;
        handlerId: string | null;
        handledAt: Date | null;
    }, ExtArgs["result"]["bruteReport"]>;
    composites: {};
};
export type BruteReportGetPayload<S extends boolean | null | undefined | BruteReportDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BruteReportPayload, S>;
export type BruteReportCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BruteReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: BruteReportCountAggregateInputType | true;
};
export interface BruteReportDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BruteReport'];
        meta: {
            name: 'BruteReport';
        };
    };
    /**
     * Find zero or one BruteReport that matches the filter.
     * @param {BruteReportFindUniqueArgs} args - Arguments to find a BruteReport
     * @example
     * // Get one BruteReport
     * const bruteReport = await prisma.bruteReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BruteReportFindUniqueArgs>(args: Prisma.SelectSubset<T, BruteReportFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BruteReportClient<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BruteReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BruteReportFindUniqueOrThrowArgs} args - Arguments to find a BruteReport
     * @example
     * // Get one BruteReport
     * const bruteReport = await prisma.bruteReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BruteReportFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BruteReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BruteReportClient<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BruteReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteReportFindFirstArgs} args - Arguments to find a BruteReport
     * @example
     * // Get one BruteReport
     * const bruteReport = await prisma.bruteReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BruteReportFindFirstArgs>(args?: Prisma.SelectSubset<T, BruteReportFindFirstArgs<ExtArgs>>): Prisma.Prisma__BruteReportClient<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BruteReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteReportFindFirstOrThrowArgs} args - Arguments to find a BruteReport
     * @example
     * // Get one BruteReport
     * const bruteReport = await prisma.bruteReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BruteReportFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BruteReportFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BruteReportClient<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BruteReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BruteReports
     * const bruteReports = await prisma.bruteReport.findMany()
     *
     * // Get first 10 BruteReports
     * const bruteReports = await prisma.bruteReport.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bruteReportWithIdOnly = await prisma.bruteReport.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BruteReportFindManyArgs>(args?: Prisma.SelectSubset<T, BruteReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BruteReport.
     * @param {BruteReportCreateArgs} args - Arguments to create a BruteReport.
     * @example
     * // Create one BruteReport
     * const BruteReport = await prisma.bruteReport.create({
     *   data: {
     *     // ... data to create a BruteReport
     *   }
     * })
     *
     */
    create<T extends BruteReportCreateArgs>(args: Prisma.SelectSubset<T, BruteReportCreateArgs<ExtArgs>>): Prisma.Prisma__BruteReportClient<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BruteReports.
     * @param {BruteReportCreateManyArgs} args - Arguments to create many BruteReports.
     * @example
     * // Create many BruteReports
     * const bruteReport = await prisma.bruteReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BruteReportCreateManyArgs>(args?: Prisma.SelectSubset<T, BruteReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BruteReports and returns the data saved in the database.
     * @param {BruteReportCreateManyAndReturnArgs} args - Arguments to create many BruteReports.
     * @example
     * // Create many BruteReports
     * const bruteReport = await prisma.bruteReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BruteReports and only return the `id`
     * const bruteReportWithIdOnly = await prisma.bruteReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BruteReportCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BruteReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BruteReport.
     * @param {BruteReportDeleteArgs} args - Arguments to delete one BruteReport.
     * @example
     * // Delete one BruteReport
     * const BruteReport = await prisma.bruteReport.delete({
     *   where: {
     *     // ... filter to delete one BruteReport
     *   }
     * })
     *
     */
    delete<T extends BruteReportDeleteArgs>(args: Prisma.SelectSubset<T, BruteReportDeleteArgs<ExtArgs>>): Prisma.Prisma__BruteReportClient<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BruteReport.
     * @param {BruteReportUpdateArgs} args - Arguments to update one BruteReport.
     * @example
     * // Update one BruteReport
     * const bruteReport = await prisma.bruteReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BruteReportUpdateArgs>(args: Prisma.SelectSubset<T, BruteReportUpdateArgs<ExtArgs>>): Prisma.Prisma__BruteReportClient<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BruteReports.
     * @param {BruteReportDeleteManyArgs} args - Arguments to filter BruteReports to delete.
     * @example
     * // Delete a few BruteReports
     * const { count } = await prisma.bruteReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BruteReportDeleteManyArgs>(args?: Prisma.SelectSubset<T, BruteReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BruteReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BruteReports
     * const bruteReport = await prisma.bruteReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BruteReportUpdateManyArgs>(args: Prisma.SelectSubset<T, BruteReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BruteReports and returns the data updated in the database.
     * @param {BruteReportUpdateManyAndReturnArgs} args - Arguments to update many BruteReports.
     * @example
     * // Update many BruteReports
     * const bruteReport = await prisma.bruteReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BruteReports and only return the `id`
     * const bruteReportWithIdOnly = await prisma.bruteReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends BruteReportUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BruteReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BruteReport.
     * @param {BruteReportUpsertArgs} args - Arguments to update or create a BruteReport.
     * @example
     * // Update or create a BruteReport
     * const bruteReport = await prisma.bruteReport.upsert({
     *   create: {
     *     // ... data to create a BruteReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BruteReport we want to update
     *   }
     * })
     */
    upsert<T extends BruteReportUpsertArgs>(args: Prisma.SelectSubset<T, BruteReportUpsertArgs<ExtArgs>>): Prisma.Prisma__BruteReportClient<runtime.Types.Result.GetResult<Prisma.$BruteReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BruteReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteReportCountArgs} args - Arguments to filter BruteReports to count.
     * @example
     * // Count the number of BruteReports
     * const count = await prisma.bruteReport.count({
     *   where: {
     *     // ... the filter for the BruteReports we want to count
     *   }
     * })
    **/
    count<T extends BruteReportCountArgs>(args?: Prisma.Subset<T, BruteReportCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BruteReportCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BruteReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BruteReportAggregateArgs>(args: Prisma.Subset<T, BruteReportAggregateArgs>): Prisma.PrismaPromise<GetBruteReportAggregateType<T>>;
    /**
     * Group by BruteReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteReportGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BruteReportGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BruteReportGroupByArgs['orderBy'];
    } : {
        orderBy?: BruteReportGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BruteReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBruteReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BruteReport model
     */
    readonly fields: BruteReportFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BruteReport.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BruteReportClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brute<T extends Prisma.BruteReport$bruteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BruteReport$bruteArgs<ExtArgs>>): Prisma.Prisma__BruteClient<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.BruteReport$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BruteReport$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    handler<T extends Prisma.BruteReport$handlerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BruteReport$handlerArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BruteReport model
 */
export interface BruteReportFieldRefs {
    readonly id: Prisma.FieldRef<"BruteReport", 'String'>;
    readonly bruteId: Prisma.FieldRef<"BruteReport", 'String'>;
    readonly bruteName: Prisma.FieldRef<"BruteReport", 'String'>;
    readonly reason: Prisma.FieldRef<"BruteReport", 'BruteReportReason'>;
    readonly count: Prisma.FieldRef<"BruteReport", 'Int'>;
    readonly date: Prisma.FieldRef<"BruteReport", 'DateTime'>;
    readonly status: Prisma.FieldRef<"BruteReport", 'BruteReportStatus'>;
    readonly handlerId: Prisma.FieldRef<"BruteReport", 'String'>;
    readonly handledAt: Prisma.FieldRef<"BruteReport", 'DateTime'>;
}
/**
 * BruteReport findUnique
 */
export type BruteReportFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BruteReport to fetch.
     */
    where: Prisma.BruteReportWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteReport findUniqueOrThrow
 */
export type BruteReportFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BruteReport to fetch.
     */
    where: Prisma.BruteReportWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteReport findFirst
 */
export type BruteReportFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BruteReport to fetch.
     */
    where?: Prisma.BruteReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BruteReports to fetch.
     */
    orderBy?: Prisma.BruteReportOrderByWithRelationInput | Prisma.BruteReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BruteReports.
     */
    cursor?: Prisma.BruteReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BruteReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BruteReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BruteReports.
     */
    distinct?: Prisma.BruteReportScalarFieldEnum | Prisma.BruteReportScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteReport findFirstOrThrow
 */
export type BruteReportFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BruteReport to fetch.
     */
    where?: Prisma.BruteReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BruteReports to fetch.
     */
    orderBy?: Prisma.BruteReportOrderByWithRelationInput | Prisma.BruteReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BruteReports.
     */
    cursor?: Prisma.BruteReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BruteReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BruteReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BruteReports.
     */
    distinct?: Prisma.BruteReportScalarFieldEnum | Prisma.BruteReportScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteReport findMany
 */
export type BruteReportFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BruteReports to fetch.
     */
    where?: Prisma.BruteReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BruteReports to fetch.
     */
    orderBy?: Prisma.BruteReportOrderByWithRelationInput | Prisma.BruteReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BruteReports.
     */
    cursor?: Prisma.BruteReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BruteReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BruteReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BruteReports.
     */
    distinct?: Prisma.BruteReportScalarFieldEnum | Prisma.BruteReportScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteReport create
 */
export type BruteReportCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a BruteReport.
     */
    data?: Prisma.XOR<Prisma.BruteReportCreateInput, Prisma.BruteReportUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteReport createMany
 */
export type BruteReportCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BruteReports.
     */
    data: Prisma.BruteReportCreateManyInput | Prisma.BruteReportCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BruteReport createManyAndReturn
 */
export type BruteReportCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteReport
     */
    select?: Prisma.BruteReportSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteReport
     */
    omit?: Prisma.BruteReportOmit<ExtArgs> | null;
    /**
     * The data used to create many BruteReports.
     */
    data: Prisma.BruteReportCreateManyInput | Prisma.BruteReportCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteReportIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BruteReport update
 */
export type BruteReportUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a BruteReport.
     */
    data: Prisma.XOR<Prisma.BruteReportUpdateInput, Prisma.BruteReportUncheckedUpdateInput>;
    /**
     * Choose, which BruteReport to update.
     */
    where: Prisma.BruteReportWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteReport updateMany
 */
export type BruteReportUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BruteReports.
     */
    data: Prisma.XOR<Prisma.BruteReportUpdateManyMutationInput, Prisma.BruteReportUncheckedUpdateManyInput>;
    /**
     * Filter which BruteReports to update
     */
    where?: Prisma.BruteReportWhereInput;
    /**
     * Limit how many BruteReports to update.
     */
    limit?: number;
};
/**
 * BruteReport updateManyAndReturn
 */
export type BruteReportUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteReport
     */
    select?: Prisma.BruteReportSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteReport
     */
    omit?: Prisma.BruteReportOmit<ExtArgs> | null;
    /**
     * The data used to update BruteReports.
     */
    data: Prisma.XOR<Prisma.BruteReportUpdateManyMutationInput, Prisma.BruteReportUncheckedUpdateManyInput>;
    /**
     * Filter which BruteReports to update
     */
    where?: Prisma.BruteReportWhereInput;
    /**
     * Limit how many BruteReports to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteReportIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BruteReport upsert
 */
export type BruteReportUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the BruteReport to update in case it exists.
     */
    where: Prisma.BruteReportWhereUniqueInput;
    /**
     * In case the BruteReport found by the `where` argument doesn't exist, create a new BruteReport with this data.
     */
    create: Prisma.XOR<Prisma.BruteReportCreateInput, Prisma.BruteReportUncheckedCreateInput>;
    /**
     * In case the BruteReport was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BruteReportUpdateInput, Prisma.BruteReportUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteReport delete
 */
export type BruteReportDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which BruteReport to delete.
     */
    where: Prisma.BruteReportWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteReport deleteMany
 */
export type BruteReportDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BruteReports to delete
     */
    where?: Prisma.BruteReportWhereInput;
    /**
     * Limit how many BruteReports to delete.
     */
    limit?: number;
};
/**
 * BruteReport.brute
 */
export type BruteReport$bruteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * BruteReport.users
 */
export type BruteReport$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * BruteReport.handler
 */
export type BruteReport$handlerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.UserWhereInput;
};
/**
 * BruteReport without action
 */
export type BruteReportDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
