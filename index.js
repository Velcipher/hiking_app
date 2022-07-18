
const options = {
    tittle: 'Place name',
    closable: true,
    contant: `<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sint dolorum ratione, fugiat explicabo minus cum natus consequatur dolorem vero nulla voluptates, obcaecati nemo dignissimos modi architecto sed deserunt, deleniti maiores atque amet blanditiis commodi voluptatibus. Pariatur inventore quasi quidem, a officia laudantium eum asperiores autem, velit quia ratione facilis amet. Repellendus quas voluptates officiis eveniet vitae, assumenda, tempore cupiditate odit fuga. Pariatur libero mollitia repellendus fugit iusto. Facilis eligendi similique provident fugiat quo, ratione soluta ullam, rerum magnam tempora aspernatur amet doloribus ex ut, rem voluptatum iste neque ad repellendus minima dicta quis! Natus eveniet ea, qui dolorum nobis.</h4>`,
    width: '800px',
    footerButtons: [
        {text: 'Book a trip', type: 'aba', handler(){
            console.log('booking btn clicked')
            modal.close()
            setTimeout(() => {const greetings = prompt ('Please, enter your email')
            if ( greetings < 1 ){
            alert ('What wrong with yoy?')}
            else {
                alert (`Thank you for your interest. We'll be in touch!`)
            }
        
        }, 400)
}
        },
        {text: 'Cancel', type: 'beta', handler(){
            console.log('cancel btn clicked')
            modal.close()
        }}
    ],
   
}



const trips = [
    {id:1, tittle: 'Pyrenees', info:'The Pyrenees mountain range separates the Iberian Peninsula from the rest of Europe, stretching more than 430km between Spain and France and rising higher than 3,400m in elevation. ', url:'img/Pyrenees1.jpg'},
    {id:2, tittle: 'Kazbegi', info:'National Park is located on the northern slopes of the mighty Caucasus range, and its protected area covers a total of over 8,700 hectares. At 5,047 metres above sea level, Kazbegi Mountain (or Mkinvartsveri) is the third highest mountain in Georgia, and is surrounded by myths and religious tradition.', url:'img/Kazbegi1.jpg'},
    {id:3, tittle: 'Niagara Falls', info:'Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States. The largest of the three is Horseshoe Falls, which straddles the international border of the two countries.', url:'img/Niagara_falls1.jpg'}
]
const toHtml = trip =>`
<div class="col-md-4 mb-3">
        <div class="card" style="width: auto;">
      <img src="${trip.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${trip.tittle}</h5>
        <p class="card-text">${trip.info}</p>
        <a  class="btn" data-btn='go'>More info</a>
      </div>
        </div>
    </div>
`

function render(){
    const html = trips.map(trip => toHtml(trip)).join('')
    document.querySelector('#places').innerHTML = html

}
render()

document.addEventListener('click', event => {
const btnType = event.target.dataset.btn

if (btnType === 'go'){
modal.open()
}
 })

const modal = $.modal(options)
