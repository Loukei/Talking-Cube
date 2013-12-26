console.log('hello world')

socket.get('/echo',{
  message: 'hi there!'
}, function (response) {
  // response === {success: true, message: 'hi there!'}
  console.log(response);
});