import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ClanWarFighters
 *
 */
export type ClanWarFightersModel = runtime.Types.Result.DefaultSelection<Prisma.$ClanWarFightersPayload>;
export type AggregateClanWarFighters = {
    _count: ClanWarFightersCountAggregateOutputType | null;
    _avg: ClanWarFightersAvgAggregateOutputType | null;
    _sum: ClanWarFightersSumAggregateOutputType | null;
    _min: ClanWarFightersMinAggregateOutputType | null;
    _max: ClanWarFightersMaxAggregateOutputType | null;
};
export type ClanWarFightersAvgAggregateOutputType = {
    day: number | null;
};
export type ClanWarFightersSumAggregateOutputType = {
    day: number | null;
};
export type ClanWarFightersMinAggregateOutputType = {
    id: string | null;
    clanWarId: string | null;
    day: number | null;
};
export type ClanWarFightersMaxAggregateOutputType = {
    id: string | null;
    clanWarId: string | null;
    day: number | null;
};
export type ClanWarFightersCountAggregateOutputType = {
    id: number;
    clanWarId: number;
    day: number;
    _all: number;
};
export type ClanWarFightersAvgAggregateInputType = {
    day?: true;
};
export type ClanWarFightersSumAggregateInputType = {
    day?: true;
};
export type ClanWarFightersMinAggregateInputType = {
    id?: true;
    clanWarId?: true;
    day?: true;
};
export type ClanWarFightersMaxAggregateInputType = {
    id?: true;
    clanWarId?: true;
    day?: true;
};
export type ClanWarFightersCountAggregateInputType = {
    id?: true;
    clanWarId?: true;
    day?: true;
    _all?: true;
};
export type ClanWarFightersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ClanWarFighters to aggregate.
     */
    where?: Prisma.ClanWarFightersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ClanWarFighters to fetch.
     */
    orderBy?: Prisma.ClanWarFightersOrderByWithRelationInput | Prisma.ClanWarFightersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ClanWarFightersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ClanWarFighters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ClanWarFighters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ClanWarFighters
    **/
    _count?: true | ClanWarFightersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ClanWarFightersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ClanWarFightersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ClanWarFightersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ClanWarFightersMaxAggregateInputType;
};
export type GetClanWarFightersAggregateType<T extends ClanWarFightersAggregateArgs> = {
    [P in keyof T & keyof AggregateClanWarFighters]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClanWarFighters[P]> : Prisma.GetScalarType<T[P], AggregateClanWarFighters[P]>;
};
export type ClanWarFightersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClanWarFightersWhereInput;
    orderBy?: Prisma.ClanWarFightersOrderByWithAggregationInput | Prisma.ClanWarFightersOrderByWithAggregationInput[];
    by: Prisma.ClanWarFightersScalarFieldEnum[] | Prisma.ClanWarFightersScalarFieldEnum;
    having?: Prisma.ClanWarFightersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClanWarFightersCountAggregateInputType | true;
    _avg?: ClanWarFightersAvgAggregateInputType;
    _sum?: ClanWarFightersSumAggregateInputType;
    _min?: ClanWarFightersMinAggregateInputType;
    _max?: ClanWarFightersMaxAggregateInputType;
};
export type ClanWarFightersGroupByOutputType = {
    id: string;
    clanWarId: string;
    day: number;
    _count: ClanWarFightersCountAggregateOutputType | null;
    _avg: ClanWarFightersAvgAggregateOutputType | null;
    _sum: ClanWarFightersSumAggregateOutputType | null;
    _min: ClanWarFightersMinAggregateOutputType | null;
    _max: ClanWarFightersMaxAggregateOutputType | null;
};
export type GetClanWarFightersGroupByPayload<T extends ClanWarFightersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClanWarFightersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClanWarFightersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClanWarFightersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClanWarFightersGroupByOutputType[P]>;
}>>;
export type ClanWarFightersWhereInput = {
    AND?: Prisma.ClanWarFightersWhereInput | Prisma.ClanWarFightersWhereInput[];
    OR?: Prisma.ClanWarFightersWhereInput[];
    NOT?: Prisma.ClanWarFightersWhereInput | Prisma.ClanWarFightersWhereInput[];
    id?: Prisma.UuidFilter<"ClanWarFighters"> | string;
    clanWarId?: Prisma.UuidFilter<"ClanWarFighters"> | string;
    day?: Prisma.IntFilter<"ClanWarFighters"> | number;
    clanWar?: Prisma.XOR<Prisma.ClanWarScalarRelationFilter, Prisma.ClanWarWhereInput>;
    attackers?: Prisma.BruteListRelationFilter;
    defenders?: Prisma.BruteListRelationFilter;
};
export type ClanWarFightersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clanWarId?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    clanWar?: Prisma.ClanWarOrderByWithRelationInput;
    attackers?: Prisma.BruteOrderByRelationAggregateInput;
    defenders?: Prisma.BruteOrderByRelationAggregateInput;
};
export type ClanWarFightersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    clanWarId_day?: Prisma.ClanWarFightersClanWarIdDayCompoundUniqueInput;
    AND?: Prisma.ClanWarFightersWhereInput | Prisma.ClanWarFightersWhereInput[];
    OR?: Prisma.ClanWarFightersWhereInput[];
    NOT?: Prisma.ClanWarFightersWhereInput | Prisma.ClanWarFightersWhereInput[];
    clanWarId?: Prisma.UuidFilter<"ClanWarFighters"> | string;
    day?: Prisma.IntFilter<"ClanWarFighters"> | number;
    clanWar?: Prisma.XOR<Prisma.ClanWarScalarRelationFilter, Prisma.ClanWarWhereInput>;
    attackers?: Prisma.BruteListRelationFilter;
    defenders?: Prisma.BruteListRelationFilter;
}, "id" | "id" | "clanWarId_day">;
export type ClanWarFightersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clanWarId?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    _count?: Prisma.ClanWarFightersCountOrderByAggregateInput;
    _avg?: Prisma.ClanWarFightersAvgOrderByAggregateInput;
    _max?: Prisma.ClanWarFightersMaxOrderByAggregateInput;
    _min?: Prisma.ClanWarFightersMinOrderByAggregateInput;
    _sum?: Prisma.ClanWarFightersSumOrderByAggregateInput;
};
export type ClanWarFightersScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClanWarFightersScalarWhereWithAggregatesInput | Prisma.ClanWarFightersScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClanWarFightersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClanWarFightersScalarWhereWithAggregatesInput | Prisma.ClanWarFightersScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ClanWarFighters"> | string;
    clanWarId?: Prisma.UuidWithAggregatesFilter<"ClanWarFighters"> | string;
    day?: Prisma.IntWithAggregatesFilter<"ClanWarFighters"> | number;
};
export type ClanWarFightersCreateInput = {
    id?: string;
    day: number;
    clanWar: Prisma.ClanWarCreateNestedOneWithoutFightersInput;
    attackers?: Prisma.BruteCreateNestedManyWithoutInClanWarAttackerFightersInput;
    defenders?: Prisma.BruteCreateNestedManyWithoutInClanWarDefenderFightersInput;
};
export type ClanWarFightersUncheckedCreateInput = {
    id?: string;
    clanWarId: string;
    day: number;
    attackers?: Prisma.BruteUncheckedCreateNestedManyWithoutInClanWarAttackerFightersInput;
    defenders?: Prisma.BruteUncheckedCreateNestedManyWithoutInClanWarDefenderFightersInput;
};
export type ClanWarFightersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
    clanWar?: Prisma.ClanWarUpdateOneRequiredWithoutFightersNestedInput;
    attackers?: Prisma.BruteUpdateManyWithoutInClanWarAttackerFightersNestedInput;
    defenders?: Prisma.BruteUpdateManyWithoutInClanWarDefenderFightersNestedInput;
};
export type ClanWarFightersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
    attackers?: Prisma.BruteUncheckedUpdateManyWithoutInClanWarAttackerFightersNestedInput;
    defenders?: Prisma.BruteUncheckedUpdateManyWithoutInClanWarDefenderFightersNestedInput;
};
export type ClanWarFightersCreateManyInput = {
    id?: string;
    clanWarId: string;
    day: number;
};
export type ClanWarFightersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClanWarFightersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClanWarFightersListRelationFilter = {
    every?: Prisma.ClanWarFightersWhereInput;
    some?: Prisma.ClanWarFightersWhereInput;
    none?: Prisma.ClanWarFightersWhereInput;
};
export type ClanWarFightersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClanWarFightersClanWarIdDayCompoundUniqueInput = {
    clanWarId: string;
    day: number;
};
export type ClanWarFightersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clanWarId?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
};
export type ClanWarFightersAvgOrderByAggregateInput = {
    day?: Prisma.SortOrder;
};
export type ClanWarFightersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clanWarId?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
};
export type ClanWarFightersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clanWarId?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
};
export type ClanWarFightersSumOrderByAggregateInput = {
    day?: Prisma.SortOrder;
};
export type ClanWarFightersCreateNestedManyWithoutAttackersInput = {
    create?: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutAttackersInput, Prisma.ClanWarFightersUncheckedCreateWithoutAttackersInput> | Prisma.ClanWarFightersCreateWithoutAttackersInput[] | Prisma.ClanWarFightersUncheckedCreateWithoutAttackersInput[];
    connectOrCreate?: Prisma.ClanWarFightersCreateOrConnectWithoutAttackersInput | Prisma.ClanWarFightersCreateOrConnectWithoutAttackersInput[];
    connect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
};
export type ClanWarFightersCreateNestedManyWithoutDefendersInput = {
    create?: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutDefendersInput, Prisma.ClanWarFightersUncheckedCreateWithoutDefendersInput> | Prisma.ClanWarFightersCreateWithoutDefendersInput[] | Prisma.ClanWarFightersUncheckedCreateWithoutDefendersInput[];
    connectOrCreate?: Prisma.ClanWarFightersCreateOrConnectWithoutDefendersInput | Prisma.ClanWarFightersCreateOrConnectWithoutDefendersInput[];
    connect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
};
export type ClanWarFightersUncheckedCreateNestedManyWithoutAttackersInput = {
    create?: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutAttackersInput, Prisma.ClanWarFightersUncheckedCreateWithoutAttackersInput> | Prisma.ClanWarFightersCreateWithoutAttackersInput[] | Prisma.ClanWarFightersUncheckedCreateWithoutAttackersInput[];
    connectOrCreate?: Prisma.ClanWarFightersCreateOrConnectWithoutAttackersInput | Prisma.ClanWarFightersCreateOrConnectWithoutAttackersInput[];
    connect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
};
export type ClanWarFightersUncheckedCreateNestedManyWithoutDefendersInput = {
    create?: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutDefendersInput, Prisma.ClanWarFightersUncheckedCreateWithoutDefendersInput> | Prisma.ClanWarFightersCreateWithoutDefendersInput[] | Prisma.ClanWarFightersUncheckedCreateWithoutDefendersInput[];
    connectOrCreate?: Prisma.ClanWarFightersCreateOrConnectWithoutDefendersInput | Prisma.ClanWarFightersCreateOrConnectWithoutDefendersInput[];
    connect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
};
export type ClanWarFightersUpdateManyWithoutAttackersNestedInput = {
    create?: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutAttackersInput, Prisma.ClanWarFightersUncheckedCreateWithoutAttackersInput> | Prisma.ClanWarFightersCreateWithoutAttackersInput[] | Prisma.ClanWarFightersUncheckedCreateWithoutAttackersInput[];
    connectOrCreate?: Prisma.ClanWarFightersCreateOrConnectWithoutAttackersInput | Prisma.ClanWarFightersCreateOrConnectWithoutAttackersInput[];
    upsert?: Prisma.ClanWarFightersUpsertWithWhereUniqueWithoutAttackersInput | Prisma.ClanWarFightersUpsertWithWhereUniqueWithoutAttackersInput[];
    set?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    disconnect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    delete?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    connect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    update?: Prisma.ClanWarFightersUpdateWithWhereUniqueWithoutAttackersInput | Prisma.ClanWarFightersUpdateWithWhereUniqueWithoutAttackersInput[];
    updateMany?: Prisma.ClanWarFightersUpdateManyWithWhereWithoutAttackersInput | Prisma.ClanWarFightersUpdateManyWithWhereWithoutAttackersInput[];
    deleteMany?: Prisma.ClanWarFightersScalarWhereInput | Prisma.ClanWarFightersScalarWhereInput[];
};
export type ClanWarFightersUpdateManyWithoutDefendersNestedInput = {
    create?: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutDefendersInput, Prisma.ClanWarFightersUncheckedCreateWithoutDefendersInput> | Prisma.ClanWarFightersCreateWithoutDefendersInput[] | Prisma.ClanWarFightersUncheckedCreateWithoutDefendersInput[];
    connectOrCreate?: Prisma.ClanWarFightersCreateOrConnectWithoutDefendersInput | Prisma.ClanWarFightersCreateOrConnectWithoutDefendersInput[];
    upsert?: Prisma.ClanWarFightersUpsertWithWhereUniqueWithoutDefendersInput | Prisma.ClanWarFightersUpsertWithWhereUniqueWithoutDefendersInput[];
    set?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    disconnect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    delete?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    connect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    update?: Prisma.ClanWarFightersUpdateWithWhereUniqueWithoutDefendersInput | Prisma.ClanWarFightersUpdateWithWhereUniqueWithoutDefendersInput[];
    updateMany?: Prisma.ClanWarFightersUpdateManyWithWhereWithoutDefendersInput | Prisma.ClanWarFightersUpdateManyWithWhereWithoutDefendersInput[];
    deleteMany?: Prisma.ClanWarFightersScalarWhereInput | Prisma.ClanWarFightersScalarWhereInput[];
};
export type ClanWarFightersUncheckedUpdateManyWithoutAttackersNestedInput = {
    create?: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutAttackersInput, Prisma.ClanWarFightersUncheckedCreateWithoutAttackersInput> | Prisma.ClanWarFightersCreateWithoutAttackersInput[] | Prisma.ClanWarFightersUncheckedCreateWithoutAttackersInput[];
    connectOrCreate?: Prisma.ClanWarFightersCreateOrConnectWithoutAttackersInput | Prisma.ClanWarFightersCreateOrConnectWithoutAttackersInput[];
    upsert?: Prisma.ClanWarFightersUpsertWithWhereUniqueWithoutAttackersInput | Prisma.ClanWarFightersUpsertWithWhereUniqueWithoutAttackersInput[];
    set?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    disconnect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    delete?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    connect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    update?: Prisma.ClanWarFightersUpdateWithWhereUniqueWithoutAttackersInput | Prisma.ClanWarFightersUpdateWithWhereUniqueWithoutAttackersInput[];
    updateMany?: Prisma.ClanWarFightersUpdateManyWithWhereWithoutAttackersInput | Prisma.ClanWarFightersUpdateManyWithWhereWithoutAttackersInput[];
    deleteMany?: Prisma.ClanWarFightersScalarWhereInput | Prisma.ClanWarFightersScalarWhereInput[];
};
export type ClanWarFightersUncheckedUpdateManyWithoutDefendersNestedInput = {
    create?: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutDefendersInput, Prisma.ClanWarFightersUncheckedCreateWithoutDefendersInput> | Prisma.ClanWarFightersCreateWithoutDefendersInput[] | Prisma.ClanWarFightersUncheckedCreateWithoutDefendersInput[];
    connectOrCreate?: Prisma.ClanWarFightersCreateOrConnectWithoutDefendersInput | Prisma.ClanWarFightersCreateOrConnectWithoutDefendersInput[];
    upsert?: Prisma.ClanWarFightersUpsertWithWhereUniqueWithoutDefendersInput | Prisma.ClanWarFightersUpsertWithWhereUniqueWithoutDefendersInput[];
    set?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    disconnect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    delete?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    connect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    update?: Prisma.ClanWarFightersUpdateWithWhereUniqueWithoutDefendersInput | Prisma.ClanWarFightersUpdateWithWhereUniqueWithoutDefendersInput[];
    updateMany?: Prisma.ClanWarFightersUpdateManyWithWhereWithoutDefendersInput | Prisma.ClanWarFightersUpdateManyWithWhereWithoutDefendersInput[];
    deleteMany?: Prisma.ClanWarFightersScalarWhereInput | Prisma.ClanWarFightersScalarWhereInput[];
};
export type ClanWarFightersCreateNestedManyWithoutClanWarInput = {
    create?: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutClanWarInput, Prisma.ClanWarFightersUncheckedCreateWithoutClanWarInput> | Prisma.ClanWarFightersCreateWithoutClanWarInput[] | Prisma.ClanWarFightersUncheckedCreateWithoutClanWarInput[];
    connectOrCreate?: Prisma.ClanWarFightersCreateOrConnectWithoutClanWarInput | Prisma.ClanWarFightersCreateOrConnectWithoutClanWarInput[];
    createMany?: Prisma.ClanWarFightersCreateManyClanWarInputEnvelope;
    connect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
};
export type ClanWarFightersUncheckedCreateNestedManyWithoutClanWarInput = {
    create?: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutClanWarInput, Prisma.ClanWarFightersUncheckedCreateWithoutClanWarInput> | Prisma.ClanWarFightersCreateWithoutClanWarInput[] | Prisma.ClanWarFightersUncheckedCreateWithoutClanWarInput[];
    connectOrCreate?: Prisma.ClanWarFightersCreateOrConnectWithoutClanWarInput | Prisma.ClanWarFightersCreateOrConnectWithoutClanWarInput[];
    createMany?: Prisma.ClanWarFightersCreateManyClanWarInputEnvelope;
    connect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
};
export type ClanWarFightersUpdateManyWithoutClanWarNestedInput = {
    create?: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutClanWarInput, Prisma.ClanWarFightersUncheckedCreateWithoutClanWarInput> | Prisma.ClanWarFightersCreateWithoutClanWarInput[] | Prisma.ClanWarFightersUncheckedCreateWithoutClanWarInput[];
    connectOrCreate?: Prisma.ClanWarFightersCreateOrConnectWithoutClanWarInput | Prisma.ClanWarFightersCreateOrConnectWithoutClanWarInput[];
    upsert?: Prisma.ClanWarFightersUpsertWithWhereUniqueWithoutClanWarInput | Prisma.ClanWarFightersUpsertWithWhereUniqueWithoutClanWarInput[];
    createMany?: Prisma.ClanWarFightersCreateManyClanWarInputEnvelope;
    set?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    disconnect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    delete?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    connect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    update?: Prisma.ClanWarFightersUpdateWithWhereUniqueWithoutClanWarInput | Prisma.ClanWarFightersUpdateWithWhereUniqueWithoutClanWarInput[];
    updateMany?: Prisma.ClanWarFightersUpdateManyWithWhereWithoutClanWarInput | Prisma.ClanWarFightersUpdateManyWithWhereWithoutClanWarInput[];
    deleteMany?: Prisma.ClanWarFightersScalarWhereInput | Prisma.ClanWarFightersScalarWhereInput[];
};
export type ClanWarFightersUncheckedUpdateManyWithoutClanWarNestedInput = {
    create?: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutClanWarInput, Prisma.ClanWarFightersUncheckedCreateWithoutClanWarInput> | Prisma.ClanWarFightersCreateWithoutClanWarInput[] | Prisma.ClanWarFightersUncheckedCreateWithoutClanWarInput[];
    connectOrCreate?: Prisma.ClanWarFightersCreateOrConnectWithoutClanWarInput | Prisma.ClanWarFightersCreateOrConnectWithoutClanWarInput[];
    upsert?: Prisma.ClanWarFightersUpsertWithWhereUniqueWithoutClanWarInput | Prisma.ClanWarFightersUpsertWithWhereUniqueWithoutClanWarInput[];
    createMany?: Prisma.ClanWarFightersCreateManyClanWarInputEnvelope;
    set?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    disconnect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    delete?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    connect?: Prisma.ClanWarFightersWhereUniqueInput | Prisma.ClanWarFightersWhereUniqueInput[];
    update?: Prisma.ClanWarFightersUpdateWithWhereUniqueWithoutClanWarInput | Prisma.ClanWarFightersUpdateWithWhereUniqueWithoutClanWarInput[];
    updateMany?: Prisma.ClanWarFightersUpdateManyWithWhereWithoutClanWarInput | Prisma.ClanWarFightersUpdateManyWithWhereWithoutClanWarInput[];
    deleteMany?: Prisma.ClanWarFightersScalarWhereInput | Prisma.ClanWarFightersScalarWhereInput[];
};
export type ClanWarFightersCreateWithoutAttackersInput = {
    id?: string;
    day: number;
    clanWar: Prisma.ClanWarCreateNestedOneWithoutFightersInput;
    defenders?: Prisma.BruteCreateNestedManyWithoutInClanWarDefenderFightersInput;
};
export type ClanWarFightersUncheckedCreateWithoutAttackersInput = {
    id?: string;
    clanWarId: string;
    day: number;
    defenders?: Prisma.BruteUncheckedCreateNestedManyWithoutInClanWarDefenderFightersInput;
};
export type ClanWarFightersCreateOrConnectWithoutAttackersInput = {
    where: Prisma.ClanWarFightersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutAttackersInput, Prisma.ClanWarFightersUncheckedCreateWithoutAttackersInput>;
};
export type ClanWarFightersCreateWithoutDefendersInput = {
    id?: string;
    day: number;
    clanWar: Prisma.ClanWarCreateNestedOneWithoutFightersInput;
    attackers?: Prisma.BruteCreateNestedManyWithoutInClanWarAttackerFightersInput;
};
export type ClanWarFightersUncheckedCreateWithoutDefendersInput = {
    id?: string;
    clanWarId: string;
    day: number;
    attackers?: Prisma.BruteUncheckedCreateNestedManyWithoutInClanWarAttackerFightersInput;
};
export type ClanWarFightersCreateOrConnectWithoutDefendersInput = {
    where: Prisma.ClanWarFightersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutDefendersInput, Prisma.ClanWarFightersUncheckedCreateWithoutDefendersInput>;
};
export type ClanWarFightersUpsertWithWhereUniqueWithoutAttackersInput = {
    where: Prisma.ClanWarFightersWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClanWarFightersUpdateWithoutAttackersInput, Prisma.ClanWarFightersUncheckedUpdateWithoutAttackersInput>;
    create: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutAttackersInput, Prisma.ClanWarFightersUncheckedCreateWithoutAttackersInput>;
};
export type ClanWarFightersUpdateWithWhereUniqueWithoutAttackersInput = {
    where: Prisma.ClanWarFightersWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClanWarFightersUpdateWithoutAttackersInput, Prisma.ClanWarFightersUncheckedUpdateWithoutAttackersInput>;
};
export type ClanWarFightersUpdateManyWithWhereWithoutAttackersInput = {
    where: Prisma.ClanWarFightersScalarWhereInput;
    data: Prisma.XOR<Prisma.ClanWarFightersUpdateManyMutationInput, Prisma.ClanWarFightersUncheckedUpdateManyWithoutAttackersInput>;
};
export type ClanWarFightersScalarWhereInput = {
    AND?: Prisma.ClanWarFightersScalarWhereInput | Prisma.ClanWarFightersScalarWhereInput[];
    OR?: Prisma.ClanWarFightersScalarWhereInput[];
    NOT?: Prisma.ClanWarFightersScalarWhereInput | Prisma.ClanWarFightersScalarWhereInput[];
    id?: Prisma.UuidFilter<"ClanWarFighters"> | string;
    clanWarId?: Prisma.UuidFilter<"ClanWarFighters"> | string;
    day?: Prisma.IntFilter<"ClanWarFighters"> | number;
};
export type ClanWarFightersUpsertWithWhereUniqueWithoutDefendersInput = {
    where: Prisma.ClanWarFightersWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClanWarFightersUpdateWithoutDefendersInput, Prisma.ClanWarFightersUncheckedUpdateWithoutDefendersInput>;
    create: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutDefendersInput, Prisma.ClanWarFightersUncheckedCreateWithoutDefendersInput>;
};
export type ClanWarFightersUpdateWithWhereUniqueWithoutDefendersInput = {
    where: Prisma.ClanWarFightersWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClanWarFightersUpdateWithoutDefendersInput, Prisma.ClanWarFightersUncheckedUpdateWithoutDefendersInput>;
};
export type ClanWarFightersUpdateManyWithWhereWithoutDefendersInput = {
    where: Prisma.ClanWarFightersScalarWhereInput;
    data: Prisma.XOR<Prisma.ClanWarFightersUpdateManyMutationInput, Prisma.ClanWarFightersUncheckedUpdateManyWithoutDefendersInput>;
};
export type ClanWarFightersCreateWithoutClanWarInput = {
    id?: string;
    day: number;
    attackers?: Prisma.BruteCreateNestedManyWithoutInClanWarAttackerFightersInput;
    defenders?: Prisma.BruteCreateNestedManyWithoutInClanWarDefenderFightersInput;
};
export type ClanWarFightersUncheckedCreateWithoutClanWarInput = {
    id?: string;
    day: number;
    attackers?: Prisma.BruteUncheckedCreateNestedManyWithoutInClanWarAttackerFightersInput;
    defenders?: Prisma.BruteUncheckedCreateNestedManyWithoutInClanWarDefenderFightersInput;
};
export type ClanWarFightersCreateOrConnectWithoutClanWarInput = {
    where: Prisma.ClanWarFightersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutClanWarInput, Prisma.ClanWarFightersUncheckedCreateWithoutClanWarInput>;
};
export type ClanWarFightersCreateManyClanWarInputEnvelope = {
    data: Prisma.ClanWarFightersCreateManyClanWarInput | Prisma.ClanWarFightersCreateManyClanWarInput[];
    skipDuplicates?: boolean;
};
export type ClanWarFightersUpsertWithWhereUniqueWithoutClanWarInput = {
    where: Prisma.ClanWarFightersWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClanWarFightersUpdateWithoutClanWarInput, Prisma.ClanWarFightersUncheckedUpdateWithoutClanWarInput>;
    create: Prisma.XOR<Prisma.ClanWarFightersCreateWithoutClanWarInput, Prisma.ClanWarFightersUncheckedCreateWithoutClanWarInput>;
};
export type ClanWarFightersUpdateWithWhereUniqueWithoutClanWarInput = {
    where: Prisma.ClanWarFightersWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClanWarFightersUpdateWithoutClanWarInput, Prisma.ClanWarFightersUncheckedUpdateWithoutClanWarInput>;
};
export type ClanWarFightersUpdateManyWithWhereWithoutClanWarInput = {
    where: Prisma.ClanWarFightersScalarWhereInput;
    data: Prisma.XOR<Prisma.ClanWarFightersUpdateManyMutationInput, Prisma.ClanWarFightersUncheckedUpdateManyWithoutClanWarInput>;
};
export type ClanWarFightersUpdateWithoutAttackersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
    clanWar?: Prisma.ClanWarUpdateOneRequiredWithoutFightersNestedInput;
    defenders?: Prisma.BruteUpdateManyWithoutInClanWarDefenderFightersNestedInput;
};
export type ClanWarFightersUncheckedUpdateWithoutAttackersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
    defenders?: Prisma.BruteUncheckedUpdateManyWithoutInClanWarDefenderFightersNestedInput;
};
export type ClanWarFightersUncheckedUpdateManyWithoutAttackersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClanWarFightersUpdateWithoutDefendersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
    clanWar?: Prisma.ClanWarUpdateOneRequiredWithoutFightersNestedInput;
    attackers?: Prisma.BruteUpdateManyWithoutInClanWarAttackerFightersNestedInput;
};
export type ClanWarFightersUncheckedUpdateWithoutDefendersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
    attackers?: Prisma.BruteUncheckedUpdateManyWithoutInClanWarAttackerFightersNestedInput;
};
export type ClanWarFightersUncheckedUpdateManyWithoutDefendersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClanWarFightersCreateManyClanWarInput = {
    id?: string;
    day: number;
};
export type ClanWarFightersUpdateWithoutClanWarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
    attackers?: Prisma.BruteUpdateManyWithoutInClanWarAttackerFightersNestedInput;
    defenders?: Prisma.BruteUpdateManyWithoutInClanWarDefenderFightersNestedInput;
};
export type ClanWarFightersUncheckedUpdateWithoutClanWarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
    attackers?: Prisma.BruteUncheckedUpdateManyWithoutInClanWarAttackerFightersNestedInput;
    defenders?: Prisma.BruteUncheckedUpdateManyWithoutInClanWarDefenderFightersNestedInput;
};
export type ClanWarFightersUncheckedUpdateManyWithoutClanWarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type ClanWarFightersCountOutputType
 */
