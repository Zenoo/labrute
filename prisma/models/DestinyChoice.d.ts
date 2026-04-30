import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model DestinyChoice
 *
 */
export type DestinyChoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$DestinyChoicePayload>;
export type AggregateDestinyChoice = {
    _count: DestinyChoiceCountAggregateOutputType | null;
    _avg: DestinyChoiceAvgAggregateOutputType | null;
    _sum: DestinyChoiceSumAggregateOutputType | null;
    _min: DestinyChoiceMinAggregateOutputType | null;
    _max: DestinyChoiceMaxAggregateOutputType | null;
};
export type DestinyChoiceAvgAggregateOutputType = {
    stat1Value: number | null;
    stat2Value: number | null;
};
export type DestinyChoiceSumAggregateOutputType = {
    stat1Value: number | null;
    stat2Value: number | null;
};
export type DestinyChoiceMinAggregateOutputType = {
    id: string | null;
    bruteId: string | null;
    type: $Enums.DestinyChoiceType | null;
    skill: $Enums.SkillName | null;
    weapon: $Enums.WeaponName | null;
    pet: $Enums.PetName | null;
    originalSkill: $Enums.SkillName | null;
    originalWeapon: $Enums.WeaponName | null;
    originalPet: $Enums.PetName | null;
    stat1: $Enums.BruteStat | null;
    stat1Value: number | null;
    stat2: $Enums.BruteStat | null;
    stat2Value: number | null;
};
export type DestinyChoiceMaxAggregateOutputType = {
    id: string | null;
    bruteId: string | null;
    type: $Enums.DestinyChoiceType | null;
    skill: $Enums.SkillName | null;
    weapon: $Enums.WeaponName | null;
    pet: $Enums.PetName | null;
    originalSkill: $Enums.SkillName | null;
    originalWeapon: $Enums.WeaponName | null;
    originalPet: $Enums.PetName | null;
    stat1: $Enums.BruteStat | null;
    stat1Value: number | null;
    stat2: $Enums.BruteStat | null;
    stat2Value: number | null;
};
export type DestinyChoiceCountAggregateOutputType = {
    id: number;
    bruteId: number;
    path: number;
    type: number;
    skill: number;
    weapon: number;
    pet: number;
    originalSkill: number;
    originalWeapon: number;
    originalPet: number;
    stat1: number;
    stat1Value: number;
    stat2: number;
    stat2Value: number;
    _all: number;
};
export type DestinyChoiceAvgAggregateInputType = {
    stat1Value?: true;
    stat2Value?: true;
};
export type DestinyChoiceSumAggregateInputType = {
    stat1Value?: true;
    stat2Value?: true;
};
export type DestinyChoiceMinAggregateInputType = {
    id?: true;
    bruteId?: true;
    type?: true;
    skill?: true;
    weapon?: true;
    pet?: true;
    originalSkill?: true;
    originalWeapon?: true;
    originalPet?: true;
    stat1?: true;
    stat1Value?: true;
    stat2?: true;
    stat2Value?: true;
};
export type DestinyChoiceMaxAggregateInputType = {
    id?: true;
    bruteId?: true;
    type?: true;
    skill?: true;
    weapon?: true;
    pet?: true;
    originalSkill?: true;
    originalWeapon?: true;
    originalPet?: true;
    stat1?: true;
    stat1Value?: true;
    stat2?: true;
    stat2Value?: true;
};
export type DestinyChoiceCountAggregateInputType = {
    id?: true;
    bruteId?: true;
    path?: true;
    type?: true;
    skill?: true;
    weapon?: true;
    pet?: true;
    originalSkill?: true;
    originalWeapon?: true;
    originalPet?: true;
    stat1?: true;
    stat1Value?: true;
    stat2?: true;
    stat2Value?: true;
    _all?: true;
};
export type DestinyChoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DestinyChoice to aggregate.
     */
    where?: Prisma.DestinyChoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DestinyChoices to fetch.
     */
    orderBy?: Prisma.DestinyChoiceOrderByWithRelationInput | Prisma.DestinyChoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DestinyChoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DestinyChoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DestinyChoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DestinyChoices
    **/
    _count?: true | DestinyChoiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DestinyChoiceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DestinyChoiceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DestinyChoiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DestinyChoiceMaxAggregateInputType;
};
export type GetDestinyChoiceAggregateType<T extends DestinyChoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateDestinyChoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDestinyChoice[P]> : Prisma.GetScalarType<T[P], AggregateDestinyChoice[P]>;
};
export type DestinyChoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DestinyChoiceWhereInput;
    orderBy?: Prisma.DestinyChoiceOrderByWithAggregationInput | Prisma.DestinyChoiceOrderByWithAggregationInput[];
    by: Prisma.DestinyChoiceScalarFieldEnum[] | Prisma.DestinyChoiceScalarFieldEnum;
    having?: Prisma.DestinyChoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DestinyChoiceCountAggregateInputType | true;
    _avg?: DestinyChoiceAvgAggregateInputType;
    _sum?: DestinyChoiceSumAggregateInputType;
    _min?: DestinyChoiceMinAggregateInputType;
    _max?: DestinyChoiceMaxAggregateInputType;
};
export type DestinyChoiceGroupByOutputType = {
    id: string;
    bruteId: string;
    path: $Enums.DestinyChoiceSide[];
    type: $Enums.DestinyChoiceType;
    skill: $Enums.SkillName | null;
    weapon: $Enums.WeaponName | null;
    pet: $Enums.PetName | null;
    originalSkill: $Enums.SkillName | null;
    originalWeapon: $Enums.WeaponName | null;
    originalPet: $Enums.PetName | null;
    stat1: $Enums.BruteStat | null;
    stat1Value: number | null;
    stat2: $Enums.BruteStat | null;
    stat2Value: number | null;
    _count: DestinyChoiceCountAggregateOutputType | null;
    _avg: DestinyChoiceAvgAggregateOutputType | null;
    _sum: DestinyChoiceSumAggregateOutputType | null;
    _min: DestinyChoiceMinAggregateOutputType | null;
    _max: DestinyChoiceMaxAggregateOutputType | null;
};
export type GetDestinyChoiceGroupByPayload<T extends DestinyChoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DestinyChoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DestinyChoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DestinyChoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DestinyChoiceGroupByOutputType[P]>;
}>>;
export type DestinyChoiceWhereInput = {
    AND?: Prisma.DestinyChoiceWhereInput | Prisma.DestinyChoiceWhereInput[];
    OR?: Prisma.DestinyChoiceWhereInput[];
    NOT?: Prisma.DestinyChoiceWhereInput | Prisma.DestinyChoiceWhereInput[];
    id?: Prisma.UuidFilter<"DestinyChoice"> | string;
    bruteId?: Prisma.UuidFilter<"DestinyChoice"> | string;
    path?: Prisma.EnumDestinyChoiceSideNullableListFilter<"DestinyChoice">;
    type?: Prisma.EnumDestinyChoiceTypeFilter<"DestinyChoice"> | $Enums.DestinyChoiceType;
    skill?: Prisma.EnumSkillNameNullableFilter<"DestinyChoice"> | $Enums.SkillName | null;
    weapon?: Prisma.EnumWeaponNameNullableFilter<"DestinyChoice"> | $Enums.WeaponName | null;
    pet?: Prisma.EnumPetNameNullableFilter<"DestinyChoice"> | $Enums.PetName | null;
    originalSkill?: Prisma.EnumSkillNameNullableFilter<"DestinyChoice"> | $Enums.SkillName | null;
    originalWeapon?: Prisma.EnumWeaponNameNullableFilter<"DestinyChoice"> | $Enums.WeaponName | null;
    originalPet?: Prisma.EnumPetNameNullableFilter<"DestinyChoice"> | $Enums.PetName | null;
    stat1?: Prisma.EnumBruteStatNullableFilter<"DestinyChoice"> | $Enums.BruteStat | null;
    stat1Value?: Prisma.IntNullableFilter<"DestinyChoice"> | number | null;
    stat2?: Prisma.EnumBruteStatNullableFilter<"DestinyChoice"> | $Enums.BruteStat | null;
    stat2Value?: Prisma.IntNullableFilter<"DestinyChoice"> | number | null;
    brute?: Prisma.XOR<Prisma.BruteScalarRelationFilter, Prisma.BruteWhereInput>;
    logs?: Prisma.LogListRelationFilter;
};
export type DestinyChoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    skill?: Prisma.SortOrderInput | Prisma.SortOrder;
    weapon?: Prisma.SortOrderInput | Prisma.SortOrder;
    pet?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalSkill?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalWeapon?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalPet?: Prisma.SortOrderInput | Prisma.SortOrder;
    stat1?: Prisma.SortOrderInput | Prisma.SortOrder;
    stat1Value?: Prisma.SortOrderInput | Prisma.SortOrder;
    stat2?: Prisma.SortOrderInput | Prisma.SortOrder;
    stat2Value?: Prisma.SortOrderInput | Prisma.SortOrder;
    brute?: Prisma.BruteOrderByWithRelationInput;
    logs?: Prisma.LogOrderByRelationAggregateInput;
};
export type DestinyChoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DestinyChoiceWhereInput | Prisma.DestinyChoiceWhereInput[];
    OR?: Prisma.DestinyChoiceWhereInput[];
    NOT?: Prisma.DestinyChoiceWhereInput | Prisma.DestinyChoiceWhereInput[];
    bruteId?: Prisma.UuidFilter<"DestinyChoice"> | string;
    path?: Prisma.EnumDestinyChoiceSideNullableListFilter<"DestinyChoice">;
    type?: Prisma.EnumDestinyChoiceTypeFilter<"DestinyChoice"> | $Enums.DestinyChoiceType;
    skill?: Prisma.EnumSkillNameNullableFilter<"DestinyChoice"> | $Enums.SkillName | null;
    weapon?: Prisma.EnumWeaponNameNullableFilter<"DestinyChoice"> | $Enums.WeaponName | null;
    pet?: Prisma.EnumPetNameNullableFilter<"DestinyChoice"> | $Enums.PetName | null;
    originalSkill?: Prisma.EnumSkillNameNullableFilter<"DestinyChoice"> | $Enums.SkillName | null;
    originalWeapon?: Prisma.EnumWeaponNameNullableFilter<"DestinyChoice"> | $Enums.WeaponName | null;
    originalPet?: Prisma.EnumPetNameNullableFilter<"DestinyChoice"> | $Enums.PetName | null;
    stat1?: Prisma.EnumBruteStatNullableFilter<"DestinyChoice"> | $Enums.BruteStat | null;
    stat1Value?: Prisma.IntNullableFilter<"DestinyChoice"> | number | null;
    stat2?: Prisma.EnumBruteStatNullableFilter<"DestinyChoice"> | $Enums.BruteStat | null;
    stat2Value?: Prisma.IntNullableFilter<"DestinyChoice"> | number | null;
    brute?: Prisma.XOR<Prisma.BruteScalarRelationFilter, Prisma.BruteWhereInput>;
    logs?: Prisma.LogListRelationFilter;
}, "id" | "id">;
export type DestinyChoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    skill?: Prisma.SortOrderInput | Prisma.SortOrder;
    weapon?: Prisma.SortOrderInput | Prisma.SortOrder;
    pet?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalSkill?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalWeapon?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalPet?: Prisma.SortOrderInput | Prisma.SortOrder;
    stat1?: Prisma.SortOrderInput | Prisma.SortOrder;
    stat1Value?: Prisma.SortOrderInput | Prisma.SortOrder;
    stat2?: Prisma.SortOrderInput | Prisma.SortOrder;
    stat2Value?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DestinyChoiceCountOrderByAggregateInput;
    _avg?: Prisma.DestinyChoiceAvgOrderByAggregateInput;
    _max?: Prisma.DestinyChoiceMaxOrderByAggregateInput;
    _min?: Prisma.DestinyChoiceMinOrderByAggregateInput;
    _sum?: Prisma.DestinyChoiceSumOrderByAggregateInput;
};
export type DestinyChoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.DestinyChoiceScalarWhereWithAggregatesInput | Prisma.DestinyChoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.DestinyChoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DestinyChoiceScalarWhereWithAggregatesInput | Prisma.DestinyChoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"DestinyChoice"> | string;
    bruteId?: Prisma.UuidWithAggregatesFilter<"DestinyChoice"> | string;
    path?: Prisma.EnumDestinyChoiceSideNullableListFilter<"DestinyChoice">;
    type?: Prisma.EnumDestinyChoiceTypeWithAggregatesFilter<"DestinyChoice"> | $Enums.DestinyChoiceType;
    skill?: Prisma.EnumSkillNameNullableWithAggregatesFilter<"DestinyChoice"> | $Enums.SkillName | null;
    weapon?: Prisma.EnumWeaponNameNullableWithAggregatesFilter<"DestinyChoice"> | $Enums.WeaponName | null;
    pet?: Prisma.EnumPetNameNullableWithAggregatesFilter<"DestinyChoice"> | $Enums.PetName | null;
    originalSkill?: Prisma.EnumSkillNameNullableWithAggregatesFilter<"DestinyChoice"> | $Enums.SkillName | null;
    originalWeapon?: Prisma.EnumWeaponNameNullableWithAggregatesFilter<"DestinyChoice"> | $Enums.WeaponName | null;
    originalPet?: Prisma.EnumPetNameNullableWithAggregatesFilter<"DestinyChoice"> | $Enums.PetName | null;
    stat1?: Prisma.EnumBruteStatNullableWithAggregatesFilter<"DestinyChoice"> | $Enums.BruteStat | null;
    stat1Value?: Prisma.IntNullableWithAggregatesFilter<"DestinyChoice"> | number | null;
    stat2?: Prisma.EnumBruteStatNullableWithAggregatesFilter<"DestinyChoice"> | $Enums.BruteStat | null;
    stat2Value?: Prisma.IntNullableWithAggregatesFilter<"DestinyChoice"> | number | null;
};
export type DestinyChoiceCreateInput = {
    id?: string;
    path?: Prisma.DestinyChoiceCreatepathInput | $Enums.DestinyChoiceSide[];
    type: $Enums.DestinyChoiceType;
    skill?: $Enums.SkillName | null;
    weapon?: $Enums.WeaponName | null;
    pet?: $Enums.PetName | null;
    originalSkill?: $Enums.SkillName | null;
    originalWeapon?: $Enums.WeaponName | null;
    originalPet?: $Enums.PetName | null;
    stat1?: $Enums.BruteStat | null;
    stat1Value?: number | null;
    stat2?: $Enums.BruteStat | null;
    stat2Value?: number | null;
    brute: Prisma.BruteCreateNestedOneWithoutDestinyChoicesInput;
    logs?: Prisma.LogCreateNestedManyWithoutDestinyChoiceInput;
};
export type DestinyChoiceUncheckedCreateInput = {
    id?: string;
    bruteId: string;
    path?: Prisma.DestinyChoiceCreatepathInput | $Enums.DestinyChoiceSide[];
    type: $Enums.DestinyChoiceType;
    skill?: $Enums.SkillName | null;
    weapon?: $Enums.WeaponName | null;
    pet?: $Enums.PetName | null;
    originalSkill?: $Enums.SkillName | null;
    originalWeapon?: $Enums.WeaponName | null;
    originalPet?: $Enums.PetName | null;
    stat1?: $Enums.BruteStat | null;
    stat1Value?: number | null;
    stat2?: $Enums.BruteStat | null;
    stat2Value?: number | null;
    logs?: Prisma.LogUncheckedCreateNestedManyWithoutDestinyChoiceInput;
};
export type DestinyChoiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.DestinyChoiceUpdatepathInput | $Enums.DestinyChoiceSide[];
    type?: Prisma.EnumDestinyChoiceTypeFieldUpdateOperationsInput | $Enums.DestinyChoiceType;
    skill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    weapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    pet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    originalSkill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    originalWeapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    originalPet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    stat1?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat1Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    stat2?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat2Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    brute?: Prisma.BruteUpdateOneRequiredWithoutDestinyChoicesNestedInput;
    logs?: Prisma.LogUpdateManyWithoutDestinyChoiceNestedInput;
};
export type DestinyChoiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.DestinyChoiceUpdatepathInput | $Enums.DestinyChoiceSide[];
    type?: Prisma.EnumDestinyChoiceTypeFieldUpdateOperationsInput | $Enums.DestinyChoiceType;
    skill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    weapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    pet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    originalSkill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    originalWeapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    originalPet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    stat1?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat1Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    stat2?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat2Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    logs?: Prisma.LogUncheckedUpdateManyWithoutDestinyChoiceNestedInput;
};
export type DestinyChoiceCreateManyInput = {
    id?: string;
    bruteId: string;
    path?: Prisma.DestinyChoiceCreatepathInput | $Enums.DestinyChoiceSide[];
    type: $Enums.DestinyChoiceType;
    skill?: $Enums.SkillName | null;
    weapon?: $Enums.WeaponName | null;
    pet?: $Enums.PetName | null;
    originalSkill?: $Enums.SkillName | null;
    originalWeapon?: $Enums.WeaponName | null;
    originalPet?: $Enums.PetName | null;
    stat1?: $Enums.BruteStat | null;
    stat1Value?: number | null;
    stat2?: $Enums.BruteStat | null;
    stat2Value?: number | null;
};
export type DestinyChoiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.DestinyChoiceUpdatepathInput | $Enums.DestinyChoiceSide[];
    type?: Prisma.EnumDestinyChoiceTypeFieldUpdateOperationsInput | $Enums.DestinyChoiceType;
    skill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    weapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    pet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    originalSkill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    originalWeapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    originalPet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    stat1?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat1Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    stat2?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat2Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type DestinyChoiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.DestinyChoiceUpdatepathInput | $Enums.DestinyChoiceSide[];
    type?: Prisma.EnumDestinyChoiceTypeFieldUpdateOperationsInput | $Enums.DestinyChoiceType;
    skill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    weapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    pet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    originalSkill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    originalWeapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    originalPet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    stat1?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat1Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    stat2?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat2Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type DestinyChoiceListRelationFilter = {
    every?: Prisma.DestinyChoiceWhereInput;
    some?: Prisma.DestinyChoiceWhereInput;
    none?: Prisma.DestinyChoiceWhereInput;
};
export type DestinyChoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DestinyChoiceNullableScalarRelationFilter = {
    is?: Prisma.DestinyChoiceWhereInput | null;
    isNot?: Prisma.DestinyChoiceWhereInput | null;
};
export type DestinyChoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    skill?: Prisma.SortOrder;
    weapon?: Prisma.SortOrder;
    pet?: Prisma.SortOrder;
    originalSkill?: Prisma.SortOrder;
    originalWeapon?: Prisma.SortOrder;
    originalPet?: Prisma.SortOrder;
    stat1?: Prisma.SortOrder;
    stat1Value?: Prisma.SortOrder;
    stat2?: Prisma.SortOrder;
    stat2Value?: Prisma.SortOrder;
};
export type DestinyChoiceAvgOrderByAggregateInput = {
    stat1Value?: Prisma.SortOrder;
    stat2Value?: Prisma.SortOrder;
};
export type DestinyChoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    skill?: Prisma.SortOrder;
    weapon?: Prisma.SortOrder;
    pet?: Prisma.SortOrder;
    originalSkill?: Prisma.SortOrder;
    originalWeapon?: Prisma.SortOrder;
    originalPet?: Prisma.SortOrder;
    stat1?: Prisma.SortOrder;
    stat1Value?: Prisma.SortOrder;
    stat2?: Prisma.SortOrder;
    stat2Value?: Prisma.SortOrder;
};
export type DestinyChoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bruteId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    skill?: Prisma.SortOrder;
    weapon?: Prisma.SortOrder;
    pet?: Prisma.SortOrder;
    originalSkill?: Prisma.SortOrder;
    originalWeapon?: Prisma.SortOrder;
    originalPet?: Prisma.SortOrder;
    stat1?: Prisma.SortOrder;
    stat1Value?: Prisma.SortOrder;
    stat2?: Prisma.SortOrder;
    stat2Value?: Prisma.SortOrder;
};
export type DestinyChoiceSumOrderByAggregateInput = {
    stat1Value?: Prisma.SortOrder;
    stat2Value?: Prisma.SortOrder;
};
export type DestinyChoiceCreateNestedManyWithoutBruteInput = {
    create?: Prisma.XOR<Prisma.DestinyChoiceCreateWithoutBruteInput, Prisma.DestinyChoiceUncheckedCreateWithoutBruteInput> | Prisma.DestinyChoiceCreateWithoutBruteInput[] | Prisma.DestinyChoiceUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.DestinyChoiceCreateOrConnectWithoutBruteInput | Prisma.DestinyChoiceCreateOrConnectWithoutBruteInput[];
    createMany?: Prisma.DestinyChoiceCreateManyBruteInputEnvelope;
    connect?: Prisma.DestinyChoiceWhereUniqueInput | Prisma.DestinyChoiceWhereUniqueInput[];
};
export type DestinyChoiceUncheckedCreateNestedManyWithoutBruteInput = {
    create?: Prisma.XOR<Prisma.DestinyChoiceCreateWithoutBruteInput, Prisma.DestinyChoiceUncheckedCreateWithoutBruteInput> | Prisma.DestinyChoiceCreateWithoutBruteInput[] | Prisma.DestinyChoiceUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.DestinyChoiceCreateOrConnectWithoutBruteInput | Prisma.DestinyChoiceCreateOrConnectWithoutBruteInput[];
    createMany?: Prisma.DestinyChoiceCreateManyBruteInputEnvelope;
    connect?: Prisma.DestinyChoiceWhereUniqueInput | Prisma.DestinyChoiceWhereUniqueInput[];
};
export type DestinyChoiceUpdateManyWithoutBruteNestedInput = {
    create?: Prisma.XOR<Prisma.DestinyChoiceCreateWithoutBruteInput, Prisma.DestinyChoiceUncheckedCreateWithoutBruteInput> | Prisma.DestinyChoiceCreateWithoutBruteInput[] | Prisma.DestinyChoiceUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.DestinyChoiceCreateOrConnectWithoutBruteInput | Prisma.DestinyChoiceCreateOrConnectWithoutBruteInput[];
    upsert?: Prisma.DestinyChoiceUpsertWithWhereUniqueWithoutBruteInput | Prisma.DestinyChoiceUpsertWithWhereUniqueWithoutBruteInput[];
    createMany?: Prisma.DestinyChoiceCreateManyBruteInputEnvelope;
    set?: Prisma.DestinyChoiceWhereUniqueInput | Prisma.DestinyChoiceWhereUniqueInput[];
    disconnect?: Prisma.DestinyChoiceWhereUniqueInput | Prisma.DestinyChoiceWhereUniqueInput[];
    delete?: Prisma.DestinyChoiceWhereUniqueInput | Prisma.DestinyChoiceWhereUniqueInput[];
    connect?: Prisma.DestinyChoiceWhereUniqueInput | Prisma.DestinyChoiceWhereUniqueInput[];
    update?: Prisma.DestinyChoiceUpdateWithWhereUniqueWithoutBruteInput | Prisma.DestinyChoiceUpdateWithWhereUniqueWithoutBruteInput[];
    updateMany?: Prisma.DestinyChoiceUpdateManyWithWhereWithoutBruteInput | Prisma.DestinyChoiceUpdateManyWithWhereWithoutBruteInput[];
    deleteMany?: Prisma.DestinyChoiceScalarWhereInput | Prisma.DestinyChoiceScalarWhereInput[];
};
export type DestinyChoiceUncheckedUpdateManyWithoutBruteNestedInput = {
    create?: Prisma.XOR<Prisma.DestinyChoiceCreateWithoutBruteInput, Prisma.DestinyChoiceUncheckedCreateWithoutBruteInput> | Prisma.DestinyChoiceCreateWithoutBruteInput[] | Prisma.DestinyChoiceUncheckedCreateWithoutBruteInput[];
    connectOrCreate?: Prisma.DestinyChoiceCreateOrConnectWithoutBruteInput | Prisma.DestinyChoiceCreateOrConnectWithoutBruteInput[];
    upsert?: Prisma.DestinyChoiceUpsertWithWhereUniqueWithoutBruteInput | Prisma.DestinyChoiceUpsertWithWhereUniqueWithoutBruteInput[];
    createMany?: Prisma.DestinyChoiceCreateManyBruteInputEnvelope;
    set?: Prisma.DestinyChoiceWhereUniqueInput | Prisma.DestinyChoiceWhereUniqueInput[];
    disconnect?: Prisma.DestinyChoiceWhereUniqueInput | Prisma.DestinyChoiceWhereUniqueInput[];
    delete?: Prisma.DestinyChoiceWhereUniqueInput | Prisma.DestinyChoiceWhereUniqueInput[];
    connect?: Prisma.DestinyChoiceWhereUniqueInput | Prisma.DestinyChoiceWhereUniqueInput[];
    update?: Prisma.DestinyChoiceUpdateWithWhereUniqueWithoutBruteInput | Prisma.DestinyChoiceUpdateWithWhereUniqueWithoutBruteInput[];
    updateMany?: Prisma.DestinyChoiceUpdateManyWithWhereWithoutBruteInput | Prisma.DestinyChoiceUpdateManyWithWhereWithoutBruteInput[];
    deleteMany?: Prisma.DestinyChoiceScalarWhereInput | Prisma.DestinyChoiceScalarWhereInput[];
};
export type DestinyChoiceCreateNestedOneWithoutLogsInput = {
    create?: Prisma.XOR<Prisma.DestinyChoiceCreateWithoutLogsInput, Prisma.DestinyChoiceUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.DestinyChoiceCreateOrConnectWithoutLogsInput;
    connect?: Prisma.DestinyChoiceWhereUniqueInput;
};
export type DestinyChoiceUpdateOneWithoutLogsNestedInput = {
    create?: Prisma.XOR<Prisma.DestinyChoiceCreateWithoutLogsInput, Prisma.DestinyChoiceUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.DestinyChoiceCreateOrConnectWithoutLogsInput;
    upsert?: Prisma.DestinyChoiceUpsertWithoutLogsInput;
    disconnect?: Prisma.DestinyChoiceWhereInput | boolean;
    delete?: Prisma.DestinyChoiceWhereInput | boolean;
    connect?: Prisma.DestinyChoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DestinyChoiceUpdateToOneWithWhereWithoutLogsInput, Prisma.DestinyChoiceUpdateWithoutLogsInput>, Prisma.DestinyChoiceUncheckedUpdateWithoutLogsInput>;
};
export type DestinyChoiceCreatepathInput = {
    set: $Enums.DestinyChoiceSide[];
};
export type DestinyChoiceUpdatepathInput = {
    set?: $Enums.DestinyChoiceSide[];
    push?: $Enums.DestinyChoiceSide | $Enums.DestinyChoiceSide[];
};
export type EnumDestinyChoiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DestinyChoiceType;
};
export type NullableEnumSkillNameFieldUpdateOperationsInput = {
    set?: $Enums.SkillName | null;
};
export type NullableEnumWeaponNameFieldUpdateOperationsInput = {
    set?: $Enums.WeaponName | null;
};
export type NullableEnumPetNameFieldUpdateOperationsInput = {
    set?: $Enums.PetName | null;
};
export type NullableEnumBruteStatFieldUpdateOperationsInput = {
    set?: $Enums.BruteStat | null;
};
export type DestinyChoiceCreateWithoutBruteInput = {
    id?: string;
    path?: Prisma.DestinyChoiceCreatepathInput | $Enums.DestinyChoiceSide[];
    type: $Enums.DestinyChoiceType;
    skill?: $Enums.SkillName | null;
    weapon?: $Enums.WeaponName | null;
    pet?: $Enums.PetName | null;
    originalSkill?: $Enums.SkillName | null;
    originalWeapon?: $Enums.WeaponName | null;
    originalPet?: $Enums.PetName | null;
    stat1?: $Enums.BruteStat | null;
    stat1Value?: number | null;
    stat2?: $Enums.BruteStat | null;
    stat2Value?: number | null;
    logs?: Prisma.LogCreateNestedManyWithoutDestinyChoiceInput;
};
export type DestinyChoiceUncheckedCreateWithoutBruteInput = {
    id?: string;
    path?: Prisma.DestinyChoiceCreatepathInput | $Enums.DestinyChoiceSide[];
    type: $Enums.DestinyChoiceType;
    skill?: $Enums.SkillName | null;
    weapon?: $Enums.WeaponName | null;
    pet?: $Enums.PetName | null;
    originalSkill?: $Enums.SkillName | null;
    originalWeapon?: $Enums.WeaponName | null;
    originalPet?: $Enums.PetName | null;
    stat1?: $Enums.BruteStat | null;
    stat1Value?: number | null;
    stat2?: $Enums.BruteStat | null;
    stat2Value?: number | null;
    logs?: Prisma.LogUncheckedCreateNestedManyWithoutDestinyChoiceInput;
};
export type DestinyChoiceCreateOrConnectWithoutBruteInput = {
    where: Prisma.DestinyChoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.DestinyChoiceCreateWithoutBruteInput, Prisma.DestinyChoiceUncheckedCreateWithoutBruteInput>;
};
export type DestinyChoiceCreateManyBruteInputEnvelope = {
    data: Prisma.DestinyChoiceCreateManyBruteInput | Prisma.DestinyChoiceCreateManyBruteInput[];
    skipDuplicates?: boolean;
};
export type DestinyChoiceUpsertWithWhereUniqueWithoutBruteInput = {
    where: Prisma.DestinyChoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.DestinyChoiceUpdateWithoutBruteInput, Prisma.DestinyChoiceUncheckedUpdateWithoutBruteInput>;
    create: Prisma.XOR<Prisma.DestinyChoiceCreateWithoutBruteInput, Prisma.DestinyChoiceUncheckedCreateWithoutBruteInput>;
};
export type DestinyChoiceUpdateWithWhereUniqueWithoutBruteInput = {
    where: Prisma.DestinyChoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.DestinyChoiceUpdateWithoutBruteInput, Prisma.DestinyChoiceUncheckedUpdateWithoutBruteInput>;
};
export type DestinyChoiceUpdateManyWithWhereWithoutBruteInput = {
    where: Prisma.DestinyChoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.DestinyChoiceUpdateManyMutationInput, Prisma.DestinyChoiceUncheckedUpdateManyWithoutBruteInput>;
};
export type DestinyChoiceScalarWhereInput = {
    AND?: Prisma.DestinyChoiceScalarWhereInput | Prisma.DestinyChoiceScalarWhereInput[];
    OR?: Prisma.DestinyChoiceScalarWhereInput[];
    NOT?: Prisma.DestinyChoiceScalarWhereInput | Prisma.DestinyChoiceScalarWhereInput[];
    id?: Prisma.UuidFilter<"DestinyChoice"> | string;
    bruteId?: Prisma.UuidFilter<"DestinyChoice"> | string;
    path?: Prisma.EnumDestinyChoiceSideNullableListFilter<"DestinyChoice">;
    type?: Prisma.EnumDestinyChoiceTypeFilter<"DestinyChoice"> | $Enums.DestinyChoiceType;
    skill?: Prisma.EnumSkillNameNullableFilter<"DestinyChoice"> | $Enums.SkillName | null;
    weapon?: Prisma.EnumWeaponNameNullableFilter<"DestinyChoice"> | $Enums.WeaponName | null;
    pet?: Prisma.EnumPetNameNullableFilter<"DestinyChoice"> | $Enums.PetName | null;
    originalSkill?: Prisma.EnumSkillNameNullableFilter<"DestinyChoice"> | $Enums.SkillName | null;
    originalWeapon?: Prisma.EnumWeaponNameNullableFilter<"DestinyChoice"> | $Enums.WeaponName | null;
    originalPet?: Prisma.EnumPetNameNullableFilter<"DestinyChoice"> | $Enums.PetName | null;
    stat1?: Prisma.EnumBruteStatNullableFilter<"DestinyChoice"> | $Enums.BruteStat | null;
    stat1Value?: Prisma.IntNullableFilter<"DestinyChoice"> | number | null;
    stat2?: Prisma.EnumBruteStatNullableFilter<"DestinyChoice"> | $Enums.BruteStat | null;
    stat2Value?: Prisma.IntNullableFilter<"DestinyChoice"> | number | null;
};
export type DestinyChoiceCreateWithoutLogsInput = {
    id?: string;
    path?: Prisma.DestinyChoiceCreatepathInput | $Enums.DestinyChoiceSide[];
    type: $Enums.DestinyChoiceType;
    skill?: $Enums.SkillName | null;
    weapon?: $Enums.WeaponName | null;
    pet?: $Enums.PetName | null;
    originalSkill?: $Enums.SkillName | null;
    originalWeapon?: $Enums.WeaponName | null;
    originalPet?: $Enums.PetName | null;
    stat1?: $Enums.BruteStat | null;
    stat1Value?: number | null;
    stat2?: $Enums.BruteStat | null;
    stat2Value?: number | null;
    brute: Prisma.BruteCreateNestedOneWithoutDestinyChoicesInput;
};
export type DestinyChoiceUncheckedCreateWithoutLogsInput = {
    id?: string;
    bruteId: string;
    path?: Prisma.DestinyChoiceCreatepathInput | $Enums.DestinyChoiceSide[];
    type: $Enums.DestinyChoiceType;
    skill?: $Enums.SkillName | null;
    weapon?: $Enums.WeaponName | null;
    pet?: $Enums.PetName | null;
    originalSkill?: $Enums.SkillName | null;
    originalWeapon?: $Enums.WeaponName | null;
    originalPet?: $Enums.PetName | null;
    stat1?: $Enums.BruteStat | null;
    stat1Value?: number | null;
    stat2?: $Enums.BruteStat | null;
    stat2Value?: number | null;
};
export type DestinyChoiceCreateOrConnectWithoutLogsInput = {
    where: Prisma.DestinyChoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.DestinyChoiceCreateWithoutLogsInput, Prisma.DestinyChoiceUncheckedCreateWithoutLogsInput>;
};
export type DestinyChoiceUpsertWithoutLogsInput = {
    update: Prisma.XOR<Prisma.DestinyChoiceUpdateWithoutLogsInput, Prisma.DestinyChoiceUncheckedUpdateWithoutLogsInput>;
    create: Prisma.XOR<Prisma.DestinyChoiceCreateWithoutLogsInput, Prisma.DestinyChoiceUncheckedCreateWithoutLogsInput>;
    where?: Prisma.DestinyChoiceWhereInput;
};
export type DestinyChoiceUpdateToOneWithWhereWithoutLogsInput = {
    where?: Prisma.DestinyChoiceWhereInput;
    data: Prisma.XOR<Prisma.DestinyChoiceUpdateWithoutLogsInput, Prisma.DestinyChoiceUncheckedUpdateWithoutLogsInput>;
};
export type DestinyChoiceUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.DestinyChoiceUpdatepathInput | $Enums.DestinyChoiceSide[];
    type?: Prisma.EnumDestinyChoiceTypeFieldUpdateOperationsInput | $Enums.DestinyChoiceType;
    skill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    weapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    pet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    originalSkill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    originalWeapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    originalPet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    stat1?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat1Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    stat2?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat2Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    brute?: Prisma.BruteUpdateOneRequiredWithoutDestinyChoicesNestedInput;
};
export type DestinyChoiceUncheckedUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bruteId?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.DestinyChoiceUpdatepathInput | $Enums.DestinyChoiceSide[];
    type?: Prisma.EnumDestinyChoiceTypeFieldUpdateOperationsInput | $Enums.DestinyChoiceType;
    skill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    weapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    pet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    originalSkill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    originalWeapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    originalPet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    stat1?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat1Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    stat2?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat2Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type DestinyChoiceCreateManyBruteInput = {
    id?: string;
    path?: Prisma.DestinyChoiceCreatepathInput | $Enums.DestinyChoiceSide[];
    type: $Enums.DestinyChoiceType;
    skill?: $Enums.SkillName | null;
    weapon?: $Enums.WeaponName | null;
    pet?: $Enums.PetName | null;
    originalSkill?: $Enums.SkillName | null;
    originalWeapon?: $Enums.WeaponName | null;
    originalPet?: $Enums.PetName | null;
    stat1?: $Enums.BruteStat | null;
    stat1Value?: number | null;
    stat2?: $Enums.BruteStat | null;
    stat2Value?: number | null;
};
export type DestinyChoiceUpdateWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.DestinyChoiceUpdatepathInput | $Enums.DestinyChoiceSide[];
    type?: Prisma.EnumDestinyChoiceTypeFieldUpdateOperationsInput | $Enums.DestinyChoiceType;
    skill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    weapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    pet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    originalSkill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    originalWeapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    originalPet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    stat1?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat1Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    stat2?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat2Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    logs?: Prisma.LogUpdateManyWithoutDestinyChoiceNestedInput;
};
export type DestinyChoiceUncheckedUpdateWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.DestinyChoiceUpdatepathInput | $Enums.DestinyChoiceSide[];
    type?: Prisma.EnumDestinyChoiceTypeFieldUpdateOperationsInput | $Enums.DestinyChoiceType;
    skill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    weapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    pet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    originalSkill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    originalWeapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    originalPet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    stat1?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat1Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    stat2?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat2Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    logs?: Prisma.LogUncheckedUpdateManyWithoutDestinyChoiceNestedInput;
};
export type DestinyChoiceUncheckedUpdateManyWithoutBruteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.DestinyChoiceUpdatepathInput | $Enums.DestinyChoiceSide[];
    type?: Prisma.EnumDestinyChoiceTypeFieldUpdateOperationsInput | $Enums.DestinyChoiceType;
    skill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    weapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    pet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    originalSkill?: Prisma.NullableEnumSkillNameFieldUpdateOperationsInput | $Enums.SkillName | null;
    originalWeapon?: Prisma.NullableEnumWeaponNameFieldUpdateOperationsInput | $Enums.WeaponName | null;
    originalPet?: Prisma.NullableEnumPetNameFieldUpdateOperationsInput | $Enums.PetName | null;
    stat1?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat1Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    stat2?: Prisma.NullableEnumBruteStatFieldUpdateOperationsInput | $Enums.BruteStat | null;
    stat2Value?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
