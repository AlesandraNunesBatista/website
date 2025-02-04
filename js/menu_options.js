let groups_options_db = [
    {
        label: "Brasil",
        options: [
            {value: "goiania", text: "Goiânia", disable: true},
        ]
    },
    {
        label: "Espanha",
        options: [
            {value: "madrid", text: "Madrid", disable: true},
        ]
    },
    {
        label: "Itália",
        options: [
            {value: "rome", text: "Roma", disable: true},
        ]
    },
    {
        label: "Portugal",
        options: [
            {value: "acores", text: "Açores", disable: false},
            {value: "lisbon", text: "Lisboa", disable: true},
            {value: "porto", text: "Porto", disable: true},
        ]
    },
    {
        label: "República Tcheca",
        options: [
            {value: "prague", text: "Praga", disable: false},
        ]
    },
]

function create_menu_dropdown(selectedPageName) {
    let cities_dropdown_element = document.getElementById('cities')

    let defaultOptElement = document.createElement('option')
    defaultOptElement.value = 'default'
    defaultOptElement.disabled = true
    if(!selectedPageName) defaultOptElement.selected = true
    defaultOptElement.text = 'Viagens'

    cities_dropdown_element.appendChild(defaultOptElement)

    groups_options_db.forEach(grpDB => {
        let grpElement = document.createElement('optgroup')
        grpElement.label = grpDB.label

        grpDB.options.forEach(optDB => {
            let optElement = document.createElement('option')
            optElement.value = optDB.value
            optElement.text = optDB.text
            optElement.selected = optDB.value == selectedPageName
            optElement.disabled = optDB.disable
            if(!optDB.disable) {
                optElement.style.fontWeight = 500
                optElement.text += '*'
            }

            grpElement.appendChild(optElement)
        })

        cities_dropdown_element.appendChild(grpElement)
    })    
}