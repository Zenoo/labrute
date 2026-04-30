import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Release
 *
 */
export type ReleaseModel = runtime.Types.Result.DefaultSelection<Prisma.$ReleasePayload>;
export type AggregateRelease = {
    _count: ReleaseCountAggregateOutputType | null;
    _min: ReleaseMinAggregateOutputType | null;
    _max: ReleaseMaxAggregateOutputType | null;
};
export type ReleaseMinAggregateOutputType = {
    version: string | null;
    date: Date | null;
};
export type ReleaseMaxAggregateOutputType = {
    version: string | null;
    date: Date | null;
};
export type ReleaseCountAggregateOutputType = {
    version: number;
    date: number;
    _all: number;
};
export type ReleaseMinAggregateInputType = {
    version?: true;
    date?: true;
};
export type ReleaseMaxAggregateInputType = {
    version?: true;
    date?: true;
};
export type ReleaseCountAggregateInputType = {
    version?: true;
    date?: true;
    _all?: true;
};
export type ReleaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Release to aggregate.
     */
    where?: Prisma.ReleaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Releases to fetch.
     */
    orderBy?: Prisma.ReleaseOrderByWithRelationInput | Prisma.ReleaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ReleaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Releases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Releases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Releases
    **/
    _count?: true | ReleaseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ReleaseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ReleaseMaxAggregateInputType;
};
export type GetReleaseAggregateType<T extends ReleaseAggregateArgs> = {
    [P in keyof T & keyof AggregateRelease]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRelease[P]> : Prisma.GetScalarType<T[P], AggregateRelease[P]>;
};
export type ReleaseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReleaseWhereInput;
    orderBy?: Prisma.ReleaseOrderByWithAggregationInput | Prisma.ReleaseOrderByWithAggregationInput[];
    by: Prisma.ReleaseScalarFieldEnum[] | Prisma.ReleaseScalarFieldEnum;
    having?: Prisma.ReleaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReleaseCountAggregateInputType | true;
    _min?: ReleaseMinAggregateInputType;
    _max?: ReleaseMaxAggregateInputType;
};
export type ReleaseGroupByOutputType = {
    version: string;
    date: Date;
    _count: ReleaseCountAggregateOutputType | null;
    _min: ReleaseMinAggregateOutputType | null;
    _max: ReleaseMaxAggregateOutputType | null;
};
export type GetReleaseGroupByPayload<T extends ReleaseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReleaseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReleaseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReleaseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReleaseGroupByOutputType[P]>;
}>>;
export type ReleaseWhereInput = {
    AND?: Prisma.ReleaseWhereInput | Prisma.ReleaseWhereInput[];
    OR?: Prisma.ReleaseWhereInput[];
    NOT?: Prisma.ReleaseWhereInput | Prisma.ReleaseWhereInput[];
    version?: Prisma.StringFilter<"Release"> | string;
    date?: Prisma.DateTimeFilter<"Release"> | Date | string;
};
export type ReleaseOrderByWithRelationInput = {
    version?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type ReleaseWhereUniqueInput = Prisma.AtLeast<{
    version?: string;
    AND?: Prisma.ReleaseWhereInput | Prisma.ReleaseWhereInput[];
    OR?: Prisma.ReleaseWhereInput[];
    NOT?: Prisma.ReleaseWhereInput | Prisma.ReleaseWhereInput[];
    date?: Prisma.DateTimeFilter<"Release"> | Date | string;
}, "version" | "version">;
export type ReleaseOrderByWithAggregationInput = {
    version?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    _count?: Prisma.ReleaseCountOrderByAggregateInput;
    _max?: Prisma.ReleaseMaxOrderByAggregateInput;
    _min?: Prisma.ReleaseMinOrderByAggregateInput;
};
export type ReleaseScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReleaseScalarWhereWithAggregatesInput | Prisma.ReleaseScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReleaseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReleaseScalarWhereWithAggregatesInput | Prisma.ReleaseScalarWhereWithAggregatesInput[];
    version?: Prisma.StringWithAggregatesFilter<"Release"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"Release"> | Date | string;
};
export type ReleaseCreateInput = {
    version: string;
    date?: Date | string;
};
export type ReleaseUncheckedCreateInput = {
    version: string;
    date?: Date | string;
};
export type ReleaseUpdateInput = {
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReleaseUncheckedUpdateInput = {
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReleaseCreateManyInput = {
    version: string;
    date?: Date | string;
};
export type ReleaseUpdateManyMutationInput = {
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReleaseUncheckedUpdateManyInput = {
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReleaseCountOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type ReleaseMaxOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type ReleaseMinOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
};
export type ReleaseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    version?: boolean;
    date?: boolean;
}, ExtArgs["result"]["release"]>;
export type ReleaseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    version?: boolean;
    date?: boolean;
}, ExtArgs["result"]["release"]>;
export type ReleaseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    version?: boolean;
    date?: boolean;
}, ExtArgs["result"]["release"]>;
export type ReleaseSelectScalar = {
    version?: boolean;
    date?: boolean;
};
export type ReleaseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"version" | "date", ExtArgs["result"]["release"]>;
export type $ReleasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Release";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        version: string;
        date: Date;
    }, ExtArgs["result"]["release"]>;
    composites: {};
};
export type ReleaseGetPayload<S extends boolean | null | undefined | ReleaseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReleasePayload, S>;
export type ReleaseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReleaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: ReleaseCountAggregateInputType | true;
};
export interface ReleaseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Release'];
        meta: {
            name: 'Release';
        };
    };
    /**
     * Find zero or one Release that matches the filter.
     * @param {ReleaseFindUniqueArgs} args - Arguments to find a Release
     * @example
     * // Get one Release
     * const release = await prisma.release.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReleaseFindUniqueArgs>(args: Prisma.SelectSubset<T, ReleaseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReleaseClient<runtime.Types.Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Release that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReleaseFindUniqueOrThrowArgs} args - Arguments to find a Release
     * @example
     * // Get one Release
     * const release = await prisma.release.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReleaseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReleaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReleaseClient<runtime.Types.Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Release that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseFindFirstArgs} args - Arguments to find a Release
     * @example
     * // Get one Release
     * const release = await prisma.release.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReleaseFindFirstArgs>(args?: Prisma.SelectSubset<T, ReleaseFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReleaseClient<runtime.Types.Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Release that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseFindFirstOrThrowArgs} args - Arguments to find a Release
     * @example
     * // Get one Release
     * const release = await prisma.release.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReleaseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReleaseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReleaseClient<runtime.Types.Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Releases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Releases
     * const releases = await prisma.release.findMany()
     *
     * // Get first 10 Releases
     * const releases = await prisma.release.findMany({ take: 10 })
     *
     * // Only select the `version`
     * const releaseWithVersionOnly = await prisma.release.findMany({ select: { version: true } })
     *
     */
    findMany<T extends ReleaseFindManyArgs>(args?: Prisma.SelectSubset<T, ReleaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Release.
     * @param {ReleaseCreateArgs} args - Arguments to create a Release.
     * @example
     * // Create one Release
     * const Release = await prisma.release.create({
     *   data: {
     *     // ... data to create a Release
     *   }
     * })
     *
     */
    create<T extends ReleaseCreateArgs>(args: Prisma.SelectSubset<T, ReleaseCreateArgs<ExtArgs>>): Prisma.Prisma__ReleaseClient<runtime.Types.Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Releases.
     * @param {ReleaseCreateManyArgs} args - Arguments to create many Releases.
     * @example
     * // Create many Releases
     * const release = await prisma.release.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReleaseCreateManyArgs>(args?: Prisma.SelectSubset<T, ReleaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Releases and returns the data saved in the database.
     * @param {ReleaseCreateManyAndReturnArgs} args - Arguments to create many Releases.
     * @example
     * // Create many Releases
     * const release = await prisma.release.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Releases and only return the `version`
     * const releaseWithVersionOnly = await prisma.release.createManyAndReturn({
     *   select: { version: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ReleaseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReleaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Release.
     * @param {ReleaseDeleteArgs} args - Arguments to delete one Release.
     * @example
     * // Delete one Release
     * const Release = await prisma.release.delete({
     *   where: {
     *     // ... filter to delete one Release
     *   }
     * })
     *
     */
    delete<T extends ReleaseDeleteArgs>(args: Prisma.SelectSubset<T, ReleaseDeleteArgs<ExtArgs>>): Prisma.Prisma__ReleaseClient<runtime.Types.Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Release.
     * @param {ReleaseUpdateArgs} args - Arguments to update one Release.
     * @example
     * // Update one Release
     * const release = await prisma.release.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReleaseUpdateArgs>(args: Prisma.SelectSubset<T, ReleaseUpdateArgs<ExtArgs>>): Prisma.Prisma__ReleaseClient<runtime.Types.Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Releases.
     * @param {ReleaseDeleteManyArgs} args - Arguments to filter Releases to delete.
     * @example
     * // Delete a few Releases
     * const { count } = await prisma.release.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReleaseDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReleaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Releases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Releases
     * const release = await prisma.release.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReleaseUpdateManyArgs>(args: Prisma.SelectSubset<T, ReleaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Releases and returns the data updated in the database.
     * @param {ReleaseUpdateManyAndReturnArgs} args - Arguments to update many Releases.
     * @example
     * // Update many Releases
     * const release = await prisma.release.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Releases and only return the `version`
     * const releaseWithVersionOnly = await prisma.release.updateManyAndReturn({
     *   select: { version: true },
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
    updateManyAndReturn<T extends ReleaseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReleaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Release.
     * @param {ReleaseUpsertArgs} args - Arguments to update or create a Release.
     * @example
     * // Update or create a Release
     * const release = await prisma.release.upsert({
     *   create: {
     *     // ... data to create a Release
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Release we want to update
     *   }
     * })
     */
    upsert<T extends ReleaseUpsertArgs>(args: Prisma.SelectSubset<T, ReleaseUpsertArgs<ExtArgs>>): Prisma.Prisma__ReleaseClient<runtime.Types.Result.GetResult<Prisma.$ReleasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Releases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseCountArgs} args - Arguments to filter Releases to count.
     * @example
     * // Count the number of Releases
     * const count = await prisma.release.count({
     *   where: {
     *     // ... the filter for the Releases we want to count
     *   }
     * })
    **/
    count<T extends ReleaseCountArgs>(args?: Prisma.Subset<T, ReleaseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReleaseCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Release.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReleaseAggregateArgs>(args: Prisma.Subset<T, ReleaseAggregateArgs>): Prisma.PrismaPromise<GetReleaseAggregateType<T>>;
    /**
     * Group by Release.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ReleaseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReleaseGroupByArgs['orderBy'];
    } : {
        orderBy?: ReleaseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReleaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReleaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Release model
     */
    readonly fields: ReleaseFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Release.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ReleaseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the Release model
 */
export interface ReleaseFieldRefs {
    readonly version: Prisma.FieldRef<"Release", 'String'>;
    readonly date: Prisma.FieldRef<"Release", 'DateTime'>;
}
/**
 * Release findUnique
 */
export type ReleaseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: Prisma.ReleaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Release
     */
    omit?: Prisma.ReleaseOmit<ExtArgs> | null;
    /**
     * Filter, which Release to fetch.
     */
    where: Prisma.ReleaseWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Release findUniqueOrThrow
 */
export type ReleaseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: Prisma.ReleaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Release
     */
    omit?: Prisma.ReleaseOmit<ExtArgs> | null;
    /**
     * Filter, which Release to fetch.
     */
    where: Prisma.ReleaseWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Release findFirst
 */
export type ReleaseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: Prisma.ReleaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Release
     */
    omit?: Prisma.ReleaseOmit<ExtArgs> | null;
    /**
     * Filter, which Release to fetch.
     */
    where?: Prisma.ReleaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Releases to fetch.
     */
    orderBy?: Prisma.ReleaseOrderByWithRelationInput | Prisma.ReleaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Releases.
     */
    cursor?: Prisma.ReleaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Releases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Releases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Releases.
     */
    distinct?: Prisma.ReleaseScalarFieldEnum | Prisma.ReleaseScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Release findFirstOrThrow
 */
export type ReleaseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: Prisma.ReleaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Release
     */
    omit?: Prisma.ReleaseOmit<ExtArgs> | null;
    /**
     * Filter, which Release to fetch.
     */
    where?: Prisma.ReleaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Releases to fetch.
     */
    orderBy?: Prisma.ReleaseOrderByWithRelationInput | Prisma.ReleaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Releases.
     */
    cursor?: Prisma.ReleaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Releases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Releases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Releases.
     */
    distinct?: Prisma.ReleaseScalarFieldEnum | Prisma.ReleaseScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Release findMany
 */
export type ReleaseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: Prisma.ReleaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Release
     */
    omit?: Prisma.ReleaseOmit<ExtArgs> | null;
    /**
     * Filter, which Releases to fetch.
     */
    where?: Prisma.ReleaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Releases to fetch.
     */
    orderBy?: Prisma.ReleaseOrderByWithRelationInput | Prisma.ReleaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Releases.
     */
    cursor?: Prisma.ReleaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Releases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Releases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Releases.
     */
    distinct?: Prisma.ReleaseScalarFieldEnum | Prisma.ReleaseScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Release create
 */
export type ReleaseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: Prisma.ReleaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Release
     */
    omit?: Prisma.ReleaseOmit<ExtArgs> | null;
    /**
     * The data needed to create a Release.
     */
    data: Prisma.XOR<Prisma.ReleaseCreateInput, Prisma.ReleaseUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Release createMany
 */
export type ReleaseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Releases.
     */
    data: Prisma.ReleaseCreateManyInput | Prisma.ReleaseCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Release createManyAndReturn
 */
export type ReleaseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: Prisma.ReleaseSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Release
     */
    omit?: Prisma.ReleaseOmit<ExtArgs> | null;
    /**
     * The data used to create many Releases.
     */
    data: Prisma.ReleaseCreateManyInput | Prisma.ReleaseCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Release update
 */
export type ReleaseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: Prisma.ReleaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Release
     */
    omit?: Prisma.ReleaseOmit<ExtArgs> | null;
    /**
     * The data needed to update a Release.
     */
    data: Prisma.XOR<Prisma.ReleaseUpdateInput, Prisma.ReleaseUncheckedUpdateInput>;
    /**
     * Choose, which Release to update.
     */
    where: Prisma.ReleaseWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Release updateMany
 */
export type ReleaseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Releases.
     */
    data: Prisma.XOR<Prisma.ReleaseUpdateManyMutationInput, Prisma.ReleaseUncheckedUpdateManyInput>;
    /**
     * Filter which Releases to update
     */
    where?: Prisma.ReleaseWhereInput;
    /**
     * Limit how many Releases to update.
     */
    limit?: number;
};
/**
 * Release updateManyAndReturn
 */
export type ReleaseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: Prisma.ReleaseSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Release
     */
    omit?: Prisma.ReleaseOmit<ExtArgs> | null;
    /**
     * The data used to update Releases.
     */
    data: Prisma.XOR<Prisma.ReleaseUpdateManyMutationInput, Prisma.ReleaseUncheckedUpdateManyInput>;
    /**
     * Filter which Releases to update
     */
    where?: Prisma.ReleaseWhereInput;
    /**
     * Limit how many Releases to update.
     */
    limit?: number;
};
/**
 * Release upsert
 */
export type ReleaseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: Prisma.ReleaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Release
     */
    omit?: Prisma.ReleaseOmit<ExtArgs> | null;
    /**
     * The filter to search for the Release to update in case it exists.
     */
    where: Prisma.ReleaseWhereUniqueInput;
    /**
     * In case the Release found by the `where` argument doesn't exist, create a new Release with this data.
     */
    create: Prisma.XOR<Prisma.ReleaseCreateInput, Prisma.ReleaseUncheckedCreateInput>;
    /**
     * In case the Release was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ReleaseUpdateInput, Prisma.ReleaseUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Release delete
 */
export type ReleaseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: Prisma.ReleaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Release
     */
    omit?: Prisma.ReleaseOmit<ExtArgs> | null;
    /**
     * Filter which Release to delete.
     */
    where: Prisma.ReleaseWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Release deleteMany
 */
export type ReleaseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Releases to delete
     */
    where?: Prisma.ReleaseWhereInput;
    /**
     * Limit how many Releases to delete.
     */
    limit?: number;
};
/**
 * Release without action
 */
export type ReleaseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release
     */
    select?: Prisma.ReleaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Release
     */
    omit?: Prisma.ReleaseOmit<ExtArgs> | null;
};
