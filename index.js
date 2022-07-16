const options = {
    tittle: 'Place name',
    closable: true,
    contant: `<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sint dolorum ratione, fugiat explicabo minus cum natus consequatur dolorem vero nulla voluptates, obcaecati nemo dignissimos modi architecto sed deserunt, deleniti maiores atque amet blanditiis commodi voluptatibus. Pariatur inventore quasi quidem, a officia laudantium eum asperiores autem, velit quia ratione facilis amet. Repellendus quas voluptates officiis eveniet vitae, assumenda, tempore cupiditate odit fuga. Pariatur libero mollitia repellendus fugit iusto. Facilis eligendi similique provident fugiat quo, ratione soluta ullam, rerum magnam tempora aspernatur amet doloribus ex ut, rem voluptatum iste neque ad repellendus minima dicta quis! Natus eveniet ea, qui dolorum nobis.</h4>`,
    width: '800px',
    footerButtons: [
        {text: 'Ok', type: 'primaty', handler1(){
            console.log('primary btn clicked')
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler1(){
            console.log('danger btn clicked')
            modal.close()
        }}
    ],
   
}
const fruits = [
    {id:1, tittle: 'apple', info:'35', url:'img/apple.png'},
    {id:2, tittle: 'cherry', info:'80', url:'img/cherry.png'},
    {id:3, tittle: 'papaya', info:'250', url:'img/papaya.png'}
]
const toHtml = fruit =>`
<div class="col-md-4 mb-3">
        <div class="card" style="width: auto;">
      <img src="${fruit.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${fruit.tittle}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
        </div>
    </div>
`

function render(){
    const html = fruits.map(fruit => toHtml(fruit)).join('')
    document.querySelector('#places').innerHTML = html

}
render()

const modal = $.modal(options)
