import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Event
 *
 */
export type EventModel = runtime.Types.Result.DefaultSelection<Prisma.$EventPayload>;
export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null;
    _avg: EventAvgAggregateOutputType | null;
    _sum: EventSumAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
};
export type EventAvgAggregateOutputType = {
    maxLevel: number | null;
    maxRound: number | null;
};
export type EventSumAggregateOutputType = {
    maxLevel: number | null;
    maxRound: number | null;
};
export type EventMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    type: $Enums.EventType | null;
    maxLevel: number | null;
    maxRound: number | null;
    status: $Enums.EventStatus | null;
    winnerId: string | null;
    finishedAt: Date | null;
};
export type EventMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    type: $Enums.EventType | null;
    maxLevel: number | null;
    maxRound: number | null;
    status: $Enums.EventStatus | null;
    winnerId: string | null;
    finishedAt: Date | null;
};
export type EventCountAggregateOutputType = {
    id: number;
    date: number;
    type: number;
    maxLevel: number;
    maxRound: number;
    status: number;
    winnerId: number;
    finishedAt: number;
    sortedBrutes: number;
    _all: number;
};
export type EventAvgAggregateInputType = {
    maxLevel?: true;
    maxRound?: true;
};
export type EventSumAggregateInputType = {
    maxLevel?: true;
    maxRound?: true;
};
export type EventMinAggregateInputType = {
    id?: true;
    date?: true;
    type?: true;
    maxLevel?: true;
    maxRound?: true;
    status?: true;
    winnerId?: true;
    finishedAt?: true;
};
export type EventMaxAggregateInputType = {
    id?: true;
    date?: true;
    type?: true;
    maxLevel?: true;
    maxRound?: true;
    status?: true;
    winnerId?: true;
    finishedAt?: true;
};
export type EventCountAggregateInputType = {
    id?: true;
    date?: true;
    type?: true;
    maxLevel?: true;
    maxRound?: true;
    status?: true;
    winnerId?: true;
    finishedAt?: true;
    sortedBrutes?: true;
    _all?: true;
};
export type EventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: Prisma.EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType;
};
export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvent[P]> : Prisma.GetScalarType<T[P], AggregateEvent[P]>;
};
export type EventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithAggregationInput | Prisma.EventOrderByWithAggregationInput[];
    by: Prisma.EventScalarFieldEnum[] | Prisma.EventScalarFieldEnum;
    having?: Prisma.EventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCountAggregateInputType | true;
    _avg?: EventAvgAggregateInputType;
    _sum?: EventSumAggregateInputType;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
};
export type EventGroupByOutputType = {
    id: string;
    date: Date;
    type: $Enums.EventType;
    maxLevel: number;
    maxRound: number;
    status: $Enums.EventStatus;
    winnerId: string | null;
    finishedAt: Date | null;
    sortedBrutes: string[];
    _count: EventCountAggregateOutputType | null;
    _avg: EventAvgAggregateOutputType | null;
    _sum: EventSumAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
};
export type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventGroupByOutputType[P]>;
}>>;
export type EventWhereInput = {
    AND?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    OR?: Prisma.EventWhereInput[];
    NOT?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    id?: Prisma.UuidFilter<"Event"> | string;
    date?: Prisma.DateTimeFilter<"Event"> | Date | string;
    type?: Prisma.EnumEventTypeFilter<"Event"> | $Enums.EventType;
    maxLevel?: Prisma.IntFilter<"Event"> | number;
    maxRound?: Prisma.IntFilter<"Event"> | number;
    status?: Prisma.EnumEventStatusFilter<"Event"> | $Enums.EventStatus;
    winnerId?: Prisma.UuidNullableFilter<"Event"> | string | null;
    finishedAt?: Prisma.DateTimeNullableFilter<"Event"> | Date | string | null;
    sortedBrutes?: Prisma.StringNullableListFilter<"Event">;
    brutes?: Prisma.BruteListRelationFilter;
    tournament?: Prisma.XOR<Prisma.TournamentNullableScalarRelationFilter, Prisma.TournamentWhereInput> | null;
    winner?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
};
export type EventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    maxLevel?: Prisma.SortOrder;
    maxRound?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    finishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortedBrutes?: Prisma.SortOrder;
    brutes?: Prisma.BruteOrderByRelationAggregateInput;
    tournament?: Prisma.TournamentOrderByWithRelationInput;
    winner?: Prisma.BruteOrderByWithRelationInput;
};
export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    OR?: Prisma.EventWhereInput[];
    NOT?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    date?: Prisma.DateTimeFilter<"Event"> | Date | string;
    type?: Prisma.EnumEventTypeFilter<"Event"> | $Enums.EventType;
    maxLevel?: Prisma.IntFilter<"Event"> | number;
    maxRound?: Prisma.IntFilter<"Event"> | number;
    status?: Prisma.EnumEventStatusFilter<"Event"> | $Enums.EventStatus;
    winnerId?: Prisma.UuidNullableFilter<"Event"> | string | null;
    finishedAt?: Prisma.DateTimeNullableFilter<"Event"> | Date | string | null;
    sortedBrutes?: Prisma.StringNullableListFilter<"Event">;
    brutes?: Prisma.BruteListRelationFilter;
    tournament?: Prisma.XOR<Prisma.TournamentNullableScalarRelationFilter, Prisma.TournamentWhereInput> | null;
    winner?: Prisma.XOR<Prisma.BruteNullableScalarRelationFilter, Prisma.BruteWhereInput> | null;
}, "id" | "id">;
export type EventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    maxLevel?: Prisma.SortOrder;
    maxRound?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    finishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortedBrutes?: Prisma.SortOrder;
    _count?: Prisma.EventCountOrderByAggregateInput;
    _avg?: Prisma.EventAvgOrderByAggregateInput;
    _max?: Prisma.EventMaxOrderByAggregateInput;
    _min?: Prisma.EventMinOrderByAggregateInput;
    _sum?: Prisma.EventSumOrderByAggregateInput;
};
export type EventScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventScalarWhereWithAggregatesInput | Prisma.EventScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventScalarWhereWithAggregatesInput | Prisma.EventScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Event"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"Event"> | Date | string;
    type?: Prisma.EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType;
    maxLevel?: Prisma.IntWithAggregatesFilter<"Event"> | number;
    maxRound?: Prisma.IntWithAggregatesFilter<"Event"> | number;
    status?: Prisma.EnumEventStatusWithAggregatesFilter<"Event"> | $Enums.EventStatus;
    winnerId?: Prisma.UuidNullableWithAggregatesFilter<"Event"> | string | null;
    finishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null;
    sortedBrutes?: Prisma.StringNullableListFilter<"Event">;
};
export type EventCreateInput = {
    id?: string;
    date?: Date | string;
    type?: $Enums.EventType;
    maxLevel: number;
    maxRound?: number;
    status?: $Enums.EventStatus;
    finishedAt?: Date | string | null;
    sortedBrutes?: Prisma.EventCreatesortedBrutesInput | string[];
    brutes?: Prisma.BruteCreateNestedManyWithoutEventInput;
    tournament?: Prisma.TournamentCreateNestedOneWithoutEventInput;
    winner?: Prisma.BruteCreateNestedOneWithoutWonEventsInput;
};
export type EventUncheckedCreateInput = {
    id?: string;
    date?: Date | string;
    type?: $Enums.EventType;
    maxLevel: number;
    maxRound?: number;
    status?: $Enums.EventStatus;
    winnerId?: string | null;
    finishedAt?: Date | string | null;
    sortedBrutes?: Prisma.EventCreatesortedBrutesInput | string[];
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutEventInput;
    tournament?: Prisma.TournamentUncheckedCreateNestedOneWithoutEventInput;
};
export type EventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    maxLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    maxRound?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortedBrutes?: Prisma.EventUpdatesortedBrutesInput | string[];
    brutes?: Prisma.BruteUpdateManyWithoutEventNestedInput;
    tournament?: Prisma.TournamentUpdateOneWithoutEventNestedInput;
    winner?: Prisma.BruteUpdateOneWithoutWonEventsNestedInput;
};
export type EventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    maxLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    maxRound?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortedBrutes?: Prisma.EventUpdatesortedBrutesInput | string[];
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutEventNestedInput;
    tournament?: Prisma.TournamentUncheckedUpdateOneWithoutEventNestedInput;
};
export type EventCreateManyInput = {
    id?: string;
    date?: Date | string;
    type?: $Enums.EventType;
    maxLevel: number;
    maxRound?: number;
    status?: $Enums.EventStatus;
    winnerId?: string | null;
    finishedAt?: Date | string | null;
    sortedBrutes?: Prisma.EventCreatesortedBrutesInput | string[];
};
export type EventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    maxLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    maxRound?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortedBrutes?: Prisma.EventUpdatesortedBrutesInput | string[];
};
export type EventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    maxLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    maxRound?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortedBrutes?: Prisma.EventUpdatesortedBrutesInput | string[];
};
export type EventNullableScalarRelationFilter = {
    is?: Prisma.EventWhereInput | null;
    isNot?: Prisma.EventWhereInput | null;
};
export type EventListRelationFilter = {
    every?: Prisma.EventWhereInput;
    some?: Prisma.EventWhereInput;
    none?: Prisma.EventWhereInput;
};
export type EventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    maxLevel?: Prisma.SortOrder;
    maxRound?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
    sortedBrutes?: Prisma.SortOrder;
};
export type EventAvgOrderByAggregateInput = {
    maxLevel?: Prisma.SortOrder;
    maxRound?: Prisma.SortOrder;
};
export type EventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    maxLevel?: Prisma.SortOrder;
    maxRound?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
};
export type EventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    maxLevel?: Prisma.SortOrder;
    maxRound?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
};
export type EventSumOrderByAggregateInput = {
    maxLevel?: Prisma.SortOrder;
    maxRound?: Prisma.SortOrder;
};
export type EventCreateNestedOneWithoutBrutesInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutBrutesInput, Prisma.EventUncheckedCreateWithoutBrutesInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutBrutesInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventCreateNestedManyWithoutWinnerInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutWinnerInput, Prisma.EventUncheckedCreateWithoutWinnerInput> | Prisma.EventCreateWithoutWinnerInput[] | Prisma.EventUncheckedCreateWithoutWinnerInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutWinnerInput | Prisma.EventCreateOrConnectWithoutWinnerInput[];
    createMany?: Prisma.EventCreateManyWinnerInputEnvelope;
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
};
export type EventUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutWinnerInput, Prisma.EventUncheckedCreateWithoutWinnerInput> | Prisma.EventCreateWithoutWinnerInput[] | Prisma.EventUncheckedCreateWithoutWinnerInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutWinnerInput | Prisma.EventCreateOrConnectWithoutWinnerInput[];
    createMany?: Prisma.EventCreateManyWinnerInputEnvelope;
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
};
export type EventUpdateOneWithoutBrutesNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutBrutesInput, Prisma.EventUncheckedCreateWithoutBrutesInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutBrutesInput;
    upsert?: Prisma.EventUpsertWithoutBrutesInput;
    disconnect?: Prisma.EventWhereInput | boolean;
    delete?: Prisma.EventWhereInput | boolean;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutBrutesInput, Prisma.EventUpdateWithoutBrutesInput>, Prisma.EventUncheckedUpdateWithoutBrutesInput>;
};
export type EventUpdateManyWithoutWinnerNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutWinnerInput, Prisma.EventUncheckedCreateWithoutWinnerInput> | Prisma.EventCreateWithoutWinnerInput[] | Prisma.EventUncheckedCreateWithoutWinnerInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutWinnerInput | Prisma.EventCreateOrConnectWithoutWinnerInput[];
    upsert?: Prisma.EventUpsertWithWhereUniqueWithoutWinnerInput | Prisma.EventUpsertWithWhereUniqueWithoutWinnerInput[];
    createMany?: Prisma.EventCreateManyWinnerInputEnvelope;
    set?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    disconnect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    delete?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    update?: Prisma.EventUpdateWithWhereUniqueWithoutWinnerInput | Prisma.EventUpdateWithWhereUniqueWithoutWinnerInput[];
    updateMany?: Prisma.EventUpdateManyWithWhereWithoutWinnerInput | Prisma.EventUpdateManyWithWhereWithoutWinnerInput[];
    deleteMany?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
};
export type EventUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutWinnerInput, Prisma.EventUncheckedCreateWithoutWinnerInput> | Prisma.EventCreateWithoutWinnerInput[] | Prisma.EventUncheckedCreateWithoutWinnerInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutWinnerInput | Prisma.EventCreateOrConnectWithoutWinnerInput[];
    upsert?: Prisma.EventUpsertWithWhereUniqueWithoutWinnerInput | Prisma.EventUpsertWithWhereUniqueWithoutWinnerInput[];
    createMany?: Prisma.EventCreateManyWinnerInputEnvelope;
    set?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    disconnect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    delete?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    update?: Prisma.EventUpdateWithWhereUniqueWithoutWinnerInput | Prisma.EventUpdateWithWhereUniqueWithoutWinnerInput[];
    updateMany?: Prisma.EventUpdateManyWithWhereWithoutWinnerInput | Prisma.EventUpdateManyWithWhereWithoutWinnerInput[];
    deleteMany?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
};
export type EventCreateNestedOneWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutTournamentInput, Prisma.EventUncheckedCreateWithoutTournamentInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutTournamentInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventUpdateOneWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutTournamentInput, Prisma.EventUncheckedCreateWithoutTournamentInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutTournamentInput;
    upsert?: Prisma.EventUpsertWithoutTournamentInput;
    disconnect?: Prisma.EventWhereInput | boolean;
    delete?: Prisma.EventWhereInput | boolean;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutTournamentInput, Prisma.EventUpdateWithoutTournamentInput>, Prisma.EventUncheckedUpdateWithoutTournamentInput>;
};
export type EventCreatesortedBrutesInput = {
    set: string[];
};
export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType;
};
export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus;
};
export type EventUpdatesortedBrutesInput = {
    set?: string[];
    push?: string | string[];
};
export type EventCreateWithoutBrutesInput = {
    id?: string;
    date?: Date | string;
    type?: $Enums.EventType;
    maxLevel: number;
    maxRound?: number;
    status?: $Enums.EventStatus;
    finishedAt?: Date | string | null;
    sortedBrutes?: Prisma.EventCreatesortedBrutesInput | string[];
    tournament?: Prisma.TournamentCreateNestedOneWithoutEventInput;
    winner?: Prisma.BruteCreateNestedOneWithoutWonEventsInput;
};
export type EventUncheckedCreateWithoutBrutesInput = {
    id?: string;
    date?: Date | string;
    type?: $Enums.EventType;
    maxLevel: number;
    maxRound?: number;
    status?: $Enums.EventStatus;
    winnerId?: string | null;
    finishedAt?: Date | string | null;
    sortedBrutes?: Prisma.EventCreatesortedBrutesInput | string[];
    tournament?: Prisma.TournamentUncheckedCreateNestedOneWithoutEventInput;
};
export type EventCreateOrConnectWithoutBrutesInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutBrutesInput, Prisma.EventUncheckedCreateWithoutBrutesInput>;
};
export type EventCreateWithoutWinnerInput = {
    id?: string;
    date?: Date | string;
    type?: $Enums.EventType;
    maxLevel: number;
    maxRound?: number;
    status?: $Enums.EventStatus;
    finishedAt?: Date | string | null;
    sortedBrutes?: Prisma.EventCreatesortedBrutesInput | string[];
    brutes?: Prisma.BruteCreateNestedManyWithoutEventInput;
    tournament?: Prisma.TournamentCreateNestedOneWithoutEventInput;
};
export type EventUncheckedCreateWithoutWinnerInput = {
    id?: string;
    date?: Date | string;
    type?: $Enums.EventType;
    maxLevel: number;
    maxRound?: number;
    status?: $Enums.EventStatus;
    finishedAt?: Date | string | null;
    sortedBrutes?: Prisma.EventCreatesortedBrutesInput | string[];
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutEventInput;
    tournament?: Prisma.TournamentUncheckedCreateNestedOneWithoutEventInput;
};
export type EventCreateOrConnectWithoutWinnerInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutWinnerInput, Prisma.EventUncheckedCreateWithoutWinnerInput>;
};
export type EventCreateManyWinnerInputEnvelope = {
    data: Prisma.EventCreateManyWinnerInput | Prisma.EventCreateManyWinnerInput[];
    skipDuplicates?: boolean;
};
export type EventUpsertWithoutBrutesInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutBrutesInput, Prisma.EventUncheckedUpdateWithoutBrutesInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutBrutesInput, Prisma.EventUncheckedCreateWithoutBrutesInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutBrutesInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutBrutesInput, Prisma.EventUncheckedUpdateWithoutBrutesInput>;
};
export type EventUpdateWithoutBrutesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    maxLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    maxRound?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortedBrutes?: Prisma.EventUpdatesortedBrutesInput | string[];
    tournament?: Prisma.TournamentUpdateOneWithoutEventNestedInput;
    winner?: Prisma.BruteUpdateOneWithoutWonEventsNestedInput;
};
export type EventUncheckedUpdateWithoutBrutesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    maxLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    maxRound?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortedBrutes?: Prisma.EventUpdatesortedBrutesInput | string[];
    tournament?: Prisma.TournamentUncheckedUpdateOneWithoutEventNestedInput;
};
export type EventUpsertWithWhereUniqueWithoutWinnerInput = {
    where: Prisma.EventWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventUpdateWithoutWinnerInput, Prisma.EventUncheckedUpdateWithoutWinnerInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutWinnerInput, Prisma.EventUncheckedCreateWithoutWinnerInput>;
};
export type EventUpdateWithWhereUniqueWithoutWinnerInput = {
    where: Prisma.EventWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutWinnerInput, Prisma.EventUncheckedUpdateWithoutWinnerInput>;
};
export type EventUpdateManyWithWhereWithoutWinnerInput = {
    where: Prisma.EventScalarWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyWithoutWinnerInput>;
};
export type EventScalarWhereInput = {
    AND?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
    OR?: Prisma.EventScalarWhereInput[];
    NOT?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
    id?: Prisma.UuidFilter<"Event"> | string;
    date?: Prisma.DateTimeFilter<"Event"> | Date | string;
    type?: Prisma.EnumEventTypeFilter<"Event"> | $Enums.EventType;
    maxLevel?: Prisma.IntFilter<"Event"> | number;
    maxRound?: Prisma.IntFilter<"Event"> | number;
    status?: Prisma.EnumEventStatusFilter<"Event"> | $Enums.EventStatus;
    winnerId?: Prisma.UuidNullableFilter<"Event"> | string | null;
    finishedAt?: Prisma.DateTimeNullableFilter<"Event"> | Date | string | null;
    sortedBrutes?: Prisma.StringNullableListFilter<"Event">;
};
export type EventCreateWithoutTournamentInput = {
    id?: string;
    date?: Date | string;
    type?: $Enums.EventType;
    maxLevel: number;
    maxRound?: number;
    status?: $Enums.EventStatus;
    finishedAt?: Date | string | null;
    sortedBrutes?: Prisma.EventCreatesortedBrutesInput | string[];
    brutes?: Prisma.BruteCreateNestedManyWithoutEventInput;
    winner?: Prisma.BruteCreateNestedOneWithoutWonEventsInput;
};
export type EventUncheckedCreateWithoutTournamentInput = {
    id?: string;
    date?: Date | string;
    type?: $Enums.EventType;
    maxLevel: number;
    maxRound?: number;
    status?: $Enums.EventStatus;
    winnerId?: string | null;
    finishedAt?: Date | string | null;
    sortedBrutes?: Prisma.EventCreatesortedBrutesInput | string[];
    brutes?: Prisma.BruteUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutTournamentInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutTournamentInput, Prisma.EventUncheckedCreateWithoutTournamentInput>;
};
export type EventUpsertWithoutTournamentInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutTournamentInput, Prisma.EventUncheckedUpdateWithoutTournamentInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutTournamentInput, Prisma.EventUncheckedCreateWithoutTournamentInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutTournamentInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutTournamentInput, Prisma.EventUncheckedUpdateWithoutTournamentInput>;
};
export type EventUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    maxLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    maxRound?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortedBrutes?: Prisma.EventUpdatesortedBrutesInput | string[];
    brutes?: Prisma.BruteUpdateManyWithoutEventNestedInput;
    winner?: Prisma.BruteUpdateOneWithoutWonEventsNestedInput;
};
export type EventUncheckedUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    maxLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    maxRound?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    winnerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortedBrutes?: Prisma.EventUpdatesortedBrutesInput | string[];
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateManyWinnerInput = {
    id?: string;
    date?: Date | string;
    type?: $Enums.EventType;
    maxLevel: number;
    maxRound?: number;
    status?: $Enums.EventStatus;
    finishedAt?: Date | string | null;
    sortedBrutes?: Prisma.EventCreatesortedBrutesInput | string[];
};
export type EventUpdateWithoutWinnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    maxLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    maxRound?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortedBrutes?: Prisma.EventUpdatesortedBrutesInput | string[];
    brutes?: Prisma.BruteUpdateManyWithoutEventNestedInput;
    tournament?: Prisma.TournamentUpdateOneWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutWinnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    maxLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    maxRound?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortedBrutes?: Prisma.EventUpdatesortedBrutesInput | string[];
    brutes?: Prisma.BruteUncheckedUpdateManyWithoutEventNestedInput;
    tournament?: Prisma.TournamentUncheckedUpdateOneWithoutEventNestedInput;
};
export type EventUncheckedUpdateManyWithoutWinnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    maxLevel?: Prisma.IntFieldUpdateOperationsInput | number;
    maxRound?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortedBrutes?: Prisma.EventUpdatesortedBrutesInput | string[];
};
/**
 * Count Type EventCountOutputType
 */
