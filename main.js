function _createModal(options){
    const modal = document.createElement('div') 
    modal.classList.add('imodal')
    modal.insertAdjacentHTML('beforeend', `
    <div class="modal-overlay">
        <div class="modal-window">
          <div class="modal-header">
           <span class="modal-tittle">${options.tittle}</span><br/>
           <span class='modal-close'>&times;</span>
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
document.body.appendChild(modal)
return modal
}


$.modal = function (options){
    const $modal = _createModal(options)
    let closing = false
  let destroyed = false
    const ANIMATION_SPEED = 200
    
        return {
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
        }