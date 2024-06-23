// priority: 0
ServerEvents.recipes(event => {
    let removalids = [
        'mahoutsukai:mortar_and_pestle'
    ]

    removalids.forEach(recipeid => {
        event.remove({ id:`${recipeid}`})
    });
})