export type EventCountOutputType = {
    brutes: number;
};
export type EventCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brutes?: boolean | EventCountOutputTypeCountBrutesArgs;
};
/**
 * EventCountOutputType without action
 */
export type EventCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: Prisma.EventCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EventCountOutputType without action
 */
export type EventCountOutputTypeCountBrutesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BruteWhereInput;
};
export type EventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    type?: boolean;
    maxLevel?: boolean;
    maxRound?: boolean;
    status?: boolean;
    winnerId?: boolean;
    finishedAt?: boolean;
    sortedBrutes?: boolean;
    brutes?: boolean | Prisma.Event$brutesArgs<ExtArgs>;
    tournament?: boolean | Prisma.Event$tournamentArgs<ExtArgs>;
    winner?: boolean | Prisma.Event$winnerArgs<ExtArgs>;
    _count?: boolean | Prisma.EventCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    type?: boolean;
    maxLevel?: boolean;
    maxRound?: boolean;
    status?: boolean;
    winnerId?: boolean;
    finishedAt?: boolean;
    sortedBrutes?: boolean;
    winner?: boolean | Prisma.Event$winnerArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    type?: boolean;
    maxLevel?: boolean;
    maxRound?: boolean;
    status?: boolean;
    winnerId?: boolean;
    finishedAt?: boolean;
    sortedBrutes?: boolean;
    winner?: boolean | Prisma.Event$winnerArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectScalar = {
    id?: boolean;
    date?: boolean;
    type?: boolean;
    maxLevel?: boolean;
    maxRound?: boolean;
    status?: boolean;
    winnerId?: boolean;
    finishedAt?: boolean;
    sortedBrutes?: boolean;
};
export type EventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "type" | "maxLevel" | "maxRound" | "status" | "winnerId" | "finishedAt" | "sortedBrutes", ExtArgs["result"]["event"]>;
export type EventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brutes?: boolean | Prisma.Event$brutesArgs<ExtArgs>;
    tournament?: boolean | Prisma.Event$tournamentArgs<ExtArgs>;
    winner?: boolean | Prisma.Event$winnerArgs<ExtArgs>;
    _count?: boolean | Prisma.EventCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    winner?: boolean | Prisma.Event$winnerArgs<ExtArgs>;
};
export type EventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    winner?: boolean | Prisma.Event$winnerArgs<ExtArgs>;
};
export type $EventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Event";
    objects: {
        brutes: Prisma.$BrutePayload<ExtArgs>[];
        tournament: Prisma.$TournamentPayload<ExtArgs> | null;
        winner: Prisma.$BrutePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        type: $Enums.EventType;
        maxLevel: number;
        maxRound: number;
        status: $Enums.EventStatus;
        winnerId: string | null;
        finishedAt: Date | null;
        sortedBrutes: string[];
    }, ExtArgs["result"]["event"]>;
    composites: {};
};
export type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventPayload, S>;
export type EventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: EventCountAggregateInputType | true;
};
export interface EventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Event'];
        meta: {
            name: 'Event';
        };
    };
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: Prisma.SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: Prisma.SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     *
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventFindManyArgs>(args?: Prisma.SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     *
     */
    create<T extends EventCreateArgs>(args: Prisma.SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventCreateManyArgs>(args?: Prisma.SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     *
     */
    delete<T extends EventDeleteArgs>(args: Prisma.SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventUpdateArgs>(args: Prisma.SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventUpdateManyArgs>(args: Prisma.SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: Prisma.SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(args?: Prisma.Subset<T, EventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Prisma.Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>;
    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventGroupByArgs['orderBy'];
    } : {
        orderBy?: EventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Event model
     */
    readonly fields: EventFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Event.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brutes<T extends Prisma.Event$brutesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$brutesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tournament<T extends Prisma.Event$tournamentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$tournamentArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    winner<T extends Prisma.Event$winnerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$winnerArgs<ExtArgs>>): Prisma.Prisma__BruteClient<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Event model
 */
export interface EventFieldRefs {
    readonly id: Prisma.FieldRef<"Event", 'String'>;
    readonly date: Prisma.FieldRef<"Event", 'DateTime'>;
    readonly type: Prisma.FieldRef<"Event", 'EventType'>;
    readonly maxLevel: Prisma.FieldRef<"Event", 'Int'>;
    readonly maxRound: Prisma.FieldRef<"Event", 'Int'>;
    readonly status: Prisma.FieldRef<"Event", 'EventStatus'>;
    readonly winnerId: Prisma.FieldRef<"Event", 'String'>;
    readonly finishedAt: Prisma.FieldRef<"Event", 'DateTime'>;
    readonly sortedBrutes: Prisma.FieldRef<"Event", 'String[]'>;
}
/**
 * Event findUnique
 */
export type EventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Event to fetch.
     */
    where: Prisma.EventWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Event findUniqueOrThrow
 */
export type EventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Event to fetch.
     */
    where: Prisma.EventWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Event findFirst
 */
export type EventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Event to fetch.
     */
    where?: Prisma.EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: Prisma.EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Event findFirstOrThrow
 */
export type EventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Event to fetch.
     */
    where?: Prisma.EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: Prisma.EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Event findMany
 */
export type EventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Events to fetch.
     */
    where?: Prisma.EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Events.
     */
    cursor?: Prisma.EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Event create
 */
export type EventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Event.
     */
    data: Prisma.XOR<Prisma.EventCreateInput, Prisma.EventUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Event createMany
 */
export type EventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: Prisma.EventCreateManyInput | Prisma.EventCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Event createManyAndReturn
 */
export type EventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: Prisma.EventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: Prisma.EventOmit<ExtArgs> | null;
    /**
     * The data used to create many Events.
     */
    data: Prisma.EventCreateManyInput | Prisma.EventCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Event update
 */
export type EventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Event.
     */
    data: Prisma.XOR<Prisma.EventUpdateInput, Prisma.EventUncheckedUpdateInput>;
    /**
     * Choose, which Event to update.
     */
    where: Prisma.EventWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Event updateMany
 */
export type EventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyInput>;
    /**
     * Filter which Events to update
     */
    where?: Prisma.EventWhereInput;
    /**
     * Limit how many Events to update.
     */
    limit?: number;
};
/**
 * Event updateManyAndReturn
 */
export type EventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: Prisma.EventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: Prisma.EventOmit<ExtArgs> | null;
    /**
     * The data used to update Events.
     */
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyInput>;
    /**
     * Filter which Events to update
     */
    where?: Prisma.EventWhereInput;
    /**
     * Limit how many Events to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Event upsert
 */
export type EventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: Prisma.EventWhereUniqueInput;
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: Prisma.XOR<Prisma.EventCreateInput, Prisma.EventUncheckedCreateInput>;
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventUpdateInput, Prisma.EventUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Event delete
 */
export type EventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Event to delete.
     */
    where: Prisma.EventWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Event deleteMany
 */
export type EventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: Prisma.EventWhereInput;
    /**
     * Limit how many Events to delete.
     */
    limit?: number;
};
/**
 * Event.brutes
 */
export type Event$brutesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Event.tournament
 */
export type Event$tournamentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Event.winner
 */
export type Event$winnerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Event without action
 */
export type EventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
