import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TournamentXp
 *
 */
export type TournamentXpModel = runtime.Types.Result.DefaultSelection<Prisma.$TournamentXpPayload>;
export type AggregateTournamentXp = {
    _count: TournamentXpCountAggregateOutputType | null;
    _avg: TournamentXpAvgAggregateOutputType | null;
    _sum: TournamentXpSumAggregateOutputType | null;
    _min: TournamentXpMinAggregateOutputType | null;
    _max: TournamentXpMaxAggregateOutputType | null;
};
export type TournamentXpAvgAggregateOutputType = {
    xp: number | null;
};
export type TournamentXpSumAggregateOutputType = {
    xp: number | null;
};
export type TournamentXpMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    bruteId: string | null;
    xp: number | null;
};
export type TournamentXpMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    bruteId: string | null;
    xp: number | null;
};
export type TournamentXpCountAggregateOutputType = {
    id: number;
    date: number;
    bruteId: number;
    xp: number;
    _all: number;
};
export type TournamentXpAvgAggregateInputType = {
    xp?: true;
};
export type TournamentXpSumAggregateInputType = {
    xp?: true;
};
export type TournamentXpMinAggregateInputType = {
    id?: true;
    date?: true;
    bruteId?: true;
    xp?: true;
};
export type TournamentXpMaxAggregateInputType = {
    id?: true;
    date?: true;
    bruteId?: true;
    xp?: true;
};
export type TournamentXpCountAggregateInputType = {
    id?: true;
    date?: true;
    bruteId?: true;
    xp?: true;
    _all?: true;
};
export type TournamentXpAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentXp to aggregate.
     */
    where?: Prisma.TournamentXpWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentXps to fetch.
     */
    orderBy?: Prisma.TournamentXpOrderByWithRelationInput | Prisma.TournamentXpOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TournamentXpWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentXps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentXps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TournamentXps
    **/
    _count?: true | TournamentXpCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TournamentXpAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TournamentXpSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TournamentXpMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TournamentXpMaxAggregateInputType;
};
export type GetTournamentXpAggregateType<T extends TournamentXpAggregateArgs> = {
    [P in keyof T & keyof AggregateTournamentXp]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTournamentXp[P]> : Prisma.GetScalarType<T[P], AggregateTournamentXp[P]>;
};
export type TournamentXpGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentXpWhereInput;
    orderBy?: Prisma.TournamentXpOrderByWithAggregationInput | Prisma.TournamentXpOrderByWithAggregationInput[];
    by: Prisma.TournamentXpScalarFieldEnum[] | Prisma.TournamentXpScalarFieldEnum;
    having?: Prisma.TournamentXpScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TournamentXpCountAggregateInputType | true;
    _avg?: TournamentXpAvgAggregateInputType;
    _sum?: TournamentXpSumAggregateInputType;
    _min?: TournamentXpMinAggregateInputType;
    _max?: TournamentXpMaxAggregateInputType;
};
export type TournamentXpGroupByOutputType = {
    id: string;
    date: Date;
    bruteId: string;
    xp: number;
    _count: TournamentXpCountAggregateOutputType | null;
    _avg: TournamentXpAvgAggregateOutputType | null;
    _sum: TournamentXpSumAggregateOutputType | null;
    _min: TournamentXpMinAggregateOutputType | null;
    _max: TournamentXpMaxAggregateOutputType | null;
};
export type GetTournamentXpGroupByPayload<T extends TournamentXpGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TournamentXpGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TournamentXpGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TournamentXpGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TournamentXpGroupByOutputType[P]>;
}>>;
export type TournamentXpWhereInput = {
    AND?: Prisma.TournamentXpWhereInput | Prisma.TournamentXpWhereInput[];
    OR?: Prisma.TournamentXpWhereInput[];
    NOT?: Prisma.TournamentXpWhereInput | Prisma.TournamentXpWhereInput[];
    id?: Prisma.UuidFilter<"TournamentXp"> | string;
    date?: Prisma.DateTimeFilter<"TournamentXp"> | Date | string;
    bruteId?: Prisma.UuidFilter<"TournamentXp"> | string;
    xp?: Prisma.IntFilter<"TournamentXp"> | number;
    brute?: Prisma.XOR<Prisma.BruteScalarRelationFilter, Prisma.BruteWhereInput>;
};
export type TournamentXpOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    xp?: Prisma.SortOrder;
    brute?: Prisma.BruteOrderByWithRelationInput;
};
export type TournamentXpWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TournamentXpWhereInput | Prisma.TournamentXpWhereInput[];
    OR?: Prisma.TournamentXpWhereInput[];
    NOT?: Prisma.TournamentXpWhereInput | Prisma.TournamentXpWhereInput[];
    date?: Prisma.DateTimeFilter<"TournamentXp"> | Date | string;
    bruteId?: Prisma.UuidFilter<"TournamentXp"> | string;
    xp?: Prisma.IntFilter<"TournamentXp"> | number;
    brute?: Prisma.XOR<Prisma.BruteScalarRelationFilter, Prisma.BruteWhereInput>;
}, "id" | "id">;
export type TournamentXpOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    xp?: Prisma.SortOrder;
    _count?: Prisma.TournamentXpCountOrderByAggregateInput;
    _avg?: Prisma.TournamentXpAvgOrderByAggregateInput;
    _max?: Prisma.TournamentXpMaxOrderByAggregateInput;
    _min?: Prisma.TournamentXpMinOrderByAggregateInput;
    _sum?: Prisma.TournamentXpSumOrderByAggregateInput;
};
export type TournamentXpScalarWhereWithAggregatesInput = {
    AND?: Prisma.TournamentXpScalarWhereWithAggregatesInput | Prisma.TournamentXpScalarWhereWithAggregatesInput[];
    OR?: Prisma.TournamentXpScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TournamentXpScalarWhereWithAggregatesInput | Prisma.TournamentXpScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TournamentXp"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"TournamentXp"> | Date | string;
    bruteId?: Prisma.UuidWithAggregatesFilter<"TournamentXp"> | string;
    xp?: Prisma.IntWithAggregatesFilter<"TournamentXp"> | number;
};
export type TournamentXpCreateInput = {
    id?: string;
    date: Date | string;
    xp: number;
    brute: Prisma.BruteCreateNestedOneWithoutTournamentXpsInput;
};
export type TournamentXpUncheckedCreateInput = {
    id?: string;
    date: Date | string;
    bruteId: string;
    xp: number;
};
export type TournamentXpUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    xp?: Prisma.IntFieldUpdateOperationsInput | number;
    brute?: Prisma.BruteUpdateOneRequiredWithoutTournamentXpsNestedInput;
};
export type TournamentXpUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bruteId?: Prisma.StringFieldUpdateOperationsInput | string;
    xp?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentXpCreateManyInput = {
    id?: string;
    date: Date | string;
    bruteId: string;
    xp: number;
};
export type TournamentXpUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    xp?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentXpUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bruteId?: Prisma.StringFieldUpdateOperationsInput | string;
    xp?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentXpListRelationFilter = {
    every?: Prisma.TournamentXpWhereInput;
    some?: Prisma.TournamentXpWhereInput;
    none?: Prisma.TournamentXpWhereInput;
};
export type TournamentXpOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TournamentXpCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    xp?: Prisma.SortOrder;
};
export type TournamentXpAvgOrderByAggregateInput = {
    xp?: Prisma.SortOrder;
};
export type TournamentXpMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    xp?: Prisma.SortOrder;
};
export type TournamentXpMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    xp?: Prisma.SortOrder;
};
export type TournamentXpSumOrderByAggregateInput = {
    xp?: Prisma.SortOrder;
};
export type TournamentXpCreateNestedManyWithoutBruteInput = {
    create?: Prisma.XOR<Prisma.TournamentXpCreateWithoutBruteInput, Prisma.TournamentXpUncheckedCreateWithoutBruteInput> | Prisma.TournamentXpCreateWithoutBruteInput[] | Prisma.TournamentXpUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.TournamentXpCreateOrConnectWithoutBruteInput | Prisma.TournamentXpCreateOrConnectWithoutBruteInput[];
    createMany?: Prisma.TournamentXpCreateManyBruteInputEnvelope;
    connect?: Prisma.TournamentXpWhereUniqueInput | Prisma.TournamentXpWhereUniqueInput[];
};
export type TournamentXpUncheckedCreateNestedManyWithoutBruteInput = {
    create?: Prisma.XOR<Prisma.TournamentXpCreateWithoutBruteInput, Prisma.TournamentXpUncheckedCreateWithoutBruteInput> | Prisma.TournamentXpCreateWithoutBruteInput[] | Prisma.TournamentXpUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.TournamentXpCreateOrConnectWithoutBruteInput | Prisma.TournamentXpCreateOrConnectWithoutBruteInput[];
    createMany?: Prisma.TournamentXpCreateManyBruteInputEnvelope;
    connect?: Prisma.TournamentXpWhereUniqueInput | Prisma.TournamentXpWhereUniqueInput[];
};
export type TournamentXpUpdateManyWithoutBruteNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentXpCreateWithoutBruteInput, Prisma.TournamentXpUncheckedCreateWithoutBruteInput> | Prisma.TournamentXpCreateWithoutBruteInput[] | Prisma.TournamentXpUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.TournamentXpCreateOrConnectWithoutBruteInput | Prisma.TournamentXpCreateOrConnectWithoutBruteInput[];
    upsert?: Prisma.TournamentXpUpsertWithWhereUniqueWithoutBruteInput | Prisma.TournamentXpUpsertWithWhereUniqueWithoutBruteInput[];
    createMany?: Prisma.TournamentXpCreateManyBruteInputEnvelope;
    set?: Prisma.TournamentXpWhereUniqueInput | Prisma.TournamentXpWhereUniqueInput[];
    disconnect?: Prisma.TournamentXpWhereUniqueInput | Prisma.TournamentXpWhereUniqueInput[];
    delete?: Prisma.TournamentXpWhereUniqueInput | Prisma.TournamentXpWhereUniqueInput[];
    connect?: Prisma.TournamentXpWhereUniqueInput | Prisma.TournamentXpWhereUniqueInput[];
    update?: Prisma.TournamentXpUpdateWithWhereUniqueWithoutBruteInput | Prisma.TournamentXpUpdateWithWhereUniqueWithoutBruteInput[];
    updateMany?: Prisma.TournamentXpUpdateManyWithWhereWithoutBruteInput | Prisma.TournamentXpUpdateManyWithWhereWithoutBruteInput[];
    deleteMany?: Prisma.TournamentXpScalarWhereInput | Prisma.TournamentXpScalarWhereInput[];
};
export type TournamentXpUncheckedUpdateManyWithoutBruteNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentXpCreateWithoutBruteInput, Prisma.TournamentXpUncheckedCreateWithoutBruteInput> | Prisma.TournamentXpCreateWithoutBruteInput[] | Prisma.TournamentXpUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.TournamentXpCreateOrConnectWithoutBruteInput | Prisma.TournamentXpCreateOrConnectWithoutBruteInput[];
    upsert?: Prisma.TournamentXpUpsertWithWhereUniqueWithoutBruteInput | Prisma.TournamentXpUpsertWithWhereUniqueWithoutBruteInput[];
    createMany?: Prisma.TournamentXpCreateManyBruteInputEnvelope;
    set?: Prisma.TournamentXpWhereUniqueInput | Prisma.TournamentXpWhereUniqueInput[];
    disconnect?: Prisma.TournamentXpWhereUniqueInput | Prisma.TournamentXpWhereUniqueInput[];
    delete?: Prisma.TournamentXpWhereUniqueInput | Prisma.TournamentXpWhereUniqueInput[];
    connect?: Prisma.TournamentXpWhereUniqueInput | Prisma.TournamentXpWhereUniqueInput[];
    update?: Prisma.TournamentXpUpdateWithWhereUniqueWithoutBruteInput | Prisma.TournamentXpUpdateWithWhereUniqueWithoutBruteInput[];
    updateMany?: Prisma.TournamentXpUpdateManyWithWhereWithoutBruteInput | Prisma.TournamentXpUpdateManyWithWhereWithoutBruteInput[];
    deleteMany?: Prisma.TournamentXpScalarWhereInput | Prisma.TournamentXpScalarWhereInput[];
};
export type TournamentXpCreateWithoutBruteInput = {
    id?: string;
    date: Date | string;
    xp: number;
};
export type TournamentXpUncheckedCreateWithoutBruteInput = {
    id?: string;
    date: Date | string;
    xp: number;
};
export type TournamentXpCreateOrConnectWithoutBruteInput = {
    where: Prisma.TournamentXpWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentXpCreateWithoutBruteInput, Prisma.TournamentXpUncheckedCreateWithoutBruteInput>;
};
export type TournamentXpCreateManyBruteInputEnvelope = {
    data: Prisma.TournamentXpCreateManyBruteInput | Prisma.TournamentXpCreateManyBruteInput[];
    skipDuplicates?: boolean;
};
export type TournamentXpUpsertWithWhereUniqueWithoutBruteInput = {
    where: Prisma.TournamentXpWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentXpUpdateWithoutBruteInput, Prisma.TournamentXpUncheckedUpdateWithoutBruteInput>;
    create: Prisma.XOR<Prisma.TournamentXpCreateWithoutBruteInput, Prisma.TournamentXpUncheckedCreateWithoutBruteInput>;
};
export type TournamentXpUpdateWithWhereUniqueWithoutBruteInput = {
    where: Prisma.TournamentXpWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentXpUpdateWithoutBruteInput, Prisma.TournamentXpUncheckedUpdateWithoutBruteInput>;
};
export type TournamentXpUpdateManyWithWhereWithoutBruteInput = {
    where: Prisma.TournamentXpScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentXpUpdateManyMutationInput, Prisma.TournamentXpUncheckedUpdateManyWithoutBruteInput>;
};
export type TournamentXpScalarWhereInput = {
    AND?: Prisma.TournamentXpScalarWhereInput | Prisma.TournamentXpScalarWhereInput[];
    OR?: Prisma.TournamentXpScalarWhereInput[];
    NOT?: Prisma.TournamentXpScalarWhereInput | Prisma.TournamentXpScalarWhereInput[];
    id?: Prisma.UuidFilter<"TournamentXp"> | string;
    date?: Prisma.DateTimeFilter<"TournamentXp"> | Date | string;
    bruteId?: Prisma.UuidFilter<"TournamentXp"> | string;
    xp?: Prisma.IntFilter<"TournamentXp"> | number;
};
export type TournamentXpCreateManyBruteInput = {
    id?: string;
    date: Date | string;
    xp: number;
};
export type TournamentXpUpdateWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    xp?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentXpUncheckedUpdateWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    xp?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentXpUncheckedUpdateManyWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    xp?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentXpSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    bruteId?: boolean;
    xp?: boolean;
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentXp"]>;
export type TournamentXpSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    bruteId?: boolean;
    xp?: boolean;
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentXp"]>;
export type TournamentXpSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    bruteId?: boolean;
    xp?: boolean;
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentXp"]>;
export type TournamentXpSelectScalar = {
    id?: boolean;
    date?: boolean;
    bruteId?: boolean;
    xp?: boolean;
};
export type TournamentXpOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "bruteId" | "xp", ExtArgs["result"]["tournamentXp"]>;
export type TournamentXpInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
};
export type TournamentXpIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
};
export type TournamentXpIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
};
export type $TournamentXpPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TournamentXp";
    objects: {
        brute: Prisma.$BrutePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        bruteId: string;
        xp: number;
    }, ExtArgs["result"]["tournamentXp"]>;
    composites: {};
};
export type TournamentXpGetPayload<S extends boolean | null | undefined | TournamentXpDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TournamentXpPayload, S>;
export type TournamentXpCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TournamentXpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: TournamentXpCountAggregateInputType | true;
};
export interface TournamentXpDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TournamentXp'];
        meta: {
            name: 'TournamentXp';
        };
    };
    /**
     * Find zero or one TournamentXp that matches the filter.
     * @param {TournamentXpFindUniqueArgs} args - Arguments to find a TournamentXp
     * @example
     * // Get one TournamentXp
     * const tournamentXp = await prisma.tournamentXp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentXpFindUniqueArgs>(args: Prisma.SelectSubset<T, TournamentXpFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TournamentXpClient<runtime.Types.Result.GetResult<Prisma.$TournamentXpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TournamentXp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentXpFindUniqueOrThrowArgs} args - Arguments to find a TournamentXp
     * @example
     * // Get one TournamentXp
     * const tournamentXp = await prisma.tournamentXp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentXpFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TournamentXpFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentXpClient<runtime.Types.Result.GetResult<Prisma.$TournamentXpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TournamentXp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentXpFindFirstArgs} args - Arguments to find a TournamentXp
     * @example
     * // Get one TournamentXp
     * const tournamentXp = await prisma.tournamentXp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentXpFindFirstArgs>(args?: Prisma.SelectSubset<T, TournamentXpFindFirstArgs<ExtArgs>>): Prisma.Prisma__TournamentXpClient<runtime.Types.Result.GetResult<Prisma.$TournamentXpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TournamentXp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentXpFindFirstOrThrowArgs} args - Arguments to find a TournamentXp
     * @example
     * // Get one TournamentXp
     * const tournamentXp = await prisma.tournamentXp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentXpFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TournamentXpFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentXpClient<runtime.Types.Result.GetResult<Prisma.$TournamentXpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TournamentXps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentXpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentXps
     * const tournamentXps = await prisma.tournamentXp.findMany()
     *
     * // Get first 10 TournamentXps
     * const tournamentXps = await prisma.tournamentXp.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tournamentXpWithIdOnly = await prisma.tournamentXp.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TournamentXpFindManyArgs>(args?: Prisma.SelectSubset<T, TournamentXpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentXpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TournamentXp.
     * @param {TournamentXpCreateArgs} args - Arguments to create a TournamentXp.
     * @example
     * // Create one TournamentXp
     * const TournamentXp = await prisma.tournamentXp.create({
     *   data: {
     *     // ... data to create a TournamentXp
     *   }
     * })
     *
     */
    create<T extends TournamentXpCreateArgs>(args: Prisma.SelectSubset<T, TournamentXpCreateArgs<ExtArgs>>): Prisma.Prisma__TournamentXpClient<runtime.Types.Result.GetResult<Prisma.$TournamentXpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TournamentXps.
     * @param {TournamentXpCreateManyArgs} args - Arguments to create many TournamentXps.
     * @example
     * // Create many TournamentXps
     * const tournamentXp = await prisma.tournamentXp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TournamentXpCreateManyArgs>(args?: Prisma.SelectSubset<T, TournamentXpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TournamentXps and returns the data saved in the database.
     * @param {TournamentXpCreateManyAndReturnArgs} args - Arguments to create many TournamentXps.
     * @example
     * // Create many TournamentXps
     * const tournamentXp = await prisma.tournamentXp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TournamentXps and only return the `id`
     * const tournamentXpWithIdOnly = await prisma.tournamentXp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TournamentXpCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TournamentXpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentXpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TournamentXp.
     * @param {TournamentXpDeleteArgs} args - Arguments to delete one TournamentXp.
     * @example
     * // Delete one TournamentXp
     * const TournamentXp = await prisma.tournamentXp.delete({
     *   where: {
     *     // ... filter to delete one TournamentXp
     *   }
     * })
     *
     */
    delete<T extends TournamentXpDeleteArgs>(args: Prisma.SelectSubset<T, TournamentXpDeleteArgs<ExtArgs>>): Prisma.Prisma__TournamentXpClient<runtime.Types.Result.GetResult<Prisma.$TournamentXpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TournamentXp.
     * @param {TournamentXpUpdateArgs} args - Arguments to update one TournamentXp.
     * @example
     * // Update one TournamentXp
     * const tournamentXp = await prisma.tournamentXp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TournamentXpUpdateArgs>(args: Prisma.SelectSubset<T, TournamentXpUpdateArgs<ExtArgs>>): Prisma.Prisma__TournamentXpClient<runtime.Types.Result.GetResult<Prisma.$TournamentXpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TournamentXps.
     * @param {TournamentXpDeleteManyArgs} args - Arguments to filter TournamentXps to delete.
     * @example
     * // Delete a few TournamentXps
     * const { count } = await prisma.tournamentXp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TournamentXpDeleteManyArgs>(args?: Prisma.SelectSubset<T, TournamentXpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TournamentXps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentXpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentXps
     * const tournamentXp = await prisma.tournamentXp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TournamentXpUpdateManyArgs>(args: Prisma.SelectSubset<T, TournamentXpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TournamentXps and returns the data updated in the database.
     * @param {TournamentXpUpdateManyAndReturnArgs} args - Arguments to update many TournamentXps.
     * @example
     * // Update many TournamentXps
     * const tournamentXp = await prisma.tournamentXp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TournamentXps and only return the `id`
     * const tournamentXpWithIdOnly = await prisma.tournamentXp.updateManyAndReturn({
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
    updateManyAndReturn<T extends TournamentXpUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TournamentXpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentXpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TournamentXp.
     * @param {TournamentXpUpsertArgs} args - Arguments to update or create a TournamentXp.
     * @example
     * // Update or create a TournamentXp
     * const tournamentXp = await prisma.tournamentXp.upsert({
     *   create: {
     *     // ... data to create a TournamentXp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentXp we want to update
     *   }
     * })
     */
    upsert<T extends TournamentXpUpsertArgs>(args: Prisma.SelectSubset<T, TournamentXpUpsertArgs<ExtArgs>>): Prisma.Prisma__TournamentXpClient<runtime.Types.Result.GetResult<Prisma.$TournamentXpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TournamentXps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentXpCountArgs} args - Arguments to filter TournamentXps to count.
     * @example
     * // Count the number of TournamentXps
     * const count = await prisma.tournamentXp.count({
     *   where: {
     *     // ... the filter for the TournamentXps we want to count
     *   }
     * })
    **/
    count<T extends TournamentXpCountArgs>(args?: Prisma.Subset<T, TournamentXpCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TournamentXpCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TournamentXp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentXpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentXpAggregateArgs>(args: Prisma.Subset<T, TournamentXpAggregateArgs>): Prisma.PrismaPromise<GetTournamentXpAggregateType<T>>;
    /**
     * Group by TournamentXp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentXpGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TournamentXpGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TournamentXpGroupByArgs['orderBy'];
    } : {
        orderBy?: TournamentXpGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TournamentXpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentXpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TournamentXp model
     */
    readonly fields: TournamentXpFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TournamentXp.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TournamentXpClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brute<T extends Prisma.BruteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BruteDefaultArgs<ExtArgs>>): Prisma.Prisma__BruteClient<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the TournamentXp model
 */
export interface TournamentXpFieldRefs {
    readonly id: Prisma.FieldRef<"TournamentXp", 'String'>;
    readonly date: Prisma.FieldRef<"TournamentXp", 'DateTime'>;
    readonly bruteId: Prisma.FieldRef<"TournamentXp", 'String'>;
    readonly xp: Prisma.FieldRef<"TournamentXp", 'Int'>;
}
/**
 * TournamentXp findUnique
 */
export type TournamentXpFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentXp
     */
    select?: Prisma.TournamentXpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentXp
     */
    omit?: Prisma.TournamentXpOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentXpInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentXp to fetch.
     */
    where: Prisma.TournamentXpWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentXp findUniqueOrThrow
 */
export type TournamentXpFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentXp
     */
    select?: Prisma.TournamentXpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentXp
     */
    omit?: Prisma.TournamentXpOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentXpInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentXp to fetch.
     */
    where: Prisma.TournamentXpWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentXp findFirst
 */
export type TournamentXpFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentXp
     */
    select?: Prisma.TournamentXpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentXp
     */
    omit?: Prisma.TournamentXpOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentXpInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentXp to fetch.
     */
    where?: Prisma.TournamentXpWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentXps to fetch.
     */
    orderBy?: Prisma.TournamentXpOrderByWithRelationInput | Prisma.TournamentXpOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TournamentXps.
     */
    cursor?: Prisma.TournamentXpWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentXps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentXps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentXps.
     */
    distinct?: Prisma.TournamentXpScalarFieldEnum | Prisma.TournamentXpScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentXp findFirstOrThrow
 */
export type TournamentXpFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentXp
     */
    select?: Prisma.TournamentXpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentXp
     */
    omit?: Prisma.TournamentXpOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentXpInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentXp to fetch.
     */
    where?: Prisma.TournamentXpWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentXps to fetch.
     */
    orderBy?: Prisma.TournamentXpOrderByWithRelationInput | Prisma.TournamentXpOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TournamentXps.
     */
    cursor?: Prisma.TournamentXpWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentXps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentXps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentXps.
     */
    distinct?: Prisma.TournamentXpScalarFieldEnum | Prisma.TournamentXpScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentXp findMany
 */
export type TournamentXpFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentXp
     */
    select?: Prisma.TournamentXpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentXp
     */
    omit?: Prisma.TournamentXpOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentXpInclude<ExtArgs> | null;
    /**
     * Filter, which TournamentXps to fetch.
     */
    where?: Prisma.TournamentXpWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentXps to fetch.
     */
    orderBy?: Prisma.TournamentXpOrderByWithRelationInput | Prisma.TournamentXpOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TournamentXps.
     */
    cursor?: Prisma.TournamentXpWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentXps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentXps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentXps.
     */
    distinct?: Prisma.TournamentXpScalarFieldEnum | Prisma.TournamentXpScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentXp create
 */
export type TournamentXpCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentXp
     */
    select?: Prisma.TournamentXpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentXp
     */
    omit?: Prisma.TournamentXpOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentXpInclude<ExtArgs> | null;
    /**
     * The data needed to create a TournamentXp.
     */
    data: Prisma.XOR<Prisma.TournamentXpCreateInput, Prisma.TournamentXpUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentXp createMany
 */
export type TournamentXpCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentXps.
     */
    data: Prisma.TournamentXpCreateManyInput | Prisma.TournamentXpCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TournamentXp createManyAndReturn
 */
export type TournamentXpCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentXp
     */
    select?: Prisma.TournamentXpSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentXp
     */
    omit?: Prisma.TournamentXpOmit<ExtArgs> | null;
    /**
     * The data used to create many TournamentXps.
     */
    data: Prisma.TournamentXpCreateManyInput | Prisma.TournamentXpCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentXpIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TournamentXp update
 */
export type TournamentXpUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentXp
     */
    select?: Prisma.TournamentXpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentXp
     */
    omit?: Prisma.TournamentXpOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentXpInclude<ExtArgs> | null;
    /**
     * The data needed to update a TournamentXp.
     */
    data: Prisma.XOR<Prisma.TournamentXpUpdateInput, Prisma.TournamentXpUncheckedUpdateInput>;
    /**
     * Choose, which TournamentXp to update.
     */
    where: Prisma.TournamentXpWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentXp updateMany
 */
export type TournamentXpUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentXps.
     */
    data: Prisma.XOR<Prisma.TournamentXpUpdateManyMutationInput, Prisma.TournamentXpUncheckedUpdateManyInput>;
    /**
     * Filter which TournamentXps to update
     */
    where?: Prisma.TournamentXpWhereInput;
    /**
     * Limit how many TournamentXps to update.
     */
    limit?: number;
};
/**
 * TournamentXp updateManyAndReturn
 */
export type TournamentXpUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentXp
     */
    select?: Prisma.TournamentXpSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentXp
     */
    omit?: Prisma.TournamentXpOmit<ExtArgs> | null;
    /**
     * The data used to update TournamentXps.
     */
    data: Prisma.XOR<Prisma.TournamentXpUpdateManyMutationInput, Prisma.TournamentXpUncheckedUpdateManyInput>;
    /**
     * Filter which TournamentXps to update
     */
    where?: Prisma.TournamentXpWhereInput;
    /**
     * Limit how many TournamentXps to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentXpIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TournamentXp upsert
 */
export type TournamentXpUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentXp
     */
    select?: Prisma.TournamentXpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentXp
     */
    omit?: Prisma.TournamentXpOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentXpInclude<ExtArgs> | null;
    /**
     * The filter to search for the TournamentXp to update in case it exists.
     */
    where: Prisma.TournamentXpWhereUniqueInput;
    /**
     * In case the TournamentXp found by the `where` argument doesn't exist, create a new TournamentXp with this data.
     */
    create: Prisma.XOR<Prisma.TournamentXpCreateInput, Prisma.TournamentXpUncheckedCreateInput>;
    /**
     * In case the TournamentXp was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TournamentXpUpdateInput, Prisma.TournamentXpUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentXp delete
 */
export type TournamentXpDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentXp
     */
    select?: Prisma.TournamentXpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentXp
     */
    omit?: Prisma.TournamentXpOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentXpInclude<ExtArgs> | null;
    /**
     * Filter which TournamentXp to delete.
     */
    where: Prisma.TournamentXpWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentXp deleteMany
 */
export type TournamentXpDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentXps to delete
     */
    where?: Prisma.TournamentXpWhereInput;
    /**
     * Limit how many TournamentXps to delete.
     */
    limit?: number;
};
/**
 * TournamentXp without action
 */
export type TournamentXpDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentXp
     */
    select?: Prisma.TournamentXpSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentXp
     */
    omit?: Prisma.TournamentXpOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentXpInclude<ExtArgs> | null;
};
