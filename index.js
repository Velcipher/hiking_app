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
const modal = $.modal(options)