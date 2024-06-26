// priority: 0
ServerEvents.recipes(event => {
    let removalids = [
        'mahoutsukai:mortar_and_pestle',

        'cyclic:uncrafter',
        'cyclic:sleeping_mat',
        'cyclic:crafter',

        'draconicevolution:components/draconium_core',
        'draconicevolution:components/wyvern_core',

        'avaritia:diamond_lattice_recipe',
        'avaritia:crystal_matrix_ingot_recipe',
        'avaritia:extreme_crafting_table_craft'
    ]

    removalids.forEach(recipeid => {
        event.remove({ id:`${recipeid}`})
    });
})

