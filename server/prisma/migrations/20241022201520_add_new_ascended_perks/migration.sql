-- AlterTable
ALTER TABLE "Brute" ADD COLUMN     "ascendedPets" "PetName"[] DEFAULT ARRAY[]::"PetName"[],
ADD COLUMN     "ascendedWeapons" "WeaponName"[] DEFAULT ARRAY[]::"WeaponName"[];