/**
 * Count Type DestinyChoiceCountOutputType
 */
export type DestinyChoiceCountOutputType = {
    logs: number;
};
export type DestinyChoiceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    logs?: boolean | DestinyChoiceCountOutputTypeCountLogsArgs;
};
/**
 * DestinyChoiceCountOutputType without action
 */
export type DestinyChoiceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoiceCountOutputType
     */
    select?: Prisma.DestinyChoiceCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * DestinyChoiceCountOutputType without action
 */
export type DestinyChoiceCountOutputTypeCountLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LogWhereInput;
};
export type DestinyChoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bruteId?: boolean;
    path?: boolean;
    type?: boolean;
    skill?: boolean;
    weapon?: boolean;
    pet?: boolean;
    originalSkill?: boolean;
    originalWeapon?: boolean;
    originalPet?: boolean;
    stat1?: boolean;
    stat1Value?: boolean;
    stat2?: boolean;
    stat2Value?: boolean;
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
    logs?: boolean | Prisma.DestinyChoice$logsArgs<ExtArgs>;
    _count?: boolean | Prisma.DestinyChoiceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["destinyChoice"]>;
export type DestinyChoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bruteId?: boolean;
    path?: boolean;
    type?: boolean;
    skill?: boolean;
    weapon?: boolean;
    pet?: boolean;
    originalSkill?: boolean;
    originalWeapon?: boolean;
    originalPet?: boolean;
    stat1?: boolean;
    stat1Value?: boolean;
    stat2?: boolean;
    stat2Value?: boolean;
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["destinyChoice"]>;
export type DestinyChoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bruteId?: boolean;
    path?: boolean;
    type?: boolean;
    skill?: boolean;
    weapon?: boolean;
    pet?: boolean;
    originalSkill?: boolean;
    originalWeapon?: boolean;
    originalPet?: boolean;
    stat1?: boolean;
    stat1Value?: boolean;
    stat2?: boolean;
    stat2Value?: boolean;
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["destinyChoice"]>;
export type DestinyChoiceSelectScalar = {
    id?: boolean;
    bruteId?: boolean;
    path?: boolean;
    type?: boolean;
    skill?: boolean;
    weapon?: boolean;
    pet?: boolean;
    originalSkill?: boolean;
    originalWeapon?: boolean;
    originalPet?: boolean;
    stat1?: boolean;
    stat1Value?: boolean;
    stat2?: boolean;
    stat2Value?: boolean;
};
export type DestinyChoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bruteId" | "path" | "type" | "skill" | "weapon" | "pet" | "originalSkill" | "originalWeapon" | "originalPet" | "stat1" | "stat1Value" | "stat2" | "stat2Value", ExtArgs["result"]["destinyChoice"]>;
export type DestinyChoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
    logs?: boolean | Prisma.DestinyChoice$logsArgs<ExtArgs>;
    _count?: boolean | Prisma.DestinyChoiceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DestinyChoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
};
export type DestinyChoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brute?: boolean | Prisma.BruteDefaultArgs<ExtArgs>;
};
export type $DestinyChoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DestinyChoice";
    objects: {
        brute: Prisma.$BrutePayload<ExtArgs>;
        logs: Prisma.$LogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bruteId: string;
        path: $Enums.DestinyChoiceSide[];
        type: $Enums.DestinyChoiceType;
        skill: $Enums.SkillName | null;
        weapon: $Enums.WeaponName | null;
        pet: $Enums.PetName | null;
        originalSkill: $Enums.SkillName | null;
        originalWeapon: $Enums.WeaponName | null;
        originalPet: $Enums.PetName | null;
        stat1: $Enums.BruteStat | null;
        stat1Value: number | null;
        stat2: $Enums.BruteStat | null;
        stat2Value: number | null;
    }, ExtArgs["result"]["destinyChoice"]>;
    composites: {};
};
export type DestinyChoiceGetPayload<S extends boolean | null | undefined | DestinyChoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DestinyChoicePayload, S>;
export type DestinyChoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DestinyChoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: DestinyChoiceCountAggregateInputType | true;
};
export interface DestinyChoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DestinyChoice'];
        meta: {
            name: 'DestinyChoice';
        };
    };
    /**
     * Find zero or one DestinyChoice that matches the filter.
     * @param {DestinyChoiceFindUniqueArgs} args - Arguments to find a DestinyChoice
     * @example
     * // Get one DestinyChoice
     * const destinyChoice = await prisma.destinyChoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinyChoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, DestinyChoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DestinyChoiceClient<runtime.Types.Result.GetResult<Prisma.$DestinyChoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DestinyChoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinyChoiceFindUniqueOrThrowArgs} args - Arguments to find a DestinyChoice
     * @example
     * // Get one DestinyChoice
     * const destinyChoice = await prisma.destinyChoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinyChoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DestinyChoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DestinyChoiceClient<runtime.Types.Result.GetResult<Prisma.$DestinyChoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DestinyChoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceFindFirstArgs} args - Arguments to find a DestinyChoice
     * @example
     * // Get one DestinyChoice
     * const destinyChoice = await prisma.destinyChoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinyChoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, DestinyChoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__DestinyChoiceClient<runtime.Types.Result.GetResult<Prisma.$DestinyChoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DestinyChoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceFindFirstOrThrowArgs} args - Arguments to find a DestinyChoice
     * @example
     * // Get one DestinyChoice
     * const destinyChoice = await prisma.destinyChoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinyChoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DestinyChoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DestinyChoiceClient<runtime.Types.Result.GetResult<Prisma.$DestinyChoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DestinyChoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DestinyChoices
     * const destinyChoices = await prisma.destinyChoice.findMany()
     *
     * // Get first 10 DestinyChoices
     * const destinyChoices = await prisma.destinyChoice.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const destinyChoiceWithIdOnly = await prisma.destinyChoice.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DestinyChoiceFindManyArgs>(args?: Prisma.SelectSubset<T, DestinyChoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DestinyChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DestinyChoice.
     * @param {DestinyChoiceCreateArgs} args - Arguments to create a DestinyChoice.
     * @example
     * // Create one DestinyChoice
     * const DestinyChoice = await prisma.destinyChoice.create({
     *   data: {
     *     // ... data to create a DestinyChoice
     *   }
     * })
     *
     */
    create<T extends DestinyChoiceCreateArgs>(args: Prisma.SelectSubset<T, DestinyChoiceCreateArgs<ExtArgs>>): Prisma.Prisma__DestinyChoiceClient<runtime.Types.Result.GetResult<Prisma.$DestinyChoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DestinyChoices.
     * @param {DestinyChoiceCreateManyArgs} args - Arguments to create many DestinyChoices.
     * @example
     * // Create many DestinyChoices
     * const destinyChoice = await prisma.destinyChoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DestinyChoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, DestinyChoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DestinyChoices and returns the data saved in the database.
     * @param {DestinyChoiceCreateManyAndReturnArgs} args - Arguments to create many DestinyChoices.
     * @example
     * // Create many DestinyChoices
     * const destinyChoice = await prisma.destinyChoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DestinyChoices and only return the `id`
     * const destinyChoiceWithIdOnly = await prisma.destinyChoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DestinyChoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DestinyChoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DestinyChoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DestinyChoice.
     * @param {DestinyChoiceDeleteArgs} args - Arguments to delete one DestinyChoice.
     * @example
     * // Delete one DestinyChoice
     * const DestinyChoice = await prisma.destinyChoice.delete({
     *   where: {
     *     // ... filter to delete one DestinyChoice
     *   }
     * })
     *
     */
    delete<T extends DestinyChoiceDeleteArgs>(args: Prisma.SelectSubset<T, DestinyChoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__DestinyChoiceClient<runtime.Types.Result.GetResult<Prisma.$DestinyChoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DestinyChoice.
     * @param {DestinyChoiceUpdateArgs} args - Arguments to update one DestinyChoice.
     * @example
     * // Update one DestinyChoice
     * const destinyChoice = await prisma.destinyChoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DestinyChoiceUpdateArgs>(args: Prisma.SelectSubset<T, DestinyChoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__DestinyChoiceClient<runtime.Types.Result.GetResult<Prisma.$DestinyChoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DestinyChoices.
     * @param {DestinyChoiceDeleteManyArgs} args - Arguments to filter DestinyChoices to delete.
     * @example
     * // Delete a few DestinyChoices
     * const { count } = await prisma.destinyChoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DestinyChoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, DestinyChoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DestinyChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DestinyChoices
     * const destinyChoice = await prisma.destinyChoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DestinyChoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, DestinyChoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DestinyChoices and returns the data updated in the database.
     * @param {DestinyChoiceUpdateManyAndReturnArgs} args - Arguments to update many DestinyChoices.
     * @example
     * // Update many DestinyChoices
     * const destinyChoice = await prisma.destinyChoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DestinyChoices and only return the `id`
     * const destinyChoiceWithIdOnly = await prisma.destinyChoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends DestinyChoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DestinyChoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DestinyChoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DestinyChoice.
     * @param {DestinyChoiceUpsertArgs} args - Arguments to update or create a DestinyChoice.
     * @example
     * // Update or create a DestinyChoice
     * const destinyChoice = await prisma.destinyChoice.upsert({
     *   create: {
     *     // ... data to create a DestinyChoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DestinyChoice we want to update
     *   }
     * })
     */
    upsert<T extends DestinyChoiceUpsertArgs>(args: Prisma.SelectSubset<T, DestinyChoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__DestinyChoiceClient<runtime.Types.Result.GetResult<Prisma.$DestinyChoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DestinyChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceCountArgs} args - Arguments to filter DestinyChoices to count.
     * @example
     * // Count the number of DestinyChoices
     * const count = await prisma.destinyChoice.count({
     *   where: {
     *     // ... the filter for the DestinyChoices we want to count
     *   }
     * })
    **/
    count<T extends DestinyChoiceCountArgs>(args?: Prisma.Subset<T, DestinyChoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DestinyChoiceCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DestinyChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DestinyChoiceAggregateArgs>(args: Prisma.Subset<T, DestinyChoiceAggregateArgs>): Prisma.PrismaPromise<GetDestinyChoiceAggregateType<T>>;
    /**
     * Group by DestinyChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinyChoiceGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DestinyChoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DestinyChoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: DestinyChoiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DestinyChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinyChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DestinyChoice model
     */
    readonly fields: DestinyChoiceFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DestinyChoice.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DestinyChoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brute<T extends Prisma.BruteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BruteDefaultArgs<ExtArgs>>): Prisma.Prisma__BruteClient<runtime.Types.Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    logs<T extends Prisma.DestinyChoice$logsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DestinyChoice$logsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the DestinyChoice model
 */
export interface DestinyChoiceFieldRefs {
    readonly id: Prisma.FieldRef<"DestinyChoice", 'String'>;
    readonly bruteId: Prisma.FieldRef<"DestinyChoice", 'String'>;
    readonly path: Prisma.FieldRef<"DestinyChoice", 'DestinyChoiceSide[]'>;
    readonly type: Prisma.FieldRef<"DestinyChoice", 'DestinyChoiceType'>;
    readonly skill: Prisma.FieldRef<"DestinyChoice", 'SkillName'>;
    readonly weapon: Prisma.FieldRef<"DestinyChoice", 'WeaponName'>;
    readonly pet: Prisma.FieldRef<"DestinyChoice", 'PetName'>;
    readonly originalSkill: Prisma.FieldRef<"DestinyChoice", 'SkillName'>;
    readonly originalWeapon: Prisma.FieldRef<"DestinyChoice", 'WeaponName'>;
    readonly originalPet: Prisma.FieldRef<"DestinyChoice", 'PetName'>;
    readonly stat1: Prisma.FieldRef<"DestinyChoice", 'BruteStat'>;
    readonly stat1Value: Prisma.FieldRef<"DestinyChoice", 'Int'>;
    readonly stat2: Prisma.FieldRef<"DestinyChoice", 'BruteStat'>;
    readonly stat2Value: Prisma.FieldRef<"DestinyChoice", 'Int'>;
}
/**
 * DestinyChoice findUnique
 */
export type DestinyChoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: Prisma.DestinyChoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DestinyChoice
     */
    omit?: Prisma.DestinyChoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DestinyChoiceInclude<ExtArgs> | null;
    /**
     * Filter, which DestinyChoice to fetch.
     */
    where: Prisma.DestinyChoiceWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * DestinyChoice findUniqueOrThrow
 */
export type DestinyChoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: Prisma.DestinyChoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DestinyChoice
     */
    omit?: Prisma.DestinyChoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DestinyChoiceInclude<ExtArgs> | null;
    /**
     * Filter, which DestinyChoice to fetch.
     */
    where: Prisma.DestinyChoiceWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * DestinyChoice findFirst
 */
export type DestinyChoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: Prisma.DestinyChoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DestinyChoice
     */
    omit?: Prisma.DestinyChoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DestinyChoiceInclude<ExtArgs> | null;
    /**
     * Filter, which DestinyChoice to fetch.
     */
    where?: Prisma.DestinyChoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DestinyChoices to fetch.
     */
    orderBy?: Prisma.DestinyChoiceOrderByWithRelationInput | Prisma.DestinyChoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DestinyChoices.
     */
    cursor?: Prisma.DestinyChoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DestinyChoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DestinyChoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DestinyChoices.
     */
    distinct?: Prisma.DestinyChoiceScalarFieldEnum | Prisma.DestinyChoiceScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * DestinyChoice findFirstOrThrow
 */
export type DestinyChoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: Prisma.DestinyChoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DestinyChoice
     */
    omit?: Prisma.DestinyChoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DestinyChoiceInclude<ExtArgs> | null;
    /**
     * Filter, which DestinyChoice to fetch.
     */
    where?: Prisma.DestinyChoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DestinyChoices to fetch.
     */
    orderBy?: Prisma.DestinyChoiceOrderByWithRelationInput | Prisma.DestinyChoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DestinyChoices.
     */
    cursor?: Prisma.DestinyChoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DestinyChoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DestinyChoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DestinyChoices.
     */
    distinct?: Prisma.DestinyChoiceScalarFieldEnum | Prisma.DestinyChoiceScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * DestinyChoice findMany
 */
export type DestinyChoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: Prisma.DestinyChoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DestinyChoice
     */
    omit?: Prisma.DestinyChoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DestinyChoiceInclude<ExtArgs> | null;
    /**
     * Filter, which DestinyChoices to fetch.
     */
    where?: Prisma.DestinyChoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DestinyChoices to fetch.
     */
    orderBy?: Prisma.DestinyChoiceOrderByWithRelationInput | Prisma.DestinyChoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DestinyChoices.
     */
    cursor?: Prisma.DestinyChoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DestinyChoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DestinyChoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DestinyChoices.
     */
    distinct?: Prisma.DestinyChoiceScalarFieldEnum | Prisma.DestinyChoiceScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * DestinyChoice create
 */
export type DestinyChoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: Prisma.DestinyChoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DestinyChoice
     */
    omit?: Prisma.DestinyChoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DestinyChoiceInclude<ExtArgs> | null;
    /**
     * The data needed to create a DestinyChoice.
     */
    data: Prisma.XOR<Prisma.DestinyChoiceCreateInput, Prisma.DestinyChoiceUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * DestinyChoice createMany
 */
export type DestinyChoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DestinyChoices.
     */
    data: Prisma.DestinyChoiceCreateManyInput | Prisma.DestinyChoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DestinyChoice createManyAndReturn
 */
export type DestinyChoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: Prisma.DestinyChoiceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DestinyChoice
     */
    omit?: Prisma.DestinyChoiceOmit<ExtArgs> | null;
    /**
     * The data used to create many DestinyChoices.
     */
    data: Prisma.DestinyChoiceCreateManyInput | Prisma.DestinyChoiceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DestinyChoiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * DestinyChoice update
 */
export type DestinyChoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: Prisma.DestinyChoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DestinyChoice
     */
    omit?: Prisma.DestinyChoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DestinyChoiceInclude<ExtArgs> | null;
    /**
     * The data needed to update a DestinyChoice.
     */
    data: Prisma.XOR<Prisma.DestinyChoiceUpdateInput, Prisma.DestinyChoiceUncheckedUpdateInput>;
    /**
     * Choose, which DestinyChoice to update.
     */
    where: Prisma.DestinyChoiceWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * DestinyChoice updateMany
 */
export type DestinyChoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DestinyChoices.
     */
    data: Prisma.XOR<Prisma.DestinyChoiceUpdateManyMutationInput, Prisma.DestinyChoiceUncheckedUpdateManyInput>;
    /**
     * Filter which DestinyChoices to update
     */
    where?: Prisma.DestinyChoiceWhereInput;
    /**
     * Limit how many DestinyChoices to update.
     */
    limit?: number;
};
/**
 * DestinyChoice updateManyAndReturn
 */
export type DestinyChoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: Prisma.DestinyChoiceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DestinyChoice
     */
    omit?: Prisma.DestinyChoiceOmit<ExtArgs> | null;
    /**
     * The data used to update DestinyChoices.
     */
    data: Prisma.XOR<Prisma.DestinyChoiceUpdateManyMutationInput, Prisma.DestinyChoiceUncheckedUpdateManyInput>;
    /**
     * Filter which DestinyChoices to update
     */
    where?: Prisma.DestinyChoiceWhereInput;
    /**
     * Limit how many DestinyChoices to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DestinyChoiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * DestinyChoice upsert
 */
export type DestinyChoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: Prisma.DestinyChoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DestinyChoice
     */
    omit?: Prisma.DestinyChoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DestinyChoiceInclude<ExtArgs> | null;
    /**
     * The filter to search for the DestinyChoice to update in case it exists.
     */
    where: Prisma.DestinyChoiceWhereUniqueInput;
    /**
     * In case the DestinyChoice found by the `where` argument doesn't exist, create a new DestinyChoice with this data.
     */
    create: Prisma.XOR<Prisma.DestinyChoiceCreateInput, Prisma.DestinyChoiceUncheckedCreateInput>;
    /**
     * In case the DestinyChoice was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DestinyChoiceUpdateInput, Prisma.DestinyChoiceUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * DestinyChoice delete
 */
export type DestinyChoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: Prisma.DestinyChoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DestinyChoice
     */
    omit?: Prisma.DestinyChoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DestinyChoiceInclude<ExtArgs> | null;
    /**
     * Filter which DestinyChoice to delete.
     */
    where: Prisma.DestinyChoiceWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * DestinyChoice deleteMany
 */
export type DestinyChoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DestinyChoices to delete
     */
    where?: Prisma.DestinyChoiceWhereInput;
    /**
     * Limit how many DestinyChoices to delete.
     */
    limit?: number;
};
/**
 * DestinyChoice.logs
 */
export type DestinyChoice$logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * DestinyChoice without action
 */
export type DestinyChoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinyChoice
     */
    select?: Prisma.DestinyChoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DestinyChoice
     */
    omit?: Prisma.DestinyChoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DestinyChoiceInclude<ExtArgs> | null;
};
