import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ClanPost
 *
 */
export type ClanPostModel = runtime.Types.Result.DefaultSelection<Prisma.$ClanPostPayload>;
export type AggregateClanPost = {
    _count: ClanPostCountAggregateOutputType | null;
    _min: ClanPostMinAggregateOutputType | null;
    _max: ClanPostMaxAggregateOutputType | null;
};
export type ClanPostMinAggregateOutputType = {
    id: string | null;
    threadId: string | null;
    authorId: string | null;
    date: Date | null;
    message: string | null;
};
export type ClanPostMaxAggregateOutputType = {
    id: string | null;
    threadId: string | null;
    authorId: string | null;
    date: Date | null;
    message: string | null;
};
export type ClanPostCountAggregateOutputType = {
    id: number;
    threadId: number;
    authorId: number;
    date: number;
    message: number;
    _all: number;
};
export type ClanPostMinAggregateInputType = {
    id?: true;
    threadId?: true;
    authorId?: true;
    date?: true;
    message?: true;
};
export type ClanPostMaxAggregateInputType = {
    id?: true;
    threadId?: true;
    authorId?: true;
    date?: true;
    message?: true;
};
export type ClanPostCountAggregateInputType = {
    id?: true;
    threadId?: true;
    authorId?: true;
    date?: true;
    message?: true;
    _all?: true;
};
export type ClanPostAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ClanPost to aggregate.
     */
    where?: Prisma.ClanPostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ClanPosts to fetch.
     */
    orderBy?: Prisma.ClanPostOrderByWithRelationInput | Prisma.ClanPostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ClanPostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ClanPosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ClanPosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ClanPosts
    **/
    _count?: true | ClanPostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ClanPostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ClanPostMaxAggregateInputType;
};
export type GetClanPostAggregateType<T extends ClanPostAggregateArgs> = {
    [P in keyof T & keyof AggregateClanPost]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClanPost[P]> : Prisma.GetScalarType<T[P], AggregateClanPost[P]>;
};
export type ClanPostGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClanPostWhereInput;
    orderBy?: Prisma.ClanPostOrderByWithAggregationInput | Prisma.ClanPostOrderByWithAggregationInput[];
    by: Prisma.ClanPostScalarFieldEnum[] | Prisma.ClanPostScalarFieldEnum;
    having?: Prisma.ClanPostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClanPostCountAggregateInputType | true;
    _min?: ClanPostMinAggregateInputType;
    _max?: ClanPostMaxAggregateInputType;
};
export type ClanPostGroupByOutputType = {
    id: string;
    threadId: string;
    authorId: string | null;
    date: Date;
    message: string;
    _count: ClanPostCountAggregateOutputType | null;
    _min: ClanPostMinAggregateOutputType | null;
    _max: ClanPostMaxAggregateOutputType | null;
};
export type GetClanPostGroupByPayload<T extends ClanPostGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClanPostGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClanPostGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClanPostGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClanPostGroupByOutputType[P]>;
}>>;
export type ClanPostWhereInput = {
    AND?: Prisma.ClanPostWhereInput | Prisma.ClanPostWhereInput[];
    OR?: Prisma.ClanPostWhereInput[];
    NOT?: Prisma.ClanPostWhereInput | Prisma.ClanPostWhereInput[];
    id?: Prisma.UuidFilter<"ClanPost"> | string;
    threadId?: Prisma.UuidFilter<"ClanPost"> | string;
    authorId?: Prisma.UuidNullableFilter<"ClanPost"> | string | null;
    date?: Prisma.DateTimeFilter<"ClanPost"> | Date | string;
    message?: Prisma.StringFilter<"ClanPost"> | string;
    thread?: Prisma.XOR<Prisma.ClanThreadScalarRelationFilter, Prisma.ClanThreadWhereInput>;
    author?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
};
export type ClanPostOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    threadId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    thread?: Prisma.ClanThreadOrderByWithRelationInput;
    author?: Prisma.BruteOrderByWithRelationInput;
};
export type ClanPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ClanPostWhereInput | Prisma.ClanPostWhereInput[];
    OR?: Prisma.ClanPostWhereInput[];
    NOT?: Prisma.ClanPostWhereInput | Prisma.ClanPostWhereInput[];
    threadId?: Prisma.UuidFilter<"ClanPost"> | string;
    authorId?: Prisma.UuidNullableFilter<"ClanPost"> | string | null;
    date?: Prisma.DateTimeFilter<"ClanPost"> | Date | string;
    message?: Prisma.StringFilter<"ClanPost"> | string;
    thread?: Prisma.XOR<Prisma.ClanThreadScalarRelationFilter, Prisma.ClanThreadWhereInput>;
    author?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
}, "id" | "id">;
export type ClanPostOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    threadId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    _count?: Prisma.ClanPostCountOrderByAggregateInput;
    _max?: Prisma.ClanPostMaxOrderByAggregateInput;
    _min?: Prisma.ClanPostMinOrderByAggregateInput;
};
export type ClanPostScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClanPostScalarWhereWithAggregatesInput | Prisma.ClanPostScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClanPostScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClanPostScalarWhereWithAggregatesInput | Prisma.ClanPostScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ClanPost"> | string;
    threadId?: Prisma.UuidWithAggregatesFilter<"ClanPost"> | string;
    authorId?: Prisma.UuidNullableWithAggregatesFilter<"ClanPost"> | string | null;
    date?: Prisma.DateTimeWithAggregatesFilter<"ClanPost"> | Date | string;
    message?: Prisma.StringWithAggregatesFilter<"ClanPost"> | string;
};
export type ClanPostCreateInput = {
    id?: string;
    date?: Date | string;
    message: string;
    thread: Prisma.ClanThreadCreateNestedOneWithoutPostsInput;
    author?: Prisma.BruteCreateNestedOneWithoutClanPostsInput;
};
export type ClanPostUncheckedCreateInput = {
    id?: string;
    threadId: string;
    authorId?: string | null;
    date?: Date | string;
    message: string;
};
export type ClanPostUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    thread?: Prisma.ClanThreadUpdateOneRequiredWithoutPostsNestedInput;
    author?: Prisma.BruteUpdateOneWithoutClanPostsNestedInput;
};
export type ClanPostUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    threadId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClanPostCreateManyInput = {
    id?: string;
    threadId: string;
    authorId?: string | null;
    date?: Date | string;
    message: string;
};
export type ClanPostUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClanPostUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    threadId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClanPostListRelationFilter = {
    every?: Prisma.ClanPostWhereInput;
    some?: Prisma.ClanPostWhereInput;
    none?: Prisma.ClanPostWhereInput;
};
export type ClanPostOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClanPostCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    threadId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
};
export type ClanPostMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    threadId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
};
export type ClanPostMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    threadId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
};
export type ClanPostCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.ClanPostCreateWithoutAuthorInput, Prisma.ClanPostUncheckedCreateWithoutAuthorInput> | Prisma.ClanPostCreateWithoutAuthorInput[] | Prisma.ClanPostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ClanPostCreateOrConnectWithoutAuthorInput | Prisma.ClanPostCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.ClanPostCreateManyAuthorInputEnvelope;
    connect?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
};
export type ClanPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.ClanPostCreateWithoutAuthorInput, Prisma.ClanPostUncheckedCreateWithoutAuthorInput> | Prisma.ClanPostCreateWithoutAuthorInput[] | Prisma.ClanPostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ClanPostCreateOrConnectWithoutAuthorInput | Prisma.ClanPostCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.ClanPostCreateManyAuthorInputEnvelope;
    connect?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
};
export type ClanPostUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.ClanPostCreateWithoutAuthorInput, Prisma.ClanPostUncheckedCreateWithoutAuthorInput> | Prisma.ClanPostCreateWithoutAuthorInput[] | Prisma.ClanPostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ClanPostCreateOrConnectWithoutAuthorInput | Prisma.ClanPostCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.ClanPostUpsertWithWhereUniqueWithoutAuthorInput | Prisma.ClanPostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.ClanPostCreateManyAuthorInputEnvelope;
    set?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    disconnect?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    delete?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    connect?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    update?: Prisma.ClanPostUpdateWithWhereUniqueWithoutAuthorInput | Prisma.ClanPostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.ClanPostUpdateManyWithWhereWithoutAuthorInput | Prisma.ClanPostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.ClanPostScalarWhereInput | Prisma.ClanPostScalarWhereInput[];
};
export type ClanPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.ClanPostCreateWithoutAuthorInput, Prisma.ClanPostUncheckedCreateWithoutAuthorInput> | Prisma.ClanPostCreateWithoutAuthorInput[] | Prisma.ClanPostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ClanPostCreateOrConnectWithoutAuthorInput | Prisma.ClanPostCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.ClanPostUpsertWithWhereUniqueWithoutAuthorInput | Prisma.ClanPostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.ClanPostCreateManyAuthorInputEnvelope;
    set?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    disconnect?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    delete?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    connect?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    update?: Prisma.ClanPostUpdateWithWhereUniqueWithoutAuthorInput | Prisma.ClanPostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.ClanPostUpdateManyWithWhereWithoutAuthorInput | Prisma.ClanPostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.ClanPostScalarWhereInput | Prisma.ClanPostScalarWhereInput[];
};
export type ClanPostCreateNestedManyWithoutThreadInput = {
    create?: Prisma.XOR<Prisma.ClanPostCreateWithoutThreadInput, Prisma.ClanPostUncheckedCreateWithoutThreadInput> | Prisma.ClanPostCreateWithoutThreadInput[] | Prisma.ClanPostUncheckedCreateWithoutThreadInput[];
    connectOrCreate?: Prisma.ClanPostCreateOrConnectWithoutThreadInput | Prisma.ClanPostCreateOrConnectWithoutThreadInput[];
    createMany?: Prisma.ClanPostCreateManyThreadInputEnvelope;
    connect?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
};
export type ClanPostUncheckedCreateNestedManyWithoutThreadInput = {
    create?: Prisma.XOR<Prisma.ClanPostCreateWithoutThreadInput, Prisma.ClanPostUncheckedCreateWithoutThreadInput> | Prisma.ClanPostCreateWithoutThreadInput[] | Prisma.ClanPostUncheckedCreateWithoutThreadInput[];
    connectOrCreate?: Prisma.ClanPostCreateOrConnectWithoutThreadInput | Prisma.ClanPostCreateOrConnectWithoutThreadInput[];
    createMany?: Prisma.ClanPostCreateManyThreadInputEnvelope;
    connect?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
};
export type ClanPostUpdateManyWithoutThreadNestedInput = {
    create?: Prisma.XOR<Prisma.ClanPostCreateWithoutThreadInput, Prisma.ClanPostUncheckedCreateWithoutThreadInput> | Prisma.ClanPostCreateWithoutThreadInput[] | Prisma.ClanPostUncheckedCreateWithoutThreadInput[];
    connectOrCreate?: Prisma.ClanPostCreateOrConnectWithoutThreadInput | Prisma.ClanPostCreateOrConnectWithoutThreadInput[];
    upsert?: Prisma.ClanPostUpsertWithWhereUniqueWithoutThreadInput | Prisma.ClanPostUpsertWithWhereUniqueWithoutThreadInput[];
    createMany?: Prisma.ClanPostCreateManyThreadInputEnvelope;
    set?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    disconnect?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    delete?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    connect?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    update?: Prisma.ClanPostUpdateWithWhereUniqueWithoutThreadInput | Prisma.ClanPostUpdateWithWhereUniqueWithoutThreadInput[];
    updateMany?: Prisma.ClanPostUpdateManyWithWhereWithoutThreadInput | Prisma.ClanPostUpdateManyWithWhereWithoutThreadInput[];
    deleteMany?: Prisma.ClanPostScalarWhereInput | Prisma.ClanPostScalarWhereInput[];
};
export type ClanPostUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: Prisma.XOR<Prisma.ClanPostCreateWithoutThreadInput, Prisma.ClanPostUncheckedCreateWithoutThreadInput> | Prisma.ClanPostCreateWithoutThreadInput[] | Prisma.ClanPostUncheckedCreateWithoutThreadInput[];
    connectOrCreate?: Prisma.ClanPostCreateOrConnectWithoutThreadInput | Prisma.ClanPostCreateOrConnectWithoutThreadInput[];
    upsert?: Prisma.ClanPostUpsertWithWhereUniqueWithoutThreadInput | Prisma.ClanPostUpsertWithWhereUniqueWithoutThreadInput[];
    createMany?: Prisma.ClanPostCreateManyThreadInputEnvelope;
    set?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    disconnect?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    delete?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    connect?: Prisma.ClanPostWhereUniqueInput | Prisma.ClanPostWhereUniqueInput[];
    update?: Prisma.ClanPostUpdateWithWhereUniqueWithoutThreadInput | Prisma.ClanPostUpdateWithWhereUniqueWithoutThreadInput[];
    updateMany?: Prisma.ClanPostUpdateManyWithWhereWithoutThreadInput | Prisma.ClanPostUpdateManyWithWhereWithoutThreadInput[];
    deleteMany?: Prisma.ClanPostScalarWhereInput | Prisma.ClanPostScalarWhereInput[];
};
export type ClanPostCreateWithoutAuthorInput = {
    id?: string;
    date?: Date | string;
    message: string;
    thread: Prisma.ClanThreadCreateNestedOneWithoutPostsInput;
};
export type ClanPostUncheckedCreateWithoutAuthorInput = {
    id?: string;
    threadId: string;
    date?: Date | string;
    message: string;
};
export type ClanPostCreateOrConnectWithoutAuthorInput = {
    where: Prisma.ClanPostWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClanPostCreateWithoutAuthorInput, Prisma.ClanPostUncheckedCreateWithoutAuthorInput>;
};
export type ClanPostCreateManyAuthorInputEnvelope = {
    data: Prisma.ClanPostCreateManyAuthorInput | Prisma.ClanPostCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type ClanPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.ClanPostWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClanPostUpdateWithoutAuthorInput, Prisma.ClanPostUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.ClanPostCreateWithoutAuthorInput, Prisma.ClanPostUncheckedCreateWithoutAuthorInput>;
};
export type ClanPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.ClanPostWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClanPostUpdateWithoutAuthorInput, Prisma.ClanPostUncheckedUpdateWithoutAuthorInput>;
};
export type ClanPostUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.ClanPostScalarWhereInput;
    data: Prisma.XOR<Prisma.ClanPostUpdateManyMutationInput, Prisma.ClanPostUncheckedUpdateManyWithoutAuthorInput>;
};
export type ClanPostScalarWhereInput = {
    AND?: Prisma.ClanPostScalarWhereInput | Prisma.ClanPostScalarWhereInput[];
    OR?: Prisma.ClanPostScalarWhereInput[];
    NOT?: Prisma.ClanPostScalarWhereInput | Prisma.ClanPostScalarWhereInput[];
    id?: Prisma.UuidFilter<"ClanPost"> | string;
    threadId?: Prisma.UuidFilter<"ClanPost"> | string;
    authorId?: Prisma.UuidNullableFilter<"ClanPost"> | string | null;
    date?: Prisma.DateTimeFilter<"ClanPost"> | Date | string;
    message?: Prisma.StringFilter<"ClanPost"> | string;
};
export type ClanPostCreateWithoutThreadInput = {
    id?: string;
    date?: Date | string;
    message: string;
    author?: Prisma.BruteCreateNestedOneWithoutClanPostsInput;
};
export type ClanPostUncheckedCreateWithoutThreadInput = {
    id?: string;
    authorId?: string | null;
    date?: Date | string;
    message: string;
};
export type ClanPostCreateOrConnectWithoutThreadInput = {
    where: Prisma.ClanPostWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClanPostCreateWithoutThreadInput, Prisma.ClanPostUncheckedCreateWithoutThreadInput>;
};
export type ClanPostCreateManyThreadInputEnvelope = {
    data: Prisma.ClanPostCreateManyThreadInput | Prisma.ClanPostCreateManyThreadInput[];
    skipDuplicates?: boolean;
};
export type ClanPostUpsertWithWhereUniqueWithoutThreadInput = {
    where: Prisma.ClanPostWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClanPostUpdateWithoutThreadInput, Prisma.ClanPostUncheckedUpdateWithoutThreadInput>;
    create: Prisma.XOR<Prisma.ClanPostCreateWithoutThreadInput, Prisma.ClanPostUncheckedCreateWithoutThreadInput>;
};
export type ClanPostUpdateWithWhereUniqueWithoutThreadInput = {
    where: Prisma.ClanPostWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClanPostUpdateWithoutThreadInput, Prisma.ClanPostUncheckedUpdateWithoutThreadInput>;
};
export type ClanPostUpdateManyWithWhereWithoutThreadInput = {
    where: Prisma.ClanPostScalarWhereInput;
    data: Prisma.XOR<Prisma.ClanPostUpdateManyMutationInput, Prisma.ClanPostUncheckedUpdateManyWithoutThreadInput>;
};
export type ClanPostCreateManyAuthorInput = {
    id?: string;
    threadId: string;
    date?: Date | string;
    message: string;
};
export type ClanPostUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    thread?: Prisma.ClanThreadUpdateOneRequiredWithoutPostsNestedInput;
};
export type ClanPostUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    threadId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClanPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    threadId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClanPostCreateManyThreadInput = {
    id?: string;
    authorId?: string | null;
    date?: Date | string;
    message: string;
};
export type ClanPostUpdateWithoutThreadInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.BruteUpdateOneWithoutClanPostsNestedInput;
};
export type ClanPostUncheckedUpdateWithoutThreadInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClanPostUncheckedUpdateManyWithoutThreadInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClanPostSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    threadId?: boolean;
    authorId?: boolean;
    date?: boolean;
    message?: boolean;
    thread?: boolean | Prisma.ClanThreadDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.ClanPost$authorArgs<ExtArgs>;
}, ExtArgs["result"]["clanPost"]>;
export type ClanPostSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    threadId?: boolean;
    authorId?: boolean;
    date?: boolean;
    message?: boolean;
    thread?: boolean | Prisma.ClanThreadDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.ClanPost$authorArgs<ExtArgs>;
}, ExtArgs["result"]["clanPost"]>;
export type ClanPostSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    threadId?: boolean;
    authorId?: boolean;
    date?: boolean;
    message?: boolean;
    thread?: boolean | Prisma.ClanThreadDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.ClanPost$authorArgs<ExtArgs>;
}, ExtArgs["result"]["clanPost"]>;
export type ClanPostSelectScalar = {
    id?: boolean;
    threadId?: boolean;
    authorId?: boolean;
    date?: boolean;
    message?: boolean;
};
export type ClanPostOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "threadId" | "authorId" | "date" | "message", ExtArgs["result"]["clanPost"]>;
export type ClanPostInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    thread?: boolean | Prisma.ClanThreadDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.ClanPost$authorArgs<ExtArgs>;
};
export type ClanPostIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    thread?: boolean | Prisma.ClanThreadDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.ClanPost$authorArgs<ExtArgs>;
};
export type ClanPostIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    thread?: boolean | Prisma.ClanThreadDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.ClanPost$authorArgs<ExtArgs>;
};
export type $ClanPostPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClanPost";
    objects: {
        thread: Prisma.$ClanThreadPayload<ExtArgs>;
        author: Prisma.$BrutePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        threadId: string;
        authorId: string | null;
        date: Date;
        message: string;
    }, ExtArgs["result"]["clanPost"]>;
    composites: {};
};
export type ClanPostGetPayload<S extends boolean | null | undefined | ClanPostDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClanPostPayload, S>;
export type ClanPostCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClanPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: ClanPostCountAggregateInputType | true;
};
export interface ClanPostDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClanPost'];
        meta: {
            name: 'ClanPost';
        };
    };
    /**
     * Find zero or one ClanPost that matches the filter.
     * @param {ClanPostFindUniqueArgs} args - Arguments to find a ClanPost
     * @example
     * // Get one ClanPost
     * const clanPost = await prisma.clanPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClanPostFindUniqueArgs>(args: Prisma.SelectSubset<T, ClanPostFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClanPostClient<runtime.Types.Result.GetResult<Prisma.$ClanPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ClanPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClanPostFindUniqueOrThrowArgs} args - Arguments to find a ClanPost
     * @example
     * // Get one ClanPost
     * const clanPost = await prisma.clanPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClanPostFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClanPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClanPostClient<runtime.Types.Result.GetResult<Prisma.$ClanPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ClanPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPostFindFirstArgs} args - Arguments to find a ClanPost
     * @example
     * // Get one ClanPost
     * const clanPost = await prisma.clanPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClanPostFindFirstArgs>(args?: Prisma.SelectSubset<T, ClanPostFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClanPostClient<runtime.Types.Result.GetResult<Prisma.$ClanPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ClanPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPostFindFirstOrThrowArgs} args - Arguments to find a ClanPost
     * @example
     * // Get one ClanPost
     * const clanPost = await prisma.clanPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClanPostFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClanPostFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClanPostClient<runtime.Types.Result.GetResult<Prisma.$ClanPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ClanPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClanPosts
     * const clanPosts = await prisma.clanPost.findMany()
     *
     * // Get first 10 ClanPosts
     * const clanPosts = await prisma.clanPost.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clanPostWithIdOnly = await prisma.clanPost.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ClanPostFindManyArgs>(args?: Prisma.SelectSubset<T, ClanPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClanPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ClanPost.
     * @param {ClanPostCreateArgs} args - Arguments to create a ClanPost.
     * @example
     * // Create one ClanPost
     * const ClanPost = await prisma.clanPost.create({
     *   data: {
     *     // ... data to create a ClanPost
     *   }
     * })
     *
     */
    create<T extends ClanPostCreateArgs>(args: Prisma.SelectSubset<T, ClanPostCreateArgs<ExtArgs>>): Prisma.Prisma__ClanPostClient<runtime.Types.Result.GetResult<Prisma.$ClanPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ClanPosts.
     * @param {ClanPostCreateManyArgs} args - Arguments to create many ClanPosts.
     * @example
     * // Create many ClanPosts
     * const clanPost = await prisma.clanPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ClanPostCreateManyArgs>(args?: Prisma.SelectSubset<T, ClanPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ClanPosts and returns the data saved in the database.
     * @param {ClanPostCreateManyAndReturnArgs} args - Arguments to create many ClanPosts.
     * @example
     * // Create many ClanPosts
     * const clanPost = await prisma.clanPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ClanPosts and only return the `id`
     * const clanPostWithIdOnly = await prisma.clanPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ClanPostCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClanPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClanPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ClanPost.
     * @param {ClanPostDeleteArgs} args - Arguments to delete one ClanPost.
     * @example
     * // Delete one ClanPost
     * const ClanPost = await prisma.clanPost.delete({
     *   where: {
     *     // ... filter to delete one ClanPost
     *   }
     * })
     *
     */
    delete<T extends ClanPostDeleteArgs>(args: Prisma.SelectSubset<T, ClanPostDeleteArgs<ExtArgs>>): Prisma.Prisma__ClanPostClient<runtime.Types.Result.GetResult<Prisma.$ClanPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ClanPost.
     * @param {ClanPostUpdateArgs} args - Arguments to update one ClanPost.
     * @example
     * // Update one ClanPost
     * const clanPost = await prisma.clanPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ClanPostUpdateArgs>(args: Prisma.SelectSubset<T, ClanPostUpdateArgs<ExtArgs>>): Prisma.Prisma__ClanPostClient<runtime.Types.Result.GetResult<Prisma.$ClanPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ClanPosts.
     * @param {ClanPostDeleteManyArgs} args - Arguments to filter ClanPosts to delete.
     * @example
     * // Delete a few ClanPosts
     * const { count } = await prisma.clanPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ClanPostDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClanPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ClanPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClanPosts
     * const clanPost = await prisma.clanPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ClanPostUpdateManyArgs>(args: Prisma.SelectSubset<T, ClanPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ClanPosts and returns the data updated in the database.
     * @param {ClanPostUpdateManyAndReturnArgs} args - Arguments to update many ClanPosts.
     * @example
     * // Update many ClanPosts
     * const clanPost = await prisma.clanPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ClanPosts and only return the `id`
     * const clanPostWithIdOnly = await prisma.clanPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClanPostUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClanPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClanPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ClanPost.
     * @param {ClanPostUpsertArgs} args - Arguments to update or create a ClanPost.
     * @example
     * // Update or create a ClanPost
     * const clanPost = await prisma.clanPost.upsert({
     *   create: {
     *     // ... data to create a ClanPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClanPost we want to update
     *   }
     * })
     */
    upsert<T extends ClanPostUpsertArgs>(args: Prisma.SelectSubset<T, ClanPostUpsertArgs<ExtArgs>>): Prisma.Prisma__ClanPostClient<runtime.Types.Result.GetResult<Prisma.$ClanPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ClanPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPostCountArgs} args - Arguments to filter ClanPosts to count.
     * @example
     * // Count the number of ClanPosts
     * const count = await prisma.clanPost.count({
     *   where: {
     *     // ... the filter for the ClanPosts we want to count
     *   }
     * })
    **/
    count<T extends ClanPostCountArgs>(args?: Prisma.Subset<T, ClanPostCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClanPostCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ClanPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClanPostAggregateArgs>(args: Prisma.Subset<T, ClanPostAggregateArgs>): Prisma.PrismaPromise<GetClanPostAggregateType<T>>;
    /**
     * Group by ClanPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPostGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ClanPostGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClanPostGroupByArgs['orderBy'];
    } : {
        orderBy?: ClanPostGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClanPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClanPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ClanPost model
     */
    readonly fields: ClanPostFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ClanPost.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ClanPostClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    thread<T extends Prisma.ClanThreadDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClanThreadDefaultArgs<ExtArgs>>): Prisma.Prisma__ClanThreadClient<runtime.Types.Result.GetResult<Prisma.$ClanThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    author<T extends Prisma.ClanPost$authorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClanPost$authorArgs<ExtArgs>>): Prisma.Prisma__BruteClient<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ClanPost model
 */
