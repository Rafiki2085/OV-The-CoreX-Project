// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    // Mahou Tsukai
    event.shaped(
        Item.of('mahoutsukai:mortar_and_pestle', 1),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            A: 'mahoutsukai:pestle',
            B: 'draconicevolution:chaotic_core',
            C: 'mahoutsukai:mortar'
        }
    )

    // Draconic Evolution
    event.shaped(
        Item.of('draconicevolution:draconium_core', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'draconicevolution:draconium_ingot',
            B: 'compressedblocks:c0_gold_block',
            C: 'compressedblocks:c1_diamond_block'
        }
    )
    event.shaped(
        Item.of('draconicevolution:wyvern_core', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'draconicevolution:draconium_ingot',
            B: 'draconicevolution:draconium_core',
            C: 'compressedblocks:double_crated_nether_star'
        }
    )

    // Avaritia
    event.shaped(
        Item.of('avaritia:diamond_lattice', 1),
        [
            'A A',
            ' A ',
            'A A'
        ],
        {
            A: 'compressedblocks:c0_diamond_block'
        }
    )
    event.shaped(
        Item.of('avaritia:crystal_matrix_ingot', 1),
        [
            '   ',
            'ABA',
            'ABA'
        ],
        {
            A: 'avaritia:diamond_lattice',
            B: 'compressedblocks:double_crated_nether_star'
        }
    )
    event.shaped(
        Item.of('avaritia:extreme_crafting_table', 1),
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: 'avaritia_crystal_matrix_ingot',
            B: 'draconicevolution:chaotic_core',
            C: 'avaritia:double_compressed_crafting_table'
        }
    )

})

