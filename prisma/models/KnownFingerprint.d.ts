import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model KnownFingerprint
 *
 */
export type KnownFingerprintModel = runtime.Types.Result.DefaultSelection<Prisma.$KnownFingerprintPayload>;
export type AggregateKnownFingerprint = {
    _count: KnownFingerprintCountAggregateOutputType | null;
    _min: KnownFingerprintMinAggregateOutputType | null;
    _max: KnownFingerprintMaxAggregateOutputType | null;
};
export type KnownFingerprintMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type KnownFingerprintMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type KnownFingerprintCountAggregateOutputType = {
    id: number;
    description: number;
    createdAt: number;
    _all: number;
};
export type KnownFingerprintMinAggregateInputType = {
    id?: true;
    description?: true;
    createdAt?: true;
};
export type KnownFingerprintMaxAggregateInputType = {
    id?: true;
    description?: true;
    createdAt?: true;
};
export type KnownFingerprintCountAggregateInputType = {
    id?: true;
    description?: true;
    createdAt?: true;
    _all?: true;
};
export type KnownFingerprintAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which KnownFingerprint to aggregate.
     */
    where?: Prisma.KnownFingerprintWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of KnownFingerprints to fetch.
     */
    orderBy?: Prisma.KnownFingerprintOrderByWithRelationInput | Prisma.KnownFingerprintOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.KnownFingerprintWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` KnownFingerprints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` KnownFingerprints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned KnownFingerprints
    **/
    _count?: true | KnownFingerprintCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: KnownFingerprintMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: KnownFingerprintMaxAggregateInputType;
};
export type GetKnownFingerprintAggregateType<T extends KnownFingerprintAggregateArgs> = {
    [P in keyof T & keyof AggregateKnownFingerprint]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKnownFingerprint[P]> : Prisma.GetScalarType<T[P], AggregateKnownFingerprint[P]>;
};
export type KnownFingerprintGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KnownFingerprintWhereInput;
    orderBy?: Prisma.KnownFingerprintOrderByWithAggregationInput | Prisma.KnownFingerprintOrderByWithAggregationInput[];
    by: Prisma.KnownFingerprintScalarFieldEnum[] | Prisma.KnownFingerprintScalarFieldEnum;
    having?: Prisma.KnownFingerprintScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KnownFingerprintCountAggregateInputType | true;
    _min?: KnownFingerprintMinAggregateInputType;
    _max?: KnownFingerprintMaxAggregateInputType;
};
export type KnownFingerprintGroupByOutputType = {
    id: string;
    description: string | null;
    createdAt: Date;
    _count: KnownFingerprintCountAggregateOutputType | null;
    _min: KnownFingerprintMinAggregateOutputType | null;
    _max: KnownFingerprintMaxAggregateOutputType | null;
};
export type GetKnownFingerprintGroupByPayload<T extends KnownFingerprintGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KnownFingerprintGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KnownFingerprintGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KnownFingerprintGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KnownFingerprintGroupByOutputType[P]>;
}>>;
export type KnownFingerprintWhereInput = {
    AND?: Prisma.KnownFingerprintWhereInput | Prisma.KnownFingerprintWhereInput[];
    OR?: Prisma.KnownFingerprintWhereInput[];
    NOT?: Prisma.KnownFingerprintWhereInput | Prisma.KnownFingerprintWhereInput[];
    id?: Prisma.StringFilter<"KnownFingerprint"> | string;
    description?: Prisma.StringNullableFilter<"KnownFingerprint"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"KnownFingerprint"> | Date | string;
};
export type KnownFingerprintOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KnownFingerprintWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.KnownFingerprintWhereInput | Prisma.KnownFingerprintWhereInput[];
    OR?: Prisma.KnownFingerprintWhereInput[];
    NOT?: Prisma.KnownFingerprintWhereInput | Prisma.KnownFingerprintWhereInput[];
    description?: Prisma.StringNullableFilter<"KnownFingerprint"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"KnownFingerprint"> | Date | string;
}, "id">;
export type KnownFingerprintOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.KnownFingerprintCountOrderByAggregateInput;
    _max?: Prisma.KnownFingerprintMaxOrderByAggregateInput;
    _min?: Prisma.KnownFingerprintMinOrderByAggregateInput;
};
export type KnownFingerprintScalarWhereWithAggregatesInput = {
    AND?: Prisma.KnownFingerprintScalarWhereWithAggregatesInput | Prisma.KnownFingerprintScalarWhereWithAggregatesInput[];
    OR?: Prisma.KnownFingerprintScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KnownFingerprintScalarWhereWithAggregatesInput | Prisma.KnownFingerprintScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"KnownFingerprint"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"KnownFingerprint"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"KnownFingerprint"> | Date | string;
};
export type KnownFingerprintCreateInput = {
    id: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type KnownFingerprintUncheckedCreateInput = {
    id: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type KnownFingerprintUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KnownFingerprintUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KnownFingerprintCreateManyInput = {
    id: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type KnownFingerprintUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KnownFingerprintUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KnownFingerprintCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KnownFingerprintMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KnownFingerprintMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KnownFingerprintSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["knownFingerprint"]>;
export type KnownFingerprintSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["knownFingerprint"]>;
export type KnownFingerprintSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["knownFingerprint"]>;
export type KnownFingerprintSelectScalar = {
    id?: boolean;
    description?: boolean;
    createdAt?: boolean;
};
export type KnownFingerprintOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "description" | "createdAt", ExtArgs["result"]["knownFingerprint"]>;
export type $KnownFingerprintPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KnownFingerprint";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        description: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["knownFingerprint"]>;
    composites: {};
};
export type KnownFingerprintGetPayload<S extends boolean | null | undefined | KnownFingerprintDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KnownFingerprintPayload, S>;
export type KnownFingerprintCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KnownFingerprintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: KnownFingerprintCountAggregateInputType | true;
};
export interface KnownFingerprintDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KnownFingerprint'];
        meta: {
            name: 'KnownFingerprint';
        };
    };
    /**
     * Find zero or one KnownFingerprint that matches the filter.
     * @param {KnownFingerprintFindUniqueArgs} args - Arguments to find a KnownFingerprint
     * @example
     * // Get one KnownFingerprint
     * const knownFingerprint = await prisma.knownFingerprint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnownFingerprintFindUniqueArgs>(args: Prisma.SelectSubset<T, KnownFingerprintFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KnownFingerprintClient<runtime.Types.Result.GetResult<Prisma.$KnownFingerprintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one KnownFingerprint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KnownFingerprintFindUniqueOrThrowArgs} args - Arguments to find a KnownFingerprint
     * @example
     * // Get one KnownFingerprint
     * const knownFingerprint = await prisma.knownFingerprint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnownFingerprintFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KnownFingerprintFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KnownFingerprintClient<runtime.Types.Result.GetResult<Prisma.$KnownFingerprintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first KnownFingerprint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnownFingerprintFindFirstArgs} args - Arguments to find a KnownFingerprint
     * @example
     * // Get one KnownFingerprint
     * const knownFingerprint = await prisma.knownFingerprint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnownFingerprintFindFirstArgs>(args?: Prisma.SelectSubset<T, KnownFingerprintFindFirstArgs<ExtArgs>>): Prisma.Prisma__KnownFingerprintClient<runtime.Types.Result.GetResult<Prisma.$KnownFingerprintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first KnownFingerprint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnownFingerprintFindFirstOrThrowArgs} args - Arguments to find a KnownFingerprint
     * @example
     * // Get one KnownFingerprint
     * const knownFingerprint = await prisma.knownFingerprint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnownFingerprintFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KnownFingerprintFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KnownFingerprintClient<runtime.Types.Result.GetResult<Prisma.$KnownFingerprintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more KnownFingerprints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnownFingerprintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KnownFingerprints
     * const knownFingerprints = await prisma.knownFingerprint.findMany()
     *
     * // Get first 10 KnownFingerprints
     * const knownFingerprints = await prisma.knownFingerprint.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const knownFingerprintWithIdOnly = await prisma.knownFingerprint.findMany({ select: { id: true } })
     *
     */
    findMany<T extends KnownFingerprintFindManyArgs>(args?: Prisma.SelectSubset<T, KnownFingerprintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KnownFingerprintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a KnownFingerprint.
     * @param {KnownFingerprintCreateArgs} args - Arguments to create a KnownFingerprint.
     * @example
     * // Create one KnownFingerprint
     * const KnownFingerprint = await prisma.knownFingerprint.create({
     *   data: {
     *     // ... data to create a KnownFingerprint
     *   }
     * })
     *
     */
    create<T extends KnownFingerprintCreateArgs>(args: Prisma.SelectSubset<T, KnownFingerprintCreateArgs<ExtArgs>>): Prisma.Prisma__KnownFingerprintClient<runtime.Types.Result.GetResult<Prisma.$KnownFingerprintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many KnownFingerprints.
     * @param {KnownFingerprintCreateManyArgs} args - Arguments to create many KnownFingerprints.
     * @example
     * // Create many KnownFingerprints
     * const knownFingerprint = await prisma.knownFingerprint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends KnownFingerprintCreateManyArgs>(args?: Prisma.SelectSubset<T, KnownFingerprintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many KnownFingerprints and returns the data saved in the database.
     * @param {KnownFingerprintCreateManyAndReturnArgs} args - Arguments to create many KnownFingerprints.
     * @example
     * // Create many KnownFingerprints
     * const knownFingerprint = await prisma.knownFingerprint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many KnownFingerprints and only return the `id`
     * const knownFingerprintWithIdOnly = await prisma.knownFingerprint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends KnownFingerprintCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KnownFingerprintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KnownFingerprintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a KnownFingerprint.
     * @param {KnownFingerprintDeleteArgs} args - Arguments to delete one KnownFingerprint.
     * @example
     * // Delete one KnownFingerprint
     * const KnownFingerprint = await prisma.knownFingerprint.delete({
     *   where: {
     *     // ... filter to delete one KnownFingerprint
     *   }
     * })
     *
     */
    delete<T extends KnownFingerprintDeleteArgs>(args: Prisma.SelectSubset<T, KnownFingerprintDeleteArgs<ExtArgs>>): Prisma.Prisma__KnownFingerprintClient<runtime.Types.Result.GetResult<Prisma.$KnownFingerprintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one KnownFingerprint.
     * @param {KnownFingerprintUpdateArgs} args - Arguments to update one KnownFingerprint.
     * @example
     * // Update one KnownFingerprint
     * const knownFingerprint = await prisma.knownFingerprint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends KnownFingerprintUpdateArgs>(args: Prisma.SelectSubset<T, KnownFingerprintUpdateArgs<ExtArgs>>): Prisma.Prisma__KnownFingerprintClient<runtime.Types.Result.GetResult<Prisma.$KnownFingerprintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more KnownFingerprints.
     * @param {KnownFingerprintDeleteManyArgs} args - Arguments to filter KnownFingerprints to delete.
     * @example
     * // Delete a few KnownFingerprints
     * const { count } = await prisma.knownFingerprint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends KnownFingerprintDeleteManyArgs>(args?: Prisma.SelectSubset<T, KnownFingerprintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more KnownFingerprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnownFingerprintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KnownFingerprints
     * const knownFingerprint = await prisma.knownFingerprint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends KnownFingerprintUpdateManyArgs>(args: Prisma.SelectSubset<T, KnownFingerprintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more KnownFingerprints and returns the data updated in the database.
     * @param {KnownFingerprintUpdateManyAndReturnArgs} args - Arguments to update many KnownFingerprints.
     * @example
     * // Update many KnownFingerprints
     * const knownFingerprint = await prisma.knownFingerprint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more KnownFingerprints and only return the `id`
     * const knownFingerprintWithIdOnly = await prisma.knownFingerprint.updateManyAndReturn({
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
    updateManyAndReturn<T extends KnownFingerprintUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KnownFingerprintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KnownFingerprintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one KnownFingerprint.
     * @param {KnownFingerprintUpsertArgs} args - Arguments to update or create a KnownFingerprint.
     * @example
     * // Update or create a KnownFingerprint
     * const knownFingerprint = await prisma.knownFingerprint.upsert({
     *   create: {
     *     // ... data to create a KnownFingerprint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KnownFingerprint we want to update
     *   }
     * })
     */
    upsert<T extends KnownFingerprintUpsertArgs>(args: Prisma.SelectSubset<T, KnownFingerprintUpsertArgs<ExtArgs>>): Prisma.Prisma__KnownFingerprintClient<runtime.Types.Result.GetResult<Prisma.$KnownFingerprintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of KnownFingerprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnownFingerprintCountArgs} args - Arguments to filter KnownFingerprints to count.
     * @example
     * // Count the number of KnownFingerprints
     * const count = await prisma.knownFingerprint.count({
     *   where: {
     *     // ... the filter for the KnownFingerprints we want to count
     *   }
     * })
    **/
    count<T extends KnownFingerprintCountArgs>(args?: Prisma.Subset<T, KnownFingerprintCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KnownFingerprintCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a KnownFingerprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnownFingerprintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KnownFingerprintAggregateArgs>(args: Prisma.Subset<T, KnownFingerprintAggregateArgs>): Prisma.PrismaPromise<GetKnownFingerprintAggregateType<T>>;
    /**
     * Group by KnownFingerprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnownFingerprintGroupByArgs} args - Group by arguments.
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
    groupBy<T extends KnownFingerprintGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KnownFingerprintGroupByArgs['orderBy'];
    } : {
        orderBy?: KnownFingerprintGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KnownFingerprintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnownFingerprintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the KnownFingerprint model
     */
    readonly fields: KnownFingerprintFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for KnownFingerprint.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__KnownFingerprintClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the KnownFingerprint model
 */
export interface KnownFingerprintFieldRefs {
    readonly id: Prisma.FieldRef<"KnownFingerprint", 'String'>;
    readonly description: Prisma.FieldRef<"KnownFingerprint", 'String'>;
    readonly createdAt: Prisma.FieldRef<"KnownFingerprint", 'DateTime'>;
}
/**
 * KnownFingerprint findUnique
 */
export type KnownFingerprintFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnownFingerprint
     */
    select?: Prisma.KnownFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KnownFingerprint
     */
    omit?: Prisma.KnownFingerprintOmit<ExtArgs> | null;
    /**
     * Filter, which KnownFingerprint to fetch.
     */
    where: Prisma.KnownFingerprintWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * KnownFingerprint findUniqueOrThrow
 */
export type KnownFingerprintFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnownFingerprint
     */
    select?: Prisma.KnownFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KnownFingerprint
     */
    omit?: Prisma.KnownFingerprintOmit<ExtArgs> | null;
    /**
     * Filter, which KnownFingerprint to fetch.
     */
    where: Prisma.KnownFingerprintWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * KnownFingerprint findFirst
 */
export type KnownFingerprintFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnownFingerprint
     */
    select?: Prisma.KnownFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KnownFingerprint
     */
    omit?: Prisma.KnownFingerprintOmit<ExtArgs> | null;
    /**
     * Filter, which KnownFingerprint to fetch.
     */
    where?: Prisma.KnownFingerprintWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of KnownFingerprints to fetch.
     */
    orderBy?: Prisma.KnownFingerprintOrderByWithRelationInput | Prisma.KnownFingerprintOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for KnownFingerprints.
     */
    cursor?: Prisma.KnownFingerprintWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` KnownFingerprints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` KnownFingerprints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of KnownFingerprints.
     */
    distinct?: Prisma.KnownFingerprintScalarFieldEnum | Prisma.KnownFingerprintScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * KnownFingerprint findFirstOrThrow
 */
export type KnownFingerprintFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnownFingerprint
     */
    select?: Prisma.KnownFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KnownFingerprint
     */
    omit?: Prisma.KnownFingerprintOmit<ExtArgs> | null;
    /**
     * Filter, which KnownFingerprint to fetch.
     */
    where?: Prisma.KnownFingerprintWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of KnownFingerprints to fetch.
     */
    orderBy?: Prisma.KnownFingerprintOrderByWithRelationInput | Prisma.KnownFingerprintOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for KnownFingerprints.
     */
    cursor?: Prisma.KnownFingerprintWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` KnownFingerprints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` KnownFingerprints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of KnownFingerprints.
     */
    distinct?: Prisma.KnownFingerprintScalarFieldEnum | Prisma.KnownFingerprintScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * KnownFingerprint findMany
 */
export type KnownFingerprintFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnownFingerprint
     */
    select?: Prisma.KnownFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KnownFingerprint
     */
    omit?: Prisma.KnownFingerprintOmit<ExtArgs> | null;
    /**
     * Filter, which KnownFingerprints to fetch.
     */
    where?: Prisma.KnownFingerprintWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of KnownFingerprints to fetch.
     */
    orderBy?: Prisma.KnownFingerprintOrderByWithRelationInput | Prisma.KnownFingerprintOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing KnownFingerprints.
     */
    cursor?: Prisma.KnownFingerprintWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` KnownFingerprints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` KnownFingerprints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of KnownFingerprints.
     */
    distinct?: Prisma.KnownFingerprintScalarFieldEnum | Prisma.KnownFingerprintScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * KnownFingerprint create
 */
export type KnownFingerprintCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnownFingerprint
     */
    select?: Prisma.KnownFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KnownFingerprint
     */
    omit?: Prisma.KnownFingerprintOmit<ExtArgs> | null;
    /**
     * The data needed to create a KnownFingerprint.
     */
    data: Prisma.XOR<Prisma.KnownFingerprintCreateInput, Prisma.KnownFingerprintUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * KnownFingerprint createMany
 */
export type KnownFingerprintCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many KnownFingerprints.
     */
    data: Prisma.KnownFingerprintCreateManyInput | Prisma.KnownFingerprintCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * KnownFingerprint createManyAndReturn
 */
export type KnownFingerprintCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnownFingerprint
     */
    select?: Prisma.KnownFingerprintSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the KnownFingerprint
     */
    omit?: Prisma.KnownFingerprintOmit<ExtArgs> | null;
    /**
     * The data used to create many KnownFingerprints.
     */
    data: Prisma.KnownFingerprintCreateManyInput | Prisma.KnownFingerprintCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * KnownFingerprint update
 */
export type KnownFingerprintUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnownFingerprint
     */
    select?: Prisma.KnownFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KnownFingerprint
     */
    omit?: Prisma.KnownFingerprintOmit<ExtArgs> | null;
    /**
     * The data needed to update a KnownFingerprint.
     */
    data: Prisma.XOR<Prisma.KnownFingerprintUpdateInput, Prisma.KnownFingerprintUncheckedUpdateInput>;
    /**
     * Choose, which KnownFingerprint to update.
     */
    where: Prisma.KnownFingerprintWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * KnownFingerprint updateMany
 */
export type KnownFingerprintUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update KnownFingerprints.
     */
    data: Prisma.XOR<Prisma.KnownFingerprintUpdateManyMutationInput, Prisma.KnownFingerprintUncheckedUpdateManyInput>;
    /**
     * Filter which KnownFingerprints to update
     */
    where?: Prisma.KnownFingerprintWhereInput;
    /**
     * Limit how many KnownFingerprints to update.
     */
    limit?: number;
};
/**
 * KnownFingerprint updateManyAndReturn
 */
export type KnownFingerprintUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnownFingerprint
     */
    select?: Prisma.KnownFingerprintSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the KnownFingerprint
     */
    omit?: Prisma.KnownFingerprintOmit<ExtArgs> | null;
    /**
     * The data used to update KnownFingerprints.
     */
    data: Prisma.XOR<Prisma.KnownFingerprintUpdateManyMutationInput, Prisma.KnownFingerprintUncheckedUpdateManyInput>;
    /**
     * Filter which KnownFingerprints to update
     */
    where?: Prisma.KnownFingerprintWhereInput;
    /**
     * Limit how many KnownFingerprints to update.
     */
    limit?: number;
};
/**
 * KnownFingerprint upsert
 */
export type KnownFingerprintUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnownFingerprint
     */
    select?: Prisma.KnownFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KnownFingerprint
     */
    omit?: Prisma.KnownFingerprintOmit<ExtArgs> | null;
    /**
     * The filter to search for the KnownFingerprint to update in case it exists.
     */
    where: Prisma.KnownFingerprintWhereUniqueInput;
    /**
     * In case the KnownFingerprint found by the `where` argument doesn't exist, create a new KnownFingerprint with this data.
     */
    create: Prisma.XOR<Prisma.KnownFingerprintCreateInput, Prisma.KnownFingerprintUncheckedCreateInput>;
    /**
     * In case the KnownFingerprint was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.KnownFingerprintUpdateInput, Prisma.KnownFingerprintUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * KnownFingerprint delete
 */
export type KnownFingerprintDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnownFingerprint
     */
    select?: Prisma.KnownFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KnownFingerprint
     */
    omit?: Prisma.KnownFingerprintOmit<ExtArgs> | null;
    /**
     * Filter which KnownFingerprint to delete.
     */
    where: Prisma.KnownFingerprintWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * KnownFingerprint deleteMany
 */
export type KnownFingerprintDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which KnownFingerprints to delete
     */
    where?: Prisma.KnownFingerprintWhereInput;
    /**
     * Limit how many KnownFingerprints to delete.
     */
    limit?: number;
};
/**
 * KnownFingerprint without action
 */
export type KnownFingerprintDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnownFingerprint
     */
    select?: Prisma.KnownFingerprintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KnownFingerprint
     */
    omit?: Prisma.KnownFingerprintOmit<ExtArgs> | null;
};