export interface ClanPostFieldRefs {
    readonly id: Prisma.FieldRef<"ClanPost", 'String'>;
    readonly threadId: Prisma.FieldRef<"ClanPost", 'String'>;
    readonly authorId: Prisma.FieldRef<"ClanPost", 'String'>;
    readonly date: Prisma.FieldRef<"ClanPost", 'DateTime'>;
    readonly message: Prisma.FieldRef<"ClanPost", 'String'>;
}
/**
 * ClanPost findUnique
 */
export type ClanPostFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPost
     */
    select?: Prisma.ClanPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPost
     */
    omit?: Prisma.ClanPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanPostInclude<ExtArgs> | null;
    /**
     * Filter, which ClanPost to fetch.
     */
    where: Prisma.ClanPostWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanPost findUniqueOrThrow
 */
export type ClanPostFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPost
     */
    select?: Prisma.ClanPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPost
     */
    omit?: Prisma.ClanPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanPostInclude<ExtArgs> | null;
    /**
     * Filter, which ClanPost to fetch.
     */
    where: Prisma.ClanPostWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanPost findFirst
 */
export type ClanPostFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPost
     */
    select?: Prisma.ClanPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPost
     */
    omit?: Prisma.ClanPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanPostInclude<ExtArgs> | null;
    /**
     * Filter, which ClanPost to fetch.
     */
    where?: Prisma.ClanPostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ClanPosts to fetch.
     */
    orderBy?: Prisma.ClanPostOrderByWithRelationInput | Prisma.ClanPostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ClanPosts.
     */
    cursor?: Prisma.ClanPostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ClanPosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ClanPosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ClanPosts.
     */
    distinct?: Prisma.ClanPostScalarFieldEnum | Prisma.ClanPostScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanPost findFirstOrThrow
 */
