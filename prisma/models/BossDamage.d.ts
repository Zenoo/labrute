import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model BossDamage
 *
 */
export type BossDamageModel = runtime.Types.Result.DefaultSelection<Prisma.$BossDamagePayload>;
export type AggregateBossDamage = {
    _count: BossDamageCountAggregateOutputType | null;
    _avg: BossDamageAvgAggregateOutputType | null;
    _sum: BossDamageSumAggregateOutputType | null;
    _min: BossDamageMinAggregateOutputType | null;
    _max: BossDamageMaxAggregateOutputType | null;
};
export type BossDamageAvgAggregateOutputType = {
    damage: number | null;
};
export type BossDamageSumAggregateOutputType = {
    damage: number | null;
};
export type BossDamageMinAggregateOutputType = {
    id: string | null;
    bruteId: string | null;
    clanId: string | null;
    damage: number | null;
};
export type BossDamageMaxAggregateOutputType = {
    id: string | null;
    bruteId: string | null;
    clanId: string | null;
    damage: number | null;
};
export type BossDamageCountAggregateOutputType = {
    id: number;
    bruteId: number;
    clanId: number;
    damage: number;
    _all: number;
};
export type BossDamageAvgAggregateInputType = {
    damage?: true;
};
export type BossDamageSumAggregateInputType = {
    damage?: true;
};
export type BossDamageMinAggregateInputType = {
    id?: true;
    bruteId?: true;
    clanId?: true;
    damage?: true;
};
export type BossDamageMaxAggregateInputType = {
    id?: true;
    bruteId?: true;
    clanId?: true;
    damage?: true;
};
export type BossDamageCountAggregateInputType = {
    id?: true;
    bruteId?: true;
    clanId?: true;
    damage?: true;
    _all?: true;
};
export type BossDamageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BossDamage to aggregate.
     */
    where?: Prisma.BossDamageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BossDamages to fetch.
     */
    orderBy?: Prisma.BossDamageOrderByWithRelationInput | Prisma.BossDamageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BossDamageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BossDamages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BossDamages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BossDamages
    **/
    _count?: true | BossDamageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BossDamageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BossDamageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BossDamageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BossDamageMaxAggregateInputType;
};
export type GetBossDamageAggregateType<T extends BossDamageAggregateArgs> = {
    [P in keyof T & keyof AggregateBossDamage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBossDamage[P]> : Prisma.GetScalarType<T[P], AggregateBossDamage[P]>;
};
export type BossDamageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BossDamageWhereInput;
    orderBy?: Prisma.BossDamageOrderByWithAggregationInput | Prisma.BossDamageOrderByWithAggregationInput[];
    by: Prisma.BossDamageScalarFieldEnum[] | Prisma.BossDamageScalarFieldEnum;
    having?: Prisma.BossDamageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BossDamageCountAggregateInputType | true;
    _avg?: BossDamageAvgAggregateInputType;
    _sum?: BossDamageSumAggregateInputType;
    _min?: BossDamageMinAggregateInputType;
    _max?: BossDamageMaxAggregateInputType;
};
export type BossDamageGroupByOutputType = {
    id: string;
    bruteId: string | null;
    clanId: string;
    damage: number;
    _count: BossDamageCountAggregateOutputType | null;
    _avg: BossDamageAvgAggregateOutputType | null;
    _sum: BossDamageSumAggregateOutputType | null;
    _min: BossDamageMinAggregateOutputType | null;
    _max: BossDamageMaxAggregateOutputType | null;
};
export type GetBossDamageGroupByPayload<T extends BossDamageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BossDamageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BossDamageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BossDamageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BossDamageGroupByOutputType[P]>;
}>>;
export type BossDamageWhereInput = {
    AND?: Prisma.BossDamageWhereInput | Prisma.BossDamageWhereInput[];
    OR?: Prisma.BossDamageWhereInput[];
    NOT?: Prisma.BossDamageWhereInput | Prisma.BossDamageWhereInput[];
    id?: Prisma.UuidFilter<"BossDamage"> | string;
    bruteId?: Prisma.UuidNullableFilter<"BossDamage"> | string | null;
    clanId?: Prisma.UuidFilter<"BossDamage"> | string;
    damage?: Prisma.IntFilter<"BossDamage"> | number;
    brute?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
    clan?: Prisma.XOR<Prisma.ClanScalarRelationFilter, Prisma.ClanWhereInput>;
};
export type BossDamageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    clanId?: Prisma.SortOrder;
    damage?: Prisma.SortOrder;
    brute?: Prisma.BruteOrderByWithRelationInput;
    clan?: Prisma.ClanOrderByWithRelationInput;
};
export type BossDamageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    bruteId_clanId?: Prisma.BossDamageBruteIdClanIdCompoundUniqueInput;
    AND?: Prisma.BossDamageWhereInput | Prisma.BossDamageWhereInput[];
    OR?: Prisma.BossDamageWhereInput[];
    NOT?: Prisma.BossDamageWhereInput | Prisma.BossDamageWhereInput[];
    bruteId?: Prisma.UuidNullableFilter<"BossDamage"> | string | null;
    clanId?: Prisma.UuidFilter<"BossDamage"> | string;
    damage?: Prisma.IntFilter<"BossDamage"> | number;
    brute?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
    clan?: Prisma.XOR<Prisma.ClanScalarRelationFilter, Prisma.ClanWhereInput>;
}, "id" | "id" | "bruteId_clanId">;
export type BossDamageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    clanId?: Prisma.SortOrder;
    damage?: Prisma.SortOrder;
    _count?: Prisma.BossDamageCountOrderByAggregateInput;
    _avg?: Prisma.BossDamageAvgOrderByAggregateInput;
    _max?: Prisma.BossDamageMaxOrderByAggregateInput;
    _min?: Prisma.BossDamageMinOrderByAggregateInput;
    _sum?: Prisma.BossDamageSumOrderByAggregateInput;
};
export type BossDamageScalarWhereWithAggregatesInput = {
    AND?: Prisma.BossDamageScalarWhereWithAggregatesInput | Prisma.BossDamageScalarWhereWithAggregatesInput[];
    OR?: Prisma.BossDamageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BossDamageScalarWhereWithAggregatesInput | Prisma.BossDamageScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BossDamage"> | string;
    bruteId?: Prisma.UuidNullableWithAggregatesFilter<"BossDamage"> | string | null;
    clanId?: Prisma.UuidWithAggregatesFilter<"BossDamage"> | string;
    damage?: Prisma.IntWithAggregatesFilter<"BossDamage"> | number;
};
export type BossDamageCreateInput = {
    id?: string;
    damage: number;
    brute?: Prisma.BruteCreateNestedOneWithoutDamageOnBossesInput;
    clan: Prisma.ClanCreateNestedOneWithoutBossDamagesInput;
};
export type BossDamageUncheckedCreateInput = {
    id?: string;
    bruteId?: string | null;
    clanId: string;
    damage: number;
};
export type BossDamageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    damage?: Prisma.IntFieldUpdateOperationsInput | number;
    brute?: Prisma.BruteUpdateOneWithoutDamageOnBossesNestedInput;
    clan?: Prisma.ClanUpdateOneRequiredWithoutBossDamagesNestedInput;
};
export type BossDamageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clanId?: Prisma.StringFieldUpdateOperationsInput | string;
    damage?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BossDamageCreateManyInput = {
    id?: string;
    bruteId?: string | null;
    clanId: string;
    damage: number;
};
export type BossDamageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    damage?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BossDamageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clanId?: Prisma.StringFieldUpdateOperationsInput | string;
    damage?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BossDamageListRelationFilter = {
    every?: Prisma.BossDamageWhereInput;
    some?: Prisma.BossDamageWhereInput;
    none?: Prisma.BossDamageWhereInput;
};
export type BossDamageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BossDamageBruteIdClanIdCompoundUniqueInput = {
    bruteId: string;
    clanId: string;
};
export type BossDamageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    clanId?: Prisma.SortOrder;
    damage?: Prisma.SortOrder;
};
export type BossDamageAvgOrderByAggregateInput = {
    damage?: Prisma.SortOrder;
};
export type BossDamageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    clanId?: Prisma.SortOrder;
    damage?: Prisma.SortOrder;
};
export type BossDamageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    clanId?: Prisma.SortOrder;
    damage?: Prisma.SortOrder;
};
export type BossDamageSumOrderByAggregateInput = {
    damage?: Prisma.SortOrder;
};
export type BossDamageCreateNestedManyWithoutBruteInput = {
    create?: Prisma.XOR<Prisma.BossDamageCreateWithoutBruteInput, Prisma.BossDamageUncheckedCreateWithoutBruteInput> | Prisma.BossDamageCreateWithoutBruteInput[] | Prisma.BossDamageUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.BossDamageCreateOrConnectWithoutBruteInput | Prisma.BossDamageCreateOrConnectWithoutBruteInput[];
    createMany?: Prisma.BossDamageCreateManyBruteInputEnvelope;
    connect?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
};
export type BossDamageUncheckedCreateNestedManyWithoutBruteInput = {
    create?: Prisma.XOR<Prisma.BossDamageCreateWithoutBruteInput, Prisma.BossDamageUncheckedCreateWithoutBruteInput> | Prisma.BossDamageCreateWithoutBruteInput[] | Prisma.BossDamageUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.BossDamageCreateOrConnectWithoutBruteInput | Prisma.BossDamageCreateOrConnectWithoutBruteInput[];
    createMany?: Prisma.BossDamageCreateManyBruteInputEnvelope;
    connect?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
};
export type BossDamageUpdateManyWithoutBruteNestedInput = {
    create?: Prisma.XOR<Prisma.BossDamageCreateWithoutBruteInput, Prisma.BossDamageUncheckedCreateWithoutBruteInput> | Prisma.BossDamageCreateWithoutBruteInput[] | Prisma.BossDamageUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.BossDamageCreateOrConnectWithoutBruteInput | Prisma.BossDamageCreateOrConnectWithoutBruteInput[];
    upsert?: Prisma.BossDamageUpsertWithWhereUniqueWithoutBruteInput | Prisma.BossDamageUpsertWithWhereUniqueWithoutBruteInput[];
    createMany?: Prisma.BossDamageCreateManyBruteInputEnvelope;
    set?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    disconnect?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    delete?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    connect?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    update?: Prisma.BossDamageUpdateWithWhereUniqueWithoutBruteInput | Prisma.BossDamageUpdateWithWhereUniqueWithoutBruteInput[];
    updateMany?: Prisma.BossDamageUpdateManyWithWhereWithoutBruteInput | Prisma.BossDamageUpdateManyWithWhereWithoutBruteInput[];
    deleteMany?: Prisma.BossDamageScalarWhereInput | Prisma.BossDamageScalarWhereInput[];
};
export type BossDamageUncheckedUpdateManyWithoutBruteNestedInput = {
    create?: Prisma.XOR<Prisma.BossDamageCreateWithoutBruteInput, Prisma.BossDamageUncheckedCreateWithoutBruteInput> | Prisma.BossDamageCreateWithoutBruteInput[] | Prisma.BossDamageUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.BossDamageCreateOrConnectWithoutBruteInput | Prisma.BossDamageCreateOrConnectWithoutBruteInput[];
    upsert?: Prisma.BossDamageUpsertWithWhereUniqueWithoutBruteInput | Prisma.BossDamageUpsertWithWhereUniqueWithoutBruteInput[];
    createMany?: Prisma.BossDamageCreateManyBruteInputEnvelope;
    set?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    disconnect?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    delete?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    connect?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    update?: Prisma.BossDamageUpdateWithWhereUniqueWithoutBruteInput | Prisma.BossDamageUpdateWithWhereUniqueWithoutBruteInput[];
    updateMany?: Prisma.BossDamageUpdateManyWithWhereWithoutBruteInput | Prisma.BossDamageUpdateManyWithWhereWithoutBruteInput[];
    deleteMany?: Prisma.BossDamageScalarWhereInput | Prisma.BossDamageScalarWhereInput[];
};
export type BossDamageCreateNestedManyWithoutClanInput = {
    create?: Prisma.XOR<Prisma.BossDamageCreateWithoutClanInput, Prisma.BossDamageUncheckedCreateWithoutClanInput> | Prisma.BossDamageCreateWithoutClanInput[] | Prisma.BossDamageUncheckedCreateWithoutClanInput[];
    connectOrCreate?: Prisma.BossDamageCreateOrConnectWithoutClanInput | Prisma.BossDamageCreateOrConnectWithoutClanInput[];
    createMany?: Prisma.BossDamageCreateManyClanInputEnvelope;
    connect?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
};
export type BossDamageUncheckedCreateNestedManyWithoutClanInput = {
    create?: Prisma.XOR<Prisma.BossDamageCreateWithoutClanInput, Prisma.BossDamageUncheckedCreateWithoutClanInput> | Prisma.BossDamageCreateWithoutClanInput[] | Prisma.BossDamageUncheckedCreateWithoutClanInput[];
    connectOrCreate?: Prisma.BossDamageCreateOrConnectWithoutClanInput | Prisma.BossDamageCreateOrConnectWithoutClanInput[];
    createMany?: Prisma.BossDamageCreateManyClanInputEnvelope;
    connect?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
};
export type BossDamageUpdateManyWithoutClanNestedInput = {
    create?: Prisma.XOR<Prisma.BossDamageCreateWithoutClanInput, Prisma.BossDamageUncheckedCreateWithoutClanInput> | Prisma.BossDamageCreateWithoutClanInput[] | Prisma.BossDamageUncheckedCreateWithoutClanInput[];
    connectOrCreate?: Prisma.BossDamageCreateOrConnectWithoutClanInput | Prisma.BossDamageCreateOrConnectWithoutClanInput[];
    upsert?: Prisma.BossDamageUpsertWithWhereUniqueWithoutClanInput | Prisma.BossDamageUpsertWithWhereUniqueWithoutClanInput[];
    createMany?: Prisma.BossDamageCreateManyClanInputEnvelope;
    set?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    disconnect?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    delete?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    connect?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    update?: Prisma.BossDamageUpdateWithWhereUniqueWithoutClanInput | Prisma.BossDamageUpdateWithWhereUniqueWithoutClanInput[];
    updateMany?: Prisma.BossDamageUpdateManyWithWhereWithoutClanInput | Prisma.BossDamageUpdateManyWithWhereWithoutClanInput[];
    deleteMany?: Prisma.BossDamageScalarWhereInput | Prisma.BossDamageScalarWhereInput[];
};
export type BossDamageUncheckedUpdateManyWithoutClanNestedInput = {
    create?: Prisma.XOR<Prisma.BossDamageCreateWithoutClanInput, Prisma.BossDamageUncheckedCreateWithoutClanInput> | Prisma.BossDamageCreateWithoutClanInput[] | Prisma.BossDamageUncheckedCreateWithoutClanInput[];
    connectOrCreate?: Prisma.BossDamageCreateOrConnectWithoutClanInput | Prisma.BossDamageCreateOrConnectWithoutClanInput[];
    upsert?: Prisma.BossDamageUpsertWithWhereUniqueWithoutClanInput | Prisma.BossDamageUpsertWithWhereUniqueWithoutClanInput[];
    createMany?: Prisma.BossDamageCreateManyClanInputEnvelope;
    set?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    disconnect?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    delete?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    connect?: Prisma.BossDamageWhereUniqueInput | Prisma.BossDamageWhereUniqueInput[];
    update?: Prisma.BossDamageUpdateWithWhereUniqueWithoutClanInput | Prisma.BossDamageUpdateWithWhereUniqueWithoutClanInput[];
    updateMany?: Prisma.BossDamageUpdateManyWithWhereWithoutClanInput | Prisma.BossDamageUpdateManyWithWhereWithoutClanInput[];
    deleteMany?: Prisma.BossDamageScalarWhereInput | Prisma.BossDamageScalarWhereInput[];
};
export type BossDamageCreateWithoutBruteInput = {
    id?: string;
    damage: number;
    clan: Prisma.ClanCreateNestedOneWithoutBossDamagesInput;
};
export type BossDamageUncheckedCreateWithoutBruteInput = {
    id?: string;
    clanId: string;
    damage: number;
};
export type BossDamageCreateOrConnectWithoutBruteInput = {
    where: Prisma.BossDamageWhereUniqueInput;
    create: Prisma.XOR<Prisma.BossDamageCreateWithoutBruteInput, Prisma.BossDamageUncheckedCreateWithoutBruteInput>;
};
export type BossDamageCreateManyBruteInputEnvelope = {
    data: Prisma.BossDamageCreateManyBruteInput | Prisma.BossDamageCreateManyBruteInput[];
    skipDuplicates?: boolean;
};
export type BossDamageUpsertWithWhereUniqueWithoutBruteInput = {
    where: Prisma.BossDamageWhereUniqueInput;
    update: Prisma.XOR<Prisma.BossDamageUpdateWithoutBruteInput, Prisma.BossDamageUncheckedUpdateWithoutBruteInput>;
    create: Prisma.XOR<Prisma.BossDamageCreateWithoutBruteInput, Prisma.BossDamageUncheckedCreateWithoutBruteInput>;
};
export type BossDamageUpdateWithWhereUniqueWithoutBruteInput = {
    where: Prisma.BossDamageWhereUniqueInput;
    data: Prisma.XOR<Prisma.BossDamageUpdateWithoutBruteInput, Prisma.BossDamageUncheckedUpdateWithoutBruteInput>;
};
export type BossDamageUpdateManyWithWhereWithoutBruteInput = {
    where: Prisma.BossDamageScalarWhereInput;
    data: Prisma.XOR<Prisma.BossDamageUpdateManyMutationInput, Prisma.BossDamageUncheckedUpdateManyWithoutBruteInput>;
};
export type BossDamageScalarWhereInput = {
    AND?: Prisma.BossDamageScalarWhereInput | Prisma.BossDamageScalarWhereInput[];
    OR?: Prisma.BossDamageScalarWhereInput[];
    NOT?: Prisma.BossDamageScalarWhereInput | Prisma.BossDamageScalarWhereInput[];
    id?: Prisma.UuidFilter<"BossDamage"> | string;
    bruteId?: Prisma.UuidNullableFilter<"BossDamage"> | string | null;
    clanId?: Prisma.UuidFilter<"BossDamage"> | string;
    damage?: Prisma.IntFilter<"BossDamage"> | number;
};
export type BossDamageCreateWithoutClanInput = {
    id?: string;
    damage: number;
    brute?: Prisma.BruteCreateNestedOneWithoutDamageOnBossesInput;
};
export type BossDamageUncheckedCreateWithoutClanInput = {
    id?: string;
    bruteId?: string | null;
    damage: number;
};
export type BossDamageCreateOrConnectWithoutClanInput = {
    where: Prisma.BossDamageWhereUniqueInput;
    create: Prisma.XOR<Prisma.BossDamageCreateWithoutClanInput, Prisma.BossDamageUncheckedCreateWithoutClanInput>;
};
export type BossDamageCreateManyClanInputEnvelope = {
    data: Prisma.BossDamageCreateManyClanInput | Prisma.BossDamageCreateManyClanInput[];
    skipDuplicates?: boolean;
};
export type BossDamageUpsertWithWhereUniqueWithoutClanInput = {
    where: Prisma.BossDamageWhereUniqueInput;
    update: Prisma.XOR<Prisma.BossDamageUpdateWithoutClanInput, Prisma.BossDamageUncheckedUpdateWithoutClanInput>;
    create: Prisma.XOR<Prisma.BossDamageCreateWithoutClanInput, Prisma.BossDamageUncheckedCreateWithoutClanInput>;
};
export type BossDamageUpdateWithWhereUniqueWithoutClanInput = {
    where: Prisma.BossDamageWhereUniqueInput;
    data: Prisma.XOR<Prisma.BossDamageUpdateWithoutClanInput, Prisma.BossDamageUncheckedUpdateWithoutClanInput>;
};
export type BossDamageUpdateManyWithWhereWithoutClanInput = {
    where: Prisma.BossDamageScalarWhereInput;
    data: Prisma.XOR<Prisma.BossDamageUpdateManyMutationInput, Prisma.BossDamageUncheckedUpdateManyWithoutClanInput>;
};
export type BossDamageCreateManyBruteInput = {
    id?: string;
    clanId: string;
    damage: number;
};
export type BossDamageUpdateWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    damage?: Prisma.IntFieldUpdateOperationsInput | number;
    clan?: Prisma.ClanUpdateOneRequiredWithoutBossDamagesNestedInput;
};
export type BossDamageUncheckedUpdateWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clanId?: Prisma.StringFieldUpdateOperationsInput | string;
    damage?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BossDamageUncheckedUpdateManyWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clanId?: Prisma.StringFieldUpdateOperationsInput | string;
    damage?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BossDamageCreateManyClanInput = {
    id?: string;
    bruteId?: string | null;
    damage: number;
};
export type BossDamageUpdateWithoutClanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    damage?: Prisma.IntFieldUpdateOperationsInput | number;
    brute?: Prisma.BruteUpdateOneWithoutDamageOnBossesNestedInput;
};
export type BossDamageUncheckedUpdateWithoutClanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    damage?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BossDamageUncheckedUpdateManyWithoutClanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    damage?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BossDamageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bruteId?: boolean;
    clanId?: boolean;
    damage?: boolean;
    brute?: boolean | Prisma.BossDamage$bruteArgs<ExtArgs>;
    clan?: boolean | Prisma.ClanDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bossDamage"]>;
