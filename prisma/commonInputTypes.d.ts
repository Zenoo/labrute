import * as $Enums from "./enums";
import type * as Prisma from "./internal/prismaNamespace";
export type UuidFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidFilter<$PrismaModel> | string;
};
export type EnumLangFilter<$PrismaModel = never> = {
    equals?: $Enums.Lang | Prisma.EnumLangFieldRefInput<$PrismaModel>;
    in?: $Enums.Lang[] | Prisma.ListEnumLangFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Lang[] | Prisma.ListEnumLangFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLangFilter<$PrismaModel> | $Enums.Lang;
};
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type EnumLangWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Lang | Prisma.EnumLangFieldRefInput<$PrismaModel>;
    in?: $Enums.Lang[] | Prisma.ListEnumLangFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Lang[] | Prisma.ListEnumLangFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLangWithAggregatesFilter<$PrismaModel> | $Enums.Lang;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLangFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLangFilter<$PrismaModel>;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumUserLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLogType | Prisma.EnumUserLogTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.UserLogType[] | Prisma.ListEnumUserLogTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserLogType[] | Prisma.ListEnumUserLogTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserLogTypeFilter<$PrismaModel> | $Enums.UserLogType;
};
export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidNullableFilter<$PrismaModel> | string | null;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type EnumUserLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLogType | Prisma.EnumUserLogTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.UserLogType[] | Prisma.ListEnumUserLogTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserLogType[] | Prisma.ListEnumUserLogTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserLogType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserLogTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserLogTypeFilter<$PrismaModel>;
};
export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderFilter<$PrismaModel>;
};
export type EnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | Prisma.EnumLogTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LogType[] | Prisma.ListEnumLogTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LogType[] | Prisma.ListEnumLogTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType;
};
export type EnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | Prisma.EnumLogTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LogType[] | Prisma.ListEnumLogTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LogType[] | Prisma.ListEnumLogTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLogTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLogTypeFilter<$PrismaModel>;
};
export type EnumDestinyChoiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DestinyChoiceType | Prisma.EnumDestinyChoiceTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DestinyChoiceType[] | Prisma.ListEnumDestinyChoiceTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DestinyChoiceType[] | Prisma.ListEnumDestinyChoiceTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDestinyChoiceTypeFilter<$PrismaModel> | $Enums.DestinyChoiceType;
};
export type EnumSkillNameNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillName | Prisma.EnumSkillNameFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SkillName[] | Prisma.ListEnumSkillNameFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SkillName[] | Prisma.ListEnumSkillNameFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSkillNameNullableFilter<$PrismaModel> | $Enums.SkillName | null;
};
export type EnumWeaponNameNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.WeaponName | Prisma.EnumWeaponNameFieldRefInput<$PrismaModel> | null;
    in?: $Enums.WeaponName[] | Prisma.ListEnumWeaponNameFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.WeaponName[] | Prisma.ListEnumWeaponNameFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumWeaponNameNullableFilter<$PrismaModel> | $Enums.WeaponName | null;
};
export type EnumPetNameNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PetName | Prisma.EnumPetNameFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PetName[] | Prisma.ListEnumPetNameFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PetName[] | Prisma.ListEnumPetNameFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPetNameNullableFilter<$PrismaModel> | $Enums.PetName | null;
};
export type EnumBruteStatNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BruteStat | Prisma.EnumBruteStatFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BruteStat[] | Prisma.ListEnumBruteStatFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BruteStat[] | Prisma.ListEnumBruteStatFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBruteStatNullableFilter<$PrismaModel> | $Enums.BruteStat | null;
};
export type EnumDestinyChoiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DestinyChoiceType | Prisma.EnumDestinyChoiceTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DestinyChoiceType[] | Prisma.ListEnumDestinyChoiceTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DestinyChoiceType[] | Prisma.ListEnumDestinyChoiceTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDestinyChoiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DestinyChoiceType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDestinyChoiceTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDestinyChoiceTypeFilter<$PrismaModel>;
};
export type EnumSkillNameNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillName | Prisma.EnumSkillNameFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SkillName[] | Prisma.ListEnumSkillNameFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SkillName[] | Prisma.ListEnumSkillNameFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSkillNameNullableWithAggregatesFilter<$PrismaModel> | $Enums.SkillName | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSkillNameNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSkillNameNullableFilter<$PrismaModel>;
};
export type EnumWeaponNameNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeaponName | Prisma.EnumWeaponNameFieldRefInput<$PrismaModel> | null;
    in?: $Enums.WeaponName[] | Prisma.ListEnumWeaponNameFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.WeaponName[] | Prisma.ListEnumWeaponNameFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumWeaponNameNullableWithAggregatesFilter<$PrismaModel> | $Enums.WeaponName | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWeaponNameNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWeaponNameNullableFilter<$PrismaModel>;
};
export type EnumPetNameNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetName | Prisma.EnumPetNameFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PetName[] | Prisma.ListEnumPetNameFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PetName[] | Prisma.ListEnumPetNameFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPetNameNullableWithAggregatesFilter<$PrismaModel> | $Enums.PetName | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPetNameNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPetNameNullableFilter<$PrismaModel>;
};
export type EnumBruteStatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BruteStat | Prisma.EnumBruteStatFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BruteStat[] | Prisma.ListEnumBruteStatFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BruteStat[] | Prisma.ListEnumBruteStatFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBruteStatNullableWithAggregatesFilter<$PrismaModel> | $Enums.BruteStat | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBruteStatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBruteStatNullableFilter<$PrismaModel>;
};
export type EnumTournamentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentType | Prisma.EnumTournamentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TournamentType[] | Prisma.ListEnumTournamentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TournamentType[] | Prisma.ListEnumTournamentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTournamentTypeFilter<$PrismaModel> | $Enums.TournamentType;
};
export type EnumTournamentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentType | Prisma.EnumTournamentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TournamentType[] | Prisma.ListEnumTournamentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TournamentType[] | Prisma.ListEnumTournamentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTournamentTypeWithAggregatesFilter<$PrismaModel> | $Enums.TournamentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTournamentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTournamentTypeFilter<$PrismaModel>;
};
export type EnumAchievementNameFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementName | Prisma.EnumAchievementNameFieldRefInput<$PrismaModel>;
    in?: $Enums.AchievementName[] | Prisma.ListEnumAchievementNameFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AchievementName[] | Prisma.ListEnumAchievementNameFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAchievementNameFilter<$PrismaModel> | $Enums.AchievementName;
};
export type EnumAchievementNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementName | Prisma.EnumAchievementNameFieldRefInput<$PrismaModel>;
    in?: $Enums.AchievementName[] | Prisma.ListEnumAchievementNameFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AchievementName[] | Prisma.ListEnumAchievementNameFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAchievementNameWithAggregatesFilter<$PrismaModel> | $Enums.AchievementName;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAchievementNameFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAchievementNameFilter<$PrismaModel>;
};
export type EnumBruteReportReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.BruteReportReason | Prisma.EnumBruteReportReasonFieldRefInput<$PrismaModel>;
    in?: $Enums.BruteReportReason[] | Prisma.ListEnumBruteReportReasonFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BruteReportReason[] | Prisma.ListEnumBruteReportReasonFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBruteReportReasonFilter<$PrismaModel> | $Enums.BruteReportReason;
};
export type EnumBruteReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BruteReportStatus | Prisma.EnumBruteReportStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BruteReportStatus[] | Prisma.ListEnumBruteReportStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BruteReportStatus[] | Prisma.ListEnumBruteReportStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBruteReportStatusFilter<$PrismaModel> | $Enums.BruteReportStatus;
};
export type EnumBruteReportReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BruteReportReason | Prisma.EnumBruteReportReasonFieldRefInput<$PrismaModel>;
    in?: $Enums.BruteReportReason[] | Prisma.ListEnumBruteReportReasonFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BruteReportReason[] | Prisma.ListEnumBruteReportReasonFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBruteReportReasonWithAggregatesFilter<$PrismaModel> | $Enums.BruteReportReason;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBruteReportReasonFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBruteReportReasonFilter<$PrismaModel>;
};
export type EnumBruteReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BruteReportStatus | Prisma.EnumBruteReportStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BruteReportStatus[] | Prisma.ListEnumBruteReportStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BruteReportStatus[] | Prisma.ListEnumBruteReportStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBruteReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.BruteReportStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBruteReportStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBruteReportStatusFilter<$PrismaModel>;
};
export type EnumBossNameFilter<$PrismaModel = never> = {
    equals?: $Enums.BossName | Prisma.EnumBossNameFieldRefInput<$PrismaModel>;
    in?: $Enums.BossName[] | Prisma.ListEnumBossNameFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BossName[] | Prisma.ListEnumBossNameFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBossNameFilter<$PrismaModel> | $Enums.BossName;
};
export type EnumBossNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BossName | Prisma.EnumBossNameFieldRefInput<$PrismaModel>;
    in?: $Enums.BossName[] | Prisma.ListEnumBossNameFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BossName[] | Prisma.ListEnumBossNameFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBossNameWithAggregatesFilter<$PrismaModel> | $Enums.BossName;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBossNameFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBossNameFilter<$PrismaModel>;
};
export type EnumClanWarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClanWarType | Prisma.EnumClanWarTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ClanWarType[] | Prisma.ListEnumClanWarTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClanWarType[] | Prisma.ListEnumClanWarTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClanWarTypeFilter<$PrismaModel> | $Enums.ClanWarType;
};
export type EnumClanWarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClanWarStatus | Prisma.EnumClanWarStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClanWarStatus[] | Prisma.ListEnumClanWarStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClanWarStatus[] | Prisma.ListEnumClanWarStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClanWarStatusFilter<$PrismaModel> | $Enums.ClanWarStatus;
};
export type EnumClanWarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClanWarType | Prisma.EnumClanWarTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ClanWarType[] | Prisma.ListEnumClanWarTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClanWarType[] | Prisma.ListEnumClanWarTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClanWarTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClanWarType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClanWarTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClanWarTypeFilter<$PrismaModel>;
};
export type EnumClanWarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClanWarStatus | Prisma.EnumClanWarStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClanWarStatus[] | Prisma.ListEnumClanWarStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClanWarStatus[] | Prisma.ListEnumClanWarStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClanWarStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClanWarStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClanWarStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClanWarStatusFilter<$PrismaModel>;
};
export type EnumInventoryItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryItemType | Prisma.EnumInventoryItemTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.InventoryItemType[] | Prisma.ListEnumInventoryItemTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InventoryItemType[] | Prisma.ListEnumInventoryItemTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInventoryItemTypeFilter<$PrismaModel> | $Enums.InventoryItemType;
};
export type EnumInventoryItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryItemType | Prisma.EnumInventoryItemTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.InventoryItemType[] | Prisma.ListEnumInventoryItemTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InventoryItemType[] | Prisma.ListEnumInventoryItemTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInventoryItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.InventoryItemType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInventoryItemTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInventoryItemTypeFilter<$PrismaModel>;
};
export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
};
export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | Prisma.EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus;
};
export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
};
export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | Prisma.EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventStatusFilter<$PrismaModel>;
};
export type EnumNotificationSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationSeverity | Prisma.EnumNotificationSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationSeverity[] | Prisma.ListEnumNotificationSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationSeverity[] | Prisma.ListEnumNotificationSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationSeverityFilter<$PrismaModel> | $Enums.NotificationSeverity;
};
export type EnumNotificationSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationSeverity | Prisma.EnumNotificationSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationSeverity[] | Prisma.ListEnumNotificationSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationSeverity[] | Prisma.ListEnumNotificationSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationSeverityWithAggregatesFilter<$PrismaModel> | $Enums.NotificationSeverity;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationSeverityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationSeverityFilter<$PrismaModel>;
};
export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidFilter<$PrismaModel> | string;
};
export type NestedEnumLangFilter<$PrismaModel = never> = {
    equals?: $Enums.Lang | Prisma.EnumLangFieldRefInput<$PrismaModel>;
    in?: $Enums.Lang[] | Prisma.ListEnumLangFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Lang[] | Prisma.ListEnumLangFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLangFilter<$PrismaModel> | $Enums.Lang;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedEnumLangWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Lang | Prisma.EnumLangFieldRefInput<$PrismaModel>;
    in?: $Enums.Lang[] | Prisma.ListEnumLangFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Lang[] | Prisma.ListEnumLangFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLangWithAggregatesFilter<$PrismaModel> | $Enums.Lang;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLangFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLangFilter<$PrismaModel>;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedEnumUserLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLogType | Prisma.EnumUserLogTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.UserLogType[] | Prisma.ListEnumUserLogTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserLogType[] | Prisma.ListEnumUserLogTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserLogTypeFilter<$PrismaModel> | $Enums.UserLogType;
};
export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumUserLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLogType | Prisma.EnumUserLogTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.UserLogType[] | Prisma.ListEnumUserLogTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserLogType[] | Prisma.ListEnumUserLogTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserLogType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserLogTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserLogTypeFilter<$PrismaModel>;
};
export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderFilter<$PrismaModel>;
};
export type NestedEnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | Prisma.EnumLogTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LogType[] | Prisma.ListEnumLogTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LogType[] | Prisma.ListEnumLogTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType;
};
export type NestedEnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | Prisma.EnumLogTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LogType[] | Prisma.ListEnumLogTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LogType[] | Prisma.ListEnumLogTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLogTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLogTypeFilter<$PrismaModel>;
};
export type NestedEnumDestinyChoiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DestinyChoiceType | Prisma.EnumDestinyChoiceTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DestinyChoiceType[] | Prisma.ListEnumDestinyChoiceTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DestinyChoiceType[] | Prisma.ListEnumDestinyChoiceTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDestinyChoiceTypeFilter<$PrismaModel> | $Enums.DestinyChoiceType;
};
export type NestedEnumSkillNameNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillName | Prisma.EnumSkillNameFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SkillName[] | Prisma.ListEnumSkillNameFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SkillName[] | Prisma.ListEnumSkillNameFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSkillNameNullableFilter<$PrismaModel> | $Enums.SkillName | null;
};
export type NestedEnumWeaponNameNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.WeaponName | Prisma.EnumWeaponNameFieldRefInput<$PrismaModel> | null;
    in?: $Enums.WeaponName[] | Prisma.ListEnumWeaponNameFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.WeaponName[] | Prisma.ListEnumWeaponNameFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumWeaponNameNullableFilter<$PrismaModel> | $Enums.WeaponName | null;
};
export type NestedEnumPetNameNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PetName | Prisma.EnumPetNameFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PetName[] | Prisma.ListEnumPetNameFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PetName[] | Prisma.ListEnumPetNameFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPetNameNullableFilter<$PrismaModel> | $Enums.PetName | null;
};
export type NestedEnumBruteStatNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BruteStat | Prisma.EnumBruteStatFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BruteStat[] | Prisma.ListEnumBruteStatFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BruteStat[] | Prisma.ListEnumBruteStatFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBruteStatNullableFilter<$PrismaModel> | $Enums.BruteStat | null;
};
export type NestedEnumDestinyChoiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DestinyChoiceType | Prisma.EnumDestinyChoiceTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DestinyChoiceType[] | Prisma.ListEnumDestinyChoiceTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DestinyChoiceType[] | Prisma.ListEnumDestinyChoiceTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDestinyChoiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DestinyChoiceType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDestinyChoiceTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDestinyChoiceTypeFilter<$PrismaModel>;
};
export type NestedEnumSkillNameNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillName | Prisma.EnumSkillNameFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SkillName[] | Prisma.ListEnumSkillNameFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SkillName[] | Prisma.ListEnumSkillNameFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSkillNameNullableWithAggregatesFilter<$PrismaModel> | $Enums.SkillName | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSkillNameNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSkillNameNullableFilter<$PrismaModel>;
};
export type NestedEnumWeaponNameNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeaponName | Prisma.EnumWeaponNameFieldRefInput<$PrismaModel> | null;
    in?: $Enums.WeaponName[] | Prisma.ListEnumWeaponNameFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.WeaponName[] | Prisma.ListEnumWeaponNameFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumWeaponNameNullableWithAggregatesFilter<$PrismaModel> | $Enums.WeaponName | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWeaponNameNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWeaponNameNullableFilter<$PrismaModel>;
};
export type NestedEnumPetNameNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetName | Prisma.EnumPetNameFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PetName[] | Prisma.ListEnumPetNameFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PetName[] | Prisma.ListEnumPetNameFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPetNameNullableWithAggregatesFilter<$PrismaModel> | $Enums.PetName | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPetNameNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPetNameNullableFilter<$PrismaModel>;
};
export type NestedEnumBruteStatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BruteStat | Prisma.EnumBruteStatFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BruteStat[] | Prisma.ListEnumBruteStatFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BruteStat[] | Prisma.ListEnumBruteStatFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBruteStatNullableWithAggregatesFilter<$PrismaModel> | $Enums.BruteStat | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBruteStatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBruteStatNullableFilter<$PrismaModel>;
};
export type NestedEnumTournamentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentType | Prisma.EnumTournamentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TournamentType[] | Prisma.ListEnumTournamentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TournamentType[] | Prisma.ListEnumTournamentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTournamentTypeFilter<$PrismaModel> | $Enums.TournamentType;
};
export type NestedEnumTournamentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentType | Prisma.EnumTournamentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TournamentType[] | Prisma.ListEnumTournamentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TournamentType[] | Prisma.ListEnumTournamentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTournamentTypeWithAggregatesFilter<$PrismaModel> | $Enums.TournamentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTournamentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTournamentTypeFilter<$PrismaModel>;
};
export type NestedEnumAchievementNameFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementName | Prisma.EnumAchievementNameFieldRefInput<$PrismaModel>;
    in?: $Enums.AchievementName[] | Prisma.ListEnumAchievementNameFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AchievementName[] | Prisma.ListEnumAchievementNameFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAchievementNameFilter<$PrismaModel> | $Enums.AchievementName;
};
export type NestedEnumAchievementNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementName | Prisma.EnumAchievementNameFieldRefInput<$PrismaModel>;
    in?: $Enums.AchievementName[] | Prisma.ListEnumAchievementNameFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AchievementName[] | Prisma.ListEnumAchievementNameFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAchievementNameWithAggregatesFilter<$PrismaModel> | $Enums.AchievementName;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAchievementNameFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAchievementNameFilter<$PrismaModel>;
};
export type NestedEnumBruteReportReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.BruteReportReason | Prisma.EnumBruteReportReasonFieldRefInput<$PrismaModel>;
    in?: $Enums.BruteReportReason[] | Prisma.ListEnumBruteReportReasonFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BruteReportReason[] | Prisma.ListEnumBruteReportReasonFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBruteReportReasonFilter<$PrismaModel> | $Enums.BruteReportReason;
};
export type NestedEnumBruteReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BruteReportStatus | Prisma.EnumBruteReportStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BruteReportStatus[] | Prisma.ListEnumBruteReportStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BruteReportStatus[] | Prisma.ListEnumBruteReportStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBruteReportStatusFilter<$PrismaModel> | $Enums.BruteReportStatus;
};
export type NestedEnumBruteReportReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BruteReportReason | Prisma.EnumBruteReportReasonFieldRefInput<$PrismaModel>;
    in?: $Enums.BruteReportReason[] | Prisma.ListEnumBruteReportReasonFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BruteReportReason[] | Prisma.ListEnumBruteReportReasonFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBruteReportReasonWithAggregatesFilter<$PrismaModel> | $Enums.BruteReportReason;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBruteReportReasonFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBruteReportReasonFilter<$PrismaModel>;
};
export type NestedEnumBruteReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BruteReportStatus | Prisma.EnumBruteReportStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BruteReportStatus[] | Prisma.ListEnumBruteReportStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BruteReportStatus[] | Prisma.ListEnumBruteReportStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBruteReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.BruteReportStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBruteReportStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBruteReportStatusFilter<$PrismaModel>;
};
export type NestedEnumBossNameFilter<$PrismaModel = never> = {
    equals?: $Enums.BossName | Prisma.EnumBossNameFieldRefInput<$PrismaModel>;
    in?: $Enums.BossName[] | Prisma.ListEnumBossNameFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BossName[] | Prisma.ListEnumBossNameFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBossNameFilter<$PrismaModel> | $Enums.BossName;
};
export type NestedEnumBossNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BossName | Prisma.EnumBossNameFieldRefInput<$PrismaModel>;
    in?: $Enums.BossName[] | Prisma.ListEnumBossNameFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BossName[] | Prisma.ListEnumBossNameFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBossNameWithAggregatesFilter<$PrismaModel> | $Enums.BossName;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBossNameFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBossNameFilter<$PrismaModel>;
};
export type NestedEnumClanWarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClanWarType | Prisma.EnumClanWarTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ClanWarType[] | Prisma.ListEnumClanWarTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClanWarType[] | Prisma.ListEnumClanWarTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClanWarTypeFilter<$PrismaModel> | $Enums.ClanWarType;
};
export type NestedEnumClanWarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClanWarStatus | Prisma.EnumClanWarStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClanWarStatus[] | Prisma.ListEnumClanWarStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClanWarStatus[] | Prisma.ListEnumClanWarStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClanWarStatusFilter<$PrismaModel> | $Enums.ClanWarStatus;
};
export type NestedEnumClanWarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClanWarType | Prisma.EnumClanWarTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ClanWarType[] | Prisma.ListEnumClanWarTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClanWarType[] | Prisma.ListEnumClanWarTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClanWarTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClanWarType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClanWarTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClanWarTypeFilter<$PrismaModel>;
};
export type NestedEnumClanWarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClanWarStatus | Prisma.EnumClanWarStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClanWarStatus[] | Prisma.ListEnumClanWarStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClanWarStatus[] | Prisma.ListEnumClanWarStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClanWarStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClanWarStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClanWarStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClanWarStatusFilter<$PrismaModel>;
};
export type NestedEnumInventoryItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryItemType | Prisma.EnumInventoryItemTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.InventoryItemType[] | Prisma.ListEnumInventoryItemTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InventoryItemType[] | Prisma.ListEnumInventoryItemTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInventoryItemTypeFilter<$PrismaModel> | $Enums.InventoryItemType;
};
export type NestedEnumInventoryItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryItemType | Prisma.EnumInventoryItemTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.InventoryItemType[] | Prisma.ListEnumInventoryItemTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InventoryItemType[] | Prisma.ListEnumInventoryItemTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInventoryItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.InventoryItemType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInventoryItemTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInventoryItemTypeFilter<$PrismaModel>;
};
export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
};
export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | Prisma.EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus;
};
export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
};
export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | Prisma.EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventStatusFilter<$PrismaModel>;
};
export type NestedEnumNotificationSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationSeverity | Prisma.EnumNotificationSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationSeverity[] | Prisma.ListEnumNotificationSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationSeverity[] | Prisma.ListEnumNotificationSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationSeverityFilter<$PrismaModel> | $Enums.NotificationSeverity;
};
export type NestedEnumNotificationSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationSeverity | Prisma.EnumNotificationSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationSeverity[] | Prisma.ListEnumNotificationSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationSeverity[] | Prisma.ListEnumNotificationSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationSeverityWithAggregatesFilter<$PrismaModel> | $Enums.NotificationSeverity;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationSeverityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationSeverityFilter<$PrismaModel>;
};