export type ClanWarFightersCountOutputType = {
    attackers: number;
    defenders: number;
};
export type ClanWarFightersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attackers?: boolean | ClanWarFightersCountOutputTypeCountAttackersArgs;
    defenders?: boolean | ClanWarFightersCountOutputTypeCountDefendersArgs;
};
/**
 * ClanWarFightersCountOutputType without action
 */
export type ClanWarFightersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFightersCountOutputType
     */
    select?: Prisma.ClanWarFightersCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ClanWarFightersCountOutputType without action
 */
export type ClanWarFightersCountOutputTypeCountAttackersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BruteWhereInput;
};
/**
 * ClanWarFightersCountOutputType without action
 */
export type ClanWarFightersCountOutputTypeCountDefendersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BruteWhereInput;
};
export type ClanWarFightersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clanWarId?: boolean;
    day?: boolean;
    clanWar?: boolean | Prisma.ClanWarDefaultArgs<ExtArgs>;
    attackers?: boolean | Prisma.ClanWarFighters$attackersArgs<ExtArgs>;
    defenders?: boolean | Prisma.ClanWarFighters$defendersArgs<ExtArgs>;
    _count?: boolean | Prisma.ClanWarFightersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clanWarFighters"]>;
export type ClanWarFightersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clanWarId?: boolean;
    day?: boolean;
    clanWar?: boolean | Prisma.ClanWarDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clanWarFighters"]>;
