import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Fight
 *
 */
export type FightModel = runtime.Types.Result.DefaultSelection<Prisma.$FightPayload>;
export type AggregateFight = {
    _count: FightCountAggregateOutputType | null;
    _avg: FightAvgAggregateOutputType | null;
    _sum: FightSumAggregateOutputType | null;
    _min: FightMinAggregateOutputType | null;
    _max: FightMaxAggregateOutputType | null;
};
export type FightAvgAggregateOutputType = {
    tournamentStep: number | null;
    favoriteCount: number | null;
};
export type FightSumAggregateOutputType = {
    tournamentStep: number | null;
    favoriteCount: number | null;
};
export type FightMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    brute1Id: string | null;
    brute2Id: string | null;
    winnerId: string | null;
    loserId: string | null;
    winner: string | null;
    loser: string | null;
    steps: string | null;
    fighters: string | null;
    tournamentId: string | null;
    tournamentStep: number | null;
    background: string | null;
    clanWarId: string | null;
    favoriteCount: number | null;
};
export type FightMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    brute1Id: string | null;
    brute2Id: string | null;
    winnerId: string | null;
    loserId: string | null;
    winner: string | null;
    loser: string | null;
    steps: string | null;
    fighters: string | null;
    tournamentId: string | null;
    tournamentStep: number | null;
    background: string | null;
    clanWarId: string | null;
    favoriteCount: number | null;
};
export type FightCountAggregateOutputType = {
    id: number;
    date: number;
    brute1Id: number;
    brute2Id: number;
    winnerId: number;
    loserId: number;
    winner: number;
    loser: number;
    steps: number;
    fighters: number;
    tournamentId: number;
    tournamentStep: number;
    modifiers: number;
    background: number;
    clanWarId: number;
    favoriteCount: number;
    _all: number;
};
export type FightAvgAggregateInputType = {
    tournamentStep?: true;
    favoriteCount?: true;
};
export type FightSumAggregateInputType = {
    tournamentStep?: true;
    favoriteCount?: true;
};
export type FightMinAggregateInputType = {
    id?: true;
    date?: true;
    brute1Id?: true;
    brute2Id?: true;
    winnerId?: true;
    loserId?: true;
    winner?: true;
    loser?: true;
    steps?: true;
    fighters?: true;
    tournamentId?: true;
    tournamentStep?: true;
    background?: true;
    clanWarId?: true;
    favoriteCount?: true;
};
export type FightMaxAggregateInputType = {
    id?: true;
    date?: true;
    brute1Id?: true;
    brute2Id?: true;
    winnerId?: true;
    loserId?: true;
    winner?: true;
    loser?: true;
    steps?: true;
    fighters?: true;
    tournamentId?: true;
    tournamentStep?: true;
    background?: true;
    clanWarId?: true;
    favoriteCount?: true;
};
export type FightCountAggregateInputType = {
    id?: true;
    date?: true;
    brute1Id?: true;
    brute2Id?: true;
    winnerId?: true;
    loserId?: true;
    winner?: true;
    loser?: true;
    steps?: true;
    fighters?: true;
    tournamentId?: true;
    tournamentStep?: true;
    modifiers?: true;
    background?: true;
    clanWarId?: true;
    favoriteCount?: true;
    _all?: true;
};
export type FightAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Fight to aggregate.
     */
    where?: Prisma.FightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Fights to fetch.
     */
    orderBy?: Prisma.FightOrderByWithRelationInput | Prisma.FightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Fights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Fights
    **/
    _count?: true | FightCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FightAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FightSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FightMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FightMaxAggregateInputType;
};
export type GetFightAggregateType<T extends FightAggregateArgs> = {
    [P in keyof T & keyof AggregateFight]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFight[P]> : Prisma.GetScalarType<T[P], AggregateFight[P]>;
};
export type FightGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FightWhereInput;
    orderBy?: Prisma.FightOrderByWithAggregationInput | Prisma.FightOrderByWithAggregationInput[];
    by: Prisma.FightScalarFieldEnum[] | Prisma.FightScalarFieldEnum;
    having?: Prisma.FightScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FightCountAggregateInputType | true;
    _avg?: FightAvgAggregateInputType;
    _sum?: FightSumAggregateInputType;
    _min?: FightMinAggregateInputType;
    _max?: FightMaxAggregateInputType;
};
export type FightGroupByOutputType = {
    id: string;
    date: Date;
    brute1Id: string | null;
    brute2Id: string | null;
    winnerId: string | null;
    loserId: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentId: string | null;
    tournamentStep: number;
    modifiers: $Enums.FightModifier[];
    background: string;
    clanWarId: string | null;
    favoriteCount: number;
    _count: FightCountAggregateOutputType | null;
    _avg: FightAvgAggregateOutputType | null;
    _sum: FightSumAggregateOutputType | null;
    _min: FightMinAggregateOutputType | null;
    _max: FightMaxAggregateOutputType | null;
};
export type GetFightGroupByPayload<T extends FightGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FightGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FightGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FightGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FightGroupByOutputType[P]>;
}>>;
export type FightWhereInput = {
    AND?: Prisma.FightWhereInput | Prisma.FightWhereInput[];
    OR?: Prisma.FightWhereInput[];
    NOT?: Prisma.FightWhereInput | Prisma.FightWhereInput[];
    id?: Prisma.UuidFilter<"Fight"> | string;
    date?: Prisma.DateTimeFilter<"Fight"> | Date | string;
    brute1Id?: Prisma.UuidNullableFilter<"Fight"> | string | null;
    brute2Id?: Prisma.UuidNullableFilter<"Fight"> | string | null;
    winnerId?: Prisma.StringNullableFilter<"Fight"> | string | null;
    loserId?: Prisma.StringNullableFilter<"Fight"> | string | null;
    winner?: Prisma.StringFilter<"Fight"> | string;
    loser?: Prisma.StringFilter<"Fight"> | string;
    steps?: Prisma.StringFilter<"Fight"> | string;
    fighters?: Prisma.StringFilter<"Fight"> | string;
    tournamentId?: Prisma.UuidNullableFilter<"Fight"> | string | null;
    tournamentStep?: Prisma.IntFilter<"Fight"> | number;
    modifiers?: Prisma.EnumFightModifierNullableListFilter<"Fight">;
    background?: Prisma.StringFilter<"Fight"> | string;
    clanWarId?: Prisma.UuidNullableFilter<"Fight"> | string | null;
    favoriteCount?: Prisma.IntFilter<"Fight"> | number;
    brute1?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
    brute2?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
    logs?: Prisma.LogListRelationFilter;
    tournament?: Prisma.XOR<Prisma.TournamentNullableScalarRelationFilter, Prisma.TournamentWhereInput> | null;
    favoritedBy?: Prisma.UserListRelationFilter;
    clanWar?: Prisma.XOR<Prisma.ClanWarNullableScalarRelationFilter, Prisma.ClanWarWhereInput> | null;
};
export type FightOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    brute1Id?: Prisma.SortOrderInput | Prisma.SortOrder;
    brute2Id?: Prisma.SortOrderInput | Prisma.SortOrder;
    winnerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    loserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    winner?: Prisma.SortOrder;
    loser?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    fighters?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tournamentStep?: Prisma.SortOrder;
    modifiers?: Prisma.SortOrder;
    background?: Prisma.SortOrder;
    clanWarId?: Prisma.SortOrderInput | Prisma.SortOrder;
    favoriteCount?: Prisma.SortOrder;
    brute1?: Prisma.BruteOrderByWithRelationInput;
    brute2?: Prisma.BruteOrderByWithRelationInput;
    logs?: Prisma.LogOrderByRelationAggregateInput;
    tournament?: Prisma.TournamentOrderByWithRelationInput;
    favoritedBy?: Prisma.UserOrderByRelationAggregateInput;
    clanWar?: Prisma.ClanWarOrderByWithRelationInput;
};
export type FightWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FightWhereInput | Prisma.FightWhereInput[];
    OR?: Prisma.FightWhereInput[];
    NOT?: Prisma.FightWhereInput | Prisma.FightWhereInput[];
    date?: Prisma.DateTimeFilter<"Fight"> | Date | string;
    brute1Id?: Prisma.UuidNullableFilter<"Fight"> | string | null;
    brute2Id?: Prisma.UuidNullableFilter<"Fight"> | string | null;
    winnerId?: Prisma.StringNullableFilter<"Fight"> | string | null;
    loserId?: Prisma.StringNullableFilter<"Fight"> | string | null;
    winner?: Prisma.StringFilter<"Fight"> | string;
    loser?: Prisma.StringFilter<"Fight"> | string;
    steps?: Prisma.StringFilter<"Fight"> | string;
    fighters?: Prisma.StringFilter<"Fight"> | string;
    tournamentId?: Prisma.UuidNullableFilter<"Fight"> | string | null;
    tournamentStep?: Prisma.IntFilter<"Fight"> | number;
    modifiers?: Prisma.EnumFightModifierNullableListFilter<"Fight">;
    background?: Prisma.StringFilter<"Fight"> | string;
    clanWarId?: Prisma.UuidNullableFilter<"Fight"> | string | null;
    favoriteCount?: Prisma.IntFilter<"Fight"> | number;
    brute1?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
    brute2?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
    logs?: Prisma.LogListRelationFilter;
    tournament?: Prisma.XOR<Prisma.TournamentNullableScalarRelationFilter, Prisma.TournamentWhereInput> | null;
    favoritedBy?: Prisma.UserListRelationFilter;
    clanWar?: Prisma.XOR<Prisma.ClanWarNullableScalarRelationFilter, Prisma.ClanWarWhereInput> | null;
}, "id" | "id">;
export type FightOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    brute1Id?: Prisma.SortOrderInput | Prisma.SortOrder;
    brute2Id?: Prisma.SortOrderInput | Prisma.SortOrder;
    winnerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    loserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    winner?: Prisma.SortOrder;
    loser?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    fighters?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tournamentStep?: Prisma.SortOrder;
    modifiers?: Prisma.SortOrder;
    background?: Prisma.SortOrder;
    clanWarId?: Prisma.SortOrderInput | Prisma.SortOrder;
    favoriteCount?: Prisma.SortOrder;
    _count?: Prisma.FightCountOrderByAggregateInput;
    _avg?: Prisma.FightAvgOrderByAggregateInput;
    _max?: Prisma.FightMaxOrderByAggregateInput;
    _min?: Prisma.FightMinOrderByAggregateInput;
    _sum?: Prisma.FightSumOrderByAggregateInput;
};
export type FightScalarWhereWithAggregatesInput = {
    AND?: Prisma.FightScalarWhereWithAggregatesInput | Prisma.FightScalarWhereWithAggregatesInput[];
    OR?: Prisma.FightScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FightScalarWhereWithAggregatesInput | Prisma.FightScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Fight"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"Fight"> | Date | string;
    brute1Id?: Prisma.UuidNullableWithAggregatesFilter<"Fight"> | string | null;
    brute2Id?: Prisma.UuidNullableWithAggregatesFilter<"Fight"> | string | null;
    winnerId?: Prisma.StringNullableWithAggregatesFilter<"Fight"> | string | null;
    loserId?: Prisma.StringNullableWithAggregatesFilter<"Fight"> | string | null;
    winner?: Prisma.StringWithAggregatesFilter<"Fight"> | string;
    loser?: Prisma.StringWithAggregatesFilter<"Fight"> | string;
    steps?: Prisma.StringWithAggregatesFilter<"Fight"> | string;
    fighters?: Prisma.StringWithAggregatesFilter<"Fight"> | string;
    tournamentId?: Prisma.UuidNullableWithAggregatesFilter<"Fight"> | string | null;
    tournamentStep?: Prisma.IntWithAggregatesFilter<"Fight"> | number;
    modifiers?: Prisma.EnumFightModifierNullableListFilter<"Fight">;
    background?: Prisma.StringWithAggregatesFilter<"Fight"> | string;
    clanWarId?: Prisma.UuidNullableWithAggregatesFilter<"Fight"> | string | null;
    favoriteCount?: Prisma.IntWithAggregatesFilter<"Fight"> | number;
};
export type FightCreateInput = {
    id?: string;
    date?: Date | string;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    favoriteCount?: number;
    brute1?: Prisma.BruteCreateNestedOneWithoutFightsInput;
    brute2?: Prisma.BruteCreateNestedOneWithoutFightsAsAdversaryInput;
    logs?: Prisma.LogCreateNestedManyWithoutFightInput;
    tournament?: Prisma.TournamentCreateNestedOneWithoutFightsInput;
    favoritedBy?: Prisma.UserCreateNestedManyWithoutFavoriteFightsInput;
    clanWar?: Prisma.ClanWarCreateNestedOneWithoutFightsInput;
};
export type FightUncheckedCreateInput = {
    id?: string;
    date?: Date | string;
    brute1Id?: string | null;
    brute2Id?: string | null;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentId?: string | null;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    clanWarId?: string | null;
    favoriteCount?: number;
    logs?: Prisma.LogUncheckedCreateNestedManyWithoutFightInput;
    favoritedBy?: Prisma.UserUncheckedCreateNestedManyWithoutFavoriteFightsInput;
};
export type FightUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    brute1?: Prisma.BruteUpdateOneWithoutFightsNestedInput;
    brute2?: Prisma.BruteUpdateOneWithoutFightsAsAdversaryNestedInput;
    logs?: Prisma.LogUpdateManyWithoutFightNestedInput;
    tournament?: Prisma.TournamentUpdateOneWithoutFightsNestedInput;
    favoritedBy?: Prisma.UserUpdateManyWithoutFavoriteFightsNestedInput;
    clanWar?: Prisma.ClanWarUpdateOneWithoutFightsNestedInput;
};
export type FightUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute1Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brute2Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    logs?: Prisma.LogUncheckedUpdateManyWithoutFightNestedInput;
    favoritedBy?: Prisma.UserUncheckedUpdateManyWithoutFavoriteFightsNestedInput;
};
export type FightCreateManyInput = {
    id?: string;
    date?: Date | string;
    brute1Id?: string | null;
    brute2Id?: string | null;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentId?: string | null;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    clanWarId?: string | null;
    favoriteCount?: number;
};
export type FightUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FightUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute1Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brute2Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FightListRelationFilter = {
    every?: Prisma.FightWhereInput;
    some?: Prisma.FightWhereInput;
    none?: Prisma.FightWhereInput;
};
export type FightOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumFightModifierNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.FightModifier[] | Prisma.ListEnumFightModifierFieldRefInput<$PrismaModel> | null;
    has?: $Enums.FightModifier | Prisma.EnumFightModifierFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.FightModifier[] | Prisma.ListEnumFightModifierFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.FightModifier[] | Prisma.ListEnumFightModifierFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type FightCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    brute1Id?: Prisma.SortOrder;
    brute2Id?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    loserId?: Prisma.SortOrder;
    winner?: Prisma.SortOrder;
    loser?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    fighters?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    tournamentStep?: Prisma.SortOrder;
    modifiers?: Prisma.SortOrder;
    background?: Prisma.SortOrder;
    clanWarId?: Prisma.SortOrder;
    favoriteCount?: Prisma.SortOrder;
};
export type FightAvgOrderByAggregateInput = {
    tournamentStep?: Prisma.SortOrder;
    favoriteCount?: Prisma.SortOrder;
};
export type FightMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    brute1Id?: Prisma.SortOrder;
    brute2Id?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    loserId?: Prisma.SortOrder;
    winner?: Prisma.SortOrder;
    loser?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    fighters?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    tournamentStep?: Prisma.SortOrder;
    background?: Prisma.SortOrder;
    clanWarId?: Prisma.SortOrder;
    favoriteCount?: Prisma.SortOrder;
};
export type FightMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    brute1Id?: Prisma.SortOrder;
    brute2Id?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    loserId?: Prisma.SortOrder;
    winner?: Prisma.SortOrder;
    loser?: Prisma.SortOrder;
    steps?: Prisma.SortOrder;
    fighters?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    tournamentStep?: Prisma.SortOrder;
    background?: Prisma.SortOrder;
    clanWarId?: Prisma.SortOrder;
    favoriteCount?: Prisma.SortOrder;
};
export type FightSumOrderByAggregateInput = {
    tournamentStep?: Prisma.SortOrder;
    favoriteCount?: Prisma.SortOrder;
};
export type FightNullableScalarRelationFilter = {
    is?: Prisma.FightWhereInput | null;
    isNot?: Prisma.FightWhereInput | null;
};
export type FightCreateNestedManyWithoutFavoritedByInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutFavoritedByInput, Prisma.FightUncheckedCreateWithoutFavoritedByInput> | Prisma.FightCreateWithoutFavoritedByInput[] | Prisma.FightUncheckedCreateWithoutFavoritedByInput[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutFavoritedByInput | Prisma.FightCreateOrConnectWithoutFavoritedByInput[];
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
};
export type FightUncheckedCreateNestedManyWithoutFavoritedByInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutFavoritedByInput, Prisma.FightUncheckedCreateWithoutFavoritedByInput> | Prisma.FightCreateWithoutFavoritedByInput[] | Prisma.FightUncheckedCreateWithoutFavoritedByInput[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutFavoritedByInput | Prisma.FightCreateOrConnectWithoutFavoritedByInput[];
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
};
export type FightUpdateManyWithoutFavoritedByNestedInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutFavoritedByInput, Prisma.FightUncheckedCreateWithoutFavoritedByInput> | Prisma.FightCreateWithoutFavoritedByInput[] | Prisma.FightUncheckedCreateWithoutFavoritedByInput[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutFavoritedByInput | Prisma.FightCreateOrConnectWithoutFavoritedByInput[];
    upsert?: Prisma.FightUpsertWithWhereUniqueWithoutFavoritedByInput | Prisma.FightUpsertWithWhereUniqueWithoutFavoritedByInput[];
    set?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    disconnect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    delete?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    update?: Prisma.FightUpdateWithWhereUniqueWithoutFavoritedByInput | Prisma.FightUpdateWithWhereUniqueWithoutFavoritedByInput[];
    updateMany?: Prisma.FightUpdateManyWithWhereWithoutFavoritedByInput | Prisma.FightUpdateManyWithWhereWithoutFavoritedByInput[];
    deleteMany?: Prisma.FightScalarWhereInput | Prisma.FightScalarWhereInput[];
};
export type FightUncheckedUpdateManyWithoutFavoritedByNestedInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutFavoritedByInput, Prisma.FightUncheckedCreateWithoutFavoritedByInput> | Prisma.FightCreateWithoutFavoritedByInput[] | Prisma.FightUncheckedCreateWithoutFavoritedByInput[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutFavoritedByInput | Prisma.FightCreateOrConnectWithoutFavoritedByInput[];
    upsert?: Prisma.FightUpsertWithWhereUniqueWithoutFavoritedByInput | Prisma.FightUpsertWithWhereUniqueWithoutFavoritedByInput[];
    set?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    disconnect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    delete?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    update?: Prisma.FightUpdateWithWhereUniqueWithoutFavoritedByInput | Prisma.FightUpdateWithWhereUniqueWithoutFavoritedByInput[];
    updateMany?: Prisma.FightUpdateManyWithWhereWithoutFavoritedByInput | Prisma.FightUpdateManyWithWhereWithoutFavoritedByInput[];
    deleteMany?: Prisma.FightScalarWhereInput | Prisma.FightScalarWhereInput[];
};
export type FightCreateNestedManyWithoutBrute1Input = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutBrute1Input, Prisma.FightUncheckedCreateWithoutBrute1Input> | Prisma.FightCreateWithoutBrute1Input[] | Prisma.FightUncheckedCreateWithoutBrute1Input[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutBrute1Input | Prisma.FightCreateOrConnectWithoutBrute1Input[];
    createMany?: Prisma.FightCreateManyBrute1InputEnvelope;
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
};
export type FightCreateNestedManyWithoutBrute2Input = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutBrute2Input, Prisma.FightUncheckedCreateWithoutBrute2Input> | Prisma.FightCreateWithoutBrute2Input[] | Prisma.FightUncheckedCreateWithoutBrute2Input[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutBrute2Input | Prisma.FightCreateOrConnectWithoutBrute2Input[];
    createMany?: Prisma.FightCreateManyBrute2InputEnvelope;
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
};
export type FightUncheckedCreateNestedManyWithoutBrute1Input = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutBrute1Input, Prisma.FightUncheckedCreateWithoutBrute1Input> | Prisma.FightCreateWithoutBrute1Input[] | Prisma.FightUncheckedCreateWithoutBrute1Input[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutBrute1Input | Prisma.FightCreateOrConnectWithoutBrute1Input[];
    createMany?: Prisma.FightCreateManyBrute1InputEnvelope;
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
};
export type FightUncheckedCreateNestedManyWithoutBrute2Input = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutBrute2Input, Prisma.FightUncheckedCreateWithoutBrute2Input> | Prisma.FightCreateWithoutBrute2Input[] | Prisma.FightUncheckedCreateWithoutBrute2Input[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutBrute2Input | Prisma.FightCreateOrConnectWithoutBrute2Input[];
    createMany?: Prisma.FightCreateManyBrute2InputEnvelope;
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
};
export type FightUpdateManyWithoutBrute1NestedInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutBrute1Input, Prisma.FightUncheckedCreateWithoutBrute1Input> | Prisma.FightCreateWithoutBrute1Input[] | Prisma.FightUncheckedCreateWithoutBrute1Input[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutBrute1Input | Prisma.FightCreateOrConnectWithoutBrute1Input[];
    upsert?: Prisma.FightUpsertWithWhereUniqueWithoutBrute1Input | Prisma.FightUpsertWithWhereUniqueWithoutBrute1Input[];
    createMany?: Prisma.FightCreateManyBrute1InputEnvelope;
    set?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    disconnect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    delete?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    update?: Prisma.FightUpdateWithWhereUniqueWithoutBrute1Input | Prisma.FightUpdateWithWhereUniqueWithoutBrute1Input[];
    updateMany?: Prisma.FightUpdateManyWithWhereWithoutBrute1Input | Prisma.FightUpdateManyWithWhereWithoutBrute1Input[];
    deleteMany?: Prisma.FightScalarWhereInput | Prisma.FightScalarWhereInput[];
};
export type FightUpdateManyWithoutBrute2NestedInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutBrute2Input, Prisma.FightUncheckedCreateWithoutBrute2Input> | Prisma.FightCreateWithoutBrute2Input[] | Prisma.FightUncheckedCreateWithoutBrute2Input[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutBrute2Input | Prisma.FightCreateOrConnectWithoutBrute2Input[];
    upsert?: Prisma.FightUpsertWithWhereUniqueWithoutBrute2Input | Prisma.FightUpsertWithWhereUniqueWithoutBrute2Input[];
    createMany?: Prisma.FightCreateManyBrute2InputEnvelope;
    set?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    disconnect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    delete?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    update?: Prisma.FightUpdateWithWhereUniqueWithoutBrute2Input | Prisma.FightUpdateWithWhereUniqueWithoutBrute2Input[];
    updateMany?: Prisma.FightUpdateManyWithWhereWithoutBrute2Input | Prisma.FightUpdateManyWithWhereWithoutBrute2Input[];
    deleteMany?: Prisma.FightScalarWhereInput | Prisma.FightScalarWhereInput[];
};
export type FightUncheckedUpdateManyWithoutBrute1NestedInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutBrute1Input, Prisma.FightUncheckedCreateWithoutBrute1Input> | Prisma.FightCreateWithoutBrute1Input[] | Prisma.FightUncheckedCreateWithoutBrute1Input[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutBrute1Input | Prisma.FightCreateOrConnectWithoutBrute1Input[];
    upsert?: Prisma.FightUpsertWithWhereUniqueWithoutBrute1Input | Prisma.FightUpsertWithWhereUniqueWithoutBrute1Input[];
    createMany?: Prisma.FightCreateManyBrute1InputEnvelope;
    set?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    disconnect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    delete?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    update?: Prisma.FightUpdateWithWhereUniqueWithoutBrute1Input | Prisma.FightUpdateWithWhereUniqueWithoutBrute1Input[];
    updateMany?: Prisma.FightUpdateManyWithWhereWithoutBrute1Input | Prisma.FightUpdateManyWithWhereWithoutBrute1Input[];
    deleteMany?: Prisma.FightScalarWhereInput | Prisma.FightScalarWhereInput[];
};
export type FightUncheckedUpdateManyWithoutBrute2NestedInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutBrute2Input, Prisma.FightUncheckedCreateWithoutBrute2Input> | Prisma.FightCreateWithoutBrute2Input[] | Prisma.FightUncheckedCreateWithoutBrute2Input[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutBrute2Input | Prisma.FightCreateOrConnectWithoutBrute2Input[];
    upsert?: Prisma.FightUpsertWithWhereUniqueWithoutBrute2Input | Prisma.FightUpsertWithWhereUniqueWithoutBrute2Input[];
    createMany?: Prisma.FightCreateManyBrute2InputEnvelope;
    set?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    disconnect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    delete?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    update?: Prisma.FightUpdateWithWhereUniqueWithoutBrute2Input | Prisma.FightUpdateWithWhereUniqueWithoutBrute2Input[];
    updateMany?: Prisma.FightUpdateManyWithWhereWithoutBrute2Input | Prisma.FightUpdateManyWithWhereWithoutBrute2Input[];
    deleteMany?: Prisma.FightScalarWhereInput | Prisma.FightScalarWhereInput[];
};
export type FightCreatemodifiersInput = {
    set: $Enums.FightModifier[];
};
export type FightUpdatemodifiersInput = {
    set?: $Enums.FightModifier[];
    push?: $Enums.FightModifier | $Enums.FightModifier[];
};
export type FightCreateNestedOneWithoutLogsInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutLogsInput, Prisma.FightUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutLogsInput;
    connect?: Prisma.FightWhereUniqueInput;
};
export type FightUpdateOneWithoutLogsNestedInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutLogsInput, Prisma.FightUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutLogsInput;
    upsert?: Prisma.FightUpsertWithoutLogsInput;
    disconnect?: Prisma.FightWhereInput | boolean;
    delete?: Prisma.FightWhereInput | boolean;
    connect?: Prisma.FightWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FightUpdateToOneWithWhereWithoutLogsInput, Prisma.FightUpdateWithoutLogsInput>, Prisma.FightUncheckedUpdateWithoutLogsInput>;
};
export type FightCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutTournamentInput, Prisma.FightUncheckedCreateWithoutTournamentInput> | Prisma.FightCreateWithoutTournamentInput[] | Prisma.FightUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutTournamentInput | Prisma.FightCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.FightCreateManyTournamentInputEnvelope;
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
};
export type FightUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutTournamentInput, Prisma.FightUncheckedCreateWithoutTournamentInput> | Prisma.FightCreateWithoutTournamentInput[] | Prisma.FightUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutTournamentInput | Prisma.FightCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.FightCreateManyTournamentInputEnvelope;
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
};
export type FightUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutTournamentInput, Prisma.FightUncheckedCreateWithoutTournamentInput> | Prisma.FightCreateWithoutTournamentInput[] | Prisma.FightUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutTournamentInput | Prisma.FightCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.FightUpsertWithWhereUniqueWithoutTournamentInput | Prisma.FightUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.FightCreateManyTournamentInputEnvelope;
    set?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    disconnect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    delete?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    update?: Prisma.FightUpdateWithWhereUniqueWithoutTournamentInput | Prisma.FightUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.FightUpdateManyWithWhereWithoutTournamentInput | Prisma.FightUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.FightScalarWhereInput | Prisma.FightScalarWhereInput[];
};
export type FightUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutTournamentInput, Prisma.FightUncheckedCreateWithoutTournamentInput> | Prisma.FightCreateWithoutTournamentInput[] | Prisma.FightUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutTournamentInput | Prisma.FightCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.FightUpsertWithWhereUniqueWithoutTournamentInput | Prisma.FightUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.FightCreateManyTournamentInputEnvelope;
    set?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    disconnect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    delete?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    update?: Prisma.FightUpdateWithWhereUniqueWithoutTournamentInput | Prisma.FightUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.FightUpdateManyWithWhereWithoutTournamentInput | Prisma.FightUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.FightScalarWhereInput | Prisma.FightScalarWhereInput[];
};
export type FightCreateNestedManyWithoutClanWarInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutClanWarInput, Prisma.FightUncheckedCreateWithoutClanWarInput> | Prisma.FightCreateWithoutClanWarInput[] | Prisma.FightUncheckedCreateWithoutClanWarInput[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutClanWarInput | Prisma.FightCreateOrConnectWithoutClanWarInput[];
    createMany?: Prisma.FightCreateManyClanWarInputEnvelope;
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
};
export type FightUncheckedCreateNestedManyWithoutClanWarInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutClanWarInput, Prisma.FightUncheckedCreateWithoutClanWarInput> | Prisma.FightCreateWithoutClanWarInput[] | Prisma.FightUncheckedCreateWithoutClanWarInput[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutClanWarInput | Prisma.FightCreateOrConnectWithoutClanWarInput[];
    createMany?: Prisma.FightCreateManyClanWarInputEnvelope;
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
};
export type FightUpdateManyWithoutClanWarNestedInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutClanWarInput, Prisma.FightUncheckedCreateWithoutClanWarInput> | Prisma.FightCreateWithoutClanWarInput[] | Prisma.FightUncheckedCreateWithoutClanWarInput[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutClanWarInput | Prisma.FightCreateOrConnectWithoutClanWarInput[];
    upsert?: Prisma.FightUpsertWithWhereUniqueWithoutClanWarInput | Prisma.FightUpsertWithWhereUniqueWithoutClanWarInput[];
    createMany?: Prisma.FightCreateManyClanWarInputEnvelope;
    set?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    disconnect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    delete?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    update?: Prisma.FightUpdateWithWhereUniqueWithoutClanWarInput | Prisma.FightUpdateWithWhereUniqueWithoutClanWarInput[];
    updateMany?: Prisma.FightUpdateManyWithWhereWithoutClanWarInput | Prisma.FightUpdateManyWithWhereWithoutClanWarInput[];
    deleteMany?: Prisma.FightScalarWhereInput | Prisma.FightScalarWhereInput[];
};
export type FightUncheckedUpdateManyWithoutClanWarNestedInput = {
    create?: Prisma.XOR<Prisma.FightCreateWithoutClanWarInput, Prisma.FightUncheckedCreateWithoutClanWarInput> | Prisma.FightCreateWithoutClanWarInput[] | Prisma.FightUncheckedCreateWithoutClanWarInput[];
    connectOrCreate?: Prisma.FightCreateOrConnectWithoutClanWarInput | Prisma.FightCreateOrConnectWithoutClanWarInput[];
    upsert?: Prisma.FightUpsertWithWhereUniqueWithoutClanWarInput | Prisma.FightUpsertWithWhereUniqueWithoutClanWarInput[];
    createMany?: Prisma.FightCreateManyClanWarInputEnvelope;
    set?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    disconnect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    delete?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    connect?: Prisma.FightWhereUniqueInput | Prisma.FightWhereUniqueInput[];
    update?: Prisma.FightUpdateWithWhereUniqueWithoutClanWarInput | Prisma.FightUpdateWithWhereUniqueWithoutClanWarInput[];
    updateMany?: Prisma.FightUpdateManyWithWhereWithoutClanWarInput | Prisma.FightUpdateManyWithWhereWithoutClanWarInput[];
    deleteMany?: Prisma.FightScalarWhereInput | Prisma.FightScalarWhereInput[];
};
export type FightCreateWithoutFavoritedByInput = {
    id?: string;
    date?: Date | string;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    favoriteCount?: number;
    brute1?: Prisma.BruteCreateNestedOneWithoutFightsInput;
    brute2?: Prisma.BruteCreateNestedOneWithoutFightsAsAdversaryInput;
    logs?: Prisma.LogCreateNestedManyWithoutFightInput;
    tournament?: Prisma.TournamentCreateNestedOneWithoutFightsInput;
    clanWar?: Prisma.ClanWarCreateNestedOneWithoutFightsInput;
};
export type FightUncheckedCreateWithoutFavoritedByInput = {
    id?: string;
    date?: Date | string;
    brute1Id?: string | null;
    brute2Id?: string | null;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentId?: string | null;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    clanWarId?: string | null;
    favoriteCount?: number;
    logs?: Prisma.LogUncheckedCreateNestedManyWithoutFightInput;
};
export type FightCreateOrConnectWithoutFavoritedByInput = {
    where: Prisma.FightWhereUniqueInput;
    create: Prisma.XOR<Prisma.FightCreateWithoutFavoritedByInput, Prisma.FightUncheckedCreateWithoutFavoritedByInput>;
};
export type FightUpsertWithWhereUniqueWithoutFavoritedByInput = {
    where: Prisma.FightWhereUniqueInput;
    update: Prisma.XOR<Prisma.FightUpdateWithoutFavoritedByInput, Prisma.FightUncheckedUpdateWithoutFavoritedByInput>;
    create: Prisma.XOR<Prisma.FightCreateWithoutFavoritedByInput, Prisma.FightUncheckedCreateWithoutFavoritedByInput>;
};
export type FightUpdateWithWhereUniqueWithoutFavoritedByInput = {
    where: Prisma.FightWhereUniqueInput;
    data: Prisma.XOR<Prisma.FightUpdateWithoutFavoritedByInput, Prisma.FightUncheckedUpdateWithoutFavoritedByInput>;
};
export type FightUpdateManyWithWhereWithoutFavoritedByInput = {
    where: Prisma.FightScalarWhereInput;
    data: Prisma.XOR<Prisma.FightUpdateManyMutationInput, Prisma.FightUncheckedUpdateManyWithoutFavoritedByInput>;
};
export type FightScalarWhereInput = {
    AND?: Prisma.FightScalarWhereInput | Prisma.FightScalarWhereInput[];
    OR?: Prisma.FightScalarWhereInput[];
    NOT?: Prisma.FightScalarWhereInput | Prisma.FightScalarWhereInput[];
    id?: Prisma.UuidFilter<"Fight"> | string;
    date?: Prisma.DateTimeFilter<"Fight"> | Date | string;
    brute1Id?: Prisma.UuidNullableFilter<"Fight"> | string | null;
    brute2Id?: Prisma.UuidNullableFilter<"Fight"> | string | null;
    winnerId?: Prisma.StringNullableFilter<"Fight"> | string | null;
    loserId?: Prisma.StringNullableFilter<"Fight"> | string | null;
    winner?: Prisma.StringFilter<"Fight"> | string;
    loser?: Prisma.StringFilter<"Fight"> | string;
    steps?: Prisma.StringFilter<"Fight"> | string;
    fighters?: Prisma.StringFilter<"Fight"> | string;
    tournamentId?: Prisma.UuidNullableFilter<"Fight"> | string | null;
    tournamentStep?: Prisma.IntFilter<"Fight"> | number;
    modifiers?: Prisma.EnumFightModifierNullableListFilter<"Fight">;
    background?: Prisma.StringFilter<"Fight"> | string;
    clanWarId?: Prisma.UuidNullableFilter<"Fight"> | string | null;
    favoriteCount?: Prisma.IntFilter<"Fight"> | number;
};
export type FightCreateWithoutBrute1Input = {
    id?: string;
    date?: Date | string;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    favoriteCount?: number;
    brute2?: Prisma.BruteCreateNestedOneWithoutFightsAsAdversaryInput;
    logs?: Prisma.LogCreateNestedManyWithoutFightInput;
    tournament?: Prisma.TournamentCreateNestedOneWithoutFightsInput;
    favoritedBy?: Prisma.UserCreateNestedManyWithoutFavoriteFightsInput;
    clanWar?: Prisma.ClanWarCreateNestedOneWithoutFightsInput;
};
export type FightUncheckedCreateWithoutBrute1Input = {
    id?: string;
    date?: Date | string;
    brute2Id?: string | null;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentId?: string | null;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    clanWarId?: string | null;
    favoriteCount?: number;
    logs?: Prisma.LogUncheckedCreateNestedManyWithoutFightInput;
    favoritedBy?: Prisma.UserUncheckedCreateNestedManyWithoutFavoriteFightsInput;
};
export type FightCreateOrConnectWithoutBrute1Input = {
    where: Prisma.FightWhereUniqueInput;
    create: Prisma.XOR<Prisma.FightCreateWithoutBrute1Input, Prisma.FightUncheckedCreateWithoutBrute1Input>;
};
export type FightCreateManyBrute1InputEnvelope = {
    data: Prisma.FightCreateManyBrute1Input | Prisma.FightCreateManyBrute1Input[];
    skipDuplicates?: boolean;
};
export type FightCreateWithoutBrute2Input = {
    id?: string;
    date?: Date | string;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    favoriteCount?: number;
    brute1?: Prisma.BruteCreateNestedOneWithoutFightsInput;
    logs?: Prisma.LogCreateNestedManyWithoutFightInput;
    tournament?: Prisma.TournamentCreateNestedOneWithoutFightsInput;
    favoritedBy?: Prisma.UserCreateNestedManyWithoutFavoriteFightsInput;
    clanWar?: Prisma.ClanWarCreateNestedOneWithoutFightsInput;
};
export type FightUncheckedCreateWithoutBrute2Input = {
    id?: string;
    date?: Date | string;
    brute1Id?: string | null;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentId?: string | null;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    clanWarId?: string | null;
    favoriteCount?: number;
    logs?: Prisma.LogUncheckedCreateNestedManyWithoutFightInput;
    favoritedBy?: Prisma.UserUncheckedCreateNestedManyWithoutFavoriteFightsInput;
};
export type FightCreateOrConnectWithoutBrute2Input = {
    where: Prisma.FightWhereUniqueInput;
    create: Prisma.XOR<Prisma.FightCreateWithoutBrute2Input, Prisma.FightUncheckedCreateWithoutBrute2Input>;
};
export type FightCreateManyBrute2InputEnvelope = {
    data: Prisma.FightCreateManyBrute2Input | Prisma.FightCreateManyBrute2Input[];
    skipDuplicates?: boolean;
};
export type FightUpsertWithWhereUniqueWithoutBrute1Input = {
    where: Prisma.FightWhereUniqueInput;
    update: Prisma.XOR<Prisma.FightUpdateWithoutBrute1Input, Prisma.FightUncheckedUpdateWithoutBrute1Input>;
    create: Prisma.XOR<Prisma.FightCreateWithoutBrute1Input, Prisma.FightUncheckedCreateWithoutBrute1Input>;
};
export type FightUpdateWithWhereUniqueWithoutBrute1Input = {
    where: Prisma.FightWhereUniqueInput;
    data: Prisma.XOR<Prisma.FightUpdateWithoutBrute1Input, Prisma.FightUncheckedUpdateWithoutBrute1Input>;
};
export type FightUpdateManyWithWhereWithoutBrute1Input = {
    where: Prisma.FightScalarWhereInput;
    data: Prisma.XOR<Prisma.FightUpdateManyMutationInput, Prisma.FightUncheckedUpdateManyWithoutBrute1Input>;
};
export type FightUpsertWithWhereUniqueWithoutBrute2Input = {
    where: Prisma.FightWhereUniqueInput;
    update: Prisma.XOR<Prisma.FightUpdateWithoutBrute2Input, Prisma.FightUncheckedUpdateWithoutBrute2Input>;
    create: Prisma.XOR<Prisma.FightCreateWithoutBrute2Input, Prisma.FightUncheckedCreateWithoutBrute2Input>;
};
export type FightUpdateWithWhereUniqueWithoutBrute2Input = {
    where: Prisma.FightWhereUniqueInput;
    data: Prisma.XOR<Prisma.FightUpdateWithoutBrute2Input, Prisma.FightUncheckedUpdateWithoutBrute2Input>;
};
export type FightUpdateManyWithWhereWithoutBrute2Input = {
    where: Prisma.FightScalarWhereInput;
    data: Prisma.XOR<Prisma.FightUpdateManyMutationInput, Prisma.FightUncheckedUpdateManyWithoutBrute2Input>;
};
export type FightCreateWithoutLogsInput = {
    id?: string;
    date?: Date | string;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    favoriteCount?: number;
    brute1?: Prisma.BruteCreateNestedOneWithoutFightsInput;
    brute2?: Prisma.BruteCreateNestedOneWithoutFightsAsAdversaryInput;
    tournament?: Prisma.TournamentCreateNestedOneWithoutFightsInput;
    favoritedBy?: Prisma.UserCreateNestedManyWithoutFavoriteFightsInput;
    clanWar?: Prisma.ClanWarCreateNestedOneWithoutFightsInput;
};
export type FightUncheckedCreateWithoutLogsInput = {
    id?: string;
    date?: Date | string;
    brute1Id?: string | null;
    brute2Id?: string | null;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentId?: string | null;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    clanWarId?: string | null;
    favoriteCount?: number;
    favoritedBy?: Prisma.UserUncheckedCreateNestedManyWithoutFavoriteFightsInput;
};
export type FightCreateOrConnectWithoutLogsInput = {
    where: Prisma.FightWhereUniqueInput;
    create: Prisma.XOR<Prisma.FightCreateWithoutLogsInput, Prisma.FightUncheckedCreateWithoutLogsInput>;
};
export type FightUpsertWithoutLogsInput = {
    update: Prisma.XOR<Prisma.FightUpdateWithoutLogsInput, Prisma.FightUncheckedUpdateWithoutLogsInput>;
    create: Prisma.XOR<Prisma.FightCreateWithoutLogsInput, Prisma.FightUncheckedCreateWithoutLogsInput>;
    where?: Prisma.FightWhereInput;
};
export type FightUpdateToOneWithWhereWithoutLogsInput = {
    where?: Prisma.FightWhereInput;
    data: Prisma.XOR<Prisma.FightUpdateWithoutLogsInput, Prisma.FightUncheckedUpdateWithoutLogsInput>;
};
export type FightUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    brute1?: Prisma.BruteUpdateOneWithoutFightsNestedInput;
    brute2?: Prisma.BruteUpdateOneWithoutFightsAsAdversaryNestedInput;
    tournament?: Prisma.TournamentUpdateOneWithoutFightsNestedInput;
    favoritedBy?: Prisma.UserUpdateManyWithoutFavoriteFightsNestedInput;
    clanWar?: Prisma.ClanWarUpdateOneWithoutFightsNestedInput;
};
export type FightUncheckedUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute1Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brute2Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    favoritedBy?: Prisma.UserUncheckedUpdateManyWithoutFavoriteFightsNestedInput;
};
export type FightCreateWithoutTournamentInput = {
    id?: string;
    date?: Date | string;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    favoriteCount?: number;
    brute1?: Prisma.BruteCreateNestedOneWithoutFightsInput;
    brute2?: Prisma.BruteCreateNestedOneWithoutFightsAsAdversaryInput;
    logs?: Prisma.LogCreateNestedManyWithoutFightInput;
    favoritedBy?: Prisma.UserCreateNestedManyWithoutFavoriteFightsInput;
    clanWar?: Prisma.ClanWarCreateNestedOneWithoutFightsInput;
};
export type FightUncheckedCreateWithoutTournamentInput = {
    id?: string;
    date?: Date | string;
    brute1Id?: string | null;
    brute2Id?: string | null;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    clanWarId?: string | null;
    favoriteCount?: number;
    logs?: Prisma.LogUncheckedCreateNestedManyWithoutFightInput;
    favoritedBy?: Prisma.UserUncheckedCreateNestedManyWithoutFavoriteFightsInput;
};
export type FightCreateOrConnectWithoutTournamentInput = {
    where: Prisma.FightWhereUniqueInput;
    create: Prisma.XOR<Prisma.FightCreateWithoutTournamentInput, Prisma.FightUncheckedCreateWithoutTournamentInput>;
};
export type FightCreateManyTournamentInputEnvelope = {
    data: Prisma.FightCreateManyTournamentInput | Prisma.FightCreateManyTournamentInput[];
    skipDuplicates?: boolean;
};
export type FightUpsertWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.FightWhereUniqueInput;
    update: Prisma.XOR<Prisma.FightUpdateWithoutTournamentInput, Prisma.FightUncheckedUpdateWithoutTournamentInput>;
    create: Prisma.XOR<Prisma.FightCreateWithoutTournamentInput, Prisma.FightUncheckedCreateWithoutTournamentInput>;
};
export type FightUpdateWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.FightWhereUniqueInput;
    data: Prisma.XOR<Prisma.FightUpdateWithoutTournamentInput, Prisma.FightUncheckedUpdateWithoutTournamentInput>;
};
export type FightUpdateManyWithWhereWithoutTournamentInput = {
    where: Prisma.FightScalarWhereInput;
    data: Prisma.XOR<Prisma.FightUpdateManyMutationInput, Prisma.FightUncheckedUpdateManyWithoutTournamentInput>;
};
export type FightCreateWithoutClanWarInput = {
    id?: string;
    date?: Date | string;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    favoriteCount?: number;
    brute1?: Prisma.BruteCreateNestedOneWithoutFightsInput;
    brute2?: Prisma.BruteCreateNestedOneWithoutFightsAsAdversaryInput;
    logs?: Prisma.LogCreateNestedManyWithoutFightInput;
    tournament?: Prisma.TournamentCreateNestedOneWithoutFightsInput;
    favoritedBy?: Prisma.UserCreateNestedManyWithoutFavoriteFightsInput;
};
export type FightUncheckedCreateWithoutClanWarInput = {
    id?: string;
    date?: Date | string;
    brute1Id?: string | null;
    brute2Id?: string | null;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentId?: string | null;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    favoriteCount?: number;
    logs?: Prisma.LogUncheckedCreateNestedManyWithoutFightInput;
    favoritedBy?: Prisma.UserUncheckedCreateNestedManyWithoutFavoriteFightsInput;
};
export type FightCreateOrConnectWithoutClanWarInput = {
    where: Prisma.FightWhereUniqueInput;
    create: Prisma.XOR<Prisma.FightCreateWithoutClanWarInput, Prisma.FightUncheckedCreateWithoutClanWarInput>;
};
export type FightCreateManyClanWarInputEnvelope = {
    data: Prisma.FightCreateManyClanWarInput | Prisma.FightCreateManyClanWarInput[];
    skipDuplicates?: boolean;
};
export type FightUpsertWithWhereUniqueWithoutClanWarInput = {
    where: Prisma.FightWhereUniqueInput;
    update: Prisma.XOR<Prisma.FightUpdateWithoutClanWarInput, Prisma.FightUncheckedUpdateWithoutClanWarInput>;
    create: Prisma.XOR<Prisma.FightCreateWithoutClanWarInput, Prisma.FightUncheckedCreateWithoutClanWarInput>;
};
export type FightUpdateWithWhereUniqueWithoutClanWarInput = {
    where: Prisma.FightWhereUniqueInput;
    data: Prisma.XOR<Prisma.FightUpdateWithoutClanWarInput, Prisma.FightUncheckedUpdateWithoutClanWarInput>;
};
export type FightUpdateManyWithWhereWithoutClanWarInput = {
    where: Prisma.FightScalarWhereInput;
    data: Prisma.XOR<Prisma.FightUpdateManyMutationInput, Prisma.FightUncheckedUpdateManyWithoutClanWarInput>;
};
export type FightUpdateWithoutFavoritedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    brute1?: Prisma.BruteUpdateOneWithoutFightsNestedInput;
    brute2?: Prisma.BruteUpdateOneWithoutFightsAsAdversaryNestedInput;
    logs?: Prisma.LogUpdateManyWithoutFightNestedInput;
    tournament?: Prisma.TournamentUpdateOneWithoutFightsNestedInput;
    clanWar?: Prisma.ClanWarUpdateOneWithoutFightsNestedInput;
};
export type FightUncheckedUpdateWithoutFavoritedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute1Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brute2Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    logs?: Prisma.LogUncheckedUpdateManyWithoutFightNestedInput;
};
export type FightUncheckedUpdateManyWithoutFavoritedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute1Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brute2Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FightCreateManyBrute1Input = {
    id?: string;
    date?: Date | string;
    brute2Id?: string | null;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentId?: string | null;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    clanWarId?: string | null;
    favoriteCount?: number;
};
export type FightCreateManyBrute2Input = {
    id?: string;
    date?: Date | string;
    brute1Id?: string | null;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentId?: string | null;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    clanWarId?: string | null;
    favoriteCount?: number;
};
export type FightUpdateWithoutBrute1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    brute2?: Prisma.BruteUpdateOneWithoutFightsAsAdversaryNestedInput;
    logs?: Prisma.LogUpdateManyWithoutFightNestedInput;
    tournament?: Prisma.TournamentUpdateOneWithoutFightsNestedInput;
    favoritedBy?: Prisma.UserUpdateManyWithoutFavoriteFightsNestedInput;
    clanWar?: Prisma.ClanWarUpdateOneWithoutFightsNestedInput;
};
export type FightUncheckedUpdateWithoutBrute1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute2Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    logs?: Prisma.LogUncheckedUpdateManyWithoutFightNestedInput;
    favoritedBy?: Prisma.UserUncheckedUpdateManyWithoutFavoriteFightsNestedInput;
};
export type FightUncheckedUpdateManyWithoutBrute1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute2Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FightUpdateWithoutBrute2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    brute1?: Prisma.BruteUpdateOneWithoutFightsNestedInput;
    logs?: Prisma.LogUpdateManyWithoutFightNestedInput;
    tournament?: Prisma.TournamentUpdateOneWithoutFightsNestedInput;
    favoritedBy?: Prisma.UserUpdateManyWithoutFavoriteFightsNestedInput;
    clanWar?: Prisma.ClanWarUpdateOneWithoutFightsNestedInput;
};
export type FightUncheckedUpdateWithoutBrute2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute1Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    logs?: Prisma.LogUncheckedUpdateManyWithoutFightNestedInput;
    favoritedBy?: Prisma.UserUncheckedUpdateManyWithoutFavoriteFightsNestedInput;
};
export type FightUncheckedUpdateManyWithoutBrute2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute1Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FightCreateManyTournamentInput = {
    id?: string;
    date?: Date | string;
    brute1Id?: string | null;
    brute2Id?: string | null;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    clanWarId?: string | null;
    favoriteCount?: number;
};
export type FightUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    brute1?: Prisma.BruteUpdateOneWithoutFightsNestedInput;
    brute2?: Prisma.BruteUpdateOneWithoutFightsAsAdversaryNestedInput;
    logs?: Prisma.LogUpdateManyWithoutFightNestedInput;
    favoritedBy?: Prisma.UserUpdateManyWithoutFavoriteFightsNestedInput;
    clanWar?: Prisma.ClanWarUpdateOneWithoutFightsNestedInput;
};
export type FightUncheckedUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute1Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brute2Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    logs?: Prisma.LogUncheckedUpdateManyWithoutFightNestedInput;
    favoritedBy?: Prisma.UserUncheckedUpdateManyWithoutFavoriteFightsNestedInput;
};
export type FightUncheckedUpdateManyWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute1Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brute2Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    clanWarId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FightCreateManyClanWarInput = {
    id?: string;
    date?: Date | string;
    brute1Id?: string | null;
    brute2Id?: string | null;
    winnerId?: string | null;
    loserId?: string | null;
    winner: string;
    loser: string;
    steps: string;
    fighters: string;
    tournamentId?: string | null;
    tournamentStep?: number;
    modifiers?: Prisma.FightCreatemodifiersInput | $Enums.FightModifier[];
    background?: string;
    favoriteCount?: number;
};
export type FightUpdateWithoutClanWarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    brute1?: Prisma.BruteUpdateOneWithoutFightsNestedInput;
    brute2?: Prisma.BruteUpdateOneWithoutFightsAsAdversaryNestedInput;
    logs?: Prisma.LogUpdateManyWithoutFightNestedInput;
    tournament?: Prisma.TournamentUpdateOneWithoutFightsNestedInput;
    favoritedBy?: Prisma.UserUpdateManyWithoutFavoriteFightsNestedInput;
};
export type FightUncheckedUpdateWithoutClanWarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute1Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brute2Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
    logs?: Prisma.LogUncheckedUpdateManyWithoutFightNestedInput;
    favoritedBy?: Prisma.UserUncheckedUpdateManyWithoutFavoriteFightsNestedInput;
};
export type FightUncheckedUpdateManyWithoutClanWarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brute1Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brute2Id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    loserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    winner?: Prisma.StringFieldUpdateOperationsInput | string;
    loser?: Prisma.StringFieldUpdateOperationsInput | string;
    steps?: Prisma.StringFieldUpdateOperationsInput | string;
    fighters?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tournamentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    modifiers?: Prisma.FightUpdatemodifiersInput | $Enums.FightModifier[];
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    favoriteCount?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type FightCountOutputType
 */
