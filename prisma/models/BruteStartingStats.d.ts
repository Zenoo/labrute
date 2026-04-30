import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model BruteStartingStats
 *
 */
export type BruteStartingStatsModel = runtime.Types.Result.DefaultSelection<Prisma.$BruteStartingStatsPayload>;
export type AggregateBruteStartingStats = {
    _count: BruteStartingStatsCountAggregateOutputType | null;
    _avg: BruteStartingStatsAvgAggregateOutputType | null;
    _sum: BruteStartingStatsSumAggregateOutputType | null;
    _min: BruteStartingStatsMinAggregateOutputType | null;
    _max: BruteStartingStatsMaxAggregateOutputType | null;
};
export type BruteStartingStatsAvgAggregateOutputType = {
    endurance: number | null;
    strength: number | null;
    agility: number | null;
    speed: number | null;
};
export type BruteStartingStatsSumAggregateOutputType = {
    endurance: number | null;
    strength: number | null;
    agility: number | null;
    speed: number | null;
};
export type BruteStartingStatsMinAggregateOutputType = {
    id: string | null;
    endurance: number | null;
    strength: number | null;
    agility: number | null;
    speed: number | null;
    bruteId: string | null;
};
export type BruteStartingStatsMaxAggregateOutputType = {
    id: string | null;
    endurance: number | null;
    strength: number | null;
    agility: number | null;
    speed: number | null;
    bruteId: string | null;
};
export type BruteStartingStatsCountAggregateOutputType = {
    id: number;
    endurance: number;
    strength: number;
    agility: number;
    speed: number;
    bruteId: number;
    _all: number;
};
export type BruteStartingStatsAvgAggregateInputType = {
    endurance?: true;
    strength?: true;
    agility?: true;
    speed?: true;
};
export type BruteStartingStatsSumAggregateInputType = {
    endurance?: true;
    strength?: true;
    agility?: true;
    speed?: true;
};
export type BruteStartingStatsMinAggregateInputType = {
    id?: true;
    endurance?: true;
    strength?: true;
    agility?: true;
    speed?: true;
    bruteId?: true;
};
export type BruteStartingStatsMaxAggregateInputType = {
    id?: true;
    endurance?: true;
    strength?: true;
    agility?: true;
    speed?: true;
    bruteId?: true;
};
export type BruteStartingStatsCountAggregateInputType = {
    id?: true;
    endurance?: true;
    strength?: true;
    agility?: true;
    speed?: true;
    bruteId?: true;
    _all?: true;
};
export type BruteStartingStatsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BruteStartingStats to aggregate.
     */
    where?: Prisma.BruteStartingStatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BruteStartingStats to fetch.
     */
    orderBy?: Prisma.BruteStartingStatsOrderByWithRelationInput | Prisma.BruteStartingStatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BruteStartingStatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BruteStartingStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BruteStartingStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BruteStartingStats
    **/
    _count?: true | BruteStartingStatsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BruteStartingStatsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BruteStartingStatsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BruteStartingStatsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BruteStartingStatsMaxAggregateInputType;
};
export type GetBruteStartingStatsAggregateType<T extends BruteStartingStatsAggregateArgs> = {
    [P in keyof T & keyof AggregateBruteStartingStats]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBruteStartingStats[P]> : Prisma.GetScalarType<T[P], AggregateBruteStartingStats[P]>;
};
export type BruteStartingStatsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BruteStartingStatsWhereInput;
    orderBy?: Prisma.BruteStartingStatsOrderByWithAggregationInput | Prisma.BruteStartingStatsOrderByWithAggregationInput[];
    by: Prisma.BruteStartingStatsScalarFieldEnum[] | Prisma.BruteStartingStatsScalarFieldEnum;
    having?: Prisma.BruteStartingStatsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BruteStartingStatsCountAggregateInputType | true;
    _avg?: BruteStartingStatsAvgAggregateInputType;
    _sum?: BruteStartingStatsSumAggregateInputType;
    _min?: BruteStartingStatsMinAggregateInputType;
    _max?: BruteStartingStatsMaxAggregateInputType;
};
export type BruteStartingStatsGroupByOutputType = {
    id: string;
    endurance: number;
    strength: number;
    agility: number;
    speed: number;
    bruteId: string;
    _count: BruteStartingStatsCountAggregateOutputType | null;
    _avg: BruteStartingStatsAvgAggregateOutputType | null;
    _sum: BruteStartingStatsSumAggregateOutputType | null;
    _min: BruteStartingStatsMinAggregateOutputType | null;
    _max: BruteStartingStatsMaxAggregateOutputType | null;
};
export type GetBruteStartingStatsGroupByPayload<T extends BruteStartingStatsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BruteStartingStatsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BruteStartingStatsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BruteStartingStatsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BruteStartingStatsGroupByOutputType[P]>;
}>>;
export type BruteStartingStatsWhereInput = {
    AND?: Prisma.BruteStartingStatsWhereInput | Prisma.BruteStartingStatsWhereInput[];
    OR?: Prisma.BruteStartingStatsWhereInput[];
    NOT?: Prisma.BruteStartingStatsWhereInput | Prisma.BruteStartingStatsWhereInput[];
    id?: Prisma.UuidFilter<"BruteStartingStats"> | string;
    endurance?: Prisma.IntFilter<"BruteStartingStats"> | number;
    strength?: Prisma.IntFilter<"BruteStartingStats"> | number;
    agility?: Prisma.IntFilter<"BruteStartingStats"> | number;
    speed?: Prisma.IntFilter<"BruteStartingStats"> | number;
    bruteId?: Prisma.UuidFilter<"BruteStartingStats"> | string;
    brute?: Prisma.XOR<Prisma.BruteScalarRelationFilter, Prisma.BruteWhereInput>;
};
export type BruteStartingStatsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    endurance?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    agility?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    brute?: Prisma.BruteOrderByWithRelationInput;
};
export type BruteStartingStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    bruteId?: string;
    AND?: Prisma.BruteStartingStatsWhereInput | Prisma.BruteStartingStatsWhereInput[];
    OR?: Prisma.BruteStartingStatsWhereInput[];
    NOT?: Prisma.BruteStartingStatsWhereInput | Prisma.BruteStartingStatsWhereInput[];
    endurance?: Prisma.IntFilter<"BruteStartingStats"> | number;
    strength?: Prisma.IntFilter<"BruteStartingStats"> | number;
    agility?: Prisma.IntFilter<"BruteStartingStats"> | number;
    speed?: Prisma.IntFilter<"BruteStartingStats"> | number;
    brute?: Prisma.XOR<Prisma.BruteScalarRelationFilter, Prisma.BruteWhereInput>;
}, "id" | "id" | "bruteId">;
export type BruteStartingStatsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    endurance?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    agility?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    _count?: Prisma.BruteStartingStatsCountOrderByAggregateInput;
    _avg?: Prisma.BruteStartingStatsAvgOrderByAggregateInput;
    _max?: Prisma.BruteStartingStatsMaxOrderByAggregateInput;
    _min?: Prisma.BruteStartingStatsMinOrderByAggregateInput;
    _sum?: Prisma.BruteStartingStatsSumOrderByAggregateInput;
};
export type BruteStartingStatsScalarWhereWithAggregatesInput = {
    AND?: Prisma.BruteStartingStatsScalarWhereWithAggregatesInput | Prisma.BruteStartingStatsScalarWhereWithAggregatesInput[];
    OR?: Prisma.BruteStartingStatsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BruteStartingStatsScalarWhereWithAggregatesInput | Prisma.BruteStartingStatsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BruteStartingStats"> | string;
    endurance?: Prisma.IntWithAggregatesFilter<"BruteStartingStats"> | number;
    strength?: Prisma.IntWithAggregatesFilter<"BruteStartingStats"> | number;
    agility?: Prisma.IntWithAggregatesFilter<"BruteStartingStats"> | number;
    speed?: Prisma.IntWithAggregatesFilter<"BruteStartingStats"> | number;
    bruteId?: Prisma.UuidWithAggregatesFilter<"BruteStartingStats"> | string;
};
export type BruteStartingStatsCreateInput = {
    id?: string;
    endurance?: number;
    strength?: number;
    agility?: number;
    speed?: number;
    brute: Prisma.BruteCreateNestedOneWithoutStartingStatsInput;
};
export type BruteStartingStatsUncheckedCreateInput = {
    id?: string;
    endurance?: number;
    strength?: number;
    agility?: number;
    speed?: number;
    bruteId: string;
};
export type BruteStartingStatsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    endurance?: Prisma.IntFieldUpdateOperationsInput | number;
    strength?: Prisma.IntFieldUpdateOperationsInput | number;
    agility?: Prisma.IntFieldUpdateOperationsInput | number;
    speed?: Prisma.IntFieldUpdateOperationsInput | number;
    brute?: Prisma.BruteUpdateOneRequiredWithoutStartingStatsNestedInput;
};
export type BruteStartingStatsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    endurance?: Prisma.IntFieldUpdateOperationsInput | number;
    strength?: Prisma.IntFieldUpdateOperationsInput | number;
    agility?: Prisma.IntFieldUpdateOperationsInput | number;
    speed?: Prisma.IntFieldUpdateOperationsInput | number;
    bruteId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BruteStartingStatsCreateManyInput = {
    id?: string;
    endurance?: number;
    strength?: number;
    agility?: number;
    speed?: number;
    bruteId: string;
};
export type BruteStartingStatsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    endurance?: Prisma.IntFieldUpdateOperationsInput | number;
    strength?: Prisma.IntFieldUpdateOperationsInput | number;
    agility?: Prisma.IntFieldUpdateOperationsInput | number;
    speed?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BruteStartingStatsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    endurance?: Prisma.IntFieldUpdateOperationsInput | number;
    strength?: Prisma.IntFieldUpdateOperationsInput | number;
    agility?: Prisma.IntFieldUpdateOperationsInput | number;
    speed?: Prisma.IntFieldUpdateOperationsInput | number;
    bruteId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BruteStartingStatsNullableScalarRelationFilter = {
    is?: Prisma.BruteStartingStatsWhereInput | null;
    isNot?: Prisma.BruteStartingStatsWhereInput | null;
};
export type BruteStartingStatsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    endurance?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    agility?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
};
export type BruteStartingStatsAvgOrderByAggregateInput = {
    endurance?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    agility?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
};
export type BruteStartingStatsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    endurance?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    agility?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
};
export type BruteStartingStatsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    endurance?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    agility?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
};
export type BruteStartingStatsSumOrderByAggregateInput = {
    endurance?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    agility?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
};
export type BruteStartingStatsCreateNestedOneWithoutBruteInput = {
    create?: Prisma.XOR<Prisma.BruteStartingStatsCreateWithoutBruteInput, Prisma.BruteStartingStatsUncheckedCreateWithoutBruteInput>;
    connectOrCreate?: Prisma.BruteStartingStatsCreateOrConnectWithoutBruteInput;
    connect?: Prisma.BruteStartingStatsWhereUniqueInput;
};
export type BruteStartingStatsUncheckedCreateNestedOneWithoutBruteInput = {
    create?: Prisma.XOR<Prisma.BruteStartingStatsCreateWithoutBruteInput, Prisma.BruteStartingStatsUncheckedCreateWithoutBruteInput>;
    connectOrCreate?: Prisma.BruteStartingStatsCreateOrConnectWithoutBruteInput;
    connect?: Prisma.BruteStartingStatsWhereUniqueInput;
};
export type BruteStartingStatsUpdateOneWithoutBruteNestedInput = {
    create?: Prisma.XOR<Prisma.BruteStartingStatsCreateWithoutBruteInput, Prisma.BruteStartingStatsUncheckedCreateWithoutBruteInput>;
    connectOrCreate?: Prisma.BruteStartingStatsCreateOrConnectWithoutBruteInput;
    upsert?: Prisma.BruteStartingStatsUpsertWithoutBruteInput;
    disconnect?: Prisma.BruteStartingStatsWhereInput | boolean;
    delete?: Prisma.BruteStartingStatsWhereInput | boolean;
    connect?: Prisma.BruteStartingStatsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BruteStartingStatsUpdateToOneWithWhereWithoutBruteInput, Prisma.BruteStartingStatsUpdateWithoutBruteInput>, Prisma.BruteStartingStatsUncheckedUpdateWithoutBruteInput>;
};
export type BruteStartingStatsUncheckedUpdateOneWithoutBruteNestedInput = {
    create?: Prisma.XOR<Prisma.BruteStartingStatsCreateWithoutBruteInput, Prisma.BruteStartingStatsUncheckedCreateWithoutBruteInput>;
    connectOrCreate?: Prisma.BruteStartingStatsCreateOrConnectWithoutBruteInput;
    upsert?: Prisma.BruteStartingStatsUpsertWithoutBruteInput;
    disconnect?: Prisma.BruteStartingStatsWhereInput | boolean;
    delete?: Prisma.BruteStartingStatsWhereInput | boolean;
    connect?: Prisma.BruteStartingStatsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BruteStartingStatsUpdateToOneWithWhereWithoutBruteInput, Prisma.BruteStartingStatsUpdateWithoutBruteInput>, Prisma.BruteStartingStatsUncheckedUpdateWithoutBruteInput>;
};
export type BruteStartingStatsCreateWithoutBruteInput = {
    id?: string;
    endurance?: number;
    strength?: number;
    agility?: number;
    speed?: number;
};
export type BruteStartingStatsUncheckedCreateWithoutBruteInput = {
    id?: string;
    endurance?: number;
    strength?: number;
    agility?: number;
    speed?: number;
};
export type BruteStartingStatsCreateOrConnectWithoutBruteInput = {
    where: Prisma.BruteStartingStatsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BruteStartingStatsCreateWithoutBruteInput, Prisma.BruteStartingStatsUncheckedCreateWithoutBruteInput>;
};
export type BruteStartingStatsUpsertWithoutBruteInput = {
    update: Prisma.XOR<Prisma.BruteStartingStatsUpdateWithoutBruteInput, Prisma.BruteStartingStatsUncheckedUpdateWithoutBruteInput>;
    create: Prisma.XOR<Prisma.BruteStartingStatsCreateWithoutBruteInput, Prisma.BruteStartingStatsUncheckedCreateWithoutBruteInput>;
    where?: Prisma.BruteStartingStatsWhereInput;
};
export type BruteStartingStatsUpdateToOneWithWhereWithoutBruteInput = {
    where?: Prisma.BruteStartingStatsWhereInput;
    data: Prisma.XOR<Prisma.BruteStartingStatsUpdateWithoutBruteInput, Prisma.BruteStartingStatsUncheckedUpdateWithoutBruteInput>;
};
export type BruteStartingStatsUpdateWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    endurance?: Prisma.IntFieldUpdateOperationsInput | number;
    strength?: Prisma.IntFieldUpdateOperationsInput | number;
    agility?: Prisma.IntFieldUpdateOperationsInput | number;
    speed?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BruteStartingStatsUncheckedUpdateWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    endurance?: Prisma.IntFieldUpdateOperationsInput | number;
    strength?: Prisma.IntFieldUpdateOperationsInput | number;
    agility?: Prisma.IntFieldUpdateOperationsInput | number;
    speed?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BruteStartingStatsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    endurance?: boolean;
    strength?: boolean;
    agility?: boolean;
    speed?: boolean;
    bruteId?: boolean;
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bruteStartingStats"]>;
export type BruteStartingStatsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    endurance?: boolean;
    strength?: boolean;
    agility?: boolean;
    speed?: boolean;
    bruteId?: boolean;
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bruteStartingStats"]>;
export type BruteStartingStatsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    endurance?: boolean;
    strength?: boolean;
    agility?: boolean;
    speed?: boolean;
    bruteId?: boolean;
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bruteStartingStats"]>;
export type BruteStartingStatsSelectScalar = {
    id?: boolean;
    endurance?: boolean;
    strength?: boolean;
    agility?: boolean;
    speed?: boolean;
    bruteId?: boolean;
};
export type BruteStartingStatsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "endurance" | "strength" | "agility" | "speed" | "bruteId", ExtArgs["result"]["bruteStartingStats"]>;
export type BruteStartingStatsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
};
export type BruteStartingStatsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
};
export type BruteStartingStatsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
};
export type $BruteStartingStatsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BruteStartingStats";
    objects: {
        brute: Prisma.$BrutePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        endurance: number;
        strength: number;
        agility: number;
        speed: number;
        bruteId: string;
    }, ExtArgs["result"]["bruteStartingStats"]>;
    composites: {};
};
export type BruteStartingStatsGetPayload<S extends boolean | null | undefined | BruteStartingStatsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BruteStartingStatsPayload, S>;
export type BruteStartingStatsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BruteStartingStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: BruteStartingStatsCountAggregateInputType | true;
};
export interface BruteStartingStatsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BruteStartingStats'];
        meta: {
            name: 'BruteStartingStats';
        };
    };
    /**
     * Find zero or one BruteStartingStats that matches the filter.
     * @param {BruteStartingStatsFindUniqueArgs} args - Arguments to find a BruteStartingStats
     * @example
     * // Get one BruteStartingStats
     * const bruteStartingStats = await prisma.bruteStartingStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BruteStartingStatsFindUniqueArgs>(args: Prisma.SelectSubset<T, BruteStartingStatsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BruteStartingStatsClient<runtime.Types.Result.GetResult<Prisma.$BruteStartingStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BruteStartingStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BruteStartingStatsFindUniqueOrThrowArgs} args - Arguments to find a BruteStartingStats
     * @example
     * // Get one BruteStartingStats
     * const bruteStartingStats = await prisma.bruteStartingStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BruteStartingStatsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BruteStartingStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BruteStartingStatsClient<runtime.Types.Result.GetResult<Prisma.$BruteStartingStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BruteStartingStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteStartingStatsFindFirstArgs} args - Arguments to find a BruteStartingStats
     * @example
     * // Get one BruteStartingStats
     * const bruteStartingStats = await prisma.bruteStartingStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BruteStartingStatsFindFirstArgs>(args?: Prisma.SelectSubset<T, BruteStartingStatsFindFirstArgs<ExtArgs>>): Prisma.Prisma__BruteStartingStatsClient<runtime.Types.Result.GetResult<Prisma.$BruteStartingStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BruteStartingStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteStartingStatsFindFirstOrThrowArgs} args - Arguments to find a BruteStartingStats
     * @example
     * // Get one BruteStartingStats
     * const bruteStartingStats = await prisma.bruteStartingStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BruteStartingStatsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BruteStartingStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BruteStartingStatsClient<runtime.Types.Result.GetResult<Prisma.$BruteStartingStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BruteStartingStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteStartingStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BruteStartingStats
     * const bruteStartingStats = await prisma.bruteStartingStats.findMany()
     *
     * // Get first 10 BruteStartingStats
     * const bruteStartingStats = await prisma.bruteStartingStats.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bruteStartingStatsWithIdOnly = await prisma.bruteStartingStats.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BruteStartingStatsFindManyArgs>(args?: Prisma.SelectSubset<T, BruteStartingStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BruteStartingStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BruteStartingStats.
     * @param {BruteStartingStatsCreateArgs} args - Arguments to create a BruteStartingStats.
     * @example
     * // Create one BruteStartingStats
     * const BruteStartingStats = await prisma.bruteStartingStats.create({
     *   data: {
     *     // ... data to create a BruteStartingStats
     *   }
     * })
     *
     */
    create<T extends BruteStartingStatsCreateArgs>(args: Prisma.SelectSubset<T, BruteStartingStatsCreateArgs<ExtArgs>>): Prisma.Prisma__BruteStartingStatsClient<runtime.Types.Result.GetResult<Prisma.$BruteStartingStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BruteStartingStats.
     * @param {BruteStartingStatsCreateManyArgs} args - Arguments to create many BruteStartingStats.
     * @example
     * // Create many BruteStartingStats
     * const bruteStartingStats = await prisma.bruteStartingStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BruteStartingStatsCreateManyArgs>(args?: Prisma.SelectSubset<T, BruteStartingStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BruteStartingStats and returns the data saved in the database.
     * @param {BruteStartingStatsCreateManyAndReturnArgs} args - Arguments to create many BruteStartingStats.
     * @example
     * // Create many BruteStartingStats
     * const bruteStartingStats = await prisma.bruteStartingStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BruteStartingStats and only return the `id`
     * const bruteStartingStatsWithIdOnly = await prisma.bruteStartingStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BruteStartingStatsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BruteStartingStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BruteStartingStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BruteStartingStats.
     * @param {BruteStartingStatsDeleteArgs} args - Arguments to delete one BruteStartingStats.
     * @example
     * // Delete one BruteStartingStats
     * const BruteStartingStats = await prisma.bruteStartingStats.delete({
     *   where: {
     *     // ... filter to delete one BruteStartingStats
     *   }
     * })
     *
     */
    delete<T extends BruteStartingStatsDeleteArgs>(args: Prisma.SelectSubset<T, BruteStartingStatsDeleteArgs<ExtArgs>>): Prisma.Prisma__BruteStartingStatsClient<runtime.Types.Result.GetResult<Prisma.$BruteStartingStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BruteStartingStats.
     * @param {BruteStartingStatsUpdateArgs} args - Arguments to update one BruteStartingStats.
     * @example
     * // Update one BruteStartingStats
     * const bruteStartingStats = await prisma.bruteStartingStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BruteStartingStatsUpdateArgs>(args: Prisma.SelectSubset<T, BruteStartingStatsUpdateArgs<ExtArgs>>): Prisma.Prisma__BruteStartingStatsClient<runtime.Types.Result.GetResult<Prisma.$BruteStartingStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BruteStartingStats.
     * @param {BruteStartingStatsDeleteManyArgs} args - Arguments to filter BruteStartingStats to delete.
     * @example
     * // Delete a few BruteStartingStats
     * const { count } = await prisma.bruteStartingStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BruteStartingStatsDeleteManyArgs>(args?: Prisma.SelectSubset<T, BruteStartingStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BruteStartingStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteStartingStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BruteStartingStats
     * const bruteStartingStats = await prisma.bruteStartingStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BruteStartingStatsUpdateManyArgs>(args: Prisma.SelectSubset<T, BruteStartingStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BruteStartingStats and returns the data updated in the database.
     * @param {BruteStartingStatsUpdateManyAndReturnArgs} args - Arguments to update many BruteStartingStats.
     * @example
     * // Update many BruteStartingStats
     * const bruteStartingStats = await prisma.bruteStartingStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BruteStartingStats and only return the `id`
     * const bruteStartingStatsWithIdOnly = await prisma.bruteStartingStats.updateManyAndReturn({
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
    updateManyAndReturn<T extends BruteStartingStatsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BruteStartingStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BruteStartingStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BruteStartingStats.
     * @param {BruteStartingStatsUpsertArgs} args - Arguments to update or create a BruteStartingStats.
     * @example
     * // Update or create a BruteStartingStats
     * const bruteStartingStats = await prisma.bruteStartingStats.upsert({
     *   create: {
     *     // ... data to create a BruteStartingStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BruteStartingStats we want to update
     *   }
     * })
     */
    upsert<T extends BruteStartingStatsUpsertArgs>(args: Prisma.SelectSubset<T, BruteStartingStatsUpsertArgs<ExtArgs>>): Prisma.Prisma__BruteStartingStatsClient<runtime.Types.Result.GetResult<Prisma.$BruteStartingStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BruteStartingStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteStartingStatsCountArgs} args - Arguments to filter BruteStartingStats to count.
     * @example
     * // Count the number of BruteStartingStats
     * const count = await prisma.bruteStartingStats.count({
     *   where: {
     *     // ... the filter for the BruteStartingStats we want to count
     *   }
     * })
    **/
    count<T extends BruteStartingStatsCountArgs>(args?: Prisma.Subset<T, BruteStartingStatsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BruteStartingStatsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BruteStartingStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteStartingStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BruteStartingStatsAggregateArgs>(args: Prisma.Subset<T, BruteStartingStatsAggregateArgs>): Prisma.PrismaPromise<GetBruteStartingStatsAggregateType<T>>;
    /**
     * Group by BruteStartingStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteStartingStatsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BruteStartingStatsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BruteStartingStatsGroupByArgs['orderBy'];
    } : {
        orderBy?: BruteStartingStatsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BruteStartingStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBruteStartingStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BruteStartingStats model
     */
    readonly fields: BruteStartingStatsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BruteStartingStats.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BruteStartingStatsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the BruteStartingStats model
 */
export interface BruteStartingStatsFieldRefs {
    readonly id: Prisma.FieldRef<"BruteStartingStats", 'String'>;
    readonly endurance: Prisma.FieldRef<"BruteStartingStats", 'Int'>;
    readonly strength: Prisma.FieldRef<"BruteStartingStats", 'Int'>;
    readonly agility: Prisma.FieldRef<"BruteStartingStats", 'Int'>;
    readonly speed: Prisma.FieldRef<"BruteStartingStats", 'Int'>;
    readonly bruteId: Prisma.FieldRef<"BruteStartingStats", 'String'>;
}
/**
 * BruteStartingStats findUnique
 */
export type BruteStartingStatsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteStartingStats
     */
    select?: Prisma.BruteStartingStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteStartingStats
     */
    omit?: Prisma.BruteStartingStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteStartingStatsInclude<ExtArgs> | null;
    /**
     * Filter, which BruteStartingStats to fetch.
     */
    where: Prisma.BruteStartingStatsWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteStartingStats findUniqueOrThrow
 */
export type BruteStartingStatsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteStartingStats
     */
    select?: Prisma.BruteStartingStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteStartingStats
     */
    omit?: Prisma.BruteStartingStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteStartingStatsInclude<ExtArgs> | null;
    /**
     * Filter, which BruteStartingStats to fetch.
     */
    where: Prisma.BruteStartingStatsWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteStartingStats findFirst
 */
export type BruteStartingStatsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteStartingStats
     */
    select?: Prisma.BruteStartingStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteStartingStats
     */
    omit?: Prisma.BruteStartingStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteStartingStatsInclude<ExtArgs> | null;
    /**
     * Filter, which BruteStartingStats to fetch.
     */
    where?: Prisma.BruteStartingStatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BruteStartingStats to fetch.
     */
    orderBy?: Prisma.BruteStartingStatsOrderByWithRelationInput | Prisma.BruteStartingStatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BruteStartingStats.
     */
    cursor?: Prisma.BruteStartingStatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BruteStartingStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BruteStartingStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BruteStartingStats.
     */
    distinct?: Prisma.BruteStartingStatsScalarFieldEnum | Prisma.BruteStartingStatsScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteStartingStats findFirstOrThrow
 */
export type BruteStartingStatsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteStartingStats
     */
    select?: Prisma.BruteStartingStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteStartingStats
     */
    omit?: Prisma.BruteStartingStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteStartingStatsInclude<ExtArgs> | null;
    /**
     * Filter, which BruteStartingStats to fetch.
     */
    where?: Prisma.BruteStartingStatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BruteStartingStats to fetch.
     */
    orderBy?: Prisma.BruteStartingStatsOrderByWithRelationInput | Prisma.BruteStartingStatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BruteStartingStats.
     */
    cursor?: Prisma.BruteStartingStatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BruteStartingStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BruteStartingStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BruteStartingStats.
     */
    distinct?: Prisma.BruteStartingStatsScalarFieldEnum | Prisma.BruteStartingStatsScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteStartingStats findMany
 */
export type BruteStartingStatsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteStartingStats
     */
    select?: Prisma.BruteStartingStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteStartingStats
     */
    omit?: Prisma.BruteStartingStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteStartingStatsInclude<ExtArgs> | null;
    /**
     * Filter, which BruteStartingStats to fetch.
     */
    where?: Prisma.BruteStartingStatsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BruteStartingStats to fetch.
     */
    orderBy?: Prisma.BruteStartingStatsOrderByWithRelationInput | Prisma.BruteStartingStatsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BruteStartingStats.
     */
    cursor?: Prisma.BruteStartingStatsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BruteStartingStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BruteStartingStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BruteStartingStats.
     */
    distinct?: Prisma.BruteStartingStatsScalarFieldEnum | Prisma.BruteStartingStatsScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteStartingStats create
 */
export type BruteStartingStatsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteStartingStats
     */
    select?: Prisma.BruteStartingStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteStartingStats
     */
    omit?: Prisma.BruteStartingStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteStartingStatsInclude<ExtArgs> | null;
    /**
     * The data needed to create a BruteStartingStats.
     */
    data: Prisma.XOR<Prisma.BruteStartingStatsCreateInput, Prisma.BruteStartingStatsUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteStartingStats createMany
 */
export type BruteStartingStatsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BruteStartingStats.
     */
    data: Prisma.BruteStartingStatsCreateManyInput | Prisma.BruteStartingStatsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BruteStartingStats createManyAndReturn
 */
export type BruteStartingStatsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteStartingStats
     */
    select?: Prisma.BruteStartingStatsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteStartingStats
     */
    omit?: Prisma.BruteStartingStatsOmit<ExtArgs> | null;
    /**
     * The data used to create many BruteStartingStats.
     */
    data: Prisma.BruteStartingStatsCreateManyInput | Prisma.BruteStartingStatsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteStartingStatsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BruteStartingStats update
 */
export type BruteStartingStatsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteStartingStats
     */
    select?: Prisma.BruteStartingStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteStartingStats
     */
    omit?: Prisma.BruteStartingStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteStartingStatsInclude<ExtArgs> | null;
    /**
     * The data needed to update a BruteStartingStats.
     */
    data: Prisma.XOR<Prisma.BruteStartingStatsUpdateInput, Prisma.BruteStartingStatsUncheckedUpdateInput>;
    /**
     * Choose, which BruteStartingStats to update.
     */
    where: Prisma.BruteStartingStatsWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteStartingStats updateMany
 */
export type BruteStartingStatsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BruteStartingStats.
     */
    data: Prisma.XOR<Prisma.BruteStartingStatsUpdateManyMutationInput, Prisma.BruteStartingStatsUncheckedUpdateManyInput>;
    /**
     * Filter which BruteStartingStats to update
     */
    where?: Prisma.BruteStartingStatsWhereInput;
    /**
     * Limit how many BruteStartingStats to update.
     */
    limit?: number;
};
/**
 * BruteStartingStats updateManyAndReturn
 */
export type BruteStartingStatsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteStartingStats
     */
    select?: Prisma.BruteStartingStatsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteStartingStats
     */
    omit?: Prisma.BruteStartingStatsOmit<ExtArgs> | null;
    /**
     * The data used to update BruteStartingStats.
     */
    data: Prisma.XOR<Prisma.BruteStartingStatsUpdateManyMutationInput, Prisma.BruteStartingStatsUncheckedUpdateManyInput>;
    /**
     * Filter which BruteStartingStats to update
     */
    where?: Prisma.BruteStartingStatsWhereInput;
    /**
     * Limit how many BruteStartingStats to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteStartingStatsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BruteStartingStats upsert
 */
export type BruteStartingStatsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteStartingStats
     */
    select?: Prisma.BruteStartingStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteStartingStats
     */
    omit?: Prisma.BruteStartingStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteStartingStatsInclude<ExtArgs> | null;
    /**
     * The filter to search for the BruteStartingStats to update in case it exists.
     */
    where: Prisma.BruteStartingStatsWhereUniqueInput;
    /**
     * In case the BruteStartingStats found by the `where` argument doesn't exist, create a new BruteStartingStats with this data.
     */
    create: Prisma.XOR<Prisma.BruteStartingStatsCreateInput, Prisma.BruteStartingStatsUncheckedCreateInput>;
    /**
     * In case the BruteStartingStats was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BruteStartingStatsUpdateInput, Prisma.BruteStartingStatsUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteStartingStats delete
 */
export type BruteStartingStatsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteStartingStats
     */
    select?: Prisma.BruteStartingStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteStartingStats
     */
    omit?: Prisma.BruteStartingStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteStartingStatsInclude<ExtArgs> | null;
    /**
     * Filter which BruteStartingStats to delete.
     */
    where: Prisma.BruteStartingStatsWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BruteStartingStats deleteMany
 */
export type BruteStartingStatsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BruteStartingStats to delete
     */
    where?: Prisma.BruteStartingStatsWhereInput;
    /**
     * Limit how many BruteStartingStats to delete.
     */
    limit?: number;
};
/**
 * BruteStartingStats without action
 */
export type BruteStartingStatsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteStartingStats
     */
    select?: Prisma.BruteStartingStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BruteStartingStats
     */
    omit?: Prisma.BruteStartingStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BruteStartingStatsInclude<ExtArgs> | null;
};