export type BossDamageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bruteId?: boolean;
    clanId?: boolean;
    damage?: boolean;
    brute?: boolean | Prisma.BossDamage$bruteArgs<ExtArgs>;
    clan?: boolean | Prisma.ClanDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bossDamage"]>;
export type BossDamageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bruteId?: boolean;
    clanId?: boolean;
    damage?: boolean;
    brute?: boolean | Prisma.BossDamage$bruteArgs<ExtArgs>;
    clan?: boolean | Prisma.ClanDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bossDamage"]>;
export type BossDamageSelectScalar = {
    id?: boolean;
    bruteId?: boolean;
    clanId?: boolean;
    damage?: boolean;
};
export type BossDamageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bruteId" | "clanId" | "damage", ExtArgs["result"]["bossDamage"]>;
export type BossDamageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BossDamage$bruteArgs<ExtArgs>;
    clan?: boolean | Prisma.ClanDefaultArgs<ExtArgs>;
};
export type BossDamageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BossDamage$bruteArgs<ExtArgs>;
    clan?: boolean | Prisma.ClanDefaultArgs<ExtArgs>;
};
export type BossDamageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BossDamage$bruteArgs<ExtArgs>;
    clan?: boolean | Prisma.ClanDefaultArgs<ExtArgs>;
};
export type $BossDamagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BossDamage";
    objects: {
        brute: Prisma.$BrutePayload<ExtArgs> | null;
        clan: Prisma.$ClanPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bruteId: string | null;
        clanId: string;
        damage: number;
    }, ExtArgs["result"]["bossDamage"]>;
    composites: {};
};
export type BossDamageGetPayload<S extends boolean | null | undefined | BossDamageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BossDamagePayload, S>;
export type BossDamageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BossDamageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: BossDamageCountAggregateInputType | true;
};
export interface BossDamageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BossDamage'];
        meta: {
            name: 'BossDamage';
        };
    };
    /**
     * Find zero or one BossDamage that matches the filter.
     * @param {BossDamageFindUniqueArgs} args - Arguments to find a BossDamage
     * @example
     * // Get one BossDamage
     * const bossDamage = await prisma.bossDamage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BossDamageFindUniqueArgs>(args: Prisma.SelectSubset<T, BossDamageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BossDamageClient<runtime.Types.Result.GetResult<Prisma.$BossDamagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BossDamage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BossDamageFindUniqueOrThrowArgs} args - Arguments to find a BossDamage
     * @example
     * // Get one BossDamage
     * const bossDamage = await prisma.bossDamage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BossDamageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BossDamageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BossDamageClient<runtime.Types.Result.GetResult<Prisma.$BossDamagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BossDamage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossDamageFindFirstArgs} args - Arguments to find a BossDamage
     * @example
     * // Get one BossDamage
     * const bossDamage = await prisma.bossDamage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BossDamageFindFirstArgs>(args?: Prisma.SelectSubset<T, BossDamageFindFirstArgs<ExtArgs>>): Prisma.Prisma__BossDamageClient<runtime.Types.Result.GetResult<Prisma.$BossDamagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BossDamage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossDamageFindFirstOrThrowArgs} args - Arguments to find a BossDamage
     * @example
     * // Get one BossDamage
     * const bossDamage = await prisma.bossDamage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BossDamageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BossDamageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BossDamageClient<runtime.Types.Result.GetResult<Prisma.$BossDamagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BossDamages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossDamageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BossDamages
     * const bossDamages = await prisma.bossDamage.findMany()
     *
     * // Get first 10 BossDamages
     * const bossDamages = await prisma.bossDamage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bossDamageWithIdOnly = await prisma.bossDamage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BossDamageFindManyArgs>(args?: Prisma.SelectSubset<T, BossDamageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BossDamagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BossDamage.
     * @param {BossDamageCreateArgs} args - Arguments to create a BossDamage.
     * @example
     * // Create one BossDamage
     * const BossDamage = await prisma.bossDamage.create({
     *   data: {
     *     // ... data to create a BossDamage
     *   }
     * })
     *
     */
    create<T extends BossDamageCreateArgs>(args: Prisma.SelectSubset<T, BossDamageCreateArgs<ExtArgs>>): Prisma.Prisma__BossDamageClient<runtime.Types.Result.GetResult<Prisma.$BossDamagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BossDamages.
     * @param {BossDamageCreateManyArgs} args - Arguments to create many BossDamages.
     * @example
     * // Create many BossDamages
     * const bossDamage = await prisma.bossDamage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BossDamageCreateManyArgs>(args?: Prisma.SelectSubset<T, BossDamageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BossDamages and returns the data saved in the database.
     * @param {BossDamageCreateManyAndReturnArgs} args - Arguments to create many BossDamages.
     * @example
     * // Create many BossDamages
     * const bossDamage = await prisma.bossDamage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BossDamages and only return the `id`
     * const bossDamageWithIdOnly = await prisma.bossDamage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BossDamageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BossDamageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BossDamagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BossDamage.
     * @param {BossDamageDeleteArgs} args - Arguments to delete one BossDamage.
     * @example
     * // Delete one BossDamage
     * const BossDamage = await prisma.bossDamage.delete({
     *   where: {
     *     // ... filter to delete one BossDamage
     *   }
     * })
     *
     */
    delete<T extends BossDamageDeleteArgs>(args: Prisma.SelectSubset<T, BossDamageDeleteArgs<ExtArgs>>): Prisma.Prisma__BossDamageClient<runtime.Types.Result.GetResult<Prisma.$BossDamagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BossDamage.
     * @param {BossDamageUpdateArgs} args - Arguments to update one BossDamage.
     * @example
     * // Update one BossDamage
     * const bossDamage = await prisma.bossDamage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BossDamageUpdateArgs>(args: Prisma.SelectSubset<T, BossDamageUpdateArgs<ExtArgs>>): Prisma.Prisma__BossDamageClient<runtime.Types.Result.GetResult<Prisma.$BossDamagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BossDamages.
     * @param {BossDamageDeleteManyArgs} args - Arguments to filter BossDamages to delete.
     * @example
     * // Delete a few BossDamages
     * const { count } = await prisma.bossDamage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BossDamageDeleteManyArgs>(args?: Prisma.SelectSubset<T, BossDamageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BossDamages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossDamageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BossDamages
     * const bossDamage = await prisma.bossDamage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BossDamageUpdateManyArgs>(args: Prisma.SelectSubset<T, BossDamageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BossDamages and returns the data updated in the database.
     * @param {BossDamageUpdateManyAndReturnArgs} args - Arguments to update many BossDamages.
     * @example
     * // Update many BossDamages
     * const bossDamage = await prisma.bossDamage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BossDamages and only return the `id`
     * const bossDamageWithIdOnly = await prisma.bossDamage.updateManyAndReturn({
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
    updateManyAndReturn<T extends BossDamageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BossDamageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BossDamagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BossDamage.
     * @param {BossDamageUpsertArgs} args - Arguments to update or create a BossDamage.
     * @example
     * // Update or create a BossDamage
     * const bossDamage = await prisma.bossDamage.upsert({
     *   create: {
     *     // ... data to create a BossDamage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BossDamage we want to update
     *   }
     * })
     */
    upsert<T extends BossDamageUpsertArgs>(args: Prisma.SelectSubset<T, BossDamageUpsertArgs<ExtArgs>>): Prisma.Prisma__BossDamageClient<runtime.Types.Result.GetResult<Prisma.$BossDamagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BossDamages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossDamageCountArgs} args - Arguments to filter BossDamages to count.
     * @example
     * // Count the number of BossDamages
     * const count = await prisma.bossDamage.count({
     *   where: {
     *     // ... the filter for the BossDamages we want to count
     *   }
     * })
    **/
    count<T extends BossDamageCountArgs>(args?: Prisma.Subset<T, BossDamageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BossDamageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BossDamage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossDamageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BossDamageAggregateArgs>(args: Prisma.Subset<T, BossDamageAggregateArgs>): Prisma.PrismaPromise<GetBossDamageAggregateType<T>>;
    /**
     * Group by BossDamage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BossDamageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BossDamageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BossDamageGroupByArgs['orderBy'];
    } : {
        orderBy?: BossDamageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BossDamageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBossDamageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BossDamage model
     */
    readonly fields: BossDamageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BossDamage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BossDamageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brute<T extends Prisma.BossDamage$bruteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BossDamage$bruteArgs<ExtArgs>>): Prisma.Prisma__BruteClient<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    clan<T extends Prisma.ClanDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClanDefaultArgs<ExtArgs>>): Prisma.Prisma__ClanClient<runtime.Types.Result.GetResult<Prisma.$ClanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BossDamage model
 */
export interface BossDamageFieldRefs {
    readonly id: Prisma.FieldRef<"BossDamage", 'String'>;
    readonly bruteId: Prisma.FieldRef<"BossDamage", 'String'>;
    readonly clanId: Prisma.FieldRef<"BossDamage", 'String'>;
    readonly damage: Prisma.FieldRef<"BossDamage", 'Int'>;
}
/**
 * BossDamage findUnique
 */
export type BossDamageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossDamage
     */
    select?: Prisma.BossDamageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BossDamage
     */
    omit?: Prisma.BossDamageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BossDamageInclude<ExtArgs> | null;
    /**
     * Filter, which BossDamage to fetch.
     */
    where: Prisma.BossDamageWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BossDamage findUniqueOrThrow
 */
export type BossDamageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossDamage
     */
    select?: Prisma.BossDamageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BossDamage
     */
    omit?: Prisma.BossDamageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BossDamageInclude<ExtArgs> | null;
    /**
     * Filter, which BossDamage to fetch.
     */
    where: Prisma.BossDamageWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BossDamage findFirst
 */
export type BossDamageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossDamage
     */
    select?: Prisma.BossDamageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BossDamage
     */
    omit?: Prisma.BossDamageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BossDamageInclude<ExtArgs> | null;
    /**
     * Filter, which BossDamage to fetch.
     */
    where?: Prisma.BossDamageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BossDamages to fetch.
     */
    orderBy?: Prisma.BossDamageOrderByWithRelationInput | Prisma.BossDamageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BossDamages.
     */
    cursor?: Prisma.BossDamageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BossDamages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BossDamages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BossDamages.
     */
    distinct?: Prisma.BossDamageScalarFieldEnum | Prisma.BossDamageScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BossDamage findFirstOrThrow
 */
export type BossDamageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossDamage
     */
    select?: Prisma.BossDamageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BossDamage
     */
    omit?: Prisma.BossDamageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BossDamageInclude<ExtArgs> | null;
    /**
     * Filter, which BossDamage to fetch.
     */
    where?: Prisma.BossDamageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BossDamages to fetch.
     */
    orderBy?: Prisma.BossDamageOrderByWithRelationInput | Prisma.BossDamageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BossDamages.
     */
    cursor?: Prisma.BossDamageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BossDamages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BossDamages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BossDamages.
     */
    distinct?: Prisma.BossDamageScalarFieldEnum | Prisma.BossDamageScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BossDamage findMany
 */
export type BossDamageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossDamage
     */
    select?: Prisma.BossDamageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BossDamage
     */
    omit?: Prisma.BossDamageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BossDamageInclude<ExtArgs> | null;
    /**
     * Filter, which BossDamages to fetch.
     */
    where?: Prisma.BossDamageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BossDamages to fetch.
     */
    orderBy?: Prisma.BossDamageOrderByWithRelationInput | Prisma.BossDamageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BossDamages.
     */
    cursor?: Prisma.BossDamageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BossDamages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BossDamages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BossDamages.
     */
    distinct?: Prisma.BossDamageScalarFieldEnum | Prisma.BossDamageScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BossDamage create
 */
export type BossDamageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossDamage
     */
    select?: Prisma.BossDamageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BossDamage
     */
    omit?: Prisma.BossDamageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BossDamageInclude<ExtArgs> | null;
    /**
     * The data needed to create a BossDamage.
     */
    data: Prisma.XOR<Prisma.BossDamageCreateInput, Prisma.BossDamageUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BossDamage createMany
 */
export type BossDamageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BossDamages.
     */
    data: Prisma.BossDamageCreateManyInput | Prisma.BossDamageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BossDamage createManyAndReturn
 */
export type BossDamageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossDamage
     */
    select?: Prisma.BossDamageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BossDamage
     */
    omit?: Prisma.BossDamageOmit<ExtArgs> | null;
    /**
     * The data used to create many BossDamages.
     */
    data: Prisma.BossDamageCreateManyInput | Prisma.BossDamageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BossDamageIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BossDamage update
 */
export type BossDamageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossDamage
     */
    select?: Prisma.BossDamageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BossDamage
     */
    omit?: Prisma.BossDamageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BossDamageInclude<ExtArgs> | null;
    /**
     * The data needed to update a BossDamage.
     */
    data: Prisma.XOR<Prisma.BossDamageUpdateInput, Prisma.BossDamageUncheckedUpdateInput>;
    /**
     * Choose, which BossDamage to update.
     */
    where: Prisma.BossDamageWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BossDamage updateMany
 */
export type BossDamageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BossDamages.
     */
    data: Prisma.XOR<Prisma.BossDamageUpdateManyMutationInput, Prisma.BossDamageUncheckedUpdateManyInput>;
    /**
     * Filter which BossDamages to update
     */
    where?: Prisma.BossDamageWhereInput;
    /**
     * Limit how many BossDamages to update.
     */
    limit?: number;
};
/**
 * BossDamage updateManyAndReturn
 */
export type BossDamageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossDamage
     */
    select?: Prisma.BossDamageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BossDamage
     */
    omit?: Prisma.BossDamageOmit<ExtArgs> | null;
    /**
     * The data used to update BossDamages.
     */
    data: Prisma.XOR<Prisma.BossDamageUpdateManyMutationInput, Prisma.BossDamageUncheckedUpdateManyInput>;
    /**
     * Filter which BossDamages to update
     */
    where?: Prisma.BossDamageWhereInput;
    /**
     * Limit how many BossDamages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BossDamageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BossDamage upsert
 */
export type BossDamageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossDamage
     */
    select?: Prisma.BossDamageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BossDamage
     */
    omit?: Prisma.BossDamageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BossDamageInclude<ExtArgs> | null;
    /**
     * The filter to search for the BossDamage to update in case it exists.
     */
    where: Prisma.BossDamageWhereUniqueInput;
    /**
     * In case the BossDamage found by the `where` argument doesn't exist, create a new BossDamage with this data.
     */
    create: Prisma.XOR<Prisma.BossDamageCreateInput, Prisma.BossDamageUncheckedCreateInput>;
    /**
     * In case the BossDamage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BossDamageUpdateInput, Prisma.BossDamageUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BossDamage delete
 */
export type BossDamageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossDamage
     */
    select?: Prisma.BossDamageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BossDamage
     */
    omit?: Prisma.BossDamageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BossDamageInclude<ExtArgs> | null;
    /**
     * Filter which BossDamage to delete.
     */
    where: Prisma.BossDamageWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BossDamage deleteMany
 */
export type BossDamageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BossDamages to delete
     */
    where?: Prisma.BossDamageWhereInput;
    /**
     * Limit how many BossDamages to delete.
     */
    limit?: number;
};
/**
 * BossDamage.brute
 */
export type BossDamage$bruteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * BossDamage without action
 */
export type BossDamageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BossDamage
     */
    select?: Prisma.BossDamageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BossDamage
     */
    omit?: Prisma.BossDamageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BossDamageInclude<ExtArgs> | null;
};
