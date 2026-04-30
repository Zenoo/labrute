import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Tournament
 *
 */
export type TournamentModel = runtime.Types.Result.DefaultSelection<Prisma.$TournamentPayload>;
export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null;
    _avg: TournamentAvgAggregateOutputType | null;
    _sum: TournamentSumAggregateOutputType | null;
    _min: TournamentMinAggregateOutputType | null;
    _max: TournamentMaxAggregateOutputType | null;
};
export type TournamentAvgAggregateOutputType = {
    rounds: number | null;
};
export type TournamentSumAggregateOutputType = {
    rounds: number | null;
};
export type TournamentMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    type: $Enums.TournamentType | null;
    rounds: number | null;
    eventId: string | null;
};
export type TournamentMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    type: $Enums.TournamentType | null;
    rounds: number | null;
    eventId: string | null;
};
export type TournamentCountAggregateOutputType = {
    id: number;
    date: number;
    type: number;
    rounds: number;
    eventId: number;
    _all: number;
};
export type TournamentAvgAggregateInputType = {
    rounds?: true;
};
export type TournamentSumAggregateInputType = {
    rounds?: true;
};
export type TournamentMinAggregateInputType = {
    id?: true;
    date?: true;
    type?: true;
    rounds?: true;
    eventId?: true;
};
export type TournamentMaxAggregateInputType = {
    id?: true;
    date?: true;
    type?: true;
    rounds?: true;
    eventId?: true;
};
export type TournamentCountAggregateInputType = {
    id?: true;
    date?: true;
    type?: true;
    rounds?: true;
    eventId?: true;
    _all?: true;
};
export type TournamentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TournamentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tournaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TournamentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TournamentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType;
};
export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
    [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTournament[P]> : Prisma.GetScalarType<T[P], AggregateTournament[P]>;
};
export type TournamentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentWhereInput;
    orderBy?: Prisma.TournamentOrderByWithAggregationInput | Prisma.TournamentOrderByWithAggregationInput[];
    by: Prisma.TournamentScalarFieldEnum[] | Prisma.TournamentScalarFieldEnum;
    having?: Prisma.TournamentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TournamentCountAggregateInputType | true;
    _avg?: TournamentAvgAggregateInputType;
    _sum?: TournamentSumAggregateInputType;
    _min?: TournamentMinAggregateInputType;
    _max?: TournamentMaxAggregateInputType;
};
export type TournamentGroupByOutputType = {
    id: string;
    date: Date;
    type: $Enums.TournamentType;
    rounds: number;
    eventId: string | null;
    _count: TournamentCountAggregateOutputType | null;
    _avg: TournamentAvgAggregateOutputType | null;
    _sum: TournamentSumAggregateOutputType | null;
    _min: TournamentMinAggregateOutputType | null;
    _max: TournamentMaxAggregateOutputType | null;
};
export type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TournamentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TournamentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TournamentGroupByOutputType[P]>;
}>>;
export type TournamentWhereInput = {
    AND?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    OR?: Prisma.TournamentWhereInput[];
    NOT?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    id?: Prisma.UuidFilter<"Tournament"> | string;
    date?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    type?: Prisma.EnumTournamentTypeFilter<"Tournament"> | $Enums.TournamentType;
    rounds?: Prisma.IntFilter<"Tournament"> | number;
    eventId?: Prisma.UuidNullableFilter<"Tournament"> | string | null;
    participants?: Prisma.BruteListRelationFilter;
    fights?: Prisma.FightListRelationFilter;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
};
export type TournamentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    rounds?: Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    participants?: Prisma.BruteOrderByRelationAggregateInput;
    fights?: Prisma.FightOrderByRelationAggregateInput;
    event?: Prisma.EventOrderByWithRelationInput;
};
export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventId?: string;
    AND?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    OR?: Prisma.TournamentWhereInput[];
    NOT?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    date?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    type?: Prisma.EnumTournamentTypeFilter<"Tournament"> | $Enums.TournamentType;
    rounds?: Prisma.IntFilter<"Tournament"> | number;
    participants?: Prisma.BruteListRelationFilter;
    fights?: Prisma.FightListRelationFilter;
    event?: Prisma.XOR<Prisma.EventNullableScalarRelationFilter, Prisma.EventWhereInput> | null;
}, "id" | "id" | "eventId">;
export type TournamentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    rounds?: Prisma.SortOrder;
    eventId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TournamentCountOrderByAggregateInput;
    _avg?: Prisma.TournamentAvgOrderByAggregateInput;
    _max?: Prisma.TournamentMaxOrderByAggregateInput;
    _min?: Prisma.TournamentMinOrderByAggregateInput;
    _sum?: Prisma.TournamentSumOrderByAggregateInput;
};
export type TournamentScalarWhereWithAggregatesInput = {
    AND?: Prisma.TournamentScalarWhereWithAggregatesInput | Prisma.TournamentScalarWhereWithAggregatesInput[];
    OR?: Prisma.TournamentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TournamentScalarWhereWithAggregatesInput | Prisma.TournamentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Tournament"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"Tournament"> | Date | string;
    type?: Prisma.EnumTournamentTypeWithAggregatesFilter<"Tournament"> | $Enums.TournamentType;
    rounds?: Prisma.IntWithAggregatesFilter<"Tournament"> | number;
    eventId?: Prisma.UuidNullableWithAggregatesFilter<"Tournament"> | string | null;
};
export type TournamentCreateInput = {
    id?: string;
    date: Date | string;
    type?: $Enums.TournamentType;
    rounds: number;
    participants?: Prisma.BruteCreateNestedManyWithoutTournamentsInput;
    fights?: Prisma.FightCreateNestedManyWithoutTournamentInput;
    event?: Prisma.EventCreateNestedOneWithoutTournamentInput;
};
export type TournamentUncheckedCreateInput = {
    id?: string;
    date: Date | string;
    type?: $Enums.TournamentType;
    rounds: number;
    eventId?: string | null;
    participants?: Prisma.BruteUncheckedCreateNestedManyWithoutTournamentsInput;
    fights?: Prisma.FightUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    rounds?: Prisma.IntFieldUpdateOperationsInput | number;
    participants?: Prisma.BruteUpdateManyWithoutTournamentsNestedInput;
    fights?: Prisma.FightUpdateManyWithoutTournamentNestedInput;
    event?: Prisma.EventUpdateOneWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    rounds?: Prisma.IntFieldUpdateOperationsInput | number;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    participants?: Prisma.BruteUncheckedUpdateManyWithoutTournamentsNestedInput;
    fights?: Prisma.FightUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateManyInput = {
    id?: string;
    date: Date | string;
    type?: $Enums.TournamentType;
    rounds: number;
    eventId?: string | null;
};
export type TournamentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    rounds?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TournamentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    rounds?: Prisma.IntFieldUpdateOperationsInput | number;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TournamentListRelationFilter = {
    every?: Prisma.TournamentWhereInput;
    some?: Prisma.TournamentWhereInput;
    none?: Prisma.TournamentWhereInput;
};
export type TournamentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TournamentNullableScalarRelationFilter = {
    is?: Prisma.TournamentWhereInput | null;
    isNot?: Prisma.TournamentWhereInput | null;
};
export type TournamentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    rounds?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
};
export type TournamentAvgOrderByAggregateInput = {
    rounds?: Prisma.SortOrder;
};
export type TournamentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    rounds?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
};
export type TournamentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    rounds?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
};
export type TournamentSumOrderByAggregateInput = {
    rounds?: Prisma.SortOrder;
};
export type TournamentCreateNestedManyWithoutParticipantsInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput> | Prisma.TournamentCreateWithoutParticipantsInput[] | Prisma.TournamentUncheckedCreateWithoutParticipantsInput[];
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutParticipantsInput | Prisma.TournamentCreateOrConnectWithoutParticipantsInput[];
    connect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
};
export type TournamentUncheckedCreateNestedManyWithoutParticipantsInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput> | Prisma.TournamentCreateWithoutParticipantsInput[] | Prisma.TournamentUncheckedCreateWithoutParticipantsInput[];
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutParticipantsInput | Prisma.TournamentCreateOrConnectWithoutParticipantsInput[];
    connect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
};
export type TournamentUpdateManyWithoutParticipantsNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput> | Prisma.TournamentCreateWithoutParticipantsInput[] | Prisma.TournamentUncheckedCreateWithoutParticipantsInput[];
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutParticipantsInput | Prisma.TournamentCreateOrConnectWithoutParticipantsInput[];
    upsert?: Prisma.TournamentUpsertWithWhereUniqueWithoutParticipantsInput | Prisma.TournamentUpsertWithWhereUniqueWithoutParticipantsInput[];
    set?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    disconnect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    delete?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    connect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    update?: Prisma.TournamentUpdateWithWhereUniqueWithoutParticipantsInput | Prisma.TournamentUpdateWithWhereUniqueWithoutParticipantsInput[];
    updateMany?: Prisma.TournamentUpdateManyWithWhereWithoutParticipantsInput | Prisma.TournamentUpdateManyWithWhereWithoutParticipantsInput[];
    deleteMany?: Prisma.TournamentScalarWhereInput | Prisma.TournamentScalarWhereInput[];
};
export type TournamentUncheckedUpdateManyWithoutParticipantsNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput> | Prisma.TournamentCreateWithoutParticipantsInput[] | Prisma.TournamentUncheckedCreateWithoutParticipantsInput[];
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutParticipantsInput | Prisma.TournamentCreateOrConnectWithoutParticipantsInput[];
    upsert?: Prisma.TournamentUpsertWithWhereUniqueWithoutParticipantsInput | Prisma.TournamentUpsertWithWhereUniqueWithoutParticipantsInput[];
    set?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    disconnect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    delete?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    connect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    update?: Prisma.TournamentUpdateWithWhereUniqueWithoutParticipantsInput | Prisma.TournamentUpdateWithWhereUniqueWithoutParticipantsInput[];
    updateMany?: Prisma.TournamentUpdateManyWithWhereWithoutParticipantsInput | Prisma.TournamentUpdateManyWithWhereWithoutParticipantsInput[];
    deleteMany?: Prisma.TournamentScalarWhereInput | Prisma.TournamentScalarWhereInput[];
};
export type TournamentCreateNestedOneWithoutFightsInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutFightsInput, Prisma.TournamentUncheckedCreateWithoutFightsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutFightsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneWithoutFightsNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutFightsInput, Prisma.TournamentUncheckedCreateWithoutFightsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutFightsInput;
    upsert?: Prisma.TournamentUpsertWithoutFightsInput;
    disconnect?: Prisma.TournamentWhereInput | boolean;
    delete?: Prisma.TournamentWhereInput | boolean;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutFightsInput, Prisma.TournamentUpdateWithoutFightsInput>, Prisma.TournamentUncheckedUpdateWithoutFightsInput>;
};
export type EnumTournamentTypeFieldUpdateOperationsInput = {
    set?: $Enums.TournamentType;
};
export type TournamentCreateNestedOneWithoutEventInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutEventInput, Prisma.TournamentUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutEventInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUncheckedCreateNestedOneWithoutEventInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutEventInput, Prisma.TournamentUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutEventInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutEventInput, Prisma.TournamentUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutEventInput;
    upsert?: Prisma.TournamentUpsertWithoutEventInput;
    disconnect?: Prisma.TournamentWhereInput | boolean;
    delete?: Prisma.TournamentWhereInput | boolean;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutEventInput, Prisma.TournamentUpdateWithoutEventInput>, Prisma.TournamentUncheckedUpdateWithoutEventInput>;
};
export type TournamentUncheckedUpdateOneWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutEventInput, Prisma.TournamentUncheckedCreateWithoutEventInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutEventInput;
    upsert?: Prisma.TournamentUpsertWithoutEventInput;
    disconnect?: Prisma.TournamentWhereInput | boolean;
    delete?: Prisma.TournamentWhereInput | boolean;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutEventInput, Prisma.TournamentUpdateWithoutEventInput>, Prisma.TournamentUncheckedUpdateWithoutEventInput>;
};
export type TournamentCreateWithoutParticipantsInput = {
    id?: string;
    date: Date | string;
    type?: $Enums.TournamentType;
    rounds: number;
    fights?: Prisma.FightCreateNestedManyWithoutTournamentInput;
    event?: Prisma.EventCreateNestedOneWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutParticipantsInput = {
    id?: string;
    date: Date | string;
    type?: $Enums.TournamentType;
    rounds: number;
    eventId?: string | null;
    fights?: Prisma.FightUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutParticipantsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput>;
};
export type TournamentUpsertWithWhereUniqueWithoutParticipantsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutParticipantsInput, Prisma.TournamentUncheckedUpdateWithoutParticipantsInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput>;
};
export type TournamentUpdateWithWhereUniqueWithoutParticipantsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutParticipantsInput, Prisma.TournamentUncheckedUpdateWithoutParticipantsInput>;
};
export type TournamentUpdateManyWithWhereWithoutParticipantsInput = {
    where: Prisma.TournamentScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateManyMutationInput, Prisma.TournamentUncheckedUpdateManyWithoutParticipantsInput>;
};
export type TournamentScalarWhereInput = {
    AND?: Prisma.TournamentScalarWhereInput | Prisma.TournamentScalarWhereInput[];
    OR?: Prisma.TournamentScalarWhereInput[];
    NOT?: Prisma.TournamentScalarWhereInput | Prisma.TournamentScalarWhereInput[];
    id?: Prisma.UuidFilter<"Tournament"> | string;
    date?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    type?: Prisma.EnumTournamentTypeFilter<"Tournament"> | $Enums.TournamentType;
    rounds?: Prisma.IntFilter<"Tournament"> | number;
    eventId?: Prisma.UuidNullableFilter<"Tournament"> | string | null;
};
export type TournamentCreateWithoutFightsInput = {
    id?: string;
    date: Date | string;
    type?: $Enums.TournamentType;
    rounds: number;
    participants?: Prisma.BruteCreateNestedManyWithoutTournamentsInput;
    event?: Prisma.EventCreateNestedOneWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutFightsInput = {
    id?: string;
    date: Date | string;
    type?: $Enums.TournamentType;
    rounds: number;
    eventId?: string | null;
    participants?: Prisma.BruteUncheckedCreateNestedManyWithoutTournamentsInput;
};
export type TournamentCreateOrConnectWithoutFightsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutFightsInput, Prisma.TournamentUncheckedCreateWithoutFightsInput>;
};
export type TournamentUpsertWithoutFightsInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutFightsInput, Prisma.TournamentUncheckedUpdateWithoutFightsInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutFightsInput, Prisma.TournamentUncheckedCreateWithoutFightsInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutFightsInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutFightsInput, Prisma.TournamentUncheckedUpdateWithoutFightsInput>;
};
export type TournamentUpdateWithoutFightsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    rounds?: Prisma.IntFieldUpdateOperationsInput | number;
    participants?: Prisma.BruteUpdateManyWithoutTournamentsNestedInput;
    event?: Prisma.EventUpdateOneWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutFightsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    rounds?: Prisma.IntFieldUpdateOperationsInput | number;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    participants?: Prisma.BruteUncheckedUpdateManyWithoutTournamentsNestedInput;
};
export type TournamentCreateWithoutEventInput = {
    id?: string;
    date: Date | string;
    type?: $Enums.TournamentType;
    rounds: number;
    participants?: Prisma.BruteCreateNestedManyWithoutTournamentsInput;
    fights?: Prisma.FightCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutEventInput = {
    id?: string;
    date: Date | string;
    type?: $Enums.TournamentType;
    rounds: number;
    participants?: Prisma.BruteUncheckedCreateNestedManyWithoutTournamentsInput;
    fights?: Prisma.FightUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutEventInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutEventInput, Prisma.TournamentUncheckedCreateWithoutEventInput>;
};
export type TournamentUpsertWithoutEventInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutEventInput, Prisma.TournamentUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutEventInput, Prisma.TournamentUncheckedCreateWithoutEventInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutEventInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutEventInput, Prisma.TournamentUncheckedUpdateWithoutEventInput>;
};
export type TournamentUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    rounds?: Prisma.IntFieldUpdateOperationsInput | number;
    participants?: Prisma.BruteUpdateManyWithoutTournamentsNestedInput;
    fights?: Prisma.FightUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    rounds?: Prisma.IntFieldUpdateOperationsInput | number;
    participants?: Prisma.BruteUncheckedUpdateManyWithoutTournamentsNestedInput;
    fights?: Prisma.FightUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    rounds?: Prisma.IntFieldUpdateOperationsInput | number;
    fights?: Prisma.FightUpdateManyWithoutTournamentNestedInput;
    event?: Prisma.EventUpdateOneWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    rounds?: Prisma.IntFieldUpdateOperationsInput | number;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fights?: Prisma.FightUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateManyWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    rounds?: Prisma.IntFieldUpdateOperationsInput | number;
    eventId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type TournamentCountOutputType
 */
