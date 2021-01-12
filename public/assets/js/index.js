$(function () {

    $('#burgerForm').on('submit', (event) => {
        event.preventDefault()
        const newBurger = { burger_name: $('#burgerText').val().trim() }
        if (newBurger.burger_name === '') {
            return;
        }
        console.log(newBurger)
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        })
            .then(function () {
                console.log('created new burger')
                location.reload()
            })
    })

    $('.eat').on('click', function (event) {
        const id = $(this).data('id')
        const eaten = $(this).data('eaten')
        console.log(eaten)
        const ate = {
            devoured: eaten
        }
        console.log(ate, id)
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: ate
        })
            .then(function () {
                console.log('burger has been devoured')
                location.reload()
            })
    })

    $('.trash').on('click', function (event) {
        const id = $(this).data('id')
        console.log(id)
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        })
            .then(function () {
                console.log('deleted burger with id = ', id)
                location.reload()
            })
    })
})