import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model BannedWord
 *
 */
export type BannedWordModel = runtime.Types.Result.DefaultSelection<Prisma.$BannedWordPayload>;
export type AggregateBannedWord = {
    _count: BannedWordCountAggregateOutputType | null;
    _min: BannedWordMinAggregateOutputType | null;
    _max: BannedWordMaxAggregateOutputType | null;
};
export type BannedWordMinAggregateOutputType = {
    id: string | null;
    word: string | null;
};
export type BannedWordMaxAggregateOutputType = {
    id: string | null;
    word: string | null;
};
export type BannedWordCountAggregateOutputType = {
    id: number;
    word: number;
    _all: number;
};
export type BannedWordMinAggregateInputType = {
    id?: true;
    word?: true;
};
export type BannedWordMaxAggregateInputType = {
    id?: true;
    word?: true;
};
export type BannedWordCountAggregateInputType = {
    id?: true;
    word?: true;
    _all?: true;
};
export type BannedWordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BannedWord to aggregate.
     */
    where?: Prisma.BannedWordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BannedWords to fetch.
     */
    orderBy?: Prisma.BannedWordOrderByWithRelationInput | Prisma.BannedWordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BannedWordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BannedWords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BannedWords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BannedWords
    **/
    _count?: true | BannedWordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BannedWordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BannedWordMaxAggregateInputType;
};
export type GetBannedWordAggregateType<T extends BannedWordAggregateArgs> = {
    [P in keyof T & keyof AggregateBannedWord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBannedWord[P]> : Prisma.GetScalarType<T[P], AggregateBannedWord[P]>;
};
export type BannedWordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BannedWordWhereInput;
    orderBy?: Prisma.BannedWordOrderByWithAggregationInput | Prisma.BannedWordOrderByWithAggregationInput[];
    by: Prisma.BannedWordScalarFieldEnum[] | Prisma.BannedWordScalarFieldEnum;
    having?: Prisma.BannedWordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BannedWordCountAggregateInputType | true;
    _min?: BannedWordMinAggregateInputType;
    _max?: BannedWordMaxAggregateInputType;
};
export type BannedWordGroupByOutputType = {
    id: string;
    word: string;
    _count: BannedWordCountAggregateOutputType | null;
    _min: BannedWordMinAggregateOutputType | null;
    _max: BannedWordMaxAggregateOutputType | null;
};
export type GetBannedWordGroupByPayload<T extends BannedWordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BannedWordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BannedWordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BannedWordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BannedWordGroupByOutputType[P]>;
}>>;
export type BannedWordWhereInput = {
    AND?: Prisma.BannedWordWhereInput | Prisma.BannedWordWhereInput[];
    OR?: Prisma.BannedWordWhereInput[];
    NOT?: Prisma.BannedWordWhereInput | Prisma.BannedWordWhereInput[];
    id?: Prisma.UuidFilter<"BannedWord"> | string;
    word?: Prisma.StringFilter<"BannedWord"> | string;
};
export type BannedWordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
};
export type BannedWordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BannedWordWhereInput | Prisma.BannedWordWhereInput[];
    OR?: Prisma.BannedWordWhereInput[];
    NOT?: Prisma.BannedWordWhereInput | Prisma.BannedWordWhereInput[];
    word?: Prisma.StringFilter<"BannedWord"> | string;
}, "id" | "id">;
export type BannedWordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    _count?: Prisma.BannedWordCountOrderByAggregateInput;
    _max?: Prisma.BannedWordMaxOrderByAggregateInput;
    _min?: Prisma.BannedWordMinOrderByAggregateInput;
};
export type BannedWordScalarWhereWithAggregatesInput = {
    AND?: Prisma.BannedWordScalarWhereWithAggregatesInput | Prisma.BannedWordScalarWhereWithAggregatesInput[];
    OR?: Prisma.BannedWordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BannedWordScalarWhereWithAggregatesInput | Prisma.BannedWordScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BannedWord"> | string;
    word?: Prisma.StringWithAggregatesFilter<"BannedWord"> | string;
};
export type BannedWordCreateInput = {
    id?: string;
    word: string;
};
export type BannedWordUncheckedCreateInput = {
    id?: string;
    word: string;
};
export type BannedWordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    word?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BannedWordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    word?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BannedWordCreateManyInput = {
    id?: string;
    word: string;
};
export type BannedWordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    word?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BannedWordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    word?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BannedWordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
};
export type BannedWordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
};
export type BannedWordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
};
export type BannedWordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    word?: boolean;
}, ExtArgs["result"]["bannedWord"]>;
export type BannedWordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    word?: boolean;
}, ExtArgs["result"]["bannedWord"]>;
export type BannedWordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    word?: boolean;
}, ExtArgs["result"]["bannedWord"]>;
export type BannedWordSelectScalar = {
    id?: boolean;
    word?: boolean;
};
export type BannedWordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "word", ExtArgs["result"]["bannedWord"]>;
export type $BannedWordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BannedWord";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        word: string;
    }, ExtArgs["result"]["bannedWord"]>;
    composites: {};
};
export type BannedWordGetPayload<S extends boolean | null | undefined | BannedWordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BannedWordPayload, S>;
export type BannedWordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BannedWordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: BannedWordCountAggregateInputType | true;
};
export interface BannedWordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BannedWord'];
        meta: {
            name: 'BannedWord';
        };
    };
    /**
     * Find zero or one BannedWord that matches the filter.
     * @param {BannedWordFindUniqueArgs} args - Arguments to find a BannedWord
     * @example
     * // Get one BannedWord
     * const bannedWord = await prisma.bannedWord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannedWordFindUniqueArgs>(args: Prisma.SelectSubset<T, BannedWordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BannedWordClient<runtime.Types.Result.GetResult<Prisma.$BannedWordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BannedWord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannedWordFindUniqueOrThrowArgs} args - Arguments to find a BannedWord
     * @example
     * // Get one BannedWord
     * const bannedWord = await prisma.bannedWord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannedWordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BannedWordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BannedWordClient<runtime.Types.Result.GetResult<Prisma.$BannedWordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BannedWord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedWordFindFirstArgs} args - Arguments to find a BannedWord
     * @example
     * // Get one BannedWord
     * const bannedWord = await prisma.bannedWord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannedWordFindFirstArgs>(args?: Prisma.SelectSubset<T, BannedWordFindFirstArgs<ExtArgs>>): Prisma.Prisma__BannedWordClient<runtime.Types.Result.GetResult<Prisma.$BannedWordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BannedWord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedWordFindFirstOrThrowArgs} args - Arguments to find a BannedWord
     * @example
     * // Get one BannedWord
     * const bannedWord = await prisma.bannedWord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannedWordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BannedWordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BannedWordClient<runtime.Types.Result.GetResult<Prisma.$BannedWordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BannedWords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedWordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BannedWords
     * const bannedWords = await prisma.bannedWord.findMany()
     *
     * // Get first 10 BannedWords
     * const bannedWords = await prisma.bannedWord.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bannedWordWithIdOnly = await prisma.bannedWord.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BannedWordFindManyArgs>(args?: Prisma.SelectSubset<T, BannedWordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BannedWordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BannedWord.
     * @param {BannedWordCreateArgs} args - Arguments to create a BannedWord.
     * @example
     * // Create one BannedWord
     * const BannedWord = await prisma.bannedWord.create({
     *   data: {
     *     // ... data to create a BannedWord
     *   }
     * })
     *
     */
    create<T extends BannedWordCreateArgs>(args: Prisma.SelectSubset<T, BannedWordCreateArgs<ExtArgs>>): Prisma.Prisma__BannedWordClient<runtime.Types.Result.GetResult<Prisma.$BannedWordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BannedWords.
     * @param {BannedWordCreateManyArgs} args - Arguments to create many BannedWords.
     * @example
     * // Create many BannedWords
     * const bannedWord = await prisma.bannedWord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BannedWordCreateManyArgs>(args?: Prisma.SelectSubset<T, BannedWordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BannedWords and returns the data saved in the database.
     * @param {BannedWordCreateManyAndReturnArgs} args - Arguments to create many BannedWords.
     * @example
     * // Create many BannedWords
     * const bannedWord = await prisma.bannedWord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BannedWords and only return the `id`
     * const bannedWordWithIdOnly = await prisma.bannedWord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BannedWordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BannedWordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BannedWordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BannedWord.
     * @param {BannedWordDeleteArgs} args - Arguments to delete one BannedWord.
     * @example
     * // Delete one BannedWord
     * const BannedWord = await prisma.bannedWord.delete({
     *   where: {
     *     // ... filter to delete one BannedWord
     *   }
     * })
     *
     */
    delete<T extends BannedWordDeleteArgs>(args: Prisma.SelectSubset<T, BannedWordDeleteArgs<ExtArgs>>): Prisma.Prisma__BannedWordClient<runtime.Types.Result.GetResult<Prisma.$BannedWordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BannedWord.
     * @param {BannedWordUpdateArgs} args - Arguments to update one BannedWord.
     * @example
     * // Update one BannedWord
     * const bannedWord = await prisma.bannedWord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BannedWordUpdateArgs>(args: Prisma.SelectSubset<T, BannedWordUpdateArgs<ExtArgs>>): Prisma.Prisma__BannedWordClient<runtime.Types.Result.GetResult<Prisma.$BannedWordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BannedWords.
     * @param {BannedWordDeleteManyArgs} args - Arguments to filter BannedWords to delete.
     * @example
     * // Delete a few BannedWords
     * const { count } = await prisma.bannedWord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BannedWordDeleteManyArgs>(args?: Prisma.SelectSubset<T, BannedWordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BannedWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedWordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BannedWords
     * const bannedWord = await prisma.bannedWord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BannedWordUpdateManyArgs>(args: Prisma.SelectSubset<T, BannedWordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BannedWords and returns the data updated in the database.
     * @param {BannedWordUpdateManyAndReturnArgs} args - Arguments to update many BannedWords.
     * @example
     * // Update many BannedWords
     * const bannedWord = await prisma.bannedWord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BannedWords and only return the `id`
     * const bannedWordWithIdOnly = await prisma.bannedWord.updateManyAndReturn({
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
    updateManyAndReturn<T extends BannedWordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BannedWordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BannedWordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BannedWord.
     * @param {BannedWordUpsertArgs} args - Arguments to update or create a BannedWord.
     * @example
     * // Update or create a BannedWord
     * const bannedWord = await prisma.bannedWord.upsert({
     *   create: {
     *     // ... data to create a BannedWord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BannedWord we want to update
     *   }
     * })
     */
    upsert<T extends BannedWordUpsertArgs>(args: Prisma.SelectSubset<T, BannedWordUpsertArgs<ExtArgs>>): Prisma.Prisma__BannedWordClient<runtime.Types.Result.GetResult<Prisma.$BannedWordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BannedWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedWordCountArgs} args - Arguments to filter BannedWords to count.
     * @example
     * // Count the number of BannedWords
     * const count = await prisma.bannedWord.count({
     *   where: {
     *     // ... the filter for the BannedWords we want to count
     *   }
     * })
    **/
    count<T extends BannedWordCountArgs>(args?: Prisma.Subset<T, BannedWordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BannedWordCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BannedWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedWordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannedWordAggregateArgs>(args: Prisma.Subset<T, BannedWordAggregateArgs>): Prisma.PrismaPromise<GetBannedWordAggregateType<T>>;
    /**
     * Group by BannedWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedWordGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BannedWordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BannedWordGroupByArgs['orderBy'];
    } : {
        orderBy?: BannedWordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BannedWordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannedWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BannedWord model
     */
    readonly fields: BannedWordFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BannedWord.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BannedWordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the BannedWord model
 */
export interface BannedWordFieldRefs {
    readonly id: Prisma.FieldRef<"BannedWord", 'String'>;
    readonly word: Prisma.FieldRef<"BannedWord", 'String'>;
}
/**
 * BannedWord findUnique
 */
export type BannedWordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedWord
     */
    select?: Prisma.BannedWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedWord
     */
    omit?: Prisma.BannedWordOmit<ExtArgs> | null;
    /**
     * Filter, which BannedWord to fetch.
     */
    where: Prisma.BannedWordWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedWord findUniqueOrThrow
 */
export type BannedWordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedWord
     */
    select?: Prisma.BannedWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedWord
     */
    omit?: Prisma.BannedWordOmit<ExtArgs> | null;
    /**
     * Filter, which BannedWord to fetch.
     */
    where: Prisma.BannedWordWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedWord findFirst
 */
export type BannedWordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedWord
     */
    select?: Prisma.BannedWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedWord
     */
    omit?: Prisma.BannedWordOmit<ExtArgs> | null;
    /**
     * Filter, which BannedWord to fetch.
     */
    where?: Prisma.BannedWordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BannedWords to fetch.
     */
    orderBy?: Prisma.BannedWordOrderByWithRelationInput | Prisma.BannedWordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BannedWords.
     */
    cursor?: Prisma.BannedWordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BannedWords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BannedWords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BannedWords.
     */
    distinct?: Prisma.BannedWordScalarFieldEnum | Prisma.BannedWordScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedWord findFirstOrThrow
 */
export type BannedWordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedWord
     */
    select?: Prisma.BannedWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedWord
     */
    omit?: Prisma.BannedWordOmit<ExtArgs> | null;
    /**
     * Filter, which BannedWord to fetch.
     */
    where?: Prisma.BannedWordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BannedWords to fetch.
     */
    orderBy?: Prisma.BannedWordOrderByWithRelationInput | Prisma.BannedWordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BannedWords.
     */
    cursor?: Prisma.BannedWordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BannedWords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BannedWords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BannedWords.
     */
    distinct?: Prisma.BannedWordScalarFieldEnum | Prisma.BannedWordScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedWord findMany
 */
export type BannedWordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedWord
     */
    select?: Prisma.BannedWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedWord
     */
    omit?: Prisma.BannedWordOmit<ExtArgs> | null;
    /**
     * Filter, which BannedWords to fetch.
     */
    where?: Prisma.BannedWordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BannedWords to fetch.
     */
    orderBy?: Prisma.BannedWordOrderByWithRelationInput | Prisma.BannedWordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BannedWords.
     */
    cursor?: Prisma.BannedWordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BannedWords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BannedWords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BannedWords.
     */
    distinct?: Prisma.BannedWordScalarFieldEnum | Prisma.BannedWordScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedWord create
 */
export type BannedWordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedWord
     */
    select?: Prisma.BannedWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedWord
     */
    omit?: Prisma.BannedWordOmit<ExtArgs> | null;
    /**
     * The data needed to create a BannedWord.
     */
    data: Prisma.XOR<Prisma.BannedWordCreateInput, Prisma.BannedWordUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedWord createMany
 */
export type BannedWordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BannedWords.
     */
    data: Prisma.BannedWordCreateManyInput | Prisma.BannedWordCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BannedWord createManyAndReturn
 */
export type BannedWordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedWord
     */
    select?: Prisma.BannedWordSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedWord
     */
    omit?: Prisma.BannedWordOmit<ExtArgs> | null;
    /**
     * The data used to create many BannedWords.
     */
    data: Prisma.BannedWordCreateManyInput | Prisma.BannedWordCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BannedWord update
 */
export type BannedWordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedWord
     */
    select?: Prisma.BannedWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedWord
     */
    omit?: Prisma.BannedWordOmit<ExtArgs> | null;
    /**
     * The data needed to update a BannedWord.
     */
    data: Prisma.XOR<Prisma.BannedWordUpdateInput, Prisma.BannedWordUncheckedUpdateInput>;
    /**
     * Choose, which BannedWord to update.
     */
    where: Prisma.BannedWordWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedWord updateMany
 */
export type BannedWordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BannedWords.
     */
    data: Prisma.XOR<Prisma.BannedWordUpdateManyMutationInput, Prisma.BannedWordUncheckedUpdateManyInput>;
    /**
     * Filter which BannedWords to update
     */
    where?: Prisma.BannedWordWhereInput;
    /**
     * Limit how many BannedWords to update.
     */
    limit?: number;
};
/**
 * BannedWord updateManyAndReturn
 */
export type BannedWordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedWord
     */
    select?: Prisma.BannedWordSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedWord
     */
    omit?: Prisma.BannedWordOmit<ExtArgs> | null;
    /**
     * The data used to update BannedWords.
     */
    data: Prisma.XOR<Prisma.BannedWordUpdateManyMutationInput, Prisma.BannedWordUncheckedUpdateManyInput>;
    /**
     * Filter which BannedWords to update
     */
    where?: Prisma.BannedWordWhereInput;
    /**
     * Limit how many BannedWords to update.
     */
    limit?: number;
};
/**
 * BannedWord upsert
 */
export type BannedWordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedWord
     */
    select?: Prisma.BannedWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedWord
     */
    omit?: Prisma.BannedWordOmit<ExtArgs> | null;
    /**
     * The filter to search for the BannedWord to update in case it exists.
     */
    where: Prisma.BannedWordWhereUniqueInput;
    /**
     * In case the BannedWord found by the `where` argument doesn't exist, create a new BannedWord with this data.
     */
    create: Prisma.XOR<Prisma.BannedWordCreateInput, Prisma.BannedWordUncheckedCreateInput>;
    /**
     * In case the BannedWord was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BannedWordUpdateInput, Prisma.BannedWordUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedWord delete
 */
export type BannedWordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedWord
     */
    select?: Prisma.BannedWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedWord
     */
    omit?: Prisma.BannedWordOmit<ExtArgs> | null;
    /**
     * Filter which BannedWord to delete.
     */
    where: Prisma.BannedWordWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * BannedWord deleteMany
 */
export type BannedWordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BannedWords to delete
     */
    where?: Prisma.BannedWordWhereInput;
    /**
     * Limit how many BannedWords to delete.
     */
    limit?: number;
};
/**
 * BannedWord without action
 */
export type BannedWordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedWord
     */
    select?: Prisma.BannedWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BannedWord
     */
    omit?: Prisma.BannedWordOmit<ExtArgs> | null;
};