export type FightCountOutputType = {
    logs: number;
    favoritedBy: number;
};
export type FightCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    logs?: boolean | FightCountOutputTypeCountLogsArgs;
    favoritedBy?: boolean | FightCountOutputTypeCountFavoritedByArgs;
};
/**
 * FightCountOutputType without action
 */
export type FightCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FightCountOutputType
     */
    select?: Prisma.FightCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * FightCountOutputType without action
 */
export type FightCountOutputTypeCountLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LogWhereInput;
};
/**
 * FightCountOutputType without action
 */
export type FightCountOutputTypeCountFavoritedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type FightSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    brute1Id?: boolean;
    brute2Id?: boolean;
    winnerId?: boolean;
    loserId?: boolean;
    winner?: boolean;
    loser?: boolean;
    steps?: boolean;
    fighters?: boolean;
    tournamentId?: boolean;
    tournamentStep?: boolean;
    modifiers?: boolean;
    background?: boolean;
    clanWarId?: boolean;
    favoriteCount?: boolean;
    brute1?: boolean | Prisma.Fight$brute1Args<ExtArgs>;
    brute2?: boolean | Prisma.Fight$brute2Args<ExtArgs>;
    logs?: boolean | Prisma.Fight$logsArgs<ExtArgs>;
    tournament?: boolean | Prisma.Fight$tournamentArgs<ExtArgs>;
    favoritedBy?: boolean | Prisma.Fight$favoritedByArgs<ExtArgs>;
    clanWar?: boolean | Prisma.Fight$clanWarArgs<ExtArgs>;
    _count?: boolean | Prisma.FightCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fight"]>;