export type ClanPostFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPost
     */
    select?: Prisma.ClanPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPost
     */
    omit?: Prisma.ClanPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanPostInclude<ExtArgs> | null;
    /**
     * Filter, which ClanPost to fetch.
     */
    where?: Prisma.ClanPostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ClanPosts to fetch.
     */
    orderBy?: Prisma.ClanPostOrderByWithRelationInput | Prisma.ClanPostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ClanPosts.
     */
    cursor?: Prisma.ClanPostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ClanPosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ClanPosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ClanPosts.
     */
    distinct?: Prisma.ClanPostScalarFieldEnum | Prisma.ClanPostScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanPost findMany
 */
export type ClanPostFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPost
     */
    select?: Prisma.ClanPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPost
     */
    omit?: Prisma.ClanPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanPostInclude<ExtArgs> | null;
    /**
     * Filter, which ClanPosts to fetch.
     */
    where?: Prisma.ClanPostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ClanPosts to fetch.
     */
    orderBy?: Prisma.ClanPostOrderByWithRelationInput | Prisma.ClanPostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ClanPosts.
     */
    cursor?: Prisma.ClanPostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ClanPosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ClanPosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ClanPosts.
     */
    distinct?: Prisma.ClanPostScalarFieldEnum | Prisma.ClanPostScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanPost create
 */
