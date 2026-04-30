import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TournamentGold
 *
 */
export type TournamentGoldModel = runtime.Types.Result.DefaultSelection<Prisma.$TournamentGoldPayload>;
export type AggregateTournamentGold = {
    _count: TournamentGoldCountAggregateOutputType | null;
    _avg: TournamentGoldAvgAggregateOutputType | null;
    _sum: TournamentGoldSumAggregateOutputType | null;
    _min: TournamentGoldMinAggregateOutputType | null;
    _max: TournamentGoldMaxAggregateOutputType | null;
};
export type TournamentGoldAvgAggregateOutputType = {
    gold: number | null;
};
export type TournamentGoldSumAggregateOutputType = {
    gold: number | null;
};
export type TournamentGoldMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    userId: string | null;
    gold: number | null;
};
export type TournamentGoldMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    userId: string | null;
    gold: number | null;
};
export type TournamentGoldCountAggregateOutputType = {
    id: number;
    date: number;
    userId: number;
    gold: number;
    _all: number;
};
export type TournamentGoldAvgAggregateInputType = {
    gold?: true;
};
export type TournamentGoldSumAggregateInputType = {
    gold?: true;
};
export type TournamentGoldMinAggregateInputType = {
    id?: true;
    date?: true;
    userId?: true;
    gold?: true;
};
export type TournamentGoldMaxAggregateInputType = {
    id?: true;
    date?: true;
    userId?: true;
    gold?: true;
};
export type TournamentGoldCountAggregateInputType = {
    id?: true;
    date?: true;
    userId?: true;
    gold?: true;
    _all?: true;
};
export type TournamentGoldAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentGold to aggregate.
     */
    where?: Prisma.TournamentGoldWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentGolds to fetch.
     */
    orderBy?: Prisma.TournamentGoldOrderByWithRelationInput | Prisma.TournamentGoldOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TournamentGoldWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentGolds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentGolds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TournamentGolds
    **/
    _count?: true | TournamentGoldCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TournamentGoldAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TournamentGoldSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TournamentGoldMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TournamentGoldMaxAggregateInputType;
};
export type GetTournamentGoldAggregateType<T extends TournamentGoldAggregateArgs> = {
    [P in keyof T & keyof AggregateTournamentGold]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTournamentGold[P]> : Prisma.GetScalarType<T[P], AggregateTournamentGold[P]>;
};
export type TournamentGoldGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentGoldWhereInput;
    orderBy?: Prisma.TournamentGoldOrderByWithAggregationInput | Prisma.TournamentGoldOrderByWithAggregationInput[];
    by: Prisma.TournamentGoldScalarFieldEnum[] | Prisma.TournamentGoldScalarFieldEnum;
    having?: Prisma.TournamentGoldScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TournamentGoldCountAggregateInputType | true;
    _avg?: TournamentGoldAvgAggregateInputType;
    _sum?: TournamentGoldSumAggregateInputType;
    _min?: TournamentGoldMinAggregateInputType;
    _max?: TournamentGoldMaxAggregateInputType;
};
export type TournamentGoldGroupByOutputType = {
    id: string;
    date: Date;
    userId: string;
    gold: number;
    _count: TournamentGoldCountAggregateOutputType | null;
    _avg: TournamentGoldAvgAggregateOutputType | null;
    _sum: TournamentGoldSumAggregateOutputType | null;
    _min: TournamentGoldMinAggregateOutputType | null;
    _max: TournamentGoldMaxAggregateOutputType | null;
};
export type GetTournamentGoldGroupByPayload<T extends TournamentGoldGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TournamentGoldGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TournamentGoldGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TournamentGoldGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TournamentGoldGroupByOutputType[P]>;
}>>;
export type TournamentGoldWhereInput = {
    AND?: Prisma.TournamentGoldWhereInput | Prisma.TournamentGoldWhereInput[];
    OR?: Prisma.TournamentGoldWhereInput[];
    NOT?: Prisma.TournamentGoldWhereInput | Prisma.TournamentGoldWhereInput[];
    id?: Prisma.UuidFilter<"TournamentGold"> | string;
    date?: Prisma.DateTimeFilter<"TournamentGold"> | Date | string;
    userId?: Prisma.UuidFilter<"TournamentGold"> | string;
    gold?: Prisma.IntFilter<"TournamentGold"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TournamentGoldOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type TournamentGoldWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TournamentGoldWhereInput | Prisma.TournamentGoldWhereInput[];
    OR?: Prisma.TournamentGoldWhereInput[];
    NOT?: Prisma.TournamentGoldWhereInput | Prisma.TournamentGoldWhereInput[];
    date?: Prisma.DateTimeFilter<"TournamentGold"> | Date | string;
    userId?: Prisma.UuidFilter<"TournamentGold"> | string;
    gold?: Prisma.IntFilter<"TournamentGold"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "id">;
export type TournamentGoldOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
    _count?: Prisma.TournamentGoldCountOrderByAggregateInput;
    _avg?: Prisma.TournamentGoldAvgOrderByAggregateInput;
    _max?: Prisma.TournamentGoldMaxOrderByAggregateInput;
    _min?: Prisma.TournamentGoldMinOrderByAggregateInput;
    _sum?: Prisma.TournamentGoldSumOrderByAggregateInput;
};
export type TournamentGoldScalarWhereWithAggregatesInput = {
    AND?: Prisma.TournamentGoldScalarWhereWithAggregatesInput | Prisma.TournamentGoldScalarWhereWithAggregatesInput[];
    OR?: Prisma.TournamentGoldScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TournamentGoldScalarWhereWithAggregatesInput | Prisma.TournamentGoldScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TournamentGold"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"TournamentGold"> | Date | string;
    userId?: Prisma.UuidWithAggregatesFilter<"TournamentGold"> | string;
    gold?: Prisma.IntWithAggregatesFilter<"TournamentGold"> | number;
};
export type TournamentGoldCreateInput = {
    id?: string;
    date: Date | string;
    gold: number;
    user: Prisma.UserCreateNestedOneWithoutTournamentGoldsInput;
};
export type TournamentGoldUncheckedCreateInput = {
    id?: string;
    date: Date | string;
    userId: string;
    gold: number;
};
export type TournamentGoldUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutTournamentGoldsNestedInput;
};
export type TournamentGoldUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentGoldCreateManyInput = {
    id?: string;
    date: Date | string;
    userId: string;
    gold: number;
};
export type TournamentGoldUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentGoldUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentGoldListRelationFilter = {
    every?: Prisma.TournamentGoldWhereInput;
    some?: Prisma.TournamentGoldWhereInput;
    none?: Prisma.TournamentGoldWhereInput;
};
export type TournamentGoldOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TournamentGoldCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
};
export type TournamentGoldAvgOrderByAggregateInput = {
    gold?: Prisma.SortOrder;
};
export type TournamentGoldMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
};
export type TournamentGoldMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    gold?: Prisma.SortOrder;
};
export type TournamentGoldSumOrderByAggregateInput = {
    gold?: Prisma.SortOrder;
};
export type TournamentGoldCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TournamentGoldCreateWithoutUserInput, Prisma.TournamentGoldUncheckedCreateWithoutUserInput> | Prisma.TournamentGoldCreateWithoutUserInput[] | Prisma.TournamentGoldUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TournamentGoldCreateOrConnectWithoutUserInput | Prisma.TournamentGoldCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TournamentGoldCreateManyUserInputEnvelope;
    connect?: Prisma.TournamentGoldWhereUniqueInput | Prisma.TournamentGoldWhereUniqueInput[];
};
export type TournamentGoldUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TournamentGoldCreateWithoutUserInput, Prisma.TournamentGoldUncheckedCreateWithoutUserInput> | Prisma.TournamentGoldCreateWithoutUserInput[] | Prisma.TournamentGoldUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TournamentGoldCreateOrConnectWithoutUserInput | Prisma.TournamentGoldCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TournamentGoldCreateManyUserInputEnvelope;
    connect?: Prisma.TournamentGoldWhereUniqueInput | Prisma.TournamentGoldWhereUniqueInput[];
};
export type TournamentGoldUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentGoldCreateWithoutUserInput, Prisma.TournamentGoldUncheckedCreateWithoutUserInput> | Prisma.TournamentGoldCreateWithoutUserInput[] | Prisma.TournamentGoldUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TournamentGoldCreateOrConnectWithoutUserInput | Prisma.TournamentGoldCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TournamentGoldUpsertWithWhereUniqueWithoutUserInput | Prisma.TournamentGoldUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TournamentGoldCreateManyUserInputEnvelope;
    set?: Prisma.TournamentGoldWhereUniqueInput | Prisma.TournamentGoldWhereUniqueInput[];
    disconnect?: Prisma.TournamentGoldWhereUniqueInput | Prisma.TournamentGoldWhereUniqueInput[];
    delete?: Prisma.TournamentGoldWhereUniqueInput | Prisma.TournamentGoldWhereUniqueInput[];
    connect?: Prisma.TournamentGoldWhereUniqueInput | Prisma.TournamentGoldWhereUniqueInput[];
    update?: Prisma.TournamentGoldUpdateWithWhereUniqueWithoutUserInput | Prisma.TournamentGoldUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TournamentGoldUpdateManyWithWhereWithoutUserInput | Prisma.TournamentGoldUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TournamentGoldScalarWhereInput | Prisma.TournamentGoldScalarWhereInput[];
};
export type TournamentGoldUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentGoldCreateWithoutUserInput, Prisma.TournamentGoldUncheckedCreateWithoutUserInput> | Prisma.TournamentGoldCreateWithoutUserInput[] | Prisma.TournamentGoldUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TournamentGoldCreateOrConnectWithoutUserInput | Prisma.TournamentGoldCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TournamentGoldUpsertWithWhereUniqueWithoutUserInput | Prisma.TournamentGoldUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TournamentGoldCreateManyUserInputEnvelope;
    set?: Prisma.TournamentGoldWhereUniqueInput | Prisma.TournamentGoldWhereUniqueInput[];
    disconnect?: Prisma.TournamentGoldWhereUniqueInput | Prisma.TournamentGoldWhereUniqueInput[];
    delete?: Prisma.TournamentGoldWhereUniqueInput | Prisma.TournamentGoldWhereUniqueInput[];
    connect?: Prisma.TournamentGoldWhereUniqueInput | Prisma.TournamentGoldWhereUniqueInput[];
    update?: Prisma.TournamentGoldUpdateWithWhereUniqueWithoutUserInput | Prisma.TournamentGoldUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TournamentGoldUpdateManyWithWhereWithoutUserInput | Prisma.TournamentGoldUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TournamentGoldScalarWhereInput | Prisma.TournamentGoldScalarWhereInput[];
};
export type TournamentGoldCreateWithoutUserInput = {
    id?: string;
    date: Date | string;
    gold: number;
};
export type TournamentGoldUncheckedCreateWithoutUserInput = {
    id?: string;
    date: Date | string;
    gold: number;
};
export type TournamentGoldCreateOrConnectWithoutUserInput = {
    where: Prisma.TournamentGoldWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentGoldCreateWithoutUserInput, Prisma.TournamentGoldUncheckedCreateWithoutUserInput>;
};
export type TournamentGoldCreateManyUserInputEnvelope = {
    data: Prisma.TournamentGoldCreateManyUserInput | Prisma.TournamentGoldCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TournamentGoldUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TournamentGoldWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentGoldUpdateWithoutUserInput, Prisma.TournamentGoldUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TournamentGoldCreateWithoutUserInput, Prisma.TournamentGoldUncheckedCreateWithoutUserInput>;
};
export type TournamentGoldUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TournamentGoldWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentGoldUpdateWithoutUserInput, Prisma.TournamentGoldUncheckedUpdateWithoutUserInput>;
};
export type TournamentGoldUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TournamentGoldScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentGoldUpdateManyMutationInput, Prisma.TournamentGoldUncheckedUpdateManyWithoutUserInput>;
};
export type TournamentGoldScalarWhereInput = {
    AND?: Prisma.TournamentGoldScalarWhereInput | Prisma.TournamentGoldScalarWhereInput[];
    OR?: Prisma.TournamentGoldScalarWhereInput[];
    NOT?: Prisma.TournamentGoldScalarWhereInput | Prisma.TournamentGoldScalarWhereInput[];
    id?: Prisma.UuidFilter<"TournamentGold"> | string;
    date?: Prisma.DateTimeFilter<"TournamentGold"> | Date | string;
    userId?: Prisma.UuidFilter<"TournamentGold"> | string;
    gold?: Prisma.IntFilter<"TournamentGold"> | number;
};
export type TournamentGoldCreateManyUserInput = {
    id?: string;
    date: Date | string;
    gold: number;
};
export type TournamentGoldUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentGoldUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentGoldUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gold?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentGoldSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    userId?: boolean;
    gold?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentGold"]>;
