function _createModal(options){
    const modal = document.createElement('div') 
    modal.classList.add('imodal')
    modal.insertAdjacentHTML('beforeend', `
    <div class="modal-overlay" data-close='true'>
        <div class="modal-window">
          <div class="modal-header">
           <span class="modal-tittle">${options.tittle}</span><br/>
           ${options.closable ? `<span class="modal-close" data-close='true'>&times;</span>` : ''} 
          </div>
          <div class="modal-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eius possimus alias neque ratione dignissimos soluta eum a rem inventore sed aliquid explicabo numquam voluptatibus doloremque odio, nisi illo vel sint, molestiae consequuntur ex! Quas quisquam nesciunt aspernatur, cum iste impedit, aut voluptas deleniti dolorum, est dolorem. Sint, excepturi facere.</p>
          <div class="modal-footer">
            <button type="${options.footerButtons[0].type}" name="button">${options.footerButtons[0].text}</button>
            <button type="button" name="button">Close</button>
          </div>
          </div>
      </div> 
    </div>
 `
    )
// const footer = _createModalFooter(options.footerButtons)
// footer.appendAfter(modal.querySelector('[data-content]'))
document.body.appendChild(modal)
return modal
}


$.modal = function(options){
  const ANIMATION_SPEED = 200
  const $modal = _createModal(options)
  let closing = false
  let destroyed = false

    const modal = {
        open(){
          if (destroyed){
            return console.log('Modal is destroyed!')
          }
         !closing && $modal.classList.add('open')
        },
        close(){
          closing = true
          $modal.classList.remove('open')
          $modal.classList.add('hide')
          setTimeout(() => {
            $modal.classList.remove('hide')
            closing = false
          }, ANIMATION_SPEED)
        },
 }

 const listener = event => {
 
  if (event.target.dataset.close){
    return modal.close()
  }
}
$modal.addEventListener('click', listener)

return Object.assign(modal, {
  destroy(){
    $modal.parentNode.removeChild($modal)
    destroyed = true
    $modal.removeEventListener('click', listener)


  }
,
setContent(html){
  $modal.querySelector('[data-content]').innerHTML = html
}
})
}
