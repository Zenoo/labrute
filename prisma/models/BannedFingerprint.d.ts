import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model BannedFingerprint
 *
 */
export type BannedFingerprintModel = runtime.Types.Result.DefaultSelection<Prisma.$BannedFingerprintPayload>;
export type AggregateBannedFingerprint = {
    _count: BannedFingerprintCountAggregateOutputType | null;
    _min: BannedFingerprintMinAggregateOutputType | null;
    _max: BannedFingerprintMaxAggregateOutputType | null;
};
export type BannedFingerprintMinAggregateOutputType = {
    id: string | null;
};
export type BannedFingerprintMaxAggregateOutputType = {
    id: string | null;
};
export type BannedFingerprintCountAggregateOutputType = {
    id: number;
    _all: number;
};
export type BannedFingerprintMinAggregateInputType = {
    id?: true;
};
export type BannedFingerprintMaxAggregateInputType = {
    id?: true;
};
export type BannedFingerprintCountAggregateInputType = {
    id?: true;
    _all?: true;
};
export type BannedFingerprintAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BannedFingerprint to aggregate.
     */
    where?: Prisma.BannedFingerprintWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BannedFingerprints to fetch.
     */
    orderBy?: Prisma.BannedFingerprintOrderByWithRelationInput | Prisma.BannedFingerprintOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BannedFingerprintWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BannedFingerprints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BannedFingerprints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BannedFingerprints
    **/
    _count?: true | BannedFingerprintCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BannedFingerprintMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BannedFingerprintMaxAggregateInputType;
};
export type GetBannedFingerprintAggregateType<T extends BannedFingerprintAggregateArgs> = {
    [P in keyof T & keyof AggregateBannedFingerprint]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBannedFingerprint[P]> : Prisma.GetScalarType<T[P], AggregateBannedFingerprint[P]>;
};
export type BannedFingerprintGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BannedFingerprintWhereInput;
    orderBy?: Prisma.BannedFingerprintOrderByWithAggregationInput | Prisma.BannedFingerprintOrderByWithAggregationInput[];
    by: Prisma.BannedFingerprintScalarFieldEnum[] | Prisma.BannedFingerprintScalarFieldEnum;
    having?: Prisma.BannedFingerprintScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BannedFingerprintCountAggregateInputType | true;
    _min?: BannedFingerprintMinAggregateInputType;
    _max?: BannedFingerprintMaxAggregateInputType;
};
export type BannedFingerprintGroupByOutputType = {
    id: string;
    _count: BannedFingerprintCountAggregateOutputType | null;
    _min: BannedFingerprintMinAggregateOutputType | null;
    _max: BannedFingerprintMaxAggregateOutputType | null;
};
export type GetBannedFingerprintGroupByPayload<T extends BannedFingerprintGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BannedFingerprintGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BannedFingerprintGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BannedFingerprintGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BannedFingerprintGroupByOutputType[P]>;
}>>;
export type BannedFingerprintWhereInput = {
    AND?: Prisma.BannedFingerprintWhereInput | Prisma.BannedFingerprintWhereInput[];
    OR?: Prisma.BannedFingerprintWhereInput[];
    NOT?: Prisma.BannedFingerprintWhereInput | Prisma.BannedFingerprintWhereInput[];
    id?: Prisma.StringFilter<"BannedFingerprint"> | string;
};
export type BannedFingerprintOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
};
export type BannedFingerprintWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BannedFingerprintWhereInput | Prisma.BannedFingerprintWhereInput[];
    OR?: Prisma.BannedFingerprintWhereInput[];
    NOT?: Prisma.BannedFingerprintWhereInput | Prisma.BannedFingerprintWhereInput[];
}, "id">;
export type BannedFingerprintOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    _count?: Prisma.BannedFingerprintCountOrderByAggregateInput;
    _max?: Prisma.BannedFingerprintMaxOrderByAggregateInput;
    _min?: Prisma.BannedFingerprintMinOrderByAggregateInput;
};
export type BannedFingerprintScalarWhereWithAggregatesInput = {
    AND?: Prisma.BannedFingerprintScalarWhereWithAggregatesInput | Prisma.BannedFingerprintScalarWhereWithAggregatesInput[];
    OR?: Prisma.BannedFingerprintScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BannedFingerprintScalarWhereWithAggregatesInput | Prisma.BannedFingerprintScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BannedFingerprint"> | string;
};
export type BannedFingerprintCreateInput = {
    id: string;
};
export type BannedFingerprintUncheckedCreateInput = {
    id: string;
};
export type BannedFingerprintUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BannedFingerprintUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BannedFingerprintCreateManyInput = {
    id: string;
};
export type BannedFingerprintUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BannedFingerprintUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BannedFingerprintCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type BannedFingerprintMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type BannedFingerprintMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type BannedFingerprintSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
}, ExtArgs["result"]["bannedFingerprint"]>;
export type BannedFingerprintSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
}, ExtArgs["result"]["bannedFingerprint"]>;
export type BannedFingerprintSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
}, ExtArgs["result"]["bannedFingerprint"]>;
export type BannedFingerprintSelectScalar = {
    id?: boolean;
};
export type BannedFingerprintOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id", ExtArgs["result"]["bannedFingerprint"]>;
export type $BannedFingerprintPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BannedFingerprint";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
    }, ExtArgs["result"]["bannedFingerprint"]>;
    composites: {};
};
export type BannedFingerprintGetPayload<S extends boolean | null | undefined | BannedFingerprintDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BannedFingerprintPayload, S>;
export type BannedFingerprintCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BannedFingerprintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: BannedFingerprintCountAggregateInputType | true;
};
export interface BannedFingerprintDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BannedFingerprint'];
        meta: {
            name: 'BannedFingerprint';
        };
    };
    /**
     * Find zero or one BannedFingerprint that matches the filter.
     * @param {BannedFingerprintFindUniqueArgs} args - Arguments to find a BannedFingerprint
     * @example
     * // Get one BannedFingerprint
     * const bannedFingerprint = await prisma.bannedFingerprint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannedFingerprintFindUniqueArgs>(args: Prisma.SelectSubset<T, BannedFingerprintFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BannedFingerprintClient<runtime.Types.Result.GetResult<Prisma.$BannedFingerprintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BannedFingerprint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannedFingerprintFindUniqueOrThrowArgs} args - Arguments to find a BannedFingerprint
     * @example
     * // Get one BannedFingerprint
     * const bannedFingerprint = await prisma.bannedFingerprint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannedFingerprintFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BannedFingerprintFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BannedFingerprintClient<runtime.Types.Result.GetResult<Prisma.$BannedFingerprintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BannedFingerprint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedFingerprintFindFirstArgs} args - Arguments to find a BannedFingerprint
     * @example
     * // Get one BannedFingerprint
     * const bannedFingerprint = await prisma.bannedFingerprint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannedFingerprintFindFirstArgs>(args?: Prisma.SelectSubset<T, BannedFingerprintFindFirstArgs<ExtArgs>>): Prisma.Prisma__BannedFingerprintClient<runtime.Types.Result.GetResult<Prisma.$BannedFingerprintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BannedFingerprint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedFingerprintFindFirstOrThrowArgs} args - Arguments to find a BannedFingerprint
     * @example
     * // Get one BannedFingerprint
     * const bannedFingerprint = await prisma.bannedFingerprint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannedFingerprintFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BannedFingerprintFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BannedFingerprintClient<runtime.Types.Result.GetResult<Prisma.$BannedFingerprintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BannedFingerprints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedFingerprintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BannedFingerprints
     * const bannedFingerprints = await prisma.bannedFingerprint.findMany()
     *
     * // Get first 10 BannedFingerprints
     * const bannedFingerprints = await prisma.bannedFingerprint.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bannedFingerprintWithIdOnly = await prisma.bannedFingerprint.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BannedFingerprintFindManyArgs>(args?: Prisma.SelectSubset<T, BannedFingerprintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BannedFingerprintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BannedFingerprint.
     * @param {BannedFingerprintCreateArgs} args - Arguments to create a BannedFingerprint.
     * @example
     * // Create one BannedFingerprint
     * const BannedFingerprint = await prisma.bannedFingerprint.create({
     *   data: {
     *     // ... data to create a BannedFingerprint
     *   }
     * })
     *
     */
    create<T extends BannedFingerprintCreateArgs>(args: Prisma.SelectSubset<T, BannedFingerprintCreateArgs<ExtArgs>>): Prisma.Prisma__BannedFingerprintClient<runtime.Types.Result.GetResult<Prisma.$BannedFingerprintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BannedFingerprints.
     * @param {BannedFingerprintCreateManyArgs} args - Arguments to create many BannedFingerprints.
     * @example
     * // Create many BannedFingerprints
     * const bannedFingerprint = await prisma.bannedFingerprint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BannedFingerprintCreateManyArgs>(args?: Prisma.SelectSubset<T, BannedFingerprintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BannedFingerprints and returns the data saved in the database.
     * @param {BannedFingerprintCreateManyAndReturnArgs} args - Arguments to create many BannedFingerprints.
     * @example
     * // Create many BannedFingerprints
     * const bannedFingerprint = await prisma.bannedFingerprint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BannedFingerprints and only return the `id`
     * const bannedFingerprintWithIdOnly = await prisma.bannedFingerprint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BannedFingerprintCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BannedFingerprintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BannedFingerprintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BannedFingerprint.
     * @param {BannedFingerprintDeleteArgs} args - Arguments to delete one BannedFingerprint.
     * @example
     * // Delete one BannedFingerprint
     * const BannedFingerprint = await prisma.bannedFingerprint.delete({
     *   where: {
     *     // ... filter to delete one BannedFingerprint
     *   }
     * })
     *
     */
    delete<T extends BannedFingerprintDeleteArgs>(args: Prisma.SelectSubset<T, BannedFingerprintDeleteArgs<ExtArgs>>): Prisma.Prisma__BannedFingerprintClient<runtime.Types.Result.GetResult<Prisma.$BannedFingerprintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BannedFingerprint.
     * @param {BannedFingerprintUpdateArgs} args - Arguments to update one BannedFingerprint.
     * @example
     * // Update one BannedFingerprint
     * const bannedFingerprint = await prisma.bannedFingerprint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BannedFingerprintUpdateArgs>(args: Prisma.SelectSubset<T, BannedFingerprintUpdateArgs<ExtArgs>>): Prisma.Prisma__BannedFingerprintClient<runtime.Types.Result.GetResult<Prisma.$BannedFingerprintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BannedFingerprints.
     * @param {BannedFingerprintDeleteManyArgs} args - Arguments to filter BannedFingerprints to delete.
     * @example
     * // Delete a few BannedFingerprints
     * const { count } = await prisma.bannedFingerprint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BannedFingerprintDeleteManyArgs>(args?: Prisma.SelectSubset<T, BannedFingerprintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BannedFingerprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedFingerprintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BannedFingerprints
     * const bannedFingerprint = await prisma.bannedFingerprint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BannedFingerprintUpdateManyArgs>(args: Prisma.SelectSubset<T, BannedFingerprintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BannedFingerprints and returns the data updated in the database.
     * @param {BannedFingerprintUpdateManyAndReturnArgs} args - Arguments to update many BannedFingerprints.
     * @example
     * // Update many BannedFingerprints
     * const bannedFingerprint = await prisma.bannedFingerprint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BannedFingerprints and only return the `id`
     * const bannedFingerprintWithIdOnly = await prisma.bannedFingerprint.updateManyAndReturn({
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
    updateManyAndReturn<T extends BannedFingerprintUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BannedFingerprintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BannedFingerprintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BannedFingerprint.
     * @param {BannedFingerprintUpsertArgs} args - Arguments to update or create a BannedFingerprint.
     * @example
     * // Update or create a BannedFingerprint
     * const bannedFingerprint = await prisma.bannedFingerprint.upsert({
     *   create: {
     *     // ... data to create a BannedFingerprint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BannedFingerprint we want to update
     *   }
     * })
     */
    upsert<T extends BannedFingerprintUpsertArgs>(args: Prisma.SelectSubset<T, BannedFingerprintUpsertArgs<ExtArgs>>): Prisma.Prisma__BannedFingerprintClient<runtime.Types.Result.GetResult<Prisma.$BannedFingerprintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BannedFingerprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedFingerprintCountArgs} args - Arguments to filter BannedFingerprints to count.
     * @example
     * // Count the number of BannedFingerprints
     * const count = await prisma.bannedFingerprint.count({
     *   where: {
     *     // ... the filter for the BannedFingerprints we want to count
     *   }
     * })
    **/
    count<T extends BannedFingerprintCountArgs>(args?: Prisma.Subset<T, BannedFingerprintCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BannedFingerprintCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BannedFingerprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedFingerprintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannedFingerprintAggregateArgs>(args: Prisma.Subset<T, BannedFingerprintAggregateArgs>): Prisma.PrismaPromise<GetBannedFingerprintAggregateType<T>>;
    /**
     * Group by BannedFingerprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedFingerprintGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BannedFingerprintGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BannedFingerprintGroupByArgs['orderBy'];
    } : {
        orderBy?: BannedFingerprintGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BannedFingerprintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannedFingerprintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BannedFingerprint model
     */
    readonly fields: BannedFingerprintFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BannedFingerprint.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BannedFingerprintClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the BannedFingerprint model
 */
export interface BannedFingerprintFieldRefs {
    readonly id: Prisma.FieldRef<"BannedFingerprint", 'String'>;
}
/**
 * BannedFingerprint findUnique
 */
export type BannedFingerprintFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedFingerprint
     */
    select?: Prisma.BannedFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedFingerprint
     */
    omit?: Prisma.BannedFingerprintOmit<ExtArgs> | null;
    /**
     * Filter, which BannedFingerprint to fetch.
     */
    where: Prisma.BannedFingerprintWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedFingerprint findUniqueOrThrow
 */
export type BannedFingerprintFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedFingerprint
     */
    select?: Prisma.BannedFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedFingerprint
     */
    omit?: Prisma.BannedFingerprintOmit<ExtArgs> | null;
    /**
     * Filter, which BannedFingerprint to fetch.
     */
    where: Prisma.BannedFingerprintWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedFingerprint findFirst
 */
export type BannedFingerprintFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedFingerprint
     */
    select?: Prisma.BannedFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedFingerprint
     */
    omit?: Prisma.BannedFingerprintOmit<ExtArgs> | null;
    /**
     * Filter, which BannedFingerprint to fetch.
     */
    where?: Prisma.BannedFingerprintWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BannedFingerprints to fetch.
     */
    orderBy?: Prisma.BannedFingerprintOrderByWithRelationInput | Prisma.BannedFingerprintOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BannedFingerprints.
     */
    cursor?: Prisma.BannedFingerprintWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BannedFingerprints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BannedFingerprints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BannedFingerprints.
     */
    distinct?: Prisma.BannedFingerprintScalarFieldEnum | Prisma.BannedFingerprintScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedFingerprint findFirstOrThrow
 */
export type BannedFingerprintFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedFingerprint
     */
    select?: Prisma.BannedFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedFingerprint
     */
    omit?: Prisma.BannedFingerprintOmit<ExtArgs> | null;
    /**
     * Filter, which BannedFingerprint to fetch.
     */
    where?: Prisma.BannedFingerprintWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BannedFingerprints to fetch.
     */
    orderBy?: Prisma.BannedFingerprintOrderByWithRelationInput | Prisma.BannedFingerprintOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BannedFingerprints.
     */
    cursor?: Prisma.BannedFingerprintWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BannedFingerprints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BannedFingerprints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BannedFingerprints.
     */
    distinct?: Prisma.BannedFingerprintScalarFieldEnum | Prisma.BannedFingerprintScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedFingerprint findMany
 */
export type BannedFingerprintFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedFingerprint
     */
    select?: Prisma.BannedFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedFingerprint
     */
    omit?: Prisma.BannedFingerprintOmit<ExtArgs> | null;
    /**
     * Filter, which BannedFingerprints to fetch.
     */
    where?: Prisma.BannedFingerprintWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BannedFingerprints to fetch.
     */
    orderBy?: Prisma.BannedFingerprintOrderByWithRelationInput | Prisma.BannedFingerprintOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BannedFingerprints.
     */
    cursor?: Prisma.BannedFingerprintWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BannedFingerprints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BannedFingerprints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BannedFingerprints.
     */
    distinct?: Prisma.BannedFingerprintScalarFieldEnum | Prisma.BannedFingerprintScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedFingerprint create
 */
export type BannedFingerprintCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedFingerprint
     */
    select?: Prisma.BannedFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedFingerprint
     */
    omit?: Prisma.BannedFingerprintOmit<ExtArgs> | null;
    /**
     * The data needed to create a BannedFingerprint.
     */
    data: Prisma.XOR<Prisma.BannedFingerprintCreateInput, Prisma.BannedFingerprintUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedFingerprint createMany
 */
export type BannedFingerprintCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BannedFingerprints.
     */
    data: Prisma.BannedFingerprintCreateManyInput | Prisma.BannedFingerprintCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BannedFingerprint createManyAndReturn
 */
export type BannedFingerprintCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedFingerprint
     */
    select?: Prisma.BannedFingerprintSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedFingerprint
     */
    omit?: Prisma.BannedFingerprintOmit<ExtArgs> | null;
    /**
     * The data used to create many BannedFingerprints.
     */
    data: Prisma.BannedFingerprintCreateManyInput | Prisma.BannedFingerprintCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BannedFingerprint update
 */
export type BannedFingerprintUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedFingerprint
     */
    select?: Prisma.BannedFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedFingerprint
     */
    omit?: Prisma.BannedFingerprintOmit<ExtArgs> | null;
    /**
     * The data needed to update a BannedFingerprint.
     */
    data: Prisma.XOR<Prisma.BannedFingerprintUpdateInput, Prisma.BannedFingerprintUncheckedUpdateInput>;
    /**
     * Choose, which BannedFingerprint to update.
     */
    where: Prisma.BannedFingerprintWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedFingerprint updateMany
 */
export type BannedFingerprintUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BannedFingerprints.
     */
    data: Prisma.XOR<Prisma.BannedFingerprintUpdateManyMutationInput, Prisma.BannedFingerprintUncheckedUpdateManyInput>;
    /**
     * Filter which BannedFingerprints to update
     */
    where?: Prisma.BannedFingerprintWhereInput;
    /**
     * Limit how many BannedFingerprints to update.
     */
    limit?: number;
};
/**
 * BannedFingerprint updateManyAndReturn
 */
export type BannedFingerprintUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedFingerprint
     */
    select?: Prisma.BannedFingerprintSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedFingerprint
     */
    omit?: Prisma.BannedFingerprintOmit<ExtArgs> | null;
    /**
     * The data used to update BannedFingerprints.
     */
    data: Prisma.XOR<Prisma.BannedFingerprintUpdateManyMutationInput, Prisma.BannedFingerprintUncheckedUpdateManyInput>;
    /**
     * Filter which BannedFingerprints to update
     */
    where?: Prisma.BannedFingerprintWhereInput;
    /**
     * Limit how many BannedFingerprints to update.
     */
    limit?: number;
};
/**
 * BannedFingerprint upsert
 */
export type BannedFingerprintUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedFingerprint
     */
    select?: Prisma.BannedFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedFingerprint
     */
    omit?: Prisma.BannedFingerprintOmit<ExtArgs> | null;
    /**
     * The filter to search for the BannedFingerprint to update in case it exists.
     */
    where: Prisma.BannedFingerprintWhereUniqueInput;
    /**
     * In case the BannedFingerprint found by the `where` argument doesn't exist, create a new BannedFingerprint with this data.
     */
    create: Prisma.XOR<Prisma.BannedFingerprintCreateInput, Prisma.BannedFingerprintUncheckedCreateInput>;
    /**
     * In case the BannedFingerprint was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BannedFingerprintUpdateInput, Prisma.BannedFingerprintUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedFingerprint delete
 */
export type BannedFingerprintDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedFingerprint
     */
    select?: Prisma.BannedFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedFingerprint
     */
    omit?: Prisma.BannedFingerprintOmit<ExtArgs> | null;
    /**
     * Filter which BannedFingerprint to delete.
     */
    where: Prisma.BannedFingerprintWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedFingerprint deleteMany
 */
export type BannedFingerprintDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BannedFingerprints to delete
     */
    where?: Prisma.BannedFingerprintWhereInput;
    /**
     * Limit how many BannedFingerprints to delete.
     */
    limit?: number;
};
/**
 * BannedFingerprint without action
 */
export type BannedFingerprintDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedFingerprint
     */
    select?: Prisma.BannedFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedFingerprint
     */
    omit?: Prisma.BannedFingerprintOmit<ExtArgs> | null;
};