export type ClanWarFightersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clanWarId?: boolean;
    day?: boolean;
    clanWar?: boolean | Prisma.ClanWarDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clanWarFighters"]>;
export type ClanWarFightersSelectScalar = {
    id?: boolean;
    clanWarId?: boolean;
    day?: boolean;
};
export type ClanWarFightersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clanWarId" | "day", ExtArgs["result"]["clanWarFighters"]>;
export type ClanWarFightersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clanWar?: boolean | Prisma.ClanWarDefaultArgs<ExtArgs>;
    attackers?: boolean | Prisma.ClanWarFighters$attackersArgs<ExtArgs>;
    defenders?: boolean | Prisma.ClanWarFighters$defendersArgs<ExtArgs>;
    _count?: boolean | Prisma.ClanWarFightersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClanWarFightersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clanWar?: boolean | Prisma.ClanWarDefaultArgs<ExtArgs>;
};
export type ClanWarFightersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clanWar?: boolean | Prisma.ClanWarDefaultArgs<ExtArgs>;
};
export type $ClanWarFightersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClanWarFighters";
    objects: {
        clanWar: Prisma.$ClanWarPayload<ExtArgs>;
        attackers: Prisma.$BrutePayload<ExtArgs>[];
        defenders: Prisma.$BrutePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clanWarId: string;
        day: number;
    }, ExtArgs["result"]["clanWarFighters"]>;
    composites: {};
};
export type ClanWarFightersGetPayload<S extends boolean | null | undefined | ClanWarFightersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClanWarFightersPayload, S>;
export type ClanWarFightersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClanWarFightersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: ClanWarFightersCountAggregateInputType | true;
};
export interface ClanWarFightersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClanWarFighters'];
        meta: {
            name: 'ClanWarFighters';
        };
    };
    /**
     * Find zero or one ClanWarFighters that matches the filter.
     * @param {ClanWarFightersFindUniqueArgs} args - Arguments to find a ClanWarFighters
     * @example
     * // Get one ClanWarFighters
     * const clanWarFighters = await prisma.clanWarFighters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClanWarFightersFindUniqueArgs>(args: Prisma.SelectSubset<T, ClanWarFightersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClanWarFightersClient<runtime.Types.Result.GetResult<Prisma.$ClanWarFightersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ClanWarFighters that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClanWarFightersFindUniqueOrThrowArgs} args - Arguments to find a ClanWarFighters
     * @example
     * // Get one ClanWarFighters
     * const clanWarFighters = await prisma.clanWarFighters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClanWarFightersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClanWarFightersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClanWarFightersClient<runtime.Types.Result.GetResult<Prisma.$ClanWarFightersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ClanWarFighters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanWarFightersFindFirstArgs} args - Arguments to find a ClanWarFighters
     * @example
     * // Get one ClanWarFighters
     * const clanWarFighters = await prisma.clanWarFighters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClanWarFightersFindFirstArgs>(args?: Prisma.SelectSubset<T, ClanWarFightersFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClanWarFightersClient<runtime.Types.Result.GetResult<Prisma.$ClanWarFightersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ClanWarFighters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanWarFightersFindFirstOrThrowArgs} args - Arguments to find a ClanWarFighters
     * @example
     * // Get one ClanWarFighters
     * const clanWarFighters = await prisma.clanWarFighters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClanWarFightersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClanWarFightersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClanWarFightersClient<runtime.Types.Result.GetResult<Prisma.$ClanWarFightersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ClanWarFighters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanWarFightersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClanWarFighters
     * const clanWarFighters = await prisma.clanWarFighters.findMany()
     *
     * // Get first 10 ClanWarFighters
     * const clanWarFighters = await prisma.clanWarFighters.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clanWarFightersWithIdOnly = await prisma.clanWarFighters.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ClanWarFightersFindManyArgs>(args?: Prisma.SelectSubset<T, ClanWarFightersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClanWarFightersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ClanWarFighters.
     * @param {ClanWarFightersCreateArgs} args - Arguments to create a ClanWarFighters.
     * @example
     * // Create one ClanWarFighters
     * const ClanWarFighters = await prisma.clanWarFighters.create({
     *   data: {
     *     // ... data to create a ClanWarFighters
     *   }
     * })
     *
     */
    create<T extends ClanWarFightersCreateArgs>(args: Prisma.SelectSubset<T, ClanWarFightersCreateArgs<ExtArgs>>): Prisma.Prisma__ClanWarFightersClient<runtime.Types.Result.GetResult<Prisma.$ClanWarFightersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ClanWarFighters.
     * @param {ClanWarFightersCreateManyArgs} args - Arguments to create many ClanWarFighters.
     * @example
     * // Create many ClanWarFighters
     * const clanWarFighters = await prisma.clanWarFighters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ClanWarFightersCreateManyArgs>(args?: Prisma.SelectSubset<T, ClanWarFightersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ClanWarFighters and returns the data saved in the database.
     * @param {ClanWarFightersCreateManyAndReturnArgs} args - Arguments to create many ClanWarFighters.
     * @example
     * // Create many ClanWarFighters
     * const clanWarFighters = await prisma.clanWarFighters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ClanWarFighters and only return the `id`
     * const clanWarFightersWithIdOnly = await prisma.clanWarFighters.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ClanWarFightersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClanWarFightersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClanWarFightersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ClanWarFighters.
     * @param {ClanWarFightersDeleteArgs} args - Arguments to delete one ClanWarFighters.
     * @example
     * // Delete one ClanWarFighters
     * const ClanWarFighters = await prisma.clanWarFighters.delete({
     *   where: {
     *     // ... filter to delete one ClanWarFighters
     *   }
     * })
     *
     */
    delete<T extends ClanWarFightersDeleteArgs>(args: Prisma.SelectSubset<T, ClanWarFightersDeleteArgs<ExtArgs>>): Prisma.Prisma__ClanWarFightersClient<runtime.Types.Result.GetResult<Prisma.$ClanWarFightersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ClanWarFighters.
     * @param {ClanWarFightersUpdateArgs} args - Arguments to update one ClanWarFighters.
     * @example
     * // Update one ClanWarFighters
     * const clanWarFighters = await prisma.clanWarFighters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ClanWarFightersUpdateArgs>(args: Prisma.SelectSubset<T, ClanWarFightersUpdateArgs<ExtArgs>>): Prisma.Prisma__ClanWarFightersClient<runtime.Types.Result.GetResult<Prisma.$ClanWarFightersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ClanWarFighters.
     * @param {ClanWarFightersDeleteManyArgs} args - Arguments to filter ClanWarFighters to delete.
     * @example
     * // Delete a few ClanWarFighters
     * const { count } = await prisma.clanWarFighters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ClanWarFightersDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClanWarFightersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ClanWarFighters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanWarFightersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClanWarFighters
     * const clanWarFighters = await prisma.clanWarFighters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ClanWarFightersUpdateManyArgs>(args: Prisma.SelectSubset<T, ClanWarFightersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ClanWarFighters and returns the data updated in the database.
     * @param {ClanWarFightersUpdateManyAndReturnArgs} args - Arguments to update many ClanWarFighters.
     * @example
     * // Update many ClanWarFighters
     * const clanWarFighters = await prisma.clanWarFighters.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ClanWarFighters and only return the `id`
     * const clanWarFightersWithIdOnly = await prisma.clanWarFighters.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClanWarFightersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClanWarFightersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClanWarFightersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ClanWarFighters.
     * @param {ClanWarFightersUpsertArgs} args - Arguments to update or create a ClanWarFighters.
     * @example
     * // Update or create a ClanWarFighters
     * const clanWarFighters = await prisma.clanWarFighters.upsert({
     *   create: {
     *     // ... data to create a ClanWarFighters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClanWarFighters we want to update
     *   }
     * })
     */
    upsert<T extends ClanWarFightersUpsertArgs>(args: Prisma.SelectSubset<T, ClanWarFightersUpsertArgs<ExtArgs>>): Prisma.Prisma__ClanWarFightersClient<runtime.Types.Result.GetResult<Prisma.$ClanWarFightersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ClanWarFighters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanWarFightersCountArgs} args - Arguments to filter ClanWarFighters to count.
     * @example
     * // Count the number of ClanWarFighters
     * const count = await prisma.clanWarFighters.count({
     *   where: {
     *     // ... the filter for the ClanWarFighters we want to count
     *   }
     * })
    **/
    count<T extends ClanWarFightersCountArgs>(args?: Prisma.Subset<T, ClanWarFightersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClanWarFightersCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ClanWarFighters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanWarFightersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClanWarFightersAggregateArgs>(args: Prisma.Subset<T, ClanWarFightersAggregateArgs>): Prisma.PrismaPromise<GetClanWarFightersAggregateType<T>>;
    /**
     * Group by ClanWarFighters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanWarFightersGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ClanWarFightersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClanWarFightersGroupByArgs['orderBy'];
    } : {
        orderBy?: ClanWarFightersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClanWarFightersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClanWarFightersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ClanWarFighters model
     */
    readonly fields: ClanWarFightersFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ClanWarFighters.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ClanWarFightersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clanWar<T extends Prisma.ClanWarDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClanWarDefaultArgs<ExtArgs>>): Prisma.Prisma__ClanWarClient<runtime.Types.Result.GetResult<Prisma.$ClanWarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    attackers<T extends Prisma.ClanWarFighters$attackersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClanWarFighters$attackersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    defenders<T extends Prisma.ClanWarFighters$defendersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClanWarFighters$defendersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ClanWarFighters model
 */
export interface ClanWarFightersFieldRefs {
    readonly id: Prisma.FieldRef<"ClanWarFighters", 'String'>;
    readonly clanWarId: Prisma.FieldRef<"ClanWarFighters", 'String'>;
    readonly day: Prisma.FieldRef<"ClanWarFighters", 'Int'>;
}
/**
 * ClanWarFighters findUnique
 */
export type ClanWarFightersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFighters
     */
    select?: Prisma.ClanWarFightersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWarFighters
     */
    omit?: Prisma.ClanWarFightersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarFightersInclude<ExtArgs> | null;
    /**
     * Filter, which ClanWarFighters to fetch.
     */
    where: Prisma.ClanWarFightersWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanWarFighters findUniqueOrThrow
 */
export type ClanWarFightersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFighters
     */
    select?: Prisma.ClanWarFightersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWarFighters
     */
    omit?: Prisma.ClanWarFightersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarFightersInclude<ExtArgs> | null;
    /**
     * Filter, which ClanWarFighters to fetch.
     */
    where: Prisma.ClanWarFightersWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanWarFighters findFirst
 */
export type ClanWarFightersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFighters
     */
    select?: Prisma.ClanWarFightersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWarFighters
     */
    omit?: Prisma.ClanWarFightersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarFightersInclude<ExtArgs> | null;
    /**
     * Filter, which ClanWarFighters to fetch.
     */
    where?: Prisma.ClanWarFightersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ClanWarFighters to fetch.
     */
    orderBy?: Prisma.ClanWarFightersOrderByWithRelationInput | Prisma.ClanWarFightersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ClanWarFighters.
     */
    cursor?: Prisma.ClanWarFightersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ClanWarFighters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ClanWarFighters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ClanWarFighters.
     */
    distinct?: Prisma.ClanWarFightersScalarFieldEnum | Prisma.ClanWarFightersScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanWarFighters findFirstOrThrow
 */
export type ClanWarFightersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFighters
     */
    select?: Prisma.ClanWarFightersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWarFighters
     */
    omit?: Prisma.ClanWarFightersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarFightersInclude<ExtArgs> | null;
    /**
     * Filter, which ClanWarFighters to fetch.
     */
    where?: Prisma.ClanWarFightersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ClanWarFighters to fetch.
     */
    orderBy?: Prisma.ClanWarFightersOrderByWithRelationInput | Prisma.ClanWarFightersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ClanWarFighters.
     */
    cursor?: Prisma.ClanWarFightersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ClanWarFighters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ClanWarFighters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ClanWarFighters.
     */
    distinct?: Prisma.ClanWarFightersScalarFieldEnum | Prisma.ClanWarFightersScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanWarFighters findMany
 */
export type ClanWarFightersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFighters
     */
    select?: Prisma.ClanWarFightersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWarFighters
     */
    omit?: Prisma.ClanWarFightersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarFightersInclude<ExtArgs> | null;
    /**
     * Filter, which ClanWarFighters to fetch.
     */
    where?: Prisma.ClanWarFightersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ClanWarFighters to fetch.
     */
    orderBy?: Prisma.ClanWarFightersOrderByWithRelationInput | Prisma.ClanWarFightersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ClanWarFighters.
     */
    cursor?: Prisma.ClanWarFightersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ClanWarFighters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ClanWarFighters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ClanWarFighters.
     */
    distinct?: Prisma.ClanWarFightersScalarFieldEnum | Prisma.ClanWarFightersScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanWarFighters create
 */
export type ClanWarFightersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFighters
     */
    select?: Prisma.ClanWarFightersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWarFighters
     */
    omit?: Prisma.ClanWarFightersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarFightersInclude<ExtArgs> | null;
    /**
     * The data needed to create a ClanWarFighters.
     */
    data: Prisma.XOR<Prisma.ClanWarFightersCreateInput, Prisma.ClanWarFightersUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanWarFighters createMany
 */
export type ClanWarFightersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClanWarFighters.
     */
    data: Prisma.ClanWarFightersCreateManyInput | Prisma.ClanWarFightersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ClanWarFighters createManyAndReturn
 */
export type ClanWarFightersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFighters
     */
    select?: Prisma.ClanWarFightersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWarFighters
     */
    omit?: Prisma.ClanWarFightersOmit<ExtArgs> | null;
    /**
     * The data used to create many ClanWarFighters.
     */
    data: Prisma.ClanWarFightersCreateManyInput | Prisma.ClanWarFightersCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarFightersIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ClanWarFighters update
 */
export type ClanWarFightersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFighters
     */
    select?: Prisma.ClanWarFightersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWarFighters
     */
    omit?: Prisma.ClanWarFightersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarFightersInclude<ExtArgs> | null;
    /**
     * The data needed to update a ClanWarFighters.
     */
    data: Prisma.XOR<Prisma.ClanWarFightersUpdateInput, Prisma.ClanWarFightersUncheckedUpdateInput>;
    /**
     * Choose, which ClanWarFighters to update.
     */
    where: Prisma.ClanWarFightersWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanWarFighters updateMany
 */
export type ClanWarFightersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ClanWarFighters.
     */
    data: Prisma.XOR<Prisma.ClanWarFightersUpdateManyMutationInput, Prisma.ClanWarFightersUncheckedUpdateManyInput>;
    /**
     * Filter which ClanWarFighters to update
     */
    where?: Prisma.ClanWarFightersWhereInput;
    /**
     * Limit how many ClanWarFighters to update.
     */
    limit?: number;
};
/**
 * ClanWarFighters updateManyAndReturn
 */