export type FightSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    brute1Id?: boolean;
    brute2Id?: boolean;
    winnerId?: boolean;
    loserId?: boolean;
    winner?: boolean;
    loser?: boolean;
    steps?: boolean;
    fighters?: boolean;
    tournamentId?: boolean;
    tournamentStep?: boolean;
    modifiers?: boolean;
    background?: boolean;
    clanWarId?: boolean;
    favoriteCount?: boolean;
    brute1?: boolean | Prisma.Fight$brute1Args<ExtArgs>;
    brute2?: boolean | Prisma.Fight$brute2Args<ExtArgs>;
    tournament?: boolean | Prisma.Fight$tournamentArgs<ExtArgs>;
    clanWar?: boolean | Prisma.Fight$clanWarArgs<ExtArgs>;
}, ExtArgs["result"]["fight"]>;
export type FightSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    brute1Id?: boolean;
    brute2Id?: boolean;
    winnerId?: boolean;
    loserId?: boolean;
    winner?: boolean;
    loser?: boolean;
    steps?: boolean;
    fighters?: boolean;
    tournamentId?: boolean;
    tournamentStep?: boolean;
    modifiers?: boolean;
    background?: boolean;
    clanWarId?: boolean;
    favoriteCount?: boolean;
    brute1?: boolean | Prisma.Fight$brute1Args<ExtArgs>;
    brute2?: boolean | Prisma.Fight$brute2Args<ExtArgs>;
    tournament?: boolean | Prisma.Fight$tournamentArgs<ExtArgs>;
    clanWar?: boolean | Prisma.Fight$clanWarArgs<ExtArgs>;
}, ExtArgs["result"]["fight"]>;
export type FightSelectScalar = {
    id?: boolean;
    date?: boolean;
    brute1Id?: boolean;
    brute2Id?: boolean;
    winnerId?: boolean;
    loserId?: boolean;
    winner?: boolean;
    loser?: boolean;
    steps?: boolean;
    fighters?: boolean;
    tournamentId?: boolean;
    tournamentStep?: boolean;
    modifiers?: boolean;
    background?: boolean;
    clanWarId?: boolean;
    favoriteCount?: boolean;
};
export type FightOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "brute1Id" | "brute2Id" | "winnerId" | "loserId" | "winner" | "loser" | "steps" | "fighters" | "tournamentId" | "tournamentStep" | "modifiers" | "background" | "clanWarId" | "favoriteCount", ExtArgs["result"]["fight"]>;
export type FightInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute1?: boolean | Prisma.Fight$brute1Args<ExtArgs>;
    brute2?: boolean | Prisma.Fight$brute2Args<ExtArgs>;
    logs?: boolean | Prisma.Fight$logsArgs<ExtArgs>;
    tournament?: boolean | Prisma.Fight$tournamentArgs<ExtArgs>;
    favoritedBy?: boolean | Prisma.Fight$favoritedByArgs<ExtArgs>;
    clanWar?: boolean | Prisma.Fight$clanWarArgs<ExtArgs>;
    _count?: boolean | Prisma.FightCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FightIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute1?: boolean | Prisma.Fight$brute1Args<ExtArgs>;
    brute2?: boolean | Prisma.Fight$brute2Args<ExtArgs>;
    tournament?: boolean | Prisma.Fight$tournamentArgs<ExtArgs>;
    clanWar?: boolean | Prisma.Fight$clanWarArgs<ExtArgs>;
};
export type FightIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute1?: boolean | Prisma.Fight$brute1Args<ExtArgs>;
    brute2?: boolean | Prisma.Fight$brute2Args<ExtArgs>;
    tournament?: boolean | Prisma.Fight$tournamentArgs<ExtArgs>;
    clanWar?: boolean | Prisma.Fight$clanWarArgs<ExtArgs>;
};
export type $FightPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Fight";
    objects: {
        brute1: Prisma.$BrutePayload<ExtArgs> | null;
        brute2: Prisma.$BrutePayload<ExtArgs> | null;
        logs: Prisma.$LogPayload<ExtArgs>[];
        tournament: Prisma.$TournamentPayload<ExtArgs> | null;
        favoritedBy: Prisma.$UserPayload<ExtArgs>[];
        clanWar: Prisma.$ClanWarPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        brute1Id: string | null;
        brute2Id: string | null;
        winnerId: string | null;
        loserId: string | null;
        winner: string;
        loser: string;
        steps: string;
        fighters: string;
        tournamentId: string | null;
        tournamentStep: number;
        modifiers: $Enums.FightModifier[];
        background: string;
        clanWarId: string | null;
        favoriteCount: number;
    }, ExtArgs["result"]["fight"]>;
    composites: {};
};
export type FightGetPayload<S extends boolean | null | undefined | FightDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FightPayload, S>;
export type FightCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: FightCountAggregateInputType | true;
};
export interface FightDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Fight'];
        meta: {
            name: 'Fight';
        };
    };
    /**
     * Find zero or one Fight that matches the filter.
     * @param {FightFindUniqueArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FightFindUniqueArgs>(args: Prisma.SelectSubset<T, FightFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FightClient<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Fight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FightFindUniqueOrThrowArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FightFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FightFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FightClient<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Fight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightFindFirstArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FightFindFirstArgs>(args?: Prisma.SelectSubset<T, FightFindFirstArgs<ExtArgs>>): Prisma.Prisma__FightClient<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Fight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightFindFirstOrThrowArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FightFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FightFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FightClient<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Fights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fights
     * const fights = await prisma.fight.findMany()
     *
     * // Get first 10 Fights
     * const fights = await prisma.fight.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const fightWithIdOnly = await prisma.fight.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FightFindManyArgs>(args?: Prisma.SelectSubset<T, FightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Fight.
     * @param {FightCreateArgs} args - Arguments to create a Fight.
     * @example
     * // Create one Fight
     * const Fight = await prisma.fight.create({
     *   data: {
     *     // ... data to create a Fight
     *   }
     * })
     *
     */
    create<T extends FightCreateArgs>(args: Prisma.SelectSubset<T, FightCreateArgs<ExtArgs>>): Prisma.Prisma__FightClient<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Fights.
     * @param {FightCreateManyArgs} args - Arguments to create many Fights.
     * @example
     * // Create many Fights
     * const fight = await prisma.fight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FightCreateManyArgs>(args?: Prisma.SelectSubset<T, FightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Fights and returns the data saved in the database.
     * @param {FightCreateManyAndReturnArgs} args - Arguments to create many Fights.
     * @example
     * // Create many Fights
     * const fight = await prisma.fight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Fights and only return the `id`
     * const fightWithIdOnly = await prisma.fight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FightCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Fight.
     * @param {FightDeleteArgs} args - Arguments to delete one Fight.
     * @example
     * // Delete one Fight
     * const Fight = await prisma.fight.delete({
     *   where: {
     *     // ... filter to delete one Fight
     *   }
     * })
     *
     */
    delete<T extends FightDeleteArgs>(args: Prisma.SelectSubset<T, FightDeleteArgs<ExtArgs>>): Prisma.Prisma__FightClient<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Fight.
     * @param {FightUpdateArgs} args - Arguments to update one Fight.
     * @example
     * // Update one Fight
     * const fight = await prisma.fight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FightUpdateArgs>(args: Prisma.SelectSubset<T, FightUpdateArgs<ExtArgs>>): Prisma.Prisma__FightClient<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Fights.
     * @param {FightDeleteManyArgs} args - Arguments to filter Fights to delete.
     * @example
     * // Delete a few Fights
     * const { count } = await prisma.fight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FightDeleteManyArgs>(args?: Prisma.SelectSubset<T, FightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Fights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fights
     * const fight = await prisma.fight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FightUpdateManyArgs>(args: Prisma.SelectSubset<T, FightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Fights and returns the data updated in the database.
     * @param {FightUpdateManyAndReturnArgs} args - Arguments to update many Fights.
     * @example
     * // Update many Fights
     * const fight = await prisma.fight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Fights and only return the `id`
     * const fightWithIdOnly = await prisma.fight.updateManyAndReturn({
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
    updateManyAndReturn<T extends FightUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Fight.
     * @param {FightUpsertArgs} args - Arguments to update or create a Fight.
     * @example
     * // Update or create a Fight
     * const fight = await prisma.fight.upsert({
     *   create: {
     *     // ... data to create a Fight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fight we want to update
     *   }
     * })
     */
    upsert<T extends FightUpsertArgs>(args: Prisma.SelectSubset<T, FightUpsertArgs<ExtArgs>>): Prisma.Prisma__FightClient<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Fights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightCountArgs} args - Arguments to filter Fights to count.
     * @example
     * // Count the number of Fights
     * const count = await prisma.fight.count({
     *   where: {
     *     // ... the filter for the Fights we want to count
     *   }
     * })
    **/
    count<T extends FightCountArgs>(args?: Prisma.Subset<T, FightCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FightCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Fight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FightAggregateArgs>(args: Prisma.Subset<T, FightAggregateArgs>): Prisma.PrismaPromise<GetFightAggregateType<T>>;
    /**
     * Group by Fight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FightGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FightGroupByArgs['orderBy'];
    } : {
        orderBy?: FightGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Fight model
     */
    readonly fields: FightFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Fight.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FightClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brute1<T extends Prisma.Fight$brute1Args<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Fight$brute1Args<ExtArgs>>): Prisma.Prisma__BruteClient<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    brute2<T extends Prisma.Fight$brute2Args<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Fight$brute2Args<ExtArgs>>): Prisma.Prisma__BruteClient<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    logs<T extends Prisma.Fight$logsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Fight$logsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tournament<T extends Prisma.Fight$tournamentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Fight$tournamentArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    favoritedBy<T extends Prisma.Fight$favoritedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Fight$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    clanWar<T extends Prisma.Fight$clanWarArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Fight$clanWarArgs<ExtArgs>>): Prisma.Prisma__ClanWarClient<runtime.Types.Result.GetResult<Prisma.$ClanWarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Fight model
 */
export interface FightFieldRefs {
    readonly id: Prisma.FieldRef<"Fight", 'String'>;
    readonly date: Prisma.FieldRef<"Fight", 'DateTime'>;
    readonly brute1Id: Prisma.FieldRef<"Fight", 'String'>;
    readonly brute2Id: Prisma.FieldRef<"Fight", 'String'>;
    readonly winnerId: Prisma.FieldRef<"Fight", 'String'>;
    readonly loserId: Prisma.FieldRef<"Fight", 'String'>;
    readonly winner: Prisma.FieldRef<"Fight", 'String'>;
    readonly loser: Prisma.FieldRef<"Fight", 'String'>;
    readonly steps: Prisma.FieldRef<"Fight", 'String'>;
    readonly fighters: Prisma.FieldRef<"Fight", 'String'>;
    readonly tournamentId: Prisma.FieldRef<"Fight", 'String'>;
    readonly tournamentStep: Prisma.FieldRef<"Fight", 'Int'>;
    readonly modifiers: Prisma.FieldRef<"Fight", 'FightModifier[]'>;
    readonly background: Prisma.FieldRef<"Fight", 'String'>;
    readonly clanWarId: Prisma.FieldRef<"Fight", 'String'>;
    readonly favoriteCount: Prisma.FieldRef<"Fight", 'Int'>;
}
/**
 * Fight findUnique
 */
export type FightFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightInclude<ExtArgs> | null;
    /**
     * Filter, which Fight to fetch.
     */
    where: Prisma.FightWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Fight findUniqueOrThrow
 */
export type FightFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightInclude<ExtArgs> | null;
    /**
     * Filter, which Fight to fetch.
     */
    where: Prisma.FightWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Fight findFirst
 */
export type FightFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightInclude<ExtArgs> | null;
    /**
     * Filter, which Fight to fetch.
     */
    where?: Prisma.FightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Fights to fetch.
     */
    orderBy?: Prisma.FightOrderByWithRelationInput | Prisma.FightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Fights.
     */
    cursor?: Prisma.FightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Fights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Fights.
     */
    distinct?: Prisma.FightScalarFieldEnum | Prisma.FightScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Fight findFirstOrThrow
 */
export type FightFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightInclude<ExtArgs> | null;
    /**
     * Filter, which Fight to fetch.
     */
    where?: Prisma.FightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Fights to fetch.
     */
    orderBy?: Prisma.FightOrderByWithRelationInput | Prisma.FightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Fights.
     */
    cursor?: Prisma.FightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Fights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Fights.
     */
    distinct?: Prisma.FightScalarFieldEnum | Prisma.FightScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Fight findMany
 */
export type FightFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightInclude<ExtArgs> | null;
    /**
     * Filter, which Fights to fetch.
     */
    where?: Prisma.FightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Fights to fetch.
     */
    orderBy?: Prisma.FightOrderByWithRelationInput | Prisma.FightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Fights.
     */
    cursor?: Prisma.FightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Fights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Fights.
     */
    distinct?: Prisma.FightScalarFieldEnum | Prisma.FightScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Fight create
 */
export type FightCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightInclude<ExtArgs> | null;
    /**
     * The data needed to create a Fight.
     */
    data: Prisma.XOR<Prisma.FightCreateInput, Prisma.FightUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Fight createMany
 */
export type FightCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fights.
     */
    data: Prisma.FightCreateManyInput | Prisma.FightCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Fight createManyAndReturn
 */
export type FightCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * The data used to create many Fights.
     */
    data: Prisma.FightCreateManyInput | Prisma.FightCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Fight update
 */
export type FightUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightInclude<ExtArgs> | null;
    /**
     * The data needed to update a Fight.
     */
    data: Prisma.XOR<Prisma.FightUpdateInput, Prisma.FightUncheckedUpdateInput>;
    /**
     * Choose, which Fight to update.
     */
    where: Prisma.FightWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Fight updateMany
 */
export type FightUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Fights.
     */
    data: Prisma.XOR<Prisma.FightUpdateManyMutationInput, Prisma.FightUncheckedUpdateManyInput>;
    /**
     * Filter which Fights to update
     */
    where?: Prisma.FightWhereInput;
    /**
     * Limit how many Fights to update.
     */
    limit?: number;
};
/**
 * Fight updateManyAndReturn
 */
export type FightUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * The data used to update Fights.
     */
    data: Prisma.XOR<Prisma.FightUpdateManyMutationInput, Prisma.FightUncheckedUpdateManyInput>;
    /**
     * Filter which Fights to update
     */
    where?: Prisma.FightWhereInput;
    /**
     * Limit how many Fights to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Fight upsert
 */
export type FightUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightInclude<ExtArgs> | null;
    /**
     * The filter to search for the Fight to update in case it exists.
     */
    where: Prisma.FightWhereUniqueInput;
    /**
     * In case the Fight found by the `where` argument doesn't exist, create a new Fight with this data.
     */
    create: Prisma.XOR<Prisma.FightCreateInput, Prisma.FightUncheckedCreateInput>;
    /**
     * In case the Fight was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FightUpdateInput, Prisma.FightUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Fight delete
 */
export type FightDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightInclude<ExtArgs> | null;
    /**
     * Filter which Fight to delete.
     */
    where: Prisma.FightWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Fight deleteMany
 */
export type FightDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Fights to delete
     */
    where?: Prisma.FightWhereInput;
    /**
     * Limit how many Fights to delete.
     */
    limit?: number;
};
/**
 * Fight.brute1
 */
export type Fight$brute1Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Fight.brute2
 */
export type Fight$brute2Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Fight.logs
 */
export type Fight$logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: Prisma.LogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Log
     */
    omit?: Prisma.LogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogInclude<ExtArgs> | null;
    where?: Prisma.LogWhereInput;
    orderBy?: Prisma.LogOrderByWithRelationInput | Prisma.LogOrderByWithRelationInput[];
    cursor?: Prisma.LogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LogScalarFieldEnum | Prisma.LogScalarFieldEnum[];
};
/**
 * Fight.tournament
 */
export type Fight$tournamentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where?: Prisma.TournamentWhereInput;
};
/**
 * Fight.favoritedBy
 */
export type Fight$favoritedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * Fight.clanWar
 */
export type Fight$clanWarArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanWar
     */
    select?: Prisma.ClanWarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanWar
     */
    omit?: Prisma.ClanWarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClanWarInclude<ExtArgs> | null;
    where?: Prisma.ClanWarWhereInput;
};
/**
 * Fight without action
 */
export type FightDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: Prisma.FightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fight
     */
    omit?: Prisma.FightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FightInclude<ExtArgs> | null;
};