export type TournamentGoldSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    userId?: boolean;
    gold?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentGold"]>;
export type TournamentGoldSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    userId?: boolean;
    gold?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentGold"]>;
export type TournamentGoldSelectScalar = {
    id?: boolean;
    date?: boolean;
    userId?: boolean;
    gold?: boolean;
};
export type TournamentGoldOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "userId" | "gold", ExtArgs["result"]["tournamentGold"]>;
export type TournamentGoldInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TournamentGoldIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TournamentGoldIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TournamentGoldPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TournamentGold";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        userId: string;
        gold: number;
    }, ExtArgs["result"]["tournamentGold"]>;
    composites: {};
};
export type TournamentGoldGetPayload<S extends boolean | null | undefined | TournamentGoldDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload, S>;
export type TournamentGoldCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TournamentGoldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: TournamentGoldCountAggregateInputType | true;
};
export interface TournamentGoldDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TournamentGold'];
        meta: {
            name: 'TournamentGold';
        };
    };
    /**
     * Find zero or one TournamentGold that matches the filter.
     * @param {TournamentGoldFindUniqueArgs} args - Arguments to find a TournamentGold
     * @example
     * // Get one TournamentGold
     * const tournamentGold = await prisma.tournamentGold.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentGoldFindUniqueArgs>(args: Prisma.SelectSubset<T, TournamentGoldFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TournamentGoldClient<runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TournamentGold that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentGoldFindUniqueOrThrowArgs} args - Arguments to find a TournamentGold
     * @example
     * // Get one TournamentGold
     * const tournamentGold = await prisma.tournamentGold.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentGoldFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TournamentGoldFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentGoldClient<runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TournamentGold that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGoldFindFirstArgs} args - Arguments to find a TournamentGold
     * @example
     * // Get one TournamentGold
     * const tournamentGold = await prisma.tournamentGold.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentGoldFindFirstArgs>(args?: Prisma.SelectSubset<T, TournamentGoldFindFirstArgs<ExtArgs>>): Prisma.Prisma__TournamentGoldClient<runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TournamentGold that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGoldFindFirstOrThrowArgs} args - Arguments to find a TournamentGold
     * @example
     * // Get one TournamentGold
     * const tournamentGold = await prisma.tournamentGold.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentGoldFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TournamentGoldFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentGoldClient<runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TournamentGolds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGoldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentGolds
     * const tournamentGolds = await prisma.tournamentGold.findMany()
     *
     * // Get first 10 TournamentGolds
     * const tournamentGolds = await prisma.tournamentGold.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tournamentGoldWithIdOnly = await prisma.tournamentGold.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TournamentGoldFindManyArgs>(args?: Prisma.SelectSubset<T, TournamentGoldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TournamentGold.
     * @param {TournamentGoldCreateArgs} args - Arguments to create a TournamentGold.
     * @example
     * // Create one TournamentGold
     * const TournamentGold = await prisma.tournamentGold.create({
     *   data: {
     *     // ... data to create a TournamentGold
     *   }
     * })
     *
     */
    create<T extends TournamentGoldCreateArgs>(args: Prisma.SelectSubset<T, TournamentGoldCreateArgs<ExtArgs>>): Prisma.Prisma__TournamentGoldClient<runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TournamentGolds.
     * @param {TournamentGoldCreateManyArgs} args - Arguments to create many TournamentGolds.
     * @example
     * // Create many TournamentGolds
     * const tournamentGold = await prisma.tournamentGold.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TournamentGoldCreateManyArgs>(args?: Prisma.SelectSubset<T, TournamentGoldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TournamentGolds and returns the data saved in the database.
     * @param {TournamentGoldCreateManyAndReturnArgs} args - Arguments to create many TournamentGolds.
     * @example
     * // Create many TournamentGolds
     * const tournamentGold = await prisma.tournamentGold.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TournamentGolds and only return the `id`
     * const tournamentGoldWithIdOnly = await prisma.tournamentGold.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TournamentGoldCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TournamentGoldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TournamentGold.
     * @param {TournamentGoldDeleteArgs} args - Arguments to delete one TournamentGold.
     * @example
     * // Delete one TournamentGold
     * const TournamentGold = await prisma.tournamentGold.delete({
     *   where: {
     *     // ... filter to delete one TournamentGold
     *   }
     * })
     *
     */
    delete<T extends TournamentGoldDeleteArgs>(args: Prisma.SelectSubset<T, TournamentGoldDeleteArgs<ExtArgs>>): Prisma.Prisma__TournamentGoldClient<runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TournamentGold.
     * @param {TournamentGoldUpdateArgs} args - Arguments to update one TournamentGold.
     * @example
     * // Update one TournamentGold
     * const tournamentGold = await prisma.tournamentGold.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TournamentGoldUpdateArgs>(args: Prisma.SelectSubset<T, TournamentGoldUpdateArgs<ExtArgs>>): Prisma.Prisma__TournamentGoldClient<runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TournamentGolds.
     * @param {TournamentGoldDeleteManyArgs} args - Arguments to filter TournamentGolds to delete.
     * @example
     * // Delete a few TournamentGolds
     * const { count } = await prisma.tournamentGold.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TournamentGoldDeleteManyArgs>(args?: Prisma.SelectSubset<T, TournamentGoldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TournamentGolds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGoldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentGolds
     * const tournamentGold = await prisma.tournamentGold.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TournamentGoldUpdateManyArgs>(args: Prisma.SelectSubset<T, TournamentGoldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TournamentGolds and returns the data updated in the database.
     * @param {TournamentGoldUpdateManyAndReturnArgs} args - Arguments to update many TournamentGolds.
     * @example
     * // Update many TournamentGolds
     * const tournamentGold = await prisma.tournamentGold.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TournamentGolds and only return the `id`
     * const tournamentGoldWithIdOnly = await prisma.tournamentGold.updateManyAndReturn({
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
    updateManyAndReturn<T extends TournamentGoldUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TournamentGoldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TournamentGold.
     * @param {TournamentGoldUpsertArgs} args - Arguments to update or create a TournamentGold.
     * @example
     * // Update or create a TournamentGold
     * const tournamentGold = await prisma.tournamentGold.upsert({
     *   create: {
     *     // ... data to create a TournamentGold
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentGold we want to update
     *   }
     * })
     */
    upsert<T extends TournamentGoldUpsertArgs>(args: Prisma.SelectSubset<T, TournamentGoldUpsertArgs<ExtArgs>>): Prisma.Prisma__TournamentGoldClient<runtime.Types.Result.GetResult<Prisma.$TournamentGoldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TournamentGolds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGoldCountArgs} args - Arguments to filter TournamentGolds to count.
     * @example
     * // Count the number of TournamentGolds
     * const count = await prisma.tournamentGold.count({
     *   where: {
     *     // ... the filter for the TournamentGolds we want to count
     *   }
     * })
    **/
    count<T extends TournamentGoldCountArgs>(args?: Prisma.Subset<T, TournamentGoldCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TournamentGoldCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TournamentGold.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGoldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentGoldAggregateArgs>(args: Prisma.Subset<T, TournamentGoldAggregateArgs>): Prisma.PrismaPromise<GetTournamentGoldAggregateType<T>>;
    /**
     * Group by TournamentGold.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGoldGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TournamentGoldGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TournamentGoldGroupByArgs['orderBy'];
    } : {
        orderBy?: TournamentGoldGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TournamentGoldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGoldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TournamentGold model
     */
    readonly fields: TournamentGoldFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TournamentGold.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TournamentGoldClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the TournamentGold model
 */
export interface TournamentGoldFieldRefs {
    readonly id: Prisma.FieldRef<"TournamentGold", 'String'>;
    readonly date: Prisma.FieldRef<"TournamentGold", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"TournamentGold", 'String'>;
    readonly gold: Prisma.FieldRef<"TournamentGold", 'Int'>;
}
/**
 * TournamentGold findUnique
 */
export type TournamentGoldFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentGold to fetch.
     */
    where: Prisma.TournamentGoldWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentGold findUniqueOrThrow
 */
export type TournamentGoldFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentGold to fetch.
     */
    where: Prisma.TournamentGoldWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentGold findFirst
 */
export type TournamentGoldFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentGold to fetch.
     */
    where?: Prisma.TournamentGoldWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentGolds to fetch.
     */
    orderBy?: Prisma.TournamentGoldOrderByWithRelationInput | Prisma.TournamentGoldOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TournamentGolds.
     */
    cursor?: Prisma.TournamentGoldWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentGolds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentGolds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentGolds.
     */
    distinct?: Prisma.TournamentGoldScalarFieldEnum | Prisma.TournamentGoldScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentGold findFirstOrThrow
 */
export type TournamentGoldFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentGold to fetch.
     */
    where?: Prisma.TournamentGoldWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentGolds to fetch.
     */
    orderBy?: Prisma.TournamentGoldOrderByWithRelationInput | Prisma.TournamentGoldOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TournamentGolds.
     */
    cursor?: Prisma.TournamentGoldWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentGolds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentGolds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentGolds.
     */
    distinct?: Prisma.TournamentGoldScalarFieldEnum | Prisma.TournamentGoldScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentGold findMany
 */
export type TournamentGoldFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentGolds to fetch.
     */
    where?: Prisma.TournamentGoldWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentGolds to fetch.
     */
    orderBy?: Prisma.TournamentGoldOrderByWithRelationInput | Prisma.TournamentGoldOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TournamentGolds.
     */
    cursor?: Prisma.TournamentGoldWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentGolds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentGolds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentGolds.
     */
    distinct?: Prisma.TournamentGoldScalarFieldEnum | Prisma.TournamentGoldScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentGold create
 */
export type TournamentGoldCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a TournamentGold.
     */
    data: Prisma.XOR<Prisma.TournamentGoldCreateInput, Prisma.TournamentGoldUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentGold createMany
 */
export type TournamentGoldCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentGolds.
     */
    data: Prisma.TournamentGoldCreateManyInput | Prisma.TournamentGoldCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TournamentGold createManyAndReturn
 */
export type TournamentGoldCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGold
     */
    select?: Prisma.TournamentGoldSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentGold
     */
    omit?: Prisma.TournamentGoldOmit<ExtArgs> | null;
    /**
     * The data used to create many TournamentGolds.
     */
    data: Prisma.TournamentGoldCreateManyInput | Prisma.TournamentGoldCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentGoldIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TournamentGold update
 */
export type TournamentGoldUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a TournamentGold.
     */
    data: Prisma.XOR<Prisma.TournamentGoldUpdateInput, Prisma.TournamentGoldUncheckedUpdateInput>;
    /**
     * Choose, which TournamentGold to update.
     */
    where: Prisma.TournamentGoldWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentGold updateMany
 */
export type TournamentGoldUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentGolds.
     */
    data: Prisma.XOR<Prisma.TournamentGoldUpdateManyMutationInput, Prisma.TournamentGoldUncheckedUpdateManyInput>;
    /**
     * Filter which TournamentGolds to update
     */
    where?: Prisma.TournamentGoldWhereInput;
    /**
     * Limit how many TournamentGolds to update.
     */
    limit?: number;
};
/**
 * TournamentGold updateManyAndReturn
 */
export type TournamentGoldUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGold
     */
    select?: Prisma.TournamentGoldSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentGold
     */
    omit?: Prisma.TournamentGoldOmit<ExtArgs> | null;
    /**
     * The data used to update TournamentGolds.
     */
    data: Prisma.XOR<Prisma.TournamentGoldUpdateManyMutationInput, Prisma.TournamentGoldUncheckedUpdateManyInput>;
    /**
     * Filter which TournamentGolds to update
     */
    where?: Prisma.TournamentGoldWhereInput;
    /**
     * Limit how many TournamentGolds to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentGoldIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TournamentGold upsert
 */
export type TournamentGoldUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the TournamentGold to update in case it exists.
     */
    where: Prisma.TournamentGoldWhereUniqueInput;
    /**
     * In case the TournamentGold found by the `where` argument doesn't exist, create a new TournamentGold with this data.
     */
    create: Prisma.XOR<Prisma.TournamentGoldCreateInput, Prisma.TournamentGoldUncheckedCreateInput>;
    /**
     * In case the TournamentGold was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TournamentGoldUpdateInput, Prisma.TournamentGoldUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentGold delete
 */
export type TournamentGoldDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which TournamentGold to delete.
     */
    where: Prisma.TournamentGoldWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentGold deleteMany
 */
export type TournamentGoldDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentGolds to delete
     */
    where?: Prisma.TournamentGoldWhereInput;
    /**
     * Limit how many TournamentGolds to delete.
     */
    limit?: number;
};
/**
 * TournamentGold without action
 */
export type TournamentGoldDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