export type ClanWarFightersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFighters
     */
    select?: Prisma.ClanWarFightersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWarFighters
     */
    omit?: Prisma.ClanWarFightersOmit<ExtArgs> | null;
    /**
     * The data used to update ClanWarFighters.
     */
    data: Prisma.XOR<Prisma.ClanWarFightersUpdateManyMutationInput, Prisma.ClanWarFightersUncheckedUpdateManyInput>;
    /**
     * Filter which ClanWarFighters to update
     */
    where?: Prisma.ClanWarFightersWhereInput;
    /**
     * Limit how many ClanWarFighters to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarFightersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ClanWarFighters upsert
 */
export type ClanWarFightersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFighters
     */
    select?: Prisma.ClanWarFightersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWarFighters
     */
    omit?: Prisma.ClanWarFightersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarFightersInclude<ExtArgs> | null;
    /**
     * The filter to search for the ClanWarFighters to update in case it exists.
     */
    where: Prisma.ClanWarFightersWhereUniqueInput;
    /**
     * In case the ClanWarFighters found by the `where` argument doesn't exist, create a new ClanWarFighters with this data.
     */
    create: Prisma.XOR<Prisma.ClanWarFightersCreateInput, Prisma.ClanWarFightersUncheckedCreateInput>;
    /**
     * In case the ClanWarFighters was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ClanWarFightersUpdateInput, Prisma.ClanWarFightersUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanWarFighters delete
 */
export type ClanWarFightersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFighters
     */
    select?: Prisma.ClanWarFightersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWarFighters
     */
    omit?: Prisma.ClanWarFightersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarFightersInclude<ExtArgs> | null;
    /**
     * Filter which ClanWarFighters to delete.
     */
    where: Prisma.ClanWarFightersWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanWarFighters deleteMany
 */
export type ClanWarFightersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ClanWarFighters to delete
     */
    where?: Prisma.ClanWarFightersWhereInput;
    /**
     * Limit how many ClanWarFighters to delete.
     */
    limit?: number;
};
/**
 * ClanWarFighters.attackers
 */
export type ClanWarFighters$attackersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ClanWarFighters.defenders
 */
export type ClanWarFighters$defendersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ClanWarFighters without action
 */
export type ClanWarFightersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWarFighters
     */
    select?: Prisma.ClanWarFightersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWarFighters
     */
    omit?: Prisma.ClanWarFightersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarFightersInclude<ExtArgs> | null;
};