export type ClanPostCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPost
     */
    select?: Prisma.ClanPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPost
     */
    omit?: Prisma.ClanPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanPostInclude<ExtArgs> | null;
    /**
     * The data needed to create a ClanPost.
     */
    data: Prisma.XOR<Prisma.ClanPostCreateInput, Prisma.ClanPostUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanPost createMany
 */
export type ClanPostCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClanPosts.
     */
    data: Prisma.ClanPostCreateManyInput | Prisma.ClanPostCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ClanPost createManyAndReturn
 */
export type ClanPostCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPost
     */
    select?: Prisma.ClanPostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPost
     */
    omit?: Prisma.ClanPostOmit<ExtArgs> | null;
    /**
     * The data used to create many ClanPosts.
     */
    data: Prisma.ClanPostCreateManyInput | Prisma.ClanPostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanPostIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ClanPost update
 */
export type ClanPostUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPost
     */
    select?: Prisma.ClanPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPost
     */
    omit?: Prisma.ClanPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanPostInclude<ExtArgs> | null;
    /**
     * The data needed to update a ClanPost.
     */
    data: Prisma.XOR<Prisma.ClanPostUpdateInput, Prisma.ClanPostUncheckedUpdateInput>;
    /**
     * Choose, which ClanPost to update.
     */
    where: Prisma.ClanPostWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanPost updateMany
 */
