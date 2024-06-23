// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

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


})

