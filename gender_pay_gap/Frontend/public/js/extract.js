// generate modal
const modalEmployer = new bootstrap.Modal(document.getElementById('modalEmployer'))

//functio edit

const on = (element, event, selector, handler) =>{
    element.addEventListener(event, e => {
        if (e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    name_edit.value = fila.children[1].innerHTML
    address_edit.value = fila.children[2].innerHTML
    post_edit.value = fila.children[3].innerHTML
    meanh_edit.value = fila.children[4].innerHTML
    medianh_edit.value = fila.children[5].innerHTML
    meanb_edit.value = fila.children[6].innerHTML
    medianb_edit.value = fila.children[7].innerHTML
    malesr_edit.value = fila.children[8].innerHTML
    femalesr_edit.value = fila.children[9].innerHTML
    propmalesl_edit.value = fila.children[10].innerHTML
    propfemalesl_edit.value = fila.children[11].innerHTML
    propmaleslm_edit.value = fila.children[12].innerHTML
    propfemaleslm_edit.value = fila.children[13].innerHTML
    propmalesup_edit.value = fila.children[14].innerHTML
    propfemalesup_edit.value = fila.children[15].innerHTML
    propmalestop_edit.value = fila.children[16].innerHTML
    propfemalestop_edit.value = fila.children[17].innerHTML
    link_edit.value = fila.children[18].innerHTML
    resp_edit.value = fila.children[19].innerHTML
    size_edit.value = fila.children[20].innerHTML
    current_edit.value = fila.children[21].innerHTML
    submit_edit.value = fila.children[22].innerHTML
    company_edit.value = fila.children[23].innerHTML
    modalEmployer.show()
})