export type ClanPostUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ClanPosts.
     */
    data: Prisma.XOR<Prisma.ClanPostUpdateManyMutationInput, Prisma.ClanPostUncheckedUpdateManyInput>;
    /**
     * Filter which ClanPosts to update
     */
    where?: Prisma.ClanPostWhereInput;
    /**
     * Limit how many ClanPosts to update.
     */
    limit?: number;
};
/**
 * ClanPost updateManyAndReturn
 */
export type ClanPostUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPost
     */
    select?: Prisma.ClanPostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPost
     */
    omit?: Prisma.ClanPostOmit<ExtArgs> | null;
    /**
     * The data used to update ClanPosts.
     */
    data: Prisma.XOR<Prisma.ClanPostUpdateManyMutationInput, Prisma.ClanPostUncheckedUpdateManyInput>;
    /**
     * Filter which ClanPosts to update
     */
    where?: Prisma.ClanPostWhereInput;
    /**
     * Limit how many ClanPosts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanPostIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ClanPost upsert
 */
export type ClanPostUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPost
     */
    select?: Prisma.ClanPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPost
     */
    omit?: Prisma.ClanPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanPostInclude<ExtArgs> | null;
    /**
     * The filter to search for the ClanPost to update in case it exists.
     */
    where: Prisma.ClanPostWhereUniqueInput;
    /**
     * In case the ClanPost found by the `where` argument doesn't exist, create a new ClanPost with this data.
     */
    create: Prisma.XOR<Prisma.ClanPostCreateInput, Prisma.ClanPostUncheckedCreateInput>;
    /**
     * In case the ClanPost was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ClanPostUpdateInput, Prisma.ClanPostUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanPost delete
 */
export type ClanPostDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPost
     */
    select?: Prisma.ClanPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPost
     */
    omit?: Prisma.ClanPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanPostInclude<ExtArgs> | null;
    /**
     * Filter which ClanPost to delete.
     */
    where: Prisma.ClanPostWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ClanPost deleteMany
 */
export type ClanPostDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ClanPosts to delete
     */
    where?: Prisma.ClanPostWhereInput;
    /**
     * Limit how many ClanPosts to delete.
     */
    limit?: number;
};
/**
 * ClanPost.author
 */
export type ClanPost$authorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ClanPost without action
 */
export type ClanPostDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPost
     */
    select?: Prisma.ClanPostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPost
     */
    omit?: Prisma.ClanPostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanPostInclude<ExtArgs> | null;
};