export type TournamentCountOutputType = {
    participants: number;
    fights: number;
};
export type TournamentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participants?: boolean | TournamentCountOutputTypeCountParticipantsArgs;
    fights?: boolean | TournamentCountOutputTypeCountFightsArgs;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: Prisma.TournamentCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeCountParticipantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BruteWhereInput;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeCountFightsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FightWhereInput;
};
export type TournamentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    type?: boolean;
    rounds?: boolean;
    eventId?: boolean;
    participants?: boolean | Prisma.Tournament$participantsArgs<ExtArgs>;
    fights?: boolean | Prisma.Tournament$fightsArgs<ExtArgs>;
    event?: boolean | Prisma.Tournament$eventArgs<ExtArgs>;
    _count?: boolean | Prisma.TournamentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournament"]>;
export type TournamentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    type?: boolean;
    rounds?: boolean;
    eventId?: boolean;
    event?: boolean | Prisma.Tournament$eventArgs<ExtArgs>;
}, ExtArgs["result"]["tournament"]>;
export type TournamentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    type?: boolean;
    rounds?: boolean;
    eventId?: boolean;
    event?: boolean | Prisma.Tournament$eventArgs<ExtArgs>;
}, ExtArgs["result"]["tournament"]>;
export type TournamentSelectScalar = {
    id?: boolean;
    date?: boolean;
    type?: boolean;
    rounds?: boolean;
    eventId?: boolean;
};
export type TournamentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "type" | "rounds" | "eventId", ExtArgs["result"]["tournament"]>;
export type TournamentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participants?: boolean | Prisma.Tournament$participantsArgs<ExtArgs>;
    fights?: boolean | Prisma.Tournament$fightsArgs<ExtArgs>;
    event?: boolean | Prisma.Tournament$eventArgs<ExtArgs>;
    _count?: boolean | Prisma.TournamentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TournamentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.Tournament$eventArgs<ExtArgs>;
};
export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.Tournament$eventArgs<ExtArgs>;
};
export type $TournamentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tournament";
    objects: {
        participants: Prisma.$BrutePayload<ExtArgs>[];
        fights: Prisma.$FightPayload<ExtArgs>[];
        event: Prisma.$EventPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        type: $Enums.TournamentType;
        rounds: number;
        eventId: string | null;
    }, ExtArgs["result"]["tournament"]>;
    composites: {};
};
export type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TournamentPayload, S>;
export type TournamentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: TournamentCountAggregateInputType | true;
};
export interface TournamentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tournament'];
        meta: {
            name: 'Tournament';
        };
    };
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: Prisma.SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: Prisma.SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     *
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TournamentFindManyArgs>(args?: Prisma.SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     *
     */
    create<T extends TournamentCreateArgs>(args: Prisma.SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TournamentCreateManyArgs>(args?: Prisma.SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     *
     */
    delete<T extends TournamentDeleteArgs>(args: Prisma.SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TournamentUpdateArgs>(args: Prisma.SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: Prisma.SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: Prisma.SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
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
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: Prisma.SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(args?: Prisma.Subset<T, TournamentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TournamentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentAggregateArgs>(args: Prisma.Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>;
    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TournamentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TournamentGroupByArgs['orderBy'];
    } : {
        orderBy?: TournamentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Tournament model
     */
    readonly fields: TournamentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Tournament.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    participants<T extends Prisma.Tournament$participantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    fights<T extends Prisma.Tournament$fightsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$fightsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    event<T extends Prisma.Tournament$eventArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$eventArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Tournament model
 */
export interface TournamentFieldRefs {
    readonly id: Prisma.FieldRef<"Tournament", 'String'>;
    readonly date: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly type: Prisma.FieldRef<"Tournament", 'TournamentType'>;
    readonly rounds: Prisma.FieldRef<"Tournament", 'Int'>;
    readonly eventId: Prisma.FieldRef<"Tournament", 'String'>;
}
/**
 * Tournament findUnique
 */
export type TournamentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Tournament to fetch.
     */
    where: Prisma.TournamentWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament findUniqueOrThrow
 */
export type TournamentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Tournament to fetch.
     */
    where: Prisma.TournamentWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament findFirst
 */
export type TournamentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Tournament to fetch.
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tournaments.
     */
    cursor?: Prisma.TournamentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tournaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tournaments.
     */
    distinct?: Prisma.TournamentScalarFieldEnum | Prisma.TournamentScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament findFirstOrThrow
 */
export type TournamentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Tournament to fetch.
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tournaments.
     */
    cursor?: Prisma.TournamentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tournaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tournaments.
     */
    distinct?: Prisma.TournamentScalarFieldEnum | Prisma.TournamentScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament findMany
 */
export type TournamentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tournaments.
     */
    cursor?: Prisma.TournamentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tournaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tournaments.
     */
    distinct?: Prisma.TournamentScalarFieldEnum | Prisma.TournamentScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament create
 */
export type TournamentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Tournament.
     */
    data: Prisma.XOR<Prisma.TournamentCreateInput, Prisma.TournamentUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament createMany
 */
export type TournamentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: Prisma.TournamentCreateManyInput | Prisma.TournamentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Tournament createManyAndReturn
 */
export type TournamentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * The data used to create many Tournaments.
     */
    data: Prisma.TournamentCreateManyInput | Prisma.TournamentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Tournament update
 */
export type TournamentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Tournament.
     */
    data: Prisma.XOR<Prisma.TournamentUpdateInput, Prisma.TournamentUncheckedUpdateInput>;
    /**
     * Choose, which Tournament to update.
     */
    where: Prisma.TournamentWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament updateMany
 */
export type TournamentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: Prisma.XOR<Prisma.TournamentUpdateManyMutationInput, Prisma.TournamentUncheckedUpdateManyInput>;
    /**
     * Filter which Tournaments to update
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number;
};
/**
 * Tournament updateManyAndReturn
 */
export type TournamentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * The data used to update Tournaments.
     */
    data: Prisma.XOR<Prisma.TournamentUpdateManyMutationInput, Prisma.TournamentUncheckedUpdateManyInput>;
    /**
     * Filter which Tournaments to update
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Tournament upsert
 */
export type TournamentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: Prisma.TournamentWhereUniqueInput;
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: Prisma.XOR<Prisma.TournamentCreateInput, Prisma.TournamentUncheckedCreateInput>;
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TournamentUpdateInput, Prisma.TournamentUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament delete
 */
export type TournamentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Tournament to delete.
     */
    where: Prisma.TournamentWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament deleteMany
 */
export type TournamentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number;
};
/**
 * Tournament.participants
 */
export type Tournament$participantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Tournament.fights
 */
export type Tournament$fightsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.FightWhereInput;
    orderBy?: Prisma.FightOrderByWithRelationInput | Prisma.FightOrderByWithRelationInput[];
    cursor?: Prisma.FightWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FightScalarFieldEnum | Prisma.FightScalarFieldEnum[];
};
/**
 * Tournament.event
 */
export type Tournament$eventArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: Prisma.EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: Prisma.EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
};
/**
 * Tournament without action
 */
export type TournamentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
