-- AlterTable
ALTER TABLE "_BruteReportToUser" ADD CONSTRAINT "_BruteReportToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_BruteReportToUser_AB_unique";

-- AlterTable
ALTER TABLE "_BruteToTitle" ADD CONSTRAINT "_BruteToTitle_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_BruteToTitle_AB_unique";

-- AlterTable
ALTER TABLE "_BruteToTournament" ADD CONSTRAINT "_BruteToTournament_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_BruteToTournament_AB_unique";

-- AlterTable
ALTER TABLE "_ClanWarAttackerFighters" ADD CONSTRAINT "_ClanWarAttackerFighters_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ClanWarAttackerFighters_AB_unique";

-- AlterTable
ALTER TABLE "_ClanWarDefenderFighters" ADD CONSTRAINT "_ClanWarDefenderFighters_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ClanWarDefenderFighters_AB_unique";

-- AlterTable
ALTER TABLE "_FavoriteFights" ADD CONSTRAINT "_FavoriteFights_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_FavoriteFights_AB_unique";

-- AlterTable
ALTER TABLE "_Followers" ADD CONSTRAINT "_Followers_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_Followers_AB_unique";

-- AlterTable
ALTER TABLE "_Opponents" ADD CONSTRAINT "_Opponents_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_Opponents_AB_unique";
