# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.16.0](https://github.com/Zenoo/labrute/compare/v1.15.3...v1.16.0) (2022-11-30)


### Refactoring

* Added id and deleted columns to brutes. Fixes [#91](https://github.com/Zenoo/labrute/issues/91). Fixes [#90](https://github.com/Zenoo/labrute/issues/90) ([da0f52d](https://github.com/Zenoo/labrute/commit/da0f52dc4a9036ca055f23e579917df873285808))


### Bug fix

* Male brute iddle animation with skin color. [#70](https://github.com/Zenoo/labrute/issues/70) ([46bdd0e](https://github.com/Zenoo/labrute/commit/46bdd0e5f1bf1ec06e8fb691b254ac44aadf0d5b))


### Feature

* Added a daily fight limit. Fixes [#94](https://github.com/Zenoo/labrute/issues/94) ([51bc8a4](https://github.com/Zenoo/labrute/commit/51bc8a4c508c7949f6ad0ff95467e6bd6683e425))
* Generate spritesheet on brute creation. [#85](https://github.com/Zenoo/labrute/issues/85) ([18a03aa](https://github.com/Zenoo/labrute/commit/18a03aa580b83d904babd9edb4cca4b72222f124))

### [1.15.3](https://github.com/Zenoo/labrute/compare/v1.15.2...v1.15.3) (2022-08-30)


### Progress

* SVGs processed server side first PoC. [#85](https://github.com/Zenoo/labrute/issues/85) ([c92176d](https://github.com/Zenoo/labrute/commit/c92176d366c24b50e4da6eaa07d63d416b895bd4))


### Bug fix

* Reversal not triggering on combos ([53655c2](https://github.com/Zenoo/labrute/commit/53655c25d4275e826e34a90adbd34bfdbe8c23b0))

### [1.15.2](https://github.com/Zenoo/labrute/compare/v1.15.1...v1.15.2) (2022-08-25)


### Bug fix

* Heal texts are now positive ([5d311ce](https://github.com/Zenoo/labrute/commit/5d311ce2b7c188faf2d33fe2bae0468f1f2b4022))

### [1.15.1](https://github.com/Zenoo/labrute/compare/v1.15.0...v1.15.1) (2022-08-25)


### Bug fix

* Don't throw away a weapon if its type is thrown ([08532b1](https://github.com/Zenoo/labrute/commit/08532b1298f91aad3ebf9b6ad8d40c24f2ccaddc))
* Hide weapon reach info if 0 ([722ffa5](https://github.com/Zenoo/labrute/commit/722ffa58390dc952f1bc862a8804058e05c2bef1))

## [1.15.0](https://github.com/Zenoo/labrute/compare/v1.14.4...v1.15.0) (2022-08-25)


### Bug fix

* Display heal text earlier ([6a61c8f](https://github.com/Zenoo/labrute/commit/6a61c8f3c45aebfe3c8081c6cfd0bb4d106cc2c6))
* Fighters stuck after an attack animation ([8c46c7a](https://github.com/Zenoo/labrute/commit/8c46c7a0e4950c8c5e04042fc7c44a108cf65f8a))
* Fighters stuck in the hit animation ([1537844](https://github.com/Zenoo/labrute/commit/1537844deaaeaba0de8afa86a5e203d4fa672b0e))
* Missing bear evade sprite ([4c5a0f9](https://github.com/Zenoo/labrute/commit/4c5a0f9566faf436b7c0eadacc9a9e4dbbc82a1e))
* Missing morning star tooltip illustration ([0ffcfe9](https://github.com/Zenoo/labrute/commit/0ffcfe9e97959690f22b0f1035b23cefdd233fef))
* Only add a resist step if the damage was reduced ([448012c](https://github.com/Zenoo/labrute/commit/448012ca7b9b360b3e5140c2c629e363e3da32b8))
* Weapons were not being removed from the UI after a trash ([164360b](https://github.com/Zenoo/labrute/commit/164360b0776274f27d9e9283c70621f2dbcac81e))


### Feature

* Added bomb step ([83fbcb6](https://github.com/Zenoo/labrute/commit/83fbcb66addfcfe4e9e5ddbc634b34a9e9284739))
* Added heal amount fading text ([caab3d4](https://github.com/Zenoo/labrute/commit/caab3d472d15e6a41896e9703f7b95f57c8d8b39))
* Added monk iddle animation ([8e9ca51](https://github.com/Zenoo/labrute/commit/8e9ca51aa05a332ea7b019b0dbbe7f5b713b9655))
* Added outline on resist. ([228f249](https://github.com/Zenoo/labrute/commit/228f2490fcfa1c05abe1d8698e5e563a1cb4f801))
* Added poison GFX ([7d13116](https://github.com/Zenoo/labrute/commit/7d13116bebee36cfcf3cc81f4ad474eb19bdde60))
* Import ingame weapons ([88e3fef](https://github.com/Zenoo/labrute/commit/88e3fefeac7800c6142172a22e9d25957e8b6d29))

### [1.14.4](https://github.com/Zenoo/labrute/compare/v1.14.3...v1.14.4) (2022-08-23)


### Bug fix

* Load custom font on mobile + fix broken mobile fight layout. Fixes [#86](https://github.com/Zenoo/labrute/issues/86) ([8d68fd8](https://github.com/Zenoo/labrute/commit/8d68fd8bda29995fff81ea7508233689495a7fcd))

### [1.14.3](https://github.com/Zenoo/labrute/compare/v1.14.2...v1.14.3) (2022-08-23)


### Bug fix

* Pets shouldn't be able to block ([c8d65e1](https://github.com/Zenoo/labrute/commit/c8d65e1c2a14441de266e8cbbfa0c04827564e56))

### [1.14.2](https://github.com/Zenoo/labrute/compare/v1.14.1...v1.14.2) (2022-08-23)


### Bug fix

* Added fight logs back ([3cdcfb0](https://github.com/Zenoo/labrute/commit/3cdcfb091b2782a8466ed9fb0c5780a7419e85fc))

### [1.14.1](https://github.com/Zenoo/labrute/compare/v1.14.0...v1.14.1) (2022-08-22)


### Bug fix

* Fight mobile display ([bbb4b35](https://github.com/Zenoo/labrute/commit/bbb4b35227bb86f70254ae3f1197aa36efba4136))

## [1.14.0](https://github.com/Zenoo/labrute/compare/v1.13.0...v1.14.0) (2022-08-22)


### Bug fix

* Animations structure. [#70](https://github.com/Zenoo/labrute/issues/70) ([8e6f408](https://github.com/Zenoo/labrute/commit/8e6f408d8c9807ecfa3bd623c4e87af119161c7c))


### Feature

* Added damage animation. [#70](https://github.com/Zenoo/labrute/issues/70) ([418b4e4](https://github.com/Zenoo/labrute/commit/418b4e4b17daa42414fe0a818b348ecb407cc350))
* All previous steps implemented. [#78](https://github.com/Zenoo/labrute/issues/78) ([3ccecff](https://github.com/Zenoo/labrute/commit/3ccecffee287ca0286b08fd0d3d4f17e5514c7ce))
* Equip animation. [#78](https://github.com/Zenoo/labrute/issues/78) ([26c3b9e](https://github.com/Zenoo/labrute/commit/26c3b9e749e4f0fc7c44b445d4dcecd3b374424d))
* Evade animation [#78](https://github.com/Zenoo/labrute/issues/78) ([b4a4334](https://github.com/Zenoo/labrute/commit/b4a43345d3debcdff478119fc7cdd660c20dcf0f))
* Fight names and HP bars. [#78](https://github.com/Zenoo/labrute/issues/78) ([dc3a4b3](https://github.com/Zenoo/labrute/commit/dc3a4b3df2b3bda9816e301b84c9a32e6158c26e))
* Fight weapon list [#78](https://github.com/Zenoo/labrute/issues/78) ([9aabe18](https://github.com/Zenoo/labrute/commit/9aabe18c7d83876d94cb5da7b294bc162a9f1d11))
* First working fight. [#70](https://github.com/Zenoo/labrute/issues/70) [#78](https://github.com/Zenoo/labrute/issues/78) ([544bb8a](https://github.com/Zenoo/labrute/commit/544bb8a0098c775ea8590210500731c8350566fc))
* Imported all animations. [#70](https://github.com/Zenoo/labrute/issues/70) [#78](https://github.com/Zenoo/labrute/issues/78) ([ba608c3](https://github.com/Zenoo/labrute/commit/ba608c3ac53d03af5ed793bc27c124504d45d835))
* Sabotage step. [#78](https://github.com/Zenoo/labrute/issues/78) ([e27fbd7](https://github.com/Zenoo/labrute/commit/e27fbd770a162c2fc201a76a0f156e181a8fbecd))
* Skill activation animation. [#78](https://github.com/Zenoo/labrute/issues/78) ([28f72bc](https://github.com/Zenoo/labrute/commit/28f72bc6ceb6cca55942694b47ef69198697e946))
* Trap animation [#78](https://github.com/Zenoo/labrute/issues/78) ([76233e4](https://github.com/Zenoo/labrute/commit/76233e435024b2701f748897149f24ecb91344f0))

## [1.13.0](https://github.com/Zenoo/labrute/compare/v1.12.0...v1.13.0) (2022-08-17)


### Bug fix

* Fight brute portraits stagger in the correct direction ([c111f31](https://github.com/Zenoo/labrute/commit/c111f31b64d40fae595ad979e5f3757b08a4ece6))


### Refactoring

* Exported the animation keyframes to a global constant. ([5a0c3fe](https://github.com/Zenoo/labrute/commit/5a0c3fee147cbffa517a62d8535b5c082a014143))


### Feature

* Added first male iddle animation ([f594452](https://github.com/Zenoo/labrute/commit/f594452b6afbefb3c134af4f09af415d579b7d23))
* Imported and aligned male brute animations. [#70](https://github.com/Zenoo/labrute/issues/70) ([36dafea](https://github.com/Zenoo/labrute/commit/36dafea234f1da67db99b483e77aa723ef475827))
* Male brute animations. [#70](https://github.com/Zenoo/labrute/issues/70) ([c7c4577](https://github.com/Zenoo/labrute/commit/c7c457776f9c9ed9a3e1239c9ba1f3bcc3393541))

## [1.12.0](https://github.com/Zenoo/labrute/compare/v1.11.3...v1.12.0) (2022-08-17)


### Refactoring

* Adjusted pet positionsin fight to account for asset offsets. [#70](https://github.com/Zenoo/labrute/issues/70) ([66f1a9f](https://github.com/Zenoo/labrute/commit/66f1a9f4a69a85abae63ab2143487bdcae8db1d2))
* Aligned bear animations together. [#70](https://github.com/Zenoo/labrute/issues/70) ([3c96ecf](https://github.com/Zenoo/labrute/commit/3c96ecf693cb46c48b54a191ac452b6d0db9734c))
* Aligned dog animations together. [#70](https://github.com/Zenoo/labrute/issues/70) ([227c8bd](https://github.com/Zenoo/labrute/commit/227c8bd65a3e7dd6d931de9a59000df043453089))


### Feature

* Added stagger to fight header portraits on hit. Fixes [#82](https://github.com/Zenoo/labrute/issues/82) ([1d3ff33](https://github.com/Zenoo/labrute/commit/1d3ff33081a724cd9eac732e9a647e613a8ab923))
* Imported panther animations. [#70](https://github.com/Zenoo/labrute/issues/70) ([4b38e4f](https://github.com/Zenoo/labrute/commit/4b38e4fb8ca9b5e36e3854a136441c2c883582a1))


### Bug fix

* Added jump to bear evade animation. [#70](https://github.com/Zenoo/labrute/issues/70) ([200470c](https://github.com/Zenoo/labrute/commit/200470c42176a7c3652b0733e930352afb6029e3))
* Added jump to dog evade animation. [#70](https://github.com/Zenoo/labrute/issues/70) ([f68ff9c](https://github.com/Zenoo/labrute/commit/f68ff9c31cfd1508114e25e0009ead4db1df00de))
* Added stagger animations. [#70](https://github.com/Zenoo/labrute/issues/70) ([d6b9a7d](https://github.com/Zenoo/labrute/commit/d6b9a7d0a6ac519d4f9f1fd79af4e88865f40eb2))
* Adjusted fighters positions depending on their width. ([e30cd5d](https://github.com/Zenoo/labrute/commit/e30cd5daf4210f598ab3ab7f2ccc144e681547cd))
* Missing noodle bowl illustration in tooltip ([7a8cd46](https://github.com/Zenoo/labrute/commit/7a8cd46dcc9e3d7d22acace1b59dba6834493dc0))
* Move level up logic to the back to avoid client abuse ([63abbcb](https://github.com/Zenoo/labrute/commit/63abbcbbcfc1ad2d9fef6f597d9b07d5b4db94f3))

### [1.11.3](https://github.com/Zenoo/labrute/compare/v1.11.2...v1.11.3) (2022-08-17)


### Bug fix

* Ballet Shoes wasn't triggering. Fixes [#83](https://github.com/Zenoo/labrute/issues/83) ([190af68](https://github.com/Zenoo/labrute/commit/190af68e7eb1ac7f7bb1ba44bc423b1a4bdbd157))
* Monk initiative was higher, not lower ([769fa38](https://github.com/Zenoo/labrute/commit/769fa3807e12a327e73b3716e35e844f98ae45c8))
* Remove sacrifice points cap ([fc00cbe](https://github.com/Zenoo/labrute/commit/fc00cbe1393e826cfed54e125806fe9df602d8c9))

### [1.11.2](https://github.com/Zenoo/labrute/compare/v1.11.1...v1.11.2) (2022-08-17)


### Bug fix

* Other hit actions weren't registered on the HP bar ([dfd6460](https://github.com/Zenoo/labrute/commit/dfd646068fc93be8dc41eb17164b5e25dc74c578))

### [1.11.1](https://github.com/Zenoo/labrute/compare/v1.11.0...v1.11.1) (2022-08-16)


### Bug fix

* HP bar going back up when value < 1 ([2e923ce](https://github.com/Zenoo/labrute/commit/2e923ce6210c02b8ce1dae95d72384d95965b4c4))

## [1.11.0](https://github.com/Zenoo/labrute/compare/v1.10.3...v1.11.0) (2022-08-16)


### Feature

* Added dog animations. [#70](https://github.com/Zenoo/labrute/issues/70) ([a626425](https://github.com/Zenoo/labrute/commit/a6264252be18085da44f7602d9a115b72b7c4e9c))

### [1.10.3](https://github.com/Zenoo/labrute/compare/v1.10.2...v1.10.3) (2022-08-16)


### Bug fix

* Wrong weapon odds in weapon tooltip ([2b894d6](https://github.com/Zenoo/labrute/commit/2b894d6ebe89a8f9b33b4b4547e70bea3637e58a))

### [1.10.2](https://github.com/Zenoo/labrute/compare/v1.10.1...v1.10.2) (2022-08-16)


### Bug fix

* Fight positions check crash ([8cca4ff](https://github.com/Zenoo/labrute/commit/8cca4ffedf36e3744d95d35d64b0f48a41a4a411))

### [1.10.1](https://github.com/Zenoo/labrute/compare/v1.10.0...v1.10.1) (2022-08-16)


### Bug fix

* Backup brutes not in sync back to front ([ebfbcf8](https://github.com/Zenoo/labrute/commit/ebfbcf8a016c728f82f5a95342eea6f35b83a8f0))
* Implemented all actions that changed the HP bar ([6c8529f](https://github.com/Zenoo/labrute/commit/6c8529f3dfa629e78928dfb48260b2d6e792eca7))
* Remove weapon icon in level up ([3b7928f](https://github.com/Zenoo/labrute/commit/3b7928f9e4bd32d93ed0e354266e4d35fbad8ee4))
* Tragic potion never triggered ([efb80ac](https://github.com/Zenoo/labrute/commit/efb80acd203ba5b21ee728adc11adab6b93ded84))

## [1.10.0](https://github.com/Zenoo/labrute/compare/v1.9.3...v1.10.0) (2022-08-16)


### Feature

* Add weapons to the fight header. Fixes [#81](https://github.com/Zenoo/labrute/issues/81) ([600e34e](https://github.com/Zenoo/labrute/commit/600e34e01b5aca81d902d348a1b2fd00cfb134a6))

### [1.9.3](https://github.com/Zenoo/labrute/compare/v1.9.2...v1.9.3) (2022-08-16)


### Bug fix

* Display weapon odds as % ([f711ef7](https://github.com/Zenoo/labrute/commit/f711ef766c747973e7a26fd3678fe788c8d7fa56))

### [1.9.2](https://github.com/Zenoo/labrute/compare/v1.9.1...v1.9.2) (2022-08-16)


### Bug fix

* Missing weapon tempo format in tooltip ([971faa1](https://github.com/Zenoo/labrute/commit/971faa11d902b310a80b38e6b5f9b49639eb20c3))

### [1.9.1](https://github.com/Zenoo/labrute/compare/v1.9.0...v1.9.1) (2022-08-16)


### Bug fix

* Display weapon stats as % and hide useless ones ([5872df5](https://github.com/Zenoo/labrute/commit/5872df5a07a198fb1740717e0addc89b78548114))
* Remove weapon tooltip flicker ([b007131](https://github.com/Zenoo/labrute/commit/b007131ddd5fa8a2ad401d0401a0ad598d94d290))
* Translated weapon types in weapon tooltip ([7e8b1c0](https://github.com/Zenoo/labrute/commit/7e8b1c076c641e0e7be31a2f1c2226b701393b2c))

## [1.9.0](https://github.com/Zenoo/labrute/compare/v1.8.0...v1.9.0) (2022-08-16)


### Feature

* Tooltip on weapons. Fixes [#51](https://github.com/Zenoo/labrute/issues/51) ([357ffe8](https://github.com/Zenoo/labrute/commit/357ffe88178e7b26d5e8e96904564fae7c88d624))
* Weapon tooltip on level up. Fixes [#52](https://github.com/Zenoo/labrute/issues/52) ([d7a79bf](https://github.com/Zenoo/labrute/commit/d7a79bf78f275c5e0933aed21695604c859b4274))


### Refactoring

* Changed animation from translates to absolutes. ([d54b8ad](https://github.com/Zenoo/labrute/commit/d54b8ad2fbe9029ccc447f9e7f4374c6e35f0f27))


### Bug fix

* Allow cell access to visitors ([bda745a](https://github.com/Zenoo/labrute/commit/bda745a5e7232921faefe13dd57e9c1dde0a3913))
* Disable combos on counters ([5f23c9b](https://github.com/Zenoo/labrute/commit/5f23c9bbe2f1839c0cc60170c5bc978b83b60e47))
* Hide sacrifice button when not owner ([c171a7e](https://github.com/Zenoo/labrute/commit/c171a7e47f9ce2fbdd3e6b1c65c46ec3f9e4431c))

## [1.8.0](https://github.com/Zenoo/labrute/compare/v1.7.0...v1.8.0) (2022-08-16)


### Feature

* Added fight headers. Fixes [#79](https://github.com/Zenoo/labrute/issues/79) ([688061f](https://github.com/Zenoo/labrute/commit/688061f9905b50500af5c6dcaf5889ecf20ad70d))

## [1.7.0](https://github.com/Zenoo/labrute/compare/v1.6.3...v1.7.0) (2022-08-15)


### Bug fix

* Updated account menu color. Fixes [#48](https://github.com/Zenoo/labrute/issues/48) ([38d1c9f](https://github.com/Zenoo/labrute/commit/38d1c9f2bd209235f757964b3b7f0d4e166e42b6))


### Feature

* Added brute level and XP in the arena. Fixes [#62](https://github.com/Zenoo/labrute/issues/62) ([398417c](https://github.com/Zenoo/labrute/commit/398417cf80bc35ef56d65986e977d26d085b0c10))
* Added new colors to the skills heatmap. Fixes [#56](https://github.com/Zenoo/labrute/issues/56) ([d75c79e](https://github.com/Zenoo/labrute/commit/d75c79eac38e57bc448c74a07e772efed05c3470))
* Brute sacrificing system. [#59](https://github.com/Zenoo/labrute/issues/59) ([46e3fba](https://github.com/Zenoo/labrute/commit/46e3fba31b9e5b94fd2b7e18e35d276d1b9c1a5b))

### [1.6.3](https://github.com/Zenoo/labrute/compare/v1.6.2...v1.6.3) (2022-08-14)


### Bug fix

* Build error ([b1a87d0](https://github.com/Zenoo/labrute/commit/b1a87d073a5f594d9f1bc0ff8bfbed5372a07b86))

### [1.6.2](https://github.com/Zenoo/labrute/compare/v1.6.1...v1.6.2) (2022-08-14)


### Bug fix

* Disable auth on fight view ([164483a](https://github.com/Zenoo/labrute/commit/164483a4ccf8dc2f7671b6a2e89b50fd564a9f45))
* Don't iddle if dead ([5a5b3a7](https://github.com/Zenoo/labrute/commit/5a5b3a717e4af7342acc93c4c3d16e07421f8184))


### Refactoring

* Added fight mobile view. Fixes [#60](https://github.com/Zenoo/labrute/issues/60) ([fb8fa8c](https://github.com/Zenoo/labrute/commit/fb8fa8cf01a9812af21491c0f40d30ebf94064cc))
* Added responsive versus view. Fixes [#42](https://github.com/Zenoo/labrute/issues/42) ([7342919](https://github.com/Zenoo/labrute/commit/73429194f322f31711305a358e6b7df837df53b9))

### [1.6.1](https://github.com/Zenoo/labrute/compare/v1.6.0...v1.6.1) (2022-08-14)


### Bug fix

* Bear animations imported + animation testing tool. [#70](https://github.com/Zenoo/labrute/issues/70) ([a62abe4](https://github.com/Zenoo/labrute/commit/a62abe467e0ce1f5487a021e89808fb5d39f5688))
* Bear death animation. [#70](https://github.com/Zenoo/labrute/issues/70) ([5bf438a](https://github.com/Zenoo/labrute/commit/5bf438ad4f02540d3e33a138ca09f072a1a7a85d))

## [1.6.0](https://github.com/Zenoo/labrute/compare/v1.5.4...v1.6.0) (2022-08-14)


### Feature

* Animation import script ([16b8f1b](https://github.com/Zenoo/labrute/commit/16b8f1be3b6a08c04e092eb6ec7a1ed9541e1e0c))


### Bug fix

* Bear arrive animation. [#70](https://github.com/Zenoo/labrute/issues/70) ([df1ec80](https://github.com/Zenoo/labrute/commit/df1ec809171274b95ea1135c09bb364560ef7c79))
* Bear arrive/iddle/run/attack/hit animations complete. [#70](https://github.com/Zenoo/labrute/issues/70) ([84d2a5b](https://github.com/Zenoo/labrute/commit/84d2a5ba1ff32e4809a6ffbe7e871c42bec1ff43))
* Pets can't block ([2102f5b](https://github.com/Zenoo/labrute/commit/2102f5b907f8a15fb356a85c81eacd9fcfcc92cd))
* Updated bear iddle animation. [#70](https://github.com/Zenoo/labrute/issues/70) ([43749fc](https://github.com/Zenoo/labrute/commit/43749fcf7c7db13faeee7a8f36b710018138b574))

### [1.5.4](https://github.com/Zenoo/labrute/compare/v1.5.3...v1.5.4) (2022-08-13)


### Bug fix

* Allow for +2 XP for a 2 level difference instead of 1. ([932fe0b](https://github.com/Zenoo/labrute/commit/932fe0b9ad00a41d0865f0c9cb04cad889d21f70))

### [1.5.3](https://github.com/Zenoo/labrute/compare/v1.5.2...v1.5.3) (2022-08-13)


### Bug fix

* XP won on loss was too much ([08b9505](https://github.com/Zenoo/labrute/commit/08b950569eb0fd5de77770bbc9dde370a81a0a13))

### [1.5.2](https://github.com/Zenoo/labrute/compare/v1.5.1...v1.5.2) (2022-08-13)


### Bug fix

* Create brute stats server side to avoid client tempering. Fixes [#73](https://github.com/Zenoo/labrute/issues/73) ([7de0fb4](https://github.com/Zenoo/labrute/commit/7de0fb4193cb3d64421c540c61949b3b4312df03))
* Prevent XP gain for brutes less than 10 level below you. Fixes [#74](https://github.com/Zenoo/labrute/issues/74) ([b0a2a11](https://github.com/Zenoo/labrute/commit/b0a2a1167ee9f4227385dbab1df34c1eedafa94a))

### [1.5.1](https://github.com/Zenoo/labrute/compare/v1.5.0...v1.5.1) (2022-08-13)


### Bug fix

* Added bear attack animation. [#70](https://github.com/Zenoo/labrute/issues/70) ([43f986b](https://github.com/Zenoo/labrute/commit/43f986bbebcd88593c76f3eb68932de8a7b3b3d7))

## [1.5.0](https://github.com/Zenoo/labrute/compare/v1.4.1...v1.5.0) (2022-08-13)


### Feature

* First animation prototype ([ed937b1](https://github.com/Zenoo/labrute/commit/ed937b1fa76091f880fe6f8ffae70fdb1be0bf95))
* Implement bear iddle animation in the fight. [#70](https://github.com/Zenoo/labrute/issues/70) ([5c5ec38](https://github.com/Zenoo/labrute/commit/5c5ec3807e8343986fc870e4613d0e421b6d7c50))

### [1.4.1](https://github.com/Zenoo/labrute/compare/v1.4.0...v1.4.1) (2022-08-12)


### Bug fix

* Wrong poison translations ([e5a45a4](https://github.com/Zenoo/labrute/commit/e5a45a495bef502aa32c4ccde52ea5bba6f69289))

## [1.4.0](https://github.com/Zenoo/labrute/compare/v1.3.0...v1.4.0) (2022-08-12)


### Feature

* Position animated for 4 fight steps: `arrive`, `leave`, `moveTo` and `moveBack`. [#25](https://github.com/Zenoo/labrute/issues/25) ([d3ec810](https://github.com/Zenoo/labrute/commit/d3ec81076136636f711a453b4939e9b17af76d5b))
* Upgrade to React 18 ([54fca39](https://github.com/Zenoo/labrute/commit/54fca39d66e251594b907937e117d058b4af8730))

## [1.3.0](https://github.com/Zenoo/labrute/compare/v1.2.2...v1.3.0) (2022-08-12)


### Bug fix

* Passive skills for damage computing ([bf134c8](https://github.com/Zenoo/labrute/commit/bf134c827e19cb1deacf33a54563fc7da86b5f9a))
* Passive skills were not considered in fights. Fixes [#65](https://github.com/Zenoo/labrute/issues/65) ([b6dbc5b](https://github.com/Zenoo/labrute/commit/b6dbc5bceb838023d2cacf9133ef31b6ec47c8ce))


### Feature

* Brutes can low level up or fight at will ([5d1cb4e](https://github.com/Zenoo/labrute/commit/5d1cb4e87d7bd3c833262d1277abbf89dafbc8b5))

### [1.2.2](https://github.com/Zenoo/labrute/compare/v1.2.1...v1.2.2) (2022-08-11)


### Bug fix

* Survival skill triggering too early ([070b7fb](https://github.com/Zenoo/labrute/commit/070b7fbaffcb2f0072a1f82411953fd93ef70f52))

### [1.2.1](https://github.com/Zenoo/labrute/compare/v1.2.0...v1.2.1) (2022-08-11)


### Bug fix

* Clarify counter/reversal ([f21341d](https://github.com/Zenoo/labrute/commit/f21341db1415c44064cd6cd58cc3b9e4ada3f1a8))

## [1.2.0](https://github.com/Zenoo/labrute/compare/v1.1.0...v1.2.0) (2022-08-11)


### Feature

* Gain +2 XP for brutes > lvl - 2 ([88e28f3](https://github.com/Zenoo/labrute/commit/88e28f30f3305a5f3f126231dd7d2d01d4129b4d))

## [1.1.0](https://github.com/Zenoo/labrute/compare/v1.0.8...v1.1.0) (2022-08-11)


### Feature

* `chef` skill implemented ([f9ad4d5](https://github.com/Zenoo/labrute/commit/f9ad4d5f93489852a1d561faad9df57f71e5327d))
* `monk` skill implemented ([c8a9706](https://github.com/Zenoo/labrute/commit/c8a9706a2adf8d797c189849ed9dc560abcdd113))

### [1.0.8](https://github.com/Zenoo/labrute/compare/v1.0.7...v1.0.8) (2022-08-11)


### Bug fix

* Limit displayed XP to max XP ([3115d7b](https://github.com/Zenoo/labrute/commit/3115d7bee45c2f5dc1fabfb6a1544291111d9826))

### [1.0.7](https://github.com/Zenoo/labrute/compare/v1.0.6...v1.0.7) (2022-08-11)


### Bug fix

* Net logic ([e5d8fb0](https://github.com/Zenoo/labrute/commit/e5d8fb04774e1d4f1c0aec6a7eea868223e4b79b))

### [1.0.6](https://github.com/Zenoo/labrute/compare/v1.0.5...v1.0.6) (2022-08-11)


### Bug fix

* Backups were loosing way too few initiative every turn. ([8f6bcda](https://github.com/Zenoo/labrute/commit/8f6bcda11152cbc89d84ec8a2d867670ad542a79))
* Counter rate too high ([3f9b346](https://github.com/Zenoo/labrute/commit/3f9b34603e7ce07e7701a85f63278de3bfb70ed6))
* Counter rate too high ([3fe28b2](https://github.com/Zenoo/labrute/commit/3fe28b2d4966a4e1181e8417ac49e8c678e092fd))
* Evade rate too high ([a1bec99](https://github.com/Zenoo/labrute/commit/a1bec996e1ecf60a91cf488c1fcf96b71d7cfa97))
* Wrong counter check ([5156602](https://github.com/Zenoo/labrute/commit/5156602d899ac724bdfdacabbd43d4aa1a0557f7))

### [1.0.5](https://github.com/Zenoo/labrute/compare/v1.0.4...v1.0.5) (2022-08-10)


### Bug fix

* Can't break shield when evaded ([248071f](https://github.com/Zenoo/labrute/commit/248071fdc98082cea13854a5179e14fef746db21))

### [1.0.4](https://github.com/Zenoo/labrute/compare/v1.0.3...v1.0.4) (2022-08-10)


### Bug fix

* `backup` skill now works as intended. ([f538b3c](https://github.com/Zenoo/labrute/commit/f538b3c03eb861a602f4e1b8ba29d966087b8ed0))

### [1.0.3](https://github.com/Zenoo/labrute/compare/v1.0.2...v1.0.3) (2022-08-10)


### Bug fix

* Wrong fight from Fights.get ([4441f4b](https://github.com/Zenoo/labrute/commit/4441f4b699ab8cca29734860340615de3b75997a))

### [1.0.2](https://github.com/Zenoo/labrute/compare/v1.0.1...v1.0.2) (2022-08-10)


### Bug fix

* Redirect to cell if too much xp for a fight ([f55bd50](https://github.com/Zenoo/labrute/commit/f55bd50d467f05c0d5eed19c25ec6f22bee3b06f))
* Restrict versus view to brute owner. ([7435835](https://github.com/Zenoo/labrute/commit/743583555a1e3eef48e630eca84b48c525298b83))

### [1.0.1](https://github.com/Zenoo/labrute/compare/v1.0.0...v1.0.1) (2022-08-10)


### Bug fix

* No XP on loss + Start at level 1 with 0 XP. Fixes [#61](https://github.com/Zenoo/labrute/issues/61) ([a294a42](https://github.com/Zenoo/labrute/commit/a294a423200d00cdba07dc3bcad7b60830dd22d3))

## [1.0.0](https://github.com/Zenoo/labrute/compare/v0.5.1...v1.0.0) (2022-08-10)


### ⚠ BREAKING CHANGES

* Fighting system done. Fixes #24

### Bug fix

* Typo ([2bc1a8e](https://github.com/Zenoo/labrute/commit/2bc1a8e270fad0eb418892074b920b5a6333bf75))
* Typo ([ba59576](https://github.com/Zenoo/labrute/commit/ba595764ef88e04e850d4513e086dd0d3b294a8d))


### Progress

* Draw weapon, counter attack, melee attack. [#24](https://github.com/Zenoo/labrute/issues/24) ([afc8118](https://github.com/Zenoo/labrute/commit/afc8118ebe1141c5064b1f2d6851b1237482026f))
* Fight initial stats + sabotage. [#24](https://github.com/Zenoo/labrute/issues/24) ([2771833](https://github.com/Zenoo/labrute/commit/27718332c3be616dbb1a88464ceb3732b99c0ccf))
* Fight loop (supers) ([05facc0](https://github.com/Zenoo/labrute/commit/05facc0e9f270ac76a246ed3ecd5e4f5a6d11a2a))
* flashFlood super. [#24](https://github.com/Zenoo/labrute/issues/24) ([f64c92f](https://github.com/Zenoo/labrute/commit/f64c92fc99b5782ecc877156e130ca12f07198f0))
* hammer/cryOfTheDamned supers. [#24](https://github.com/Zenoo/labrute/issues/24) ([8fc086f](https://github.com/Zenoo/labrute/commit/8fc086fc0426cbcf9c9ab666363596d9ed1935f8))
* hypnosis super. [#24](https://github.com/Zenoo/labrute/issues/24) ([d91ca64](https://github.com/Zenoo/labrute/commit/d91ca643b8ffb51ffa45779ebd3f3ed1e4272c9c))


### Feature

* All supers have been coded. [#24](https://github.com/Zenoo/labrute/issues/24) ([b26d477](https://github.com/Zenoo/labrute/commit/b26d477e43b8981070154f5e3fc708e9ff005d83))
* Fight loop done. [#24](https://github.com/Zenoo/labrute/issues/24) ([7619436](https://github.com/Zenoo/labrute/commit/7619436328c70a1d7c47075b330baf2eee546e7c))
* Fighting system done. Fixes [#24](https://github.com/Zenoo/labrute/issues/24) ([3269761](https://github.com/Zenoo/labrute/commit/326976185f71bc72702b66c44fe92ae346e2d799))

### [0.5.1](https://github.com/Zenoo/labrute/compare/v0.5.0...v0.5.1) (2022-08-09)


### Bug fix

* Various bugs ([2cbf7c7](https://github.com/Zenoo/labrute/commit/2cbf7c77abddd0ee04afcd5554f2a79302268ca9))

## [0.5.0](https://github.com/Zenoo/labrute/compare/v0.4.15...v0.5.0) (2022-08-09)


### Bug fix

* Remove unnecessary skill booster logic in level up choices ([c29350a](https://github.com/Zenoo/labrute/commit/c29350a5cd22057324e556ed835e00579ad82aed))
* Update reconnaissance speed modifier ([0c0dd14](https://github.com/Zenoo/labrute/commit/0c0dd14c14b7f7c75a48c19da43771d35e741b8e))


### Feature

*  Allow for both panther and bear at a 1/1000 chance ([8a1027f](https://github.com/Zenoo/labrute/commit/8a1027f20190516a38883b970fcc98ae32a83d8b))
* Added low odds for custom stance ([eaa578a](https://github.com/Zenoo/labrute/commit/eaa578a0f1daf1e1464917dc3d15f05c3fd1e987))
* Implement a malus to boosters acquisition ([8f74c02](https://github.com/Zenoo/labrute/commit/8f74c022ade84f4a26e02789ced8bfe66d122628))
* Limit some weapons ([374e06c](https://github.com/Zenoo/labrute/commit/374e06cb8d98d14512f083ed8a5ed1be405f9f97))
* Reduce rare skills odds ([0eefdca](https://github.com/Zenoo/labrute/commit/0eefdca4c2dfcaf8495d4249bf04df627683bdbb))
* Reduce rare weapon odds ([765b861](https://github.com/Zenoo/labrute/commit/765b861ea2d37c215788db54eb2d544214f63a18))
* Reduce the odds of getting a perk on higher levels ([aa091fb](https://github.com/Zenoo/labrute/commit/aa091fbf23155047a6285e13c774e3f9c6e136ad))


### Refactoring

* Extracted + updated HP formula ([5fe83c4](https://github.com/Zenoo/labrute/commit/5fe83c46fa0c18bfa7e5c60fc17d517d007f84e2))
* Extracted skill modifiers logic ([a95a7a5](https://github.com/Zenoo/labrute/commit/a95a7a5f28d0c96400a31aec6502a58d04f4e0e6))

### [0.4.15](https://github.com/Zenoo/labrute/compare/v0.4.14...v0.4.15) (2022-08-09)


### Bug fix

* added DB reset script ([7ef5afb](https://github.com/Zenoo/labrute/commit/7ef5afba5a631a060e2eca67cc1d541819cac934))
* Typo ([7ae71f8](https://github.com/Zenoo/labrute/commit/7ae71f8f56fe79d80f272bee4212faaf597f619a))


### Refactoring

* Clarify perk prevention mechanism ([95bac30](https://github.com/Zenoo/labrute/commit/95bac30188c31da4a52a050a4f72afa30a5cdac8))

### [0.4.14](https://github.com/Zenoo/labrute/compare/v0.4.13...v0.4.14) (2022-08-09)


### Feature

* Real pet odds ([8051f00](https://github.com/Zenoo/labrute/commit/8051f00591a860ef7b840bb78df2638d26d8cb26))
* Real pet stats ([ea8f2bf](https://github.com/Zenoo/labrute/commit/ea8f2bf92f1502aad91afbb16c4c4920b93a43ae))
* Real skill odds ([3355934](https://github.com/Zenoo/labrute/commit/33559347a9e9ea64301df3b4b2c6934bdca16aea))
* Real weapon data import ([7f616e9](https://github.com/Zenoo/labrute/commit/7f616e93cafb9b89d1bfd50ea496c3c76edf86e2))
* Real weapon odds ([13d2aed](https://github.com/Zenoo/labrute/commit/13d2aedf221e229d2313d8c8fc869a4584ef7183))

### [0.4.13](https://github.com/Zenoo/labrute/compare/v0.4.12...v0.4.13) (2022-08-09)


### Refactoring

* Changed destiny DB storage. Fixes [#55](https://github.com/Zenoo/labrute/issues/55) ([d53f1d0](https://github.com/Zenoo/labrute/commit/d53f1d09bf35cfd854cbfd06f07efd81521a29a6))


### Bug fix

* Cleanup logs ([23e879b](https://github.com/Zenoo/labrute/commit/23e879be7793325ea95be78bb70f12c947c8ac75))

### [0.4.12](https://github.com/Zenoo/labrute/compare/v0.4.11...v0.4.12) (2022-08-08)


### Documentation

* Added an explanation for the tragic potion poison removal ([c728349](https://github.com/Zenoo/labrute/commit/c728349defb8256770ef29c5671a21367f9a4916))


### Bug fix

* boosters logic ([019080d](https://github.com/Zenoo/labrute/commit/019080d57decc58a677755dbaec39b20c54121ee))

### [0.4.11](https://github.com/Zenoo/labrute/compare/v0.4.10...v0.4.11) (2022-08-08)


### Bug fix

* Missing french locale for Reconnaissance ([4c6c665](https://github.com/Zenoo/labrute/commit/4c6c6657cb01340d8009a47d8982616843931a27))
* Missing stat changes from new skills ([c6874ee](https://github.com/Zenoo/labrute/commit/c6874ee4bbcaea157ea7d44af48195c8dad0f448))

### [0.4.10](https://github.com/Zenoo/labrute/compare/v0.4.9...v0.4.10) (2022-08-08)


### Bug fix

* Instant tooltips on touch ([f8369ce](https://github.com/Zenoo/labrute/commit/f8369ce613a4fe70fe6c43fcb52627da9357b550))
* Reduce stats gained ([4326e51](https://github.com/Zenoo/labrute/commit/4326e51f9a5b5e1b71fabcb156796bfacd7e6428))


### Feature

* Added mor data on skills tooltip + display them while leveling up. [#52](https://github.com/Zenoo/labrute/issues/52) ([e6f690b](https://github.com/Zenoo/labrute/commit/e6f690b08245919515bb6ce2d641c657ec2d3a56))
* New skills ([9f3f1d1](https://github.com/Zenoo/labrute/commit/9f3f1d16f73ff0f68fbd907ab77d147db24de5df))
* Stat booster skills now have reduced chances of being selected. Fix [#53](https://github.com/Zenoo/labrute/issues/53) ([8a7025c](https://github.com/Zenoo/labrute/commit/8a7025c3eeeccccc77ca9af91cf7015aeec1aa62))


### Refactoring

* Don't pass the destiny between back and front unnecesserally. ([7339671](https://github.com/Zenoo/labrute/commit/733967164ab5e13d44c6226c9f2f4decf44fccd2))

### [0.4.9](https://github.com/Zenoo/labrute/compare/v0.4.8...v0.4.9) (2022-08-07)


### Bug fix

* Brute creation button not working on mobile. Fixes [#50](https://github.com/Zenoo/labrute/issues/50) ([181698e](https://github.com/Zenoo/labrute/commit/181698e5372f7fe5b5cd7be2ce02543482b45944))
* Damage furmula typo ([ccd6a83](https://github.com/Zenoo/labrute/commit/ccd6a836482b2f7f57af178cc009cfbe78d6e05b))

### [0.4.8](https://github.com/Zenoo/labrute/compare/v0.4.7...v0.4.8) (2022-08-07)


### Progress

* Damage modifier skills. [#24](https://github.com/Zenoo/labrute/issues/24) ([a4f703c](https://github.com/Zenoo/labrute/commit/a4f703cbd51a92eb7d7670a5790f99aebd56551e))


### Refactoring

* Arena view responsiveness. Fixes [#35](https://github.com/Zenoo/labrute/issues/35) ([d52fdd0](https://github.com/Zenoo/labrute/commit/d52fdd062fbae19a3c4a824f9f5bb9a8641e6619))
* Level up view responsiveness. Fixes [#36](https://github.com/Zenoo/labrute/issues/36) ([d2780aa](https://github.com/Zenoo/labrute/commit/d2780aa4a1a5ff9e2efb8716e8f5ee1a3ebc0c69))


### Bug fix

* Display bug on Logs. Fixes [#47](https://github.com/Zenoo/labrute/issues/47) ([6fa0c14](https://github.com/Zenoo/labrute/commit/6fa0c14d4dc04a0fc3fa136fbda1b22baa55d0fe))
* French locale ([7a3478e](https://github.com/Zenoo/labrute/commit/7a3478e6d519749d2e475285466f107efb2e8c70))
* Interaction errors on mobile. [#50](https://github.com/Zenoo/labrute/issues/50) ([38856e7](https://github.com/Zenoo/labrute/commit/38856e7df97c78e1d72ebe7e5f50efd4803e1b9b))

### [0.4.7](https://github.com/Zenoo/labrute/compare/v0.4.6...v0.4.7) (2022-08-06)


### Bug fix

* Broadsword/sword french locale ([b0d88c9](https://github.com/Zenoo/labrute/commit/b0d88c955eaf54afaafa2b72bcc1e332a5be2bb7))

### [0.4.6](https://github.com/Zenoo/labrute/compare/v0.4.5...v0.4.6) (2022-08-05)


### Bug fix

* Fix frontend production build flakiness ([2fe6f18](https://github.com/Zenoo/labrute/commit/2fe6f183f7f020caf72b68ce9ce785d07d51fc6b))
* Run db:populate at the end of db:sync ([cdf1a8e](https://github.com/Zenoo/labrute/commit/cdf1a8ead8fd6669459805ea0118b4e21e62aee8))

### [0.4.5](https://github.com/Zenoo/labrute/compare/v0.4.4...v0.4.5) (2022-08-05)


### Bug fix

* ETwin url ([2a75626](https://github.com/Zenoo/labrute/commit/2a75626210a395659e1cb0a84d7729b1bb684494))

### [0.4.4](https://github.com/Zenoo/labrute/compare/v0.4.3...v0.4.4) (2022-08-05)


### Progress

* Accuracy. [#24](https://github.com/Zenoo/labrute/issues/24) ([81f9f61](https://github.com/Zenoo/labrute/commit/81f9f6169cedd73202f39cbfc48b2634e35e395d))
* Armor. [#24](https://github.com/Zenoo/labrute/issues/24) ([26b22be](https://github.com/Zenoo/labrute/commit/26b22be8586e28b7113857dd5fb83f66f6861252))
* BlockRate. [#24](https://github.com/Zenoo/labrute/issues/24) ([0d32862](https://github.com/Zenoo/labrute/commit/0d3286277d0689eda740cc49fedb68eae248ac26))
* Damage. [#24](https://github.com/Zenoo/labrute/issues/24) ([818e67b](https://github.com/Zenoo/labrute/commit/818e67b956fbe4b0090e52299cbd7c97bb3a7405))
* DisarmRate. [#24](https://github.com/Zenoo/labrute/issues/24) ([0559210](https://github.com/Zenoo/labrute/commit/0559210c2b91ac391b251bcc120c631470b784b6))
* Evasion. [#24](https://github.com/Zenoo/labrute/issues/24) ([38def62](https://github.com/Zenoo/labrute/commit/38def62d81d442118feb87c598c208a901f09e56))
* Initiative / Interval / Reach. [#24](https://github.com/Zenoo/labrute/issues/24) ([d21d11c](https://github.com/Zenoo/labrute/commit/d21d11c4574be5cfc632c8ac99d01a76c1909130))
* Precision. [#24](https://github.com/Zenoo/labrute/issues/24) ([35d22b1](https://github.com/Zenoo/labrute/commit/35d22b1bd631dafeb1b2b362e1ca26a5789d32d1))
* ReversalRate. [#24](https://github.com/Zenoo/labrute/issues/24) ([156cf93](https://github.com/Zenoo/labrute/commit/156cf93ce4d41678d4e16503149388f0b16f3539))


### Bug fix

* Added initiative to dog. [#24](https://github.com/Zenoo/labrute/issues/24) ([d7092fe](https://github.com/Zenoo/labrute/commit/d7092fe57b2c7dc50bd8fae1df93379daf5b3e00))
* Change interval to base 1. [#24](https://github.com/Zenoo/labrute/issues/24) ([c119067](https://github.com/Zenoo/labrute/commit/c11906712333ffa88ebb3682fdfb8cd7b40f8cfd))
* Remove client build from server ([1fd634c](https://github.com/Zenoo/labrute/commit/1fd634c27fbbb7fd298c964ddbf32472fc8197a3))

### [0.4.3](https://github.com/Zenoo/labrute/compare/v0.4.2...v0.4.3) (2022-08-05)


### Bug fix

* Index metadata ([e5490d2](https://github.com/Zenoo/labrute/commit/e5490d26ed6beaaa3b05ba80c3a37b7e3103d79a))

### [0.4.2](https://github.com/Zenoo/labrute/compare/v0.4.1...v0.4.2) (2022-08-05)


### Refactoring

* Use a single translation file ([c4d0a15](https://github.com/Zenoo/labrute/commit/c4d0a15b4f4e998368eb7d61b7ed1d1c620ad659))


### Bug fix

* provide OAuth client id through the environment ([dece8ea](https://github.com/Zenoo/labrute/commit/dece8ea599f3cd5432b0f473b130385c4ab8f16a))


### Feature

* Display version in footer. Fixes [#31](https://github.com/Zenoo/labrute/issues/31) ([ba78afd](https://github.com/Zenoo/labrute/commit/ba78afd1aed01881c8a0bd851c36b3f1f60c3980))
* Fight page [#24](https://github.com/Zenoo/labrute/issues/24) + destinies overwrite fix. Fixes [#46](https://github.com/Zenoo/labrute/issues/46). ([d9df652](https://github.com/Zenoo/labrute/commit/d9df6525a231ed7fa95109e2f0a0de49da6b1b2b))
* Search in the arena. Fixes [#38](https://github.com/Zenoo/labrute/issues/38) ([a56c927](https://github.com/Zenoo/labrute/commit/a56c9271cd365fbfd994435afb77c971a40b6996))

### [0.4.1](https://github.com/Zenoo/labrute/compare/v0.4.0...v0.4.1) (2022-08-03)


### Feature

* Adde logs on level up and creation. Fixes [#44](https://github.com/Zenoo/labrute/issues/44) ([f48bf48](https://github.com/Zenoo/labrute/commit/f48bf48cb18d465c7c844907ab6107fe2756005e))


### Bug fix

* Bear and panther pets are exclusive. Fix [#41](https://github.com/Zenoo/labrute/issues/41) ([4a46a01](https://github.com/Zenoo/labrute/commit/4a46a0175e15c0e0818e611ebc5f75fa6d34687b))

## [0.4.0](https://github.com/Zenoo/labrute/compare/v0.3.17...v0.4.0) (2022-08-03)


### Refactoring

* Remove brute IDs. Fixes [#43](https://github.com/Zenoo/labrute/issues/43) ([d73308b](https://github.com/Zenoo/labrute/commit/d73308b7028b6c80c8e9dff00a8426098995b200))

### [0.3.17](https://github.com/Zenoo/labrute/compare/v0.3.16...v0.3.17) (2022-08-03)


### Feature

* New script to generate a random brute at the desired level ([0c97c0e](https://github.com/Zenoo/labrute/commit/0c97c0e7d2b3d114c68b7f5832257ce665ad5ebb))
* Versus view. Fixes [#40](https://github.com/Zenoo/labrute/issues/40) ([c1c40a2](https://github.com/Zenoo/labrute/commit/c1c40a2eeb8445192e5b6df55407213aa680571a))

### [0.3.16](https://github.com/Zenoo/labrute/compare/v0.3.15...v0.3.16) (2022-08-02)


### Refactoring

* Moved some utils to the core package ([97d8f3f](https://github.com/Zenoo/labrute/commit/97d8f3f1d83064a48fdb9edd288be44e61d5915d))
* Return random brutes as opponents in the arena. [#24](https://github.com/Zenoo/labrute/issues/24) ([c175ae0](https://github.com/Zenoo/labrute/commit/c175ae057f547e9c4cb2ed72d807282f6225c51a))


### Feature

* Added Database population script. Fixes [#34](https://github.com/Zenoo/labrute/issues/34) ([c2ef82f](https://github.com/Zenoo/labrute/commit/c2ef82fd8f7df99b71e4d99f79907d8d65a41f38))


### Bug fix

* Simplify XP formula ([9694757](https://github.com/Zenoo/labrute/commit/9694757697de219a5e037d9ea6096625bdcd72c4))

### [0.3.15](https://github.com/Zenoo/labrute/compare/v0.3.14...v0.3.15) (2022-08-01)


### Bug fix

* Clean types declarations in preparation for a core package ([8ad26cd](https://github.com/Zenoo/labrute/commit/8ad26cd3de804391727bc83852b9f5148bee6734))
* Cleanup server scripts and deps ([2a09bb6](https://github.com/Zenoo/labrute/commit/2a09bb64e91545c741b975f1e54c193840ec98bf))
* Data missing after OAuth ([6e2284d](https://github.com/Zenoo/labrute/commit/6e2284df52a55ed9aa72bd0bf5b72db7ad6964a8))
* Database not syncing properly ([3fb5d1d](https://github.com/Zenoo/labrute/commit/3fb5d1dafe2e24aef3e575b39ef70d02b1f9caf0))
* Database sync error on empty DB ([69566a7](https://github.com/Zenoo/labrute/commit/69566a76db40e09bad54766a5f4a324d605aef7f))
* Eslint errors ([b95eb57](https://github.com/Zenoo/labrute/commit/b95eb572b0a6deecf7c1ed682ca4a81d5c8ab898))
* Remove server build ([eca6f30](https://github.com/Zenoo/labrute/commit/eca6f30fe9bdc9bf63aaeaa9ded844f4d7b3069c))
* Removed unnecessary typings ([110e701](https://github.com/Zenoo/labrute/commit/110e701fed6e99cadf1f862c2856b8a0a7efa825))

### [0.3.14](https://github.com/Zenoo/labrute/compare/v0.3.13...v0.3.14) (2022-07-31)


### Progress

* Arena view structure. [#24](https://github.com/Zenoo/labrute/issues/24) ([c51738b](https://github.com/Zenoo/labrute/commit/c51738b832484b822e673a42d37547d8fe49ba6a))


### Feature

* Arena page. [#24](https://github.com/Zenoo/labrute/issues/24) ([dc63cb5](https://github.com/Zenoo/labrute/commit/dc63cb5295703861191d5646103b888d89bc8b56))

### [0.3.13](https://github.com/Zenoo/labrute/compare/v0.3.12...v0.3.13) (2022-07-30)


### Documentation

* Added issue templates ([5f92d9f](https://github.com/Zenoo/labrute/commit/5f92d9f3c27959b929125357a0ec827117382d67))


### Bug fix

* Cleanup logs ([08ab783](https://github.com/Zenoo/labrute/commit/08ab783881e2bb55744de325bd777cc412112385))
* Convert to standard UNIX line-endings ([44cc35c](https://github.com/Zenoo/labrute/commit/44cc35c751e59b6cfa7eddb8ab7a5f9729f8c0ac))


### Feature

* Portrait preview in account menu ([a50f9cf](https://github.com/Zenoo/labrute/commit/a50f9cf4a3fbfe1904a912cf155b4c30270e53b7))

### [0.3.12](https://github.com/Zenoo/labrute/compare/v0.3.11...v0.3.12) (2022-07-28)


### Bug fix

* DB migrations not correctly ordered ([13f580d](https://github.com/Zenoo/labrute/commit/13f580df68ea16d3fb1b8ec9195ac0c75a956f83))


### Feature

* Level up system. Fixes [#23](https://github.com/Zenoo/labrute/issues/23) ([8183fc0](https://github.com/Zenoo/labrute/commit/8183fc0422c7b800b840ddde0021713d4641da93))

### [0.3.11](https://github.com/Zenoo/labrute/compare/v0.3.10...v0.3.11) (2022-07-27)


### Progress

* Tournament message display. [#15](https://github.com/Zenoo/labrute/issues/15) ([1b45f4c](https://github.com/Zenoo/labrute/commit/1b45f4ce952465d54def0fd5d11d1d59ea859ccf))


### Bug fix

* Visual bug in cell view. Fixes [#27](https://github.com/Zenoo/labrute/issues/27) ([29a2248](https://github.com/Zenoo/labrute/commit/29a2248a395ec0f35b95a8eb1bec3580a6edd067))


### Feature

* Cell owner UI. Fixes [#15](https://github.com/Zenoo/labrute/issues/15) ([457c33f](https://github.com/Zenoo/labrute/commit/457c33fb0c9d69874c8d0320b00d190828cd0a8a))


### Refactoring

* Cell mobile view. Fixes [#26](https://github.com/Zenoo/labrute/issues/26) ([fd58288](https://github.com/Zenoo/labrute/commit/fd5828818d85651cc8130615eab3d7e810da27a5))

### [0.3.10](https://github.com/Zenoo/labrute/compare/v0.3.9...v0.3.10) (2022-07-25)


### Feature

* EN Translation. Fix [#12](https://github.com/Zenoo/labrute/issues/12) ([d517408](https://github.com/Zenoo/labrute/commit/d5174081512d21eefb841342d611f7f42e0857c6))

### [0.3.9](https://github.com/Zenoo/labrute/compare/v0.3.8...v0.3.9) (2022-07-25)


### Feature

* Hide master an pupils fields when empty. Fix [#20](https://github.com/Zenoo/labrute/issues/20) ([eb08627](https://github.com/Zenoo/labrute/commit/eb086278af1a00187d4d73468d23e04d3c1d0a32))
* Update pupils count on new ref creation. Fix [#19](https://github.com/Zenoo/labrute/issues/19) ([2070a28](https://github.com/Zenoo/labrute/commit/2070a28abcf71a6b4a69984b8f4c72a26392d8cc))


### Progress

* Cell owner buttons. [#15](https://github.com/Zenoo/labrute/issues/15) ([a173c4f](https://github.com/Zenoo/labrute/commit/a173c4f2847d4aa9550e8771b4cf36841bb785ff))

### [0.3.8](https://github.com/Zenoo/labrute/compare/v0.3.7...v0.3.8) (2022-07-24)


### Bug fix

* Wrong weapon chance ([a5eee4c](https://github.com/Zenoo/labrute/commit/a5eee4c49bed244f57cd00c39350be3b1bca4ce9))


### Feature

* Stat boosters logic ([7b33ef6](https://github.com/Zenoo/labrute/commit/7b33ef6f70d04b7e874f1e53752307601adb8998))

### [0.3.7](https://github.com/Zenoo/labrute/compare/v0.3.6...v0.3.7) (2022-07-24)


### Feature

* Weighted pet/skill/weapon chance at level 1 ([41ec25f](https://github.com/Zenoo/labrute/commit/41ec25fc31f0e975b03d6af5531b2cf0192b4023))

### [0.3.6](https://github.com/Zenoo/labrute/compare/v0.3.5...v0.3.6) (2022-07-23)


### Bug fix

* Last db migration script applied twice ([b902c68](https://github.com/Zenoo/labrute/commit/b902c689e03d997e5bd5e9ec04080b3fd7316f20))


### Feature

* Display actual brute's logs. Fixes [#14](https://github.com/Zenoo/labrute/issues/14) ([2cad8fc](https://github.com/Zenoo/labrute/commit/2cad8fc47d5de2aeda9f28e3a13d3314aa5645b2))

### [0.3.5](https://github.com/Zenoo/labrute/compare/v0.3.4...v0.3.5) (2022-07-23)


### Refactoring

* Moves logs logic to CellLog. [#14](https://github.com/Zenoo/labrute/issues/14) ([5ee221a](https://github.com/Zenoo/labrute/commit/5ee221a33dac64dfa3deb79dc7213af09b43a052))


### Feature

* Automated database migration ([ed54d20](https://github.com/Zenoo/labrute/commit/ed54d20537c35dab4a749d9b35c18c660976f762))

### [0.3.4](https://github.com/Zenoo/labrute/compare/v0.3.3...v0.3.4) (2022-07-22)


### Feature

* Display brutes in account menu. Fixes [#16](https://github.com/Zenoo/labrute/issues/16). Fixes [#17](https://github.com/Zenoo/labrute/issues/17) ([e52cc05](https://github.com/Zenoo/labrute/commit/e52cc05bd7fe4eb01d458ef0e9f28a4db273a27d))

### [0.3.3](https://github.com/Zenoo/labrute/compare/v0.3.2...v0.3.3) (2022-07-21)


### Bug fix

* Throw error instead of double returning ([af72f17](https://github.com/Zenoo/labrute/commit/af72f178f145ef6d977a709f79f5156cce2a93de))


### Progress

* Connection system ([637100d](https://github.com/Zenoo/labrute/commit/637100d8e4da63bf87e747f45aba6b162dc7e10a))
* OAuth ([e1272aa](https://github.com/Zenoo/labrute/commit/e1272aa15bac7354ebeb2534e0926229405bd485))


### Feature

* Brute creation and DB storage ([80f05b7](https://github.com/Zenoo/labrute/commit/80f05b7b7768ebece48fb6b5ef1cc26d8337e838))
* Connection system done (7 days max) ([bc5af0e](https://github.com/Zenoo/labrute/commit/bc5af0e20f531b3be808b67e693579d610355b69))

### [0.3.2](https://github.com/Zenoo/labrute/compare/v0.3.1...v0.3.2) (2022-07-20)


### Bug fix

* Unused rule ([abfb5a0](https://github.com/Zenoo/labrute/commit/abfb5a0c56b940e5c63022325b4c34fe19165927))


### Progress

* OAuth + Account speed dial ([827eb95](https://github.com/Zenoo/labrute/commit/827eb952876967b4606a78510370c82a82923850))

### [0.3.1](https://github.com/Zenoo/labrute/compare/v0.3.0...v0.3.1) (2022-07-18)


### Visual update

* Tablet/Mobile versions ([c0ddc7a](https://github.com/Zenoo/labrute/commit/c0ddc7aa9dfbf42a4cfeef702dddf0a6d7b59382))

## [0.3.0](https://github.com/Zenoo/labrute/compare/v0.2.0...v0.3.0) (2022-07-17)


### ⚠ BREAKING CHANGES

* Node 16 backend

### Progress

* Authentication ([64e40cf](https://github.com/Zenoo/labrute/commit/64e40cf93409bba69da685a62f25098645f26146))


### Feature

* Node 16 backend ([42ff777](https://github.com/Zenoo/labrute/commit/42ff777c707323842c2c79a8c87f98bb61e92219))


### Bug fix

* Backend vulnerabilities ([a75041f](https://github.com/Zenoo/labrute/commit/a75041f68a6115fceeb4c58c98db22f3f6d3abca))
* Client vulnerabilities ([2c5ea3b](https://github.com/Zenoo/labrute/commit/2c5ea3baba9aca58b25923e375c28f85ced7ad07))
* Fix server support for ESM ([33cd6c9](https://github.com/Zenoo/labrute/commit/33cd6c922f7ff7b4b6d64584db6b95de4c6ef6ce))
* Nodemon TS setup ([8ee1b28](https://github.com/Zenoo/labrute/commit/8ee1b281dc89d0b5ce67033457587629294a85ce))
* Wrong ts-node installation ([1ff1e98](https://github.com/Zenoo/labrute/commit/1ff1e98d6227941bc76eab8bfa914083b53cab5b))

## [0.2.0](https://github.com/Zenoo/labrute/compare/v0.1.17...v0.2.0) (2022-07-16)


### Feature

* Cell page mostly done ([6bb28a7](https://github.com/Zenoo/labrute/commit/6bb28a79d0971e1891ed608ad2a8a8fb65b74213))

### [0.1.17](https://github.com/Zenoo/labrute/compare/v0.1.16...v0.1.17) (2022-07-16)


### Feature

* Cell pets display ([58fb7c5](https://github.com/Zenoo/labrute/commit/58fb7c5d2b0dad924de62106aae9726417a782bb))

### [0.1.16](https://github.com/Zenoo/labrute/compare/v0.1.15...v0.1.16) (2022-07-16)


### Feature

* Weapons board now displays conditionally ([2d351c3](https://github.com/Zenoo/labrute/commit/2d351c34d3205ba9d580934566f7be88013a5ce0))

### [0.1.15](https://github.com/Zenoo/labrute/compare/v0.1.14...v0.1.15) (2022-07-16)


### Feature

* Tooltip style + Skills tooltips ([7213b92](https://github.com/Zenoo/labrute/commit/7213b92eafcf7afc0c12dea67c9c00515f219cf4))

### [0.1.14](https://github.com/Zenoo/labrute/compare/v0.1.13...v0.1.14) (2022-07-16)


### Feature

* Skills display ([bd72ff5](https://github.com/Zenoo/labrute/commit/bd72ff5dee62c25c9b615581a1a3cd527709254a))

### [0.1.13](https://github.com/Zenoo/labrute/compare/v0.1.12...v0.1.13) (2022-07-13)


### Progress

* Cell layout ([751c0d6](https://github.com/Zenoo/labrute/commit/751c0d6f357f90219138b83bc5eaf848637ce859))
* Cell layout ([b9cd85e](https://github.com/Zenoo/labrute/commit/b9cd85eba02ee2ec41addc037996d9581c17ed3e))


### Bug fix

* Added first database migration script ([4a3cb1d](https://github.com/Zenoo/labrute/commit/4a3cb1d93a4861091912b5c1f220b31770d270d0))


### Feature

* Removed sequelize to use the simpler `postgresql-client` ([96e6b50](https://github.com/Zenoo/labrute/commit/96e6b50be4a68fea77720792ca4f4b54947f652c))
* Static weapons board ([3a2fa4d](https://github.com/Zenoo/labrute/commit/3a2fa4ddde22322bae289e040d3df2eb54d0081a))

### [0.1.12](https://github.com/Zenoo/labrute/compare/v0.1.11...v0.1.12) (2022-07-03)


### Feature

* Random color system ([2003721](https://github.com/Zenoo/labrute/commit/20037212a2d611915ae0b1d39b379abc3c9d91ba))

### [0.1.11](https://github.com/Zenoo/labrute/compare/v0.1.10...v0.1.11) (2022-07-02)


### Bug fix

* Added space around the svg brute to display other potential parts ([dfb156f](https://github.com/Zenoo/labrute/commit/dfb156f94708177eb09aff80224fdade9bc831a6))


### Visual update

* Added 1 longHair style ([9dde7b8](https://github.com/Zenoo/labrute/commit/9dde7b8f39a51c6228e2bd89aafc119a7cbe6dc1))


### Documentation

* Added TLDR in the asset extraction guide ([1694e0c](https://github.com/Zenoo/labrute/commit/1694e0c84340746c8a4da6f9f6d41400e9dcfafc))

### [0.1.10](https://github.com/Zenoo/labrute/compare/v0.1.9...v0.1.10) (2022-07-02)


### Progress

* Character assets import ([d07ca24](https://github.com/Zenoo/labrute/commit/d07ca2494dc8bf21888f44a8db35634bb91905aa))


### Feature

* Brute random hair + eyes generation ([e53071b](https://github.com/Zenoo/labrute/commit/e53071bf8327c1c8f38576e71227755f7db50836))
* Brute SVG creation ([e803f83](https://github.com/Zenoo/labrute/commit/e803f83031cf4b84f608c0529a3687ce866b419e))


### Documentation

* Added a guide to extract an asset ([f6f8bcd](https://github.com/Zenoo/labrute/commit/f6f8bcd2718e9789ac127c521b1e9e488bc1fd6f))

### [0.1.9](https://github.com/Zenoo/labrute/compare/v0.1.8...v0.1.9) (2022-04-03)


### Visual update

* Added visual imperfections ([ff9020e](https://github.com/Zenoo/labrute/commit/ff9020e984f1f35cdea90ba70f91e319f1b6165c))

### [0.1.8](https://github.com/Zenoo/labrute/compare/v0.1.7...v0.1.8) (2022-04-03)


### Bug fix

* Import character creation assets + homepage progress ([9b6b4c0](https://github.com/Zenoo/labrute/commit/9b6b4c0aa440427140e6b2c570f58a6c9ecc0c6d))


### Visual update

* Homepage done ([7d58238](https://github.com/Zenoo/labrute/commit/7d58238e016b64743d6e8a9f966e7d9d8785106d))

### [0.1.7](https://github.com/Zenoo/labrute/compare/v0.1.6...v0.1.7) (2022-04-01)


### Progress

* Assets sorting ([d5c85da](https://github.com/Zenoo/labrute/commit/d5c85da6589215034b56c045c82925c6c696277e))

### [0.1.6](https://github.com/Zenoo/labrute/compare/v0.1.5...v0.1.6) (2022-03-31)


### Feature

* Header art import + Styled button ([050a075](https://github.com/Zenoo/labrute/commit/050a0754a64351bf5c15f8e0836e6788489bef31))

### [0.1.5](https://github.com/Zenoo/labrute/compare/v0.1.4...v0.1.5) (2022-03-31)


### Documentation

* Added migration instructions to README ([fb8bdf1](https://github.com/Zenoo/labrute/commit/fb8bdf16ec2d601b554a0ab10c931f9e63434d14))


### Bug fix

* Ignore client files when reloading the backend ([d775a12](https://github.com/Zenoo/labrute/commit/d775a120664c9bbcb22ef96bb86cca107b34efa9))


### Feature

* Original card style on Surface and Textfield elements ([ab59ade](https://github.com/Zenoo/labrute/commit/ab59ade4eae5d5d6f34fd90b0685f01c09d692f6))
* Translation setup + header arts ([183b532](https://github.com/Zenoo/labrute/commit/183b532cb02ea63c207d963489be7417ea301fb9))

### [0.1.4](https://github.com/Zenoo/labrute/compare/v0.1.3...v0.1.4) (2022-03-31)


### Refactoring

* Import database config from .env ([5a57abe](https://github.com/Zenoo/labrute/commit/5a57abeedb7f5270d460fc4363f85eeefcc0b0bf))


### Feature

* User.connexionToken ([373724a](https://github.com/Zenoo/labrute/commit/373724a31ee4d08cc4518495848a80ef96b8df91))


### Bug fix

* Typescript types enforced ([ce682fc](https://github.com/Zenoo/labrute/commit/ce682fc3ab8745a1ff1c1a9df9c4a5b25516d5b2))

### [0.1.3](https://github.com/Zenoo/labrute/compare/v0.1.2...v0.1.3) (2022-03-31)


### Bug fix

* Production starting script ([7f4bf50](https://github.com/Zenoo/labrute/commit/7f4bf501497d232d2e36e8d62a0afb10af7e417c))
* Serve client as static when running back only + configurable port. ([362da38](https://github.com/Zenoo/labrute/commit/362da385ad9c84dd7903c9d83b5565aa0eeb7e22))

### [0.1.2](https://github.com/Zenoo/labrute/compare/v0.1.1...v0.1.2) (2022-03-31)


### Feature

* Server + Client infrastructure ([b9bb73e](https://github.com/Zenoo/labrute/commit/b9bb73e8681f41d9935fe1eda9aea34d681ed6c9))


### Visual update

* Header + background ([ca459bb](https://github.com/Zenoo/labrute/commit/ca459bb0e768173fd8a36a798415f3b80f97f836))


### Bug fix

* Client build path ([fb487c3](https://github.com/Zenoo/labrute/commit/fb487c3b651dc66aea50af65e7482c5a68dc1ade))

### 0.1.1 (2022-03-29)


### Feature

* Base React frontend import ([d9e3d45](https://github.com/Zenoo/labrute/commit/d9e3d45aa64fa6a7c4493715511671caedd22c1a))
